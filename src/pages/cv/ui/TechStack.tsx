import { Fragment } from "preact";
import { useId } from "preact/hooks";
import cn from "classnames";
import type { TechStackProps } from "../model/cv-component-contracts";
import styles from "./techStack.module.css";

export const getTooltipIdPart = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const TechStack = ({ items }: TechStackProps) => {
    const tooltipGroupId = useId().replace(/[^a-zA-Z0-9_-]/g, "");

    return (
        <p className={cn(styles["history-tech-stack"], styles["tech-stack"])}>
            <span>Stack:&nbsp;&#8203;</span>
            {items.map(({ description, title }, index) => {
                const itemText = title + (items.length - 1 !== index ? "," : "");
                const tooltipId = `tech-stack-tooltip-${tooltipGroupId}-${index}-${getTooltipIdPart(title)}`;

                return (
                    <Fragment key={title}>
                        {description ? (
                            <span className={styles["tech-stack-item-wrapper"]} data-tooltip-container>
                                <button
                                    className={styles["tech-stack-item"]}
                                    aria-describedby={tooltipId}
                                    data-tech-stack-item
                                    type="button"
                                >
                                    {itemText}
                                </button>
                                <span
                                    className={cn(styles["tech-stack-item"], styles.tooltip)}
                                    id={tooltipId}
                                    role="tooltip"
                                    data-tech-stack-tooltip
                                    data-tooltip-popup
                                >
                                    {description}
                                </span>
                            </span>
                        ) : (
                            <span className={styles["tech-stack-item"]}>{itemText}</span>
                        )}
                        &nbsp;
                    </Fragment>
                );
            })}
        </p>
    );
};
