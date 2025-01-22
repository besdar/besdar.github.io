import React from "react";
import { DescriptionItem } from "./components/DescriptionItem";
import { DescriptionType } from "../../data-types";
import { LANG } from "../../lang";
import { DescriptionWrapper } from "./DescriptionWrapper";

type DescriptionProps = {
    title: string;
    items: Array<DescriptionType>;
    showMoreTitle?: boolean;
};

export const Description: React.FC<DescriptionProps> = ({ items, title, showMoreTitle }) => (
    <DescriptionWrapper title={title}>
        {items.slice(0, 3).map((item) => (
            <DescriptionItem key={item.summary} {...item} />
        ))}
        {items.length > 3 && Boolean(showMoreTitle) && (
            <details className="description-details">
                <summary className="description-summary-title">{LANG.EarlierWorkExperience}</summary>
                {items.slice(3).map((item) => (
                    <DescriptionItem key={item.summary} {...item} />
                ))}
            </details>
        )}
    </DescriptionWrapper>
);
