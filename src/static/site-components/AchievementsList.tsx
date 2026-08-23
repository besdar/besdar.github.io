import type { ComponentChildren } from "preact";

interface AchievementsListProps {
    children?: ComponentChildren;
}

export const AchievementsList = ({ children }: AchievementsListProps) => <ul className="history-achivements achivements">{children}</ul>;
