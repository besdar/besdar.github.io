import type { PropsWithChildren } from "react";
import styles from "./projectDetails.module.css";

export const ProjectDetails = ({ children, title = "Activity context" }: PropsWithChildren<{ title?: string }>) => (
    <details className={styles["projects-details"]}>
        <summary className={styles["projects-summary-title"]}>{title}</summary>
        {children}
    </details>
);
