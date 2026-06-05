import type { AdditionalAchievementsProps } from "../model/cv-component-contracts";
import styles from "./additionalAchievements.module.css";

export const AdditionalAchievements = ({ children, title = "Additional achievements" }: AdditionalAchievementsProps) => (
    <details className={styles["additional-achievements"]}>
        <summary className={styles["additional-achievements-summary"]}>{title}</summary>
        {children}
    </details>
);
