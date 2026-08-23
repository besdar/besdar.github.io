import type { ComponentChildren } from "preact";

interface AchievementItemProps {
    children?: ComponentChildren;
}

export const AchievementItem = ({ children }: AchievementItemProps) => <li className="achivements-item">{children}</li>;
