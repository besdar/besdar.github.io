import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(rootDirectory, "src/pages/cv/content/cv.mdx");
const outputPath = path.join(rootDirectory, "public/Dmitry_Beskov.md");

const profileLinks = [
    ["LinkedIn", "https://www.linkedin.com/in/besdar/"],
    ["GitHub", "https://github.com/besdar"],
    ["LeetCode", "https://leetcode.com/besdar/"],
    ["Telegram", "https://t.me/besdarrr"],
];

export const decodeHtmlEntities = (value) =>
    value
        .replaceAll("&amp;", "&")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .replaceAll("&quot;", '"')
        .replaceAll("&#39;", "'");

export const getAttribute = (attributes, name) => attributes.match(new RegExp(`${name}="([^"]*)"`))?.[1];

const parseLocalArray = (source) => Function(`"use strict"; return (${source});`)();

export const parseMetadata = (source) => {
    const metadataSource = source.match(/export const metadata = \{([\s\S]*?)\};/)?.[1] ?? "";

    return Object.fromEntries(
        Array.from(metadataSource.matchAll(/(\w+):\s*"([^"]*)"/g)).map(([, key, value]) => [key, value]),
    );
};

export const stripWrappingTags = (value) =>
    value
        .replace(/<\/?span[^>]*>/g, "")
        .replace(/<\/?p>/g, "\n\n")
        .replace(/<\/?div[^>]*>/g, "\n\n");

export const normalizeInline = (value) =>
    decodeHtmlEntities(stripWrappingTags(value))
        .replace(/\s+/g, " ")
        .trim();

export const renderTimelineHeading = (attributes) => {
    const dates = getAttribute(attributes, "dates");
    const organization = getAttribute(attributes, "organization");
    const organizationUrl = getAttribute(attributes, "organizationUrl");
    const role = getAttribute(attributes, "role") ?? "Experience";
    const roleUrl = getAttribute(attributes, "roleUrl");
    const subtitle = getAttribute(attributes, "subtitle");
    const heading = roleUrl ? `[${role}](${roleUrl})` : [role, organization].filter(Boolean).join(", ");
    const details = [
        dates,
        organization && organizationUrl ? `[${organization}](${organizationUrl})` : undefined,
        subtitle,
    ].filter(Boolean);

    return [`### ${heading}`, ...details].join("\n\n");
};

export const renderImpactEvidence = (title, itemsSource) => {
    const items = parseLocalArray(itemsSource);
    const bullets = items.map(({ description, label, value }) => `- ${value} ${label}${description ? `: ${description}` : ""}`);

    return `${title}:\n\n${bullets.join("\n")}`;
};

export const renderTechStack = (itemsSource) => {
    const items = parseLocalArray(itemsSource);
    const stack = items.map(({ title }) => title).join(", ");

    return `Stack: ${stack}.`;
};

export const convertMdxBodyToMarkdown = (source) =>
    source
        .replace(/^[\s\S]*?export const metadata = \{[\s\S]*?\};\s*/, "")
        .replace(/<ImpactEvidence\s+title="([^"]+)"\s+items=\{\s*(\[[\s\S]*?\])\s*\}\s*\/>/g, (_, title, itemsSource) =>
            renderImpactEvidence(title, itemsSource),
        )
        .replace(/<TechStack\s+items=\{\s*(\[[\s\S]*?\])\s*\}\s*\/>/g, (_, itemsSource) => renderTechStack(itemsSource))
        .replace(/<InlineTooltip\s+note="([^"]*)">([\s\S]*?)<\/InlineTooltip>/g, (_, note, label) => {
            const normalizedLabel = normalizeInline(label);
            const normalizedNote = note.replace(/\.$/, "");

            return normalizedNote ? `${normalizedLabel} (${normalizedNote})` : normalizedLabel;
        })
        .replace(/<CvSection\s+[^>]*title="([^"]+)"[^>]*>/g, (_, title) => `## ${title}`)
        .replace(/<TimelineItem([^>]*)>/g, (_, attributes) => renderTimelineHeading(attributes))
        .replace(/<AdditionalAchievements(?:\s+title="([^"]+)")?\s*>/g, (_, title) => `${title ?? "Additional achievements"}:`)
        .replace(/<HistoryActivity>/g, "Activity context:")
        .replace(/<ProjectDetails\s+title="([^"]+)"\s*>/g, (_, title) => (title === "Activity context" ? "" : `${title}:`))
        .replace(/<MoreDetails>/g, "")
        .replace(/<\/(?:CvSection|TimelineItem|AdditionalAchievements|HistoryActivity|ProjectDetails|MoreDetails)>/g, "")
        .replace(/<\/?span[^>]*>/g, "")
        .replace(/<\/?p>/g, "\n\n")
        .replace(/<\/?[A-Z][^>]*>/g, "")
        .replace(/[ \t]+$/gm, "")
        .replace(/^[ \t]+/gm, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

export const renderMetadataHeader = ({ address, email, employee, position, website }) => {
    const websiteUrl = website.startsWith("http") ? website : `https://${website}/`;
    const profileLines = profileLinks.map(([label, url]) => `${label}: [${url.replace(/^https?:\/\//, "")}](${url})`);

    return [
        `# ${employee}`,
        position,
        address,
        `Email: [${email}](mailto:${email})`,
        `Website: [${website}](${websiteUrl})`,
        ...profileLines,
        "HTML CV: [besdar.github.io](https://besdar.github.io/)",
        "PDF CV: [Dmitry_Beskov.pdf](https://besdar.github.io/Dmitry_Beskov.pdf)",
    ].join("\n\n");
};

export const generateMarkdownCv = async ({ source = sourcePath, output = outputPath } = {}) => {
    const sourceContent = await fs.readFile(source, "utf8");
    const metadata = parseMetadata(sourceContent);
    const body = convertMdxBodyToMarkdown(sourceContent);

    await fs.writeFile(output, `${renderMetadataHeader(metadata)}\n\n${body}\n`);
};

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    await generateMarkdownCv();
}
