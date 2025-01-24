import React from "react";
import { PDFButton } from "./components/PDFButton";
import { LANG_DATA } from "./data";
import { Contacts } from "./components/Contacts";
import { Description } from "./components/Description";
import { DescriptionWrapper } from "./components/Description/components/DescriptionWrapper";

export const App: React.FC = () => (
    <React.StrictMode>
        <header className="body-header">
            <div className="header-title">
                <h1 className="header-title-employee-name">{LANG_DATA.employee}</h1>
                <h2 className="header-title-job-position">Frontend developer</h2>
            </div>
            <Contacts address={LANG_DATA.address} />
        </header>
        <main className="body-content">
            <DescriptionWrapper title={LANG_DATA.summary.title}>
                <p>{LANG_DATA.summary.overview}</p>
            </DescriptionWrapper>
            <Description showMoreTitle title={LANG_DATA.jobs.title} items={LANG_DATA.jobs.items} />
            <Description title={LANG_DATA.education.title} items={LANG_DATA.education.items} />
            <Description title={LANG_DATA.projects.title} items={LANG_DATA.projects.items} />
        </main>
        <aside className="body-aside-content aside-content">
            <PDFButton />
        </aside>
    </React.StrictMode>
);
