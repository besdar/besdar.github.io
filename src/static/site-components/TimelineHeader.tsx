import type { TimelineItemProps } from "./types";

type TimelineHeaderProps = Pick<TimelineItemProps, "dates" | "organization" | "organizationUrl">;

export const TimelineHeader = ({ dates, organization, organizationUrl }: TimelineHeaderProps) => {
    if (!organization && !dates) {
        return null;
    }

    return (
        <div className="history-list">
            {organization && (
                <h3 className="history-company-name">
                    {organizationUrl ? (
                        <a className="link" title={organization} rel="noopener noreferrer" href={organizationUrl} target="_blank">
                            {organization}
                        </a>
                    ) : (
                        organization
                    )}
                </h3>
            )}
            {dates && <span className="history-dates">{dates}</span>}
        </div>
    );
};
