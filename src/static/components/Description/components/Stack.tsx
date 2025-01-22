import React, { Fragment } from "react";
import { LANG } from "../../../lang";

type StackItemType = {
    title: string;
    description?: string;
};

type Props = {
    items: Array<StackItemType>;
};

export const Stack: React.FC<Props> = ({ items }) => (
    <p className="history-tech-stack tech-stack">
        <span className="tech-stack-title">
            {LANG.Stack}
            :&nbsp;&#8203;
        </span>
        {items.map(({ title: stackTitle, description }, index) => (
            <Fragment key={stackTitle}>
                <span className="tech-stack-item" key={stackTitle} aria-label="show more" role="button" tabIndex={0}>
                    {stackTitle + (items.length - 1 !== index ? "," : "")}
                    {description && <span className="tech-stack-item tooltip">{description}</span>}
                </span>
                &nbsp;
            </Fragment>
        ))}
    </p>
);
