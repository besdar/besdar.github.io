/**
 * @jest-environment node
 */
import { describe, expect, it } from "@jest/globals";
import { createElement } from "preact";
import { escapeHtml, getAssetPrefix, renderContentSecurityPolicy, renderDocument, serializeStructuredData } from "./html";

describe("HTML rendering helpers", () => {
    it("calculates asset prefixes from output path depth", () => {
        expect(getAssetPrefix("index.html")).toBe("./");
        expect(getAssetPrefix("blog/index.html")).toBe("../");
        expect(getAssetPrefix("blog/article/index.html")).toBe("../../");
    });

    it("escapes values used in head attributes", () => {
        expect(escapeHtml('5 > 3 & "quoted" < tag')).toBe("5 &gt; 3 &amp; &quot;quoted&quot; &lt; tag");
    });

    it("serializes structured data without raw less-than characters", () => {
        const serialized = serializeStructuredData({
            name: "</script><script>alert(1)</script>",
        });

        expect(serialized).toContain("\\u003c/script>");
        expect(serialized).not.toContain("<script>");
    });

    it("adds a structured-data hash to the content security policy only when needed", () => {
        expect(renderContentSecurityPolicy("")).toBe("default-src 'self'; script-src 'self'");
        expect(renderContentSecurityPolicy('{"name":"Dmitry"}')).toMatch(/^default-src 'self'; script-src 'self' 'sha256-[^']+'$/);
    });

    it("uses nested asset paths and escaped metadata in the rendered document", () => {
        const html = renderDocument({
            bodyClass: "page",
            content: createElement("div", { "data-rendered": "true" }),
            description: 'Description with "quotes" and <tags>',
            outputPath: "blog/example/index.html",
            title: "Title & Owner",
        });

        expect(html).toContain('href="../../favicon.svg"');
        expect(html).toContain('href="../../css/base.css"');
        expect(html).toContain("<title>Title &amp; Owner</title>");
        expect(html).toContain('content="Description with &quot;quotes&quot; and &lt;tags&gt;"');
    });
});
