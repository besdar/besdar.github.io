import { AdditionalAchievements } from "../ui/AdditionalAchievements";
import { CvSection } from "../ui/CvSection";
import { HistoryActivity } from "../ui/HistoryActivity";
import { ImpactEvidence } from "../ui/ImpactEvidence";
import { InlineTooltip } from "../ui/InlineTooltip";
import { MoreDetails } from "../ui/MoreDetails";
import { ProjectDetails } from "../ui/ProjectDetails";
import { TechStack } from "../ui/TechStack";
import { TimelineItem } from "../ui/TimelineItem";
import { cvMdxComponents } from "./cv-mdx-components";

export const cvComponents = {
    ...cvMdxComponents,
    AdditionalAchievements,
    HistoryActivity,
    ImpactEvidence,
    InlineTooltip,
    MoreDetails,
    ProjectDetails,
    Section: CvSection,
    TechStack,
    TimelineItem,
};
