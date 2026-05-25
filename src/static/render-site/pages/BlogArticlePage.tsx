import { StrictMode } from "react";
import { blogMdxComponents } from "../../blog-components";
import type { BlogArticle } from "../types";
import { BlogHeader } from "./BlogHeader";

type BlogArticlePageProps = {
    article: BlogArticle;
};

export const BlogArticlePage = ({ article }: BlogArticlePageProps) => (
    <StrictMode>
        <BlogHeader blogHref="../" cvHref="../../" />
        <main className="body-content blog-content">
            <article className="description blog-article">
                <article.Content components={blogMdxComponents} />
            </article>
        </main>
    </StrictMode>
);
