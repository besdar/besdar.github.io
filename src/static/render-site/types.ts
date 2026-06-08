import type { ComponentType } from "preact";
import type { jsx } from "preact/jsx-runtime";

export type SitePage = {
    bodyClass: string;
    description: string;
    outputPath: string;
    title: string;
    content: ReturnType<typeof jsx>;
};

export type RenderedPage = {
    html: string;
    outputPath: string;
};

export type BlogArticle = {
    Content: ComponentType<{ components?: Record<string, unknown> }>;
    metadata: Record<string, string>;
    slug: string;
};
