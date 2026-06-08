import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { renderToStaticMarkup } from "preact-render-to-string";
import type { AlternateLink, SitePage } from "../model/rendered-page";

const documentTemplate = readFileSync(new URL("./documentTemplate.html", import.meta.url), "utf8");
const styleSheetFiles = [
    "base",
    "header",
    "cvPage",
    "contacts",
    "sectionTitle",
    "achievementItem",
    "moreDetails",
    "additionalAchievements",
    "impactEvidence",
    "projectDetails",
    "timelineHeader",
    "timelineItem",
    "historyActivity",
    "techStack",
    "inlineTooltip",
    "pdfButton",
    "blog",
];

export const getAssetPrefix = (outputPath: string) => {
    const depth = outputPath.split("/").length - 1;

    if (depth === 0) {
        return "./";
    }

    return "../".repeat(depth);
};

export const escapeHtml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

export const serializeStructuredData = (structuredData: unknown) => {
    if (!structuredData) {
        return "";
    }

    const serialized = JSON.stringify(structuredData);

    return serialized ? serialized.replaceAll("<", "\\u003c") : "";
};

export const renderContentSecurityPolicy = (structuredDataJson: string) => {
    const scriptSources = ["'self'"];

    if (structuredDataJson) {
        const structuredDataHash = createHash("sha256").update(structuredDataJson).digest("base64");
        scriptSources.push(`'sha256-${structuredDataHash}'`);
    }

    return `default-src 'self'; script-src ${scriptSources.join(" ")}`;
};

const renderAlternateLinks = (alternateLinks: AlternateLink[] = []) =>
    alternateLinks
        .map(({ href, rel = "alternate", title, type }) => {
            const titleAttribute = title ? ` title="${escapeHtml(title)}"` : "";

            return `    <link rel="${escapeHtml(rel)}" type="${escapeHtml(type)}" href="${escapeHtml(href)}"${titleAttribute}>`;
        })
        .join("\n");

const renderStructuredData = (structuredDataJson: string) =>
    structuredDataJson ? `    <script type="application/ld+json">${structuredDataJson}</script>` : "";

const renderStyleSheets = (assetPrefix: string) =>
    styleSheetFiles.map((styleSheet) => `    <link rel="stylesheet" href="${assetPrefix}css/${styleSheet}.css">`).join("\n");

export const renderDocument = ({ alternateLinks, bodyClass, content, description, outputPath, structuredData, title }: SitePage) => {
    const assetPrefix = getAssetPrefix(outputPath);
    const markup = renderToStaticMarkup(content);
    const structuredDataJson = serializeStructuredData(structuredData);
    const headLinks = [renderAlternateLinks(alternateLinks), renderStructuredData(structuredDataJson)].filter(Boolean).join("\n");

    return documentTemplate
        .replace("__CONTENT_SECURITY_POLICY__", escapeHtml(renderContentSecurityPolicy(structuredDataJson)))
        .replace("__TITLE__", escapeHtml(title))
        .replace("__DESCRIPTION__", escapeHtml(description))
        .replaceAll("__ASSET_PREFIX__", assetPrefix)
        .replace("__HEAD_LINKS__", headLinks)
        .replace("__STYLE_SHEETS__", renderStyleSheets(assetPrefix))
        .replace("__BODY_CLASS__", bodyClass)
        .replace("__MARKUP__", markup);
};
