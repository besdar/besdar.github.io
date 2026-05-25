import type { PropsWithChildren } from "react";

export type StackItem = {
    description?: string;
    title: string;
};

export type CvSectionProps = PropsWithChildren<{
    id: string;
    title: string;
}>;

export type TimelineItemProps = PropsWithChildren<{
    dates?: string;
    organization?: string;
    organizationUrl?: string;
    role: string;
    roleUrl?: string;
    subtitle?: string;
}>;

export type TechStackProps = {
    items: StackItem[];
};

export type BlogLinkProps = PropsWithChildren<{
    href: string;
}>;
