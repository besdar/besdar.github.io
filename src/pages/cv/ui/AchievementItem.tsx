import type { PropsWithChildren } from "react";
import styles from "./achievementItem.module.css";

export const AchievementItem = ({ children }: PropsWithChildren) => <li className={styles["achivements-item"]}>{children}</li>;
