import type React from "react";

export type SitePage = {
    bodyClass: string;
    description: string;
    outputPath: string;
    title: string;
    content: React.ReactNode;
};

export type RenderedPage = {
    html: string;
    outputPath: string;
};

export type BlogArticle = {
    Content: React.ComponentType<{ components?: Record<string, unknown> }>;
    metadata: Record<string, string>;
    slug: string;
};
