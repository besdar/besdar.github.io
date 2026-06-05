import { describe, expect, it } from "@jest/globals";
import type { BlogArticle } from "./blog-article";
import { sortBlogArticlesByTitle } from "./blog-articles";

const Content = () => null;

describe("sortBlogArticlesByTitle", () => {
    it("sorts by article title without mutating the input array", () => {
        const articles: BlogArticle[] = [
            { Content, metadata: { title: "Zulu" }, slug: "zulu" },
            { Content, metadata: { title: "Alpha" }, slug: "alpha" },
            { Content, metadata: { title: "Echo" }, slug: "echo" },
        ];

        const sorted = sortBlogArticlesByTitle(articles);

        expect(sorted.map(({ slug }) => slug)).toEqual(["alpha", "echo", "zulu"]);
        expect(articles.map(({ slug }) => slug)).toEqual(["zulu", "alpha", "echo"]);
    });
});
