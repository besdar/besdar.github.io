import { SiteNavLink, headerStyles } from "../../../shared/ui";

type BlogHeaderProps = {
    blogHref: string;
    cvHref: string;
};

export const BlogHeader = ({ blogHref, cvHref }: BlogHeaderProps) => (
    <header className={headerStyles["body-header"]}>
        <div className={headerStyles["header-title"]}>
            <a className={headerStyles["header-title-home-link"]} href={cvHref}>
                <h1 className={headerStyles["header-title-employee-name"]}>Dmitry Beskov</h1>
            </a>
            <h2 className={headerStyles["header-title-job-position"]}>Frontend Developer</h2>
        </div>
        <nav aria-label="Site navigation" className={headerStyles["site-nav"]}>
            <SiteNavLink href={cvHref}>CV</SiteNavLink>
            <SiteNavLink href={blogHref}>Articles</SiteNavLink>
        </nav>
    </header>
);
