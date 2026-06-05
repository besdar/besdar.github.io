import { describe, expect, it } from "@jest/globals";
import {
    convertMdxBodyToMarkdown,
    normalizeInline,
    parseMetadata,
    renderImpactEvidence,
    renderMetadataHeader,
    renderTechStack,
    renderTimelineHeading,
} from "./generate-cv-markdown.mjs";

describe("CV markdown generator helpers", () => {
    it("parses exported string metadata", () => {
        const metadata = parseMetadata(`
            export const metadata = {
                employee: "Dmitry Beskov",
                position: "Frontend Developer",
                website: "besdar.github.io"
            };
        `);

        expect(metadata).toEqual({
            employee: "Dmitry Beskov",
            position: "Frontend Developer",
            website: "besdar.github.io",
        });
    });

    it("normalizes inline HTML wrappers and entities", () => {
        expect(normalizeInline("<span>Typed &amp; tested</span><p>again</p>")).toBe("Typed & tested again");
    });

    it("renders timeline headings from component attributes", () => {
        expect(
            renderTimelineHeading(
                ' role="Lead Engineer" roleUrl="https://example.com/role" organization="Acme" organizationUrl="https://example.com" dates="2024" subtitle="Remote"',
            ).split("\n\n"),
        ).toEqual(["### [Lead Engineer](https://example.com/role)", "2024", "[Acme](https://example.com)", "Remote"]);
    });

    it("renders impact evidence and tech stack arrays", () => {
        expect(
            renderImpactEvidence(
                "Evidence",
                `[
                    { value: "20%", label: "faster", description: "from cache tuning" },
                    { value: "3", label: "releases" }
                ]`,
            ).split("\n"),
        ).toEqual(["Evidence:", "", "- 20% faster: from cache tuning", "- 3 releases"]);

        expect(renderTechStack('[{ title: "React" }, { title: "TypeScript" }]')).toBe("Stack: React, TypeScript.");
    });

    it("converts supported MDX components into markdown", () => {
        const markdown = convertMdxBodyToMarkdown(`
            export const metadata = {
                employee: "Dmitry Beskov"
            };

            <CvSection title="Experience">
                <TimelineItem role="Engineer" organization="Acme" dates="2024">
                    <p>Built <InlineTooltip note="Internal detail."><span>tooling</span></InlineTooltip></p>
                    <TechStack items={[{ title: "React" }, { title: "TypeScript" }]} />
                </TimelineItem>
            </CvSection>
        `);

        expect(markdown).toContain("## Experience");
        expect(markdown).toContain("### Engineer, Acme");
        expect(markdown).toContain("Built tooling (Internal detail)");
        expect(markdown).toContain("Stack: React, TypeScript.");
    });

    it("normalizes website links in the metadata header", () => {
        const header = renderMetadataHeader({
            address: "Sofia",
            email: "dmitry@example.com",
            employee: "Dmitry Beskov",
            position: "Frontend Developer",
            website: "besdar.github.io",
        });

        expect(header).toContain("Website: [besdar.github.io](https://besdar.github.io/)");
    });
});
