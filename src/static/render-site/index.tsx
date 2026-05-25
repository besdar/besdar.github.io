import { blogArticles } from "./data/blogArticles";
import { renderDocument } from "./lib/html";
import { BlogArticlePage } from "./pages/BlogArticlePage";
import { BlogIndexPage } from "./pages/BlogIndexPage";
import { CvPage } from "./pages/CvPage";
import type { RenderedPage, SitePage } from "./types";

export const renderSite = (): RenderedPage[] => {
    const pages: SitePage[] = [
        {
            bodyClass: "cv-page",
            content: <CvPage />,
            description: "Dmitry Beskov - CV - Frontend Developer",
            outputPath: "index.html",
            title: "Dmitry Beskov",
        },
        {
            bodyClass: "blog-page",
            content: <BlogIndexPage />,
            description: "Markdown and MDX notes by Dmitry Beskov",
            outputPath: "blog/index.html",
            title: "Blog - Dmitry Beskov",
        },
        ...blogArticles.map((article) => ({
            bodyClass: "blog-page",
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

export type { BlogArticle, RenderedPage, SitePage } from "./types";
