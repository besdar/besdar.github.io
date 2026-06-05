import cn from "classnames";
import type { TimelineItemProps } from "../model/cv-component-contracts";
import styles from "./timelineItem.module.css";
import { TimelineHeader } from "./TimelineHeader";

export const TimelineItem = ({ children, dates, organization, organizationUrl, role, roleUrl, subtitle }: TimelineItemProps) => {
    const sectionClassName = cn(organization && styles["description-item"]) || undefined;

    return (
        <section className={sectionClassName}>
            <TimelineHeader dates={dates} organization={organization} organizationUrl={organizationUrl} />
            <div className={styles["history-description"]} data-history-description>
                <h3 className={styles["history-title"]}>
                    {roleUrl ? (
                        <a href={roleUrl} rel="noopener noreferrer" target="_blank" className={styles["description-title-link"]}>
                            {role}
                        </a>
                    ) : (
                        role
                    )}
                </h3>
                {subtitle && <h4>{subtitle}</h4>}
                <div>{children}</div>
            </div>
        </section>
    );
};
