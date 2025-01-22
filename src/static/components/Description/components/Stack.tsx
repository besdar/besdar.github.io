import React, { Fragment } from "react";

type StackItemType = {
    title: string;
    description?: string;
};

type Props = {
    items?: Array<StackItemType>;
    title: string;
};

export const Stack: React.FC<Props> = ({ items, title }) => {
    const stackLength = items?.length;

    if (!stackLength) {
        return null;
    }

    return (
        <p className="history-tech-stack tech-stack">
            <span className="tech-stack-title">
                {title}
                :&nbsp;&#8203;
            </span>
            {items.map(({ title: stackTitle, description }, index) => (
                <Fragment key={stackTitle}>
                    <span className="tech-stack-item" key={stackTitle} aria-label="show more" role="button" tabIndex={0}>
                        {stackTitle + (stackLength - 1 !== index ? "," : "")}
                        {description && <span className="tech-stack-item tooltip">{description}</span>}
                    </span>
                    &nbsp;
                </Fragment>
            ))}
        </p>
    );
};
