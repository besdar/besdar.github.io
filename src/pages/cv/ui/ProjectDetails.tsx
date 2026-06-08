import type { ComponentChildren } from "preact";
import styles from "./projectDetails.module.css";

type ProjectDetailsProps = {
    children?: ComponentChildren;
    title?: string;
};

export const ProjectDetails = ({ children, title = "Activity context" }: ProjectDetailsProps) => (
    <details className={styles["projects-details"]}>
        <summary className={styles["projects-summary-title"]}>{title}</summary>
        {children}
    </details>
);
