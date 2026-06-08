import { Fragment } from "preact";
import type { TechStackProps } from "./types";

export const TechStack = ({ items }: TechStackProps) => (
    <p className="history-tech-stack tech-stack">
        <span className="tech-stack-title">Stack:&nbsp;&#8203;</span>
        {items.map(({ description, title }, index) => (
            <Fragment key={title}>
                <span
                    className="tech-stack-item"
                    aria-label={description ? `show more about ${title}` : undefined}
                    role={description ? "button" : undefined}
                    tabIndex={description ? 0 : undefined}
                >
                    {title + (items.length - 1 !== index ? "," : "")}
                    {description && <span className="tech-stack-item tooltip">{description}</span>}
                </span>
                &nbsp;
            </Fragment>
        ))}
    </p>
);
