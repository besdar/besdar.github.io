import type { ComponentChildren } from "preact";
import styles from "./achievementItem.module.css";

type AchievementItemProps = {
    children?: ComponentChildren;
};

export const AchievementItem = ({ children }: AchievementItemProps) => <li className={styles["achivements-item"]}>{children}</li>;
