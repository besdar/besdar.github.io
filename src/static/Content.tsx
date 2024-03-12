import React from "react";
import { PageDataType } from "./data-types";
import { Description } from "./components/Description";
import { Contacts } from "./components/Contacts";

const Component: React.FC<PageDataType> = ({ address, education, employee, jobHistory, summary }) => (
    <>
        <header className="body-header">
            <div className="header-title">
                <h1 className="header-title-employee-name">{employee}</h1>
                <h2 className="header-title-job-position">Frontend developer</h2>
            </div>
            <Contacts address={address} />
        </header>
        <main className="body-content" role="presentation">
            <Description
                showMoreTitle={jobHistory.showMoreTitle}
                title={summary.title}
                items={[
                    {
                        text: summary.overview,
                    },
                ]}
            />
            <Description showMoreTitle={jobHistory.showMoreTitle} title={jobHistory.title} items={jobHistory.jobs} />
            <Description showMoreTitle={jobHistory.showMoreTitle} title={education.title} items={[education.university]} />
        </main>
    </>
);

export const Content = Component;
