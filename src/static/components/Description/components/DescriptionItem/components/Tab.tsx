import React from "react";

type Props = {
    title: string;
    link?: string;
    dates: string;
};

export const Tab: React.FC<Props> = ({ dates, link, title }) => (
    <div className="history-list">
        <h3 className="history-company-name">
            {link ? (
                <a title={title} rel="noopener noreferrer" href={link} target="_blank">
                    {title}
                </a>
            ) : (
                title
            )}
        </h3>
        <span className="history-dates">{dates}</span>
    </div>
);
