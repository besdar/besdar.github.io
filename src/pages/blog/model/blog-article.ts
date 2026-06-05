import type React from "react";

export type BlogArticle = {
    Content: React.ComponentType<{ components?: Record<string, unknown> }>;
    metadata: Record<string, string>;
    slug: string;
};
