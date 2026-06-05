import { describe, expect, it } from "@jest/globals";
import { isExternalHref } from "./blog-mdx-components";

describe("isExternalHref", () => {
    it("accepts absolute HTTP links", () => {
        expect(isExternalHref("https://example.com")).toBe(true);
        expect(isExternalHref("http://example.com")).toBe(true);
    });

    it("rejects non-HTTP and non-string values", () => {
        expect(isExternalHref("/blog/example")).toBe(false);
        expect(isExternalHref("//example.com")).toBe(false);
        expect(isExternalHref("mailto:person@example.com")).toBe(false);
        expect(isExternalHref(undefined)).toBe(false);
    });
});
