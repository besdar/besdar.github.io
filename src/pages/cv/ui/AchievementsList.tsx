import type { ComponentChildren } from "preact";

type AchievementsListProps = {
    children?: ComponentChildren;
};

export const AchievementsList = ({ children }: AchievementsListProps) => <ul>{children}</ul>;
