import type { ComponentChildren } from "preact";

type WithChildren<Props> = Props & {
    children?: ComponentChildren;
};

export type StackItem = {
    description?: string;
    title: string;
};

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
