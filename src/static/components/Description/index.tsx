import React from "react";
import { DescriptionItem } from "./components/DescriptionItem";
import { DescriptionType } from "../../data-types";

type DescriptionProps = {
    title: string;
    items: Array<DescriptionType>;
    showMoreTitle: string;
};

const Component: React.FC<DescriptionProps> = ({ items, title, showMoreTitle }) => (
    <article className="description" id={title.trim().replace(" ", "-").toLowerCase()}>
        <div className="description-title-container">
            <h2 className="description-title">{title}</h2>
        </div>
        {items.slice(0, 3).map((item) => (
            <DescriptionItem key={item.text} {...item} />
        ))}
        {items.length > 3 && (
            <details className="description-details">
                <summary className="description-summary-title">
                    {showMoreTitle}
                </summary>
                {items.slice(3).map((item) => (
                    <DescriptionItem key={item.text} {...item} />
                ))}
            </details>
        )}
    </article>
);

export const Description = React.memo(Component);
