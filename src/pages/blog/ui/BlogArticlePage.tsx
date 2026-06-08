import { blogMdxComponents } from "../model/blog-mdx-components";
import type { BlogArticle } from "../model/blog-article";
import blogStyles from "./blog.module.css";
import { BlogHeader } from "./BlogHeader";

type BlogArticlePageProps = {
    article: BlogArticle;
};

export const BlogArticlePage = ({ article }: BlogArticlePageProps) => (
    <>
        <BlogHeader blogHref="../" cvHref="../../" />
        <main className={blogStyles["blog-content"]} id="main-content" tabIndex={-1}>
            <article className={blogStyles["blog-article"]}>
                <article.Content components={blogMdxComponents} />
            </article>
        </main>
    </>
);
