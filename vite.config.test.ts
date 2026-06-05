/**
 * @jest-environment node
 */
import { describe, expect, it } from "@jest/globals";
import { getCssAssetFileName, getCssModuleClassName } from "./vite.config.helpers";

describe("Vite CSS helpers", () => {
    it("builds stable scoped CSS module names", () => {
        const className = getCssModuleClassName("button/primary");

        expect(className).toMatch(/^button_primary_[A-Za-z0-9_-]{6}$/);
        expect(getCssModuleClassName("button/primary")).toBe(className);
        expect(getCssModuleClassName("button-secondary")).not.toBe(className);
    });

    it("routes known style entry assets to deterministic CSS file names", () => {
        expect(getCssAssetFileName({ name: "style-techStack.css" })).toBe("css/techStack.css");
        expect(getCssAssetFileName({ originalFileNames: ["src/pages/cv/ui/timelineItem.module.css"] })).toBe("css/timelineItem.css");
    });

    it("keeps Vite's default asset pattern for unrelated files", () => {
        expect(getCssAssetFileName({ name: "logo.svg" })).toBe("assets/[name][extname]");
    });
});
