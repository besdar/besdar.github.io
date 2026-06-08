import type { ComponentType } from "preact";

export type BlogArticle = {
    Content: ComponentType<{ components?: Record<string, unknown> }>;
    metadata: Record<string, string>;
    slug: string;
};
