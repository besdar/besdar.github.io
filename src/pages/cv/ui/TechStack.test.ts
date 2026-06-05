import { describe, expect, it } from "@jest/globals";
import { getTooltipIdPart } from "./TechStack";

describe("getTooltipIdPart", () => {
    it("normalizes stack item titles for tooltip ids", () => {
        expect(getTooltipIdPart("React & TypeScript")).toBe("react-typescript");
        expect(getTooltipIdPart("  Node.js / AWS  ")).toBe("node-js-aws");
        expect(getTooltipIdPart("C# + .NET")).toBe("c-net");
    });

    it("removes leading and trailing separators", () => {
        expect(getTooltipIdPart("!!!GraphQL!!!")).toBe("graphql");
        expect(getTooltipIdPart("!!!")).toBe("");
    });
});
