import type { ComponentChildren } from "preact";
import styles from "./achievementItem.module.css";

interface AchievementItemProps {
    children?: ComponentChildren;
}

export const AchievementItem = ({ children }: AchievementItemProps) => <li className={styles["achivements-item"]}>{children}</li>;
