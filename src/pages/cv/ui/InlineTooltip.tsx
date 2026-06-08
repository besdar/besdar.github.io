import { useId } from "preact/hooks";
import type { InlineTooltipProps } from "../model/cv-component-contracts";
import styles from "./inlineTooltip.module.css";

export const InlineTooltip = ({ children, note }: InlineTooltipProps) => {
    const tooltipId = useId();

    return (
        <span className={styles["inline-tooltip"]} data-tooltip-container>
            <button className={styles["inline-tooltip-trigger"]} type="button" aria-describedby={tooltipId}>
                <span className={styles["inline-tooltip-label"]}>{children}</span>
            </button>
            <span className={styles["inline-tooltip-popup"]} id={tooltipId} role="tooltip" data-tooltip-popup>
                {note}
            </span>
        </span>
    );
};
