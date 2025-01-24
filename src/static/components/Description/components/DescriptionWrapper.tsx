import React from "react";

type DescriptionProps = {
    title: string;
    children: React.ReactNode;
};

export const DescriptionWrapper: React.FC<DescriptionProps> = ({ title, children }) => (
    <article className="description" id={title.trim().replace(" ", "-").toLowerCase()}>
        <div className="description-title-container">
            <h2 className="description-title">{title}</h2>
        </div>
        {children}
    </article>
);
