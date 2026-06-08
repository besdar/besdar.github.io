import type { ComponentChildren } from "preact";

type AchievementItemProps = {
    children?: ComponentChildren;
};

export const AchievementItem = ({ children }: AchievementItemProps) => <li className="achivements-item">{children}</li>;
