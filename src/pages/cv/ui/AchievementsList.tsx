import type { ComponentChildren } from "preact";

interface AchievementsListProps {
    children?: ComponentChildren;
}

export const AchievementsList = ({ children }: AchievementsListProps) => <ul>{children}</ul>;
