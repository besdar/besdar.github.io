import cn from "classnames";
import { StrictMode } from "react";
import CvContent, { metadata as cvMetadata } from "../content/cv.mdx";
import { SiteNavLink, baseStyles, headerStyles } from "../../../shared/ui";
import cvPageStyles from "./cvPage.module.css";
import { cvComponents } from "../model/cv-components";
import { Contacts } from "./Contacts";
import { PdfDownloadLink } from "./PdfDownloadLink";

export const CvPage = () => (
    <StrictMode>
        <header className={headerStyles["body-header"]}>
            <div className={headerStyles["header-title"]}>
                <h1 className={headerStyles["header-title-employee-name"]}>{cvMetadata.employee}</h1>
                <h2 className={headerStyles["header-title-job-position"]}>{cvMetadata.position}</h2>
            </div>
            <div className={headerStyles["header-aside"]}>
                <Contacts address={cvMetadata.address} email={cvMetadata.email} website={cvMetadata.website} />
                <nav aria-label="Site navigation" className={cn(headerStyles["site-nav"], baseStyles["not-printed"])}>
                    <SiteNavLink href="./blog/">Articles</SiteNavLink>
                </nav>
            </div>
        </header>
        <main id="main-content" tabIndex={-1}>
            <CvContent components={cvComponents} />
        </main>
        <aside aria-label="CV download" className={cvPageStyles["body-aside-content"]}>
            <PdfDownloadLink />
        </aside>
    </StrictMode>
);
