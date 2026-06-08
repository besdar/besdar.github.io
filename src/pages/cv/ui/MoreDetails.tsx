import type { ComponentChildren } from "preact";
import styles from "./moreDetails.module.css";

type MoreDetailsProps = {
    children?: ComponentChildren;
};

export const MoreDetails = ({ children }: MoreDetailsProps) => (
    <details className={styles["description-details"]}>
        <summary className={styles["description-summary-title"]}>Earlier work experience</summary>
        {children}
    </details>
);
