import type React from "react";

export type AlternateLink = {
    href: string;
    rel?: string;
    title?: string;
    type: string;
};

export type SitePage = {
    alternateLinks?: AlternateLink[];
    bodyClass: string;
    content: React.ReactNode;
    description: string;
    outputPath: string;
    structuredData?: unknown;
    title: string;
};

export type RenderedPage = {
    html: string;
    outputPath: string;
};
