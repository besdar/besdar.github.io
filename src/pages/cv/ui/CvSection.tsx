import type { CvSectionProps } from "../model/cv-component-contracts";
import { sectionTitleStyles as styles } from "../../../shared/ui";

export const CvSection = ({ children, id, title }: CvSectionProps) => (
    <article id={id}>
        <div className={styles["description-title-container"]}>
            <h2 className={styles["description-title"]}>{title}</h2>
        </div>
        {children}
    </article>
);
