import { sectionTitleStyles } from "../../../shared/ui";
import { blogArticles } from "../model/blog-articles";
import blogStyles from "./blog.module.css";
import { BlogHeader } from "./BlogHeader";

export const BlogIndexPage = () => (
    <>
        <BlogHeader blogHref="./" cvHref="../" />
        <main className={blogStyles["blog-content"]} id="main-content" tabIndex={-1}>
            <article className={blogStyles["blog-index"]}>
                <div className={sectionTitleStyles["description-title-container"]}>
                    <h2 className={sectionTitleStyles["description-title"]}>Blog</h2>
                </div>
                {blogArticles.map(({ metadata, slug }) => (
                    <a className={blogStyles["blog-card"]} href={`./${slug}/`} key={slug}>
                        <h3 className={blogStyles["blog-card-title"]}>{metadata.title}</h3>
                        <p>{metadata.description}</p>
                    </a>
                ))}
            </article>
        </main>
    </>
);
