import type { PropsWithChildren } from "react";
import styles from "./moreDetails.module.css";

export const MoreDetails = ({ children }: PropsWithChildren) => (
    <details className={styles["description-details"]}>
        <summary className={styles["description-summary-title"]}>Earlier work experience</summary>
        {children}
    </details>
);
