import React from "react";
import { Achievements } from "../Achivements";
import { Stack } from "../Stack";
import { Tab } from "./components/Tab";
import { DescriptionType } from "../../../../data-types";
import { LANG } from "../../../../lang";

export const DescriptionItem: React.FC<DescriptionType> = ({ header, achievements, summary, stack, title, subtitle, projectsDescriptions }) => {
    const sectionClasses = ["history", header && "description-item"].filter(Boolean).join(" ");

    return (
        <section className={sectionClasses}>
            {header && <Tab {...header} />}
            <div className="history-description">
                {title && (
                    <h3 className="history-title">
                        {title.link ? (
                            <a href={title.link} rel="noopener noreferrer" target="_blank" className="description-title-link">
                                {title.label}
                            </a>
                        ) : (
                            title.label
                        )}
                    </h3>
                )}
                {subtitle && <h4 className="history-subtitle">{subtitle}</h4>}
                <div className="history-about">
                    <Achievements achievements={achievements} />
                    <p className="history-activity">{summary}</p>

                    {Boolean(projectsDescriptions?.length) && (
                        <p>
                            <details className="projects-details">
                                <summary className="projects-summary-title">{LANG.ProjectsDescription}</summary>
                                {projectsDescriptions?.map((projectsDescription) => <p key={projectsDescription}>{projectsDescription}</p>)}
                            </details>
                        </p>
                    )}

                    {Boolean(stack) && <Stack items={stack} />}
                </div>
            </div>
        </section>
    );
};
