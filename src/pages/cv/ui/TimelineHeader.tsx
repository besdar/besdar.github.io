import type { TimelineItemProps } from "../model/cv-component-contracts";
import { baseStyles } from "../../../shared/ui";
import styles from "./timelineHeader.module.css";

type TimelineHeaderProps = Pick<TimelineItemProps, "dates" | "organization" | "organizationUrl">;

export const TimelineHeader = ({ dates, organization, organizationUrl }: TimelineHeaderProps) => {
    if (!organization && !dates) {
        return null;
    }

    return (
        <div className={styles["history-list"]}>
            {organization && (
                <h3 className={styles["history-company-name"]}>
                    {organizationUrl ? (
                        <a className={baseStyles.link} title={organization} rel="noopener noreferrer" href={organizationUrl} target="_blank">
                            {organization}
                        </a>
                    ) : (
                        organization
                    )}
                </h3>
            )}
            {dates && <span className={styles["history-dates"]}>{dates}</span>}
        </div>
    );
};
