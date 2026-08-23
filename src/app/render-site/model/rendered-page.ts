import type { jsx } from "preact/jsx-runtime";

export interface AlternateLink {
    href: string;
    rel?: string;
    title?: string;
    type: string;
}

export interface SitePage {
    alternateLinks?: AlternateLink[];
    bodyClass: string;
    content: ReturnType<typeof jsx>;
    description: string;
    outputPath: string;
    structuredData?: unknown;
    title: string;
}

export interface RenderedPage {
    html: string;
    outputPath: string;
}
