import { StrictMode } from "react";
import { blogArticles } from "../data/blogArticles";
import { BlogHeader } from "./BlogHeader";

export const BlogIndexPage = () => (
    <StrictMode>
        <BlogHeader blogHref="./" cvHref="../" />
        <main className="body-content blog-content">
            <article className="description blog-index">
                <div className="description-title-container">
                    <h2 className="description-title">Blog</h2>
                </div>
                {blogArticles.map(({ metadata, slug }) => (
                    <a className="blog-card" href={`./${slug}/`} key={slug}>
                        <h3 className="blog-card-title">{metadata.title}</h3>
                        <p>{metadata.description}</p>
                    </a>
                ))}
            </article>
        </main>
    </StrictMode>
);
