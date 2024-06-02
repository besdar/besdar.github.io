import React from "react";
import { Achievements } from "../Achivements";
import { Stack } from "../Stack";
import { Tab } from "./components/Tab";
import { DescriptionType } from "../../../../data-types";

const Component: React.FC<DescriptionType> = ({ header, achievements, text, stack, title, subtitle }) => {
    const sectionClasses = ["history", header && "description-item"].filter(Boolean).join(" ");

    return (
        <section className={sectionClasses}>
            {header && <Tab {...header} />}
            <div className="history-description">
                {title && <h3 className="history-title">{title}</h3>}
                {subtitle && <h4 className="history-subtitle">{subtitle}</h4>}
                <div className="history-about">
                    <Achievements achievements={achievements} />
                    <p className="history-activity">{text}</p>
                    {stack && <Stack {...stack} />}
                </div>
            </div>
        </section>
    );
};

export const DescriptionItem = React.memo(Component);
