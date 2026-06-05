import { createHash } from "node:crypto";

export const styleEntryFiles = {
    achievementItem: "src/pages/cv/ui/achievementItem.module.css",
    additionalAchievements: "src/pages/cv/ui/additionalAchievements.module.css",
    base: "src/shared/ui/base.module.css",
    blog: "src/pages/blog/ui/blog.module.css",
    contacts: "src/pages/cv/ui/contacts.module.css",
    cvPage: "src/pages/cv/ui/cvPage.module.css",
    header: "src/shared/ui/header.module.css",
    historyActivity: "src/pages/cv/ui/historyActivity.module.css",
    impactEvidence: "src/pages/cv/ui/impactEvidence.module.css",
    inlineTooltip: "src/pages/cv/ui/inlineTooltip.module.css",
    moreDetails: "src/pages/cv/ui/moreDetails.module.css",
    pdfButton: "src/pages/cv/ui/pdfButton.module.css",
    projectDetails: "src/pages/cv/ui/projectDetails.module.css",
    sectionTitle: "src/shared/ui/sectionTitle.module.css",
    techStack: "src/pages/cv/ui/techStack.module.css",
    timelineHeader: "src/pages/cv/ui/timelineHeader.module.css",
    timelineItem: "src/pages/cv/ui/timelineItem.module.css",
};

export const styleEntryNames = new Set(Object.keys(styleEntryFiles).map((styleName) => `style-${styleName}`));

export const getCssModuleClassName = (className: string) => {
    const safeClassName = className.replace(/[^a-zA-Z0-9_-]/g, "_");
    const hash = createHash("sha256").update(className).digest("base64url").slice(0, 6);

    return `${safeClassName}_${hash}`;
};

export const getCssAssetFileName = (assetInfo: { name?: string; names?: string[]; originalFileNames?: string[] }) => {
    const assetNames = [assetInfo.name, ...(assetInfo.names ?? []), ...(assetInfo.originalFileNames ?? [])].filter(Boolean);
    const styleEntryFile = Object.keys(styleEntryFiles).find((styleName) =>
        assetNames.some((assetName) => assetName?.endsWith(`${styleName}.module.css`) || assetName === `${styleName}.css` || assetName === `style-${styleName}.css`),
    );

    if (styleEntryFile) {
        return `css/${styleEntryFile}.css`;
    }

    return "assets/[name][extname]";
};
