import type { ComponentType } from "preact";
import type { jsx } from "preact/jsx-runtime";

export interface SitePage {
    bodyClass: string;
    description: string;
    outputPath: string;
    title: string;
    content: ReturnType<typeof jsx>;
}

export interface RenderedPage {
    html: string;
    outputPath: string;
}

export interface BlogArticle {
    Content: ComponentType<{ components?: Record<string, unknown> }>;
    metadata: Record<string, string>;
    slug: string;
}
