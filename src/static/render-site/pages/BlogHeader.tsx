import { BlogLink } from "../../site-components";

type BlogHeaderProps = {
    blogHref: string;
    cvHref: string;
};

export const BlogHeader = ({ blogHref, cvHref }: BlogHeaderProps) => (
    <header className="body-header blog-header">
        <div className="header-title">
            <a className="header-title-home-link" href={cvHref}>
                <h1 className="header-title-employee-name">Dmitry Beskov</h1>
            </a>
            <h2 className="header-title-job-position">Notes</h2>
        </div>
        <nav aria-label="Site navigation" className="site-nav">
            <BlogLink href={cvHref}>CV</BlogLink>
            <BlogLink href={blogHref}>Articles</BlogLink>
        </nav>
    </header>
);
