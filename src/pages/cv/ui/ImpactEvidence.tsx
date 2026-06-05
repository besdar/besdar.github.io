import type { ImpactEvidenceProps } from "../model/cv-component-contracts";
import styles from "./impactEvidence.module.css";

export const ImpactEvidence = ({ items, title = "Evidence" }: ImpactEvidenceProps) => (
    <details className={styles["impact-evidence"]}>
        <summary className={styles["impact-evidence-summary"]}>{title}</summary>
        <dl className={styles["impact-evidence-grid"]}>
            {items.map(({ description, label, value }) => (
                <div className={styles["impact-evidence-item"]} key={`${label}-${value}`}>
                    <dt className={styles["impact-evidence-label"]}>
                        <strong className={styles["impact-evidence-value"]}>{value}</strong>
                        <span>{label}</span>
                    </dt>
                    {description && <dd className={styles["impact-evidence-note"]}>{description}</dd>}
                </div>
            ))}
        </dl>
    </details>
);
