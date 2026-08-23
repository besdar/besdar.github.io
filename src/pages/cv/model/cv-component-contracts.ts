import type { ComponentChildren } from "preact";

type WithChildren<Props> = Props & {
    children?: ComponentChildren;
};

export interface StackItem {
    description?: string;
    title: string;
}

export type CvSectionProps = WithChildren<{
    id: string;
    title: string;
}>;

export type AdditionalAchievementsProps = WithChildren<{
    title?: string;
}>;

export type InlineTooltipProps = WithChildren<{
    note: string;
}>;

export type TimelineItemProps = WithChildren<{
    dates?: string;
    organization?: string;
    organizationUrl?: string;
    role: string;
    roleUrl?: string;
    subtitle?: string;
}>;

export interface TechStackProps {
    items: StackItem[];
}

export interface ImpactEvidenceItem {
    description?: string;
    label: string;
    value: string;
}

export interface ImpactEvidenceProps {
    items: ImpactEvidenceItem[];
    title?: string;
}
