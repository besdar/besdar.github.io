import type { PropsWithChildren } from "react";

export type StackItem = {
    description?: string;
    title: string;
};

export type CvSectionProps = PropsWithChildren<{
    id: string;
    title: string;
}>;

export type AdditionalAchievementsProps = PropsWithChildren<{
    title?: string;
}>;

export type InlineTooltipProps = PropsWithChildren<{
    note: string;
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

export type ImpactEvidenceItem = {
    description?: string;
    label: string;
    value: string;
};

export type ImpactEvidenceProps = {
    items: ImpactEvidenceItem[];
    title?: string;
};
