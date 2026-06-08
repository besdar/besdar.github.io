import type { jsx } from "preact/jsx-runtime";

export type AlternateLink = {
    href: string;
    rel?: string;
    title?: string;
    type: string;
};

export type SitePage = {
    alternateLinks?: AlternateLink[];
    bodyClass: string;
    content: ReturnType<typeof jsx>;
    description: string;
    outputPath: string;
    structuredData?: unknown;
    title: string;
};

export type RenderedPage = {
    html: string;
    outputPath: string;
};
