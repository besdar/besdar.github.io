import type { ComponentType } from "preact";

export interface BlogArticle {
    Content: ComponentType<{ components?: Record<string, unknown> }>;
    metadata: Record<string, string>;
    slug: string;
}
