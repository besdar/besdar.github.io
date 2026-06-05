import { BlogArticlePage, BlogIndexPage, blogArticles } from "../../pages/blog";
import { CvPage, cvJsonLd, cvPageBodyClass } from "../../pages/cv";
import { renderDocument } from "./lib/html";
import type { RenderedPage, SitePage } from "./model/rendered-page";

export const renderSite = (): RenderedPage[] => {
    const pages: SitePage[] = [
        {
            alternateLinks: [
                {
                    href: "/Dmitry_Beskov.md",
                    title: "Markdown Version of CV",
                    type: "text/markdown",
                },
            ],
            bodyClass: cvPageBodyClass,
            content: <CvPage />,
            description: "Dmitry Beskov - CV - Frontend Developer",
            outputPath: "index.html",
            structuredData: cvJsonLd,
            title: "Dmitry Beskov",
        },
        {
            bodyClass: "",
            content: <BlogIndexPage />,
            description: "Markdown and MDX notes by Dmitry Beskov",
            outputPath: "blog/index.html",
            title: "Blog - Dmitry Beskov",
        },
        ...blogArticles.map((article) => ({
            bodyClass: "",
            content: <BlogArticlePage article={article} />,
            description: article.metadata.description,
            outputPath: `blog/${article.slug}/index.html`,
            title: `${article.metadata.title} - Dmitry Beskov`,
        })),
    ];

    return pages.map((page) => ({
        html: renderDocument(page),
        outputPath: page.outputPath,
    }));
};
