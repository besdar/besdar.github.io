import { StrictMode } from "react";
import CvContent, { metadata as cvMetadata } from "../../../content/cv.mdx";
import { Contacts } from "../../components/Contacts";
import { PDFButton } from "../../components/PDFButton";
import { BlogLink } from "../../site-components";
import { cvComponents } from "../data/cvComponents";

export const CvPage = () => (
    <StrictMode>
        <header className="body-header">
            <div className="header-title">
                <h1 className="header-title-employee-name">{cvMetadata.employee}</h1>
                <h2 className="header-title-job-position">{cvMetadata.position}</h2>
            </div>
            <div className="header-aside">
                <Contacts address={cvMetadata.address} email={cvMetadata.email} website={cvMetadata.website} />
                <nav aria-label="Site navigation" className="site-nav contacts-links-not-printed">
                    <BlogLink href="./blog/">Articles</BlogLink>
                </nav>
            </div>
        </header>
        <main className="body-content">
            <CvContent components={cvComponents} />
        </main>
        <aside className="body-aside-content aside-content">
            <PDFButton />
        </aside>
    </StrictMode>
);
