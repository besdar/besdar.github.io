import { TimelineHeader } from "./TimelineHeader";
import type { TimelineItemProps } from "./types";

export const TimelineItem = ({ children, dates, organization, organizationUrl, role, roleUrl, subtitle }: TimelineItemProps) => {
    const sectionClasses = ["history", organization && "description-item"].filter(Boolean).join(" ");

    return (
        <section className={sectionClasses}>
            <TimelineHeader dates={dates} organization={organization} organizationUrl={organizationUrl} />
            <div className="history-description">
                <h3 className="history-title">
                    {roleUrl ? (
                        <a href={roleUrl} rel="noopener noreferrer" target="_blank" className="description-title-link">
                            {role}
                        </a>
                    ) : (
                        role
                    )}
                </h3>
                {subtitle && <h4 className="history-subtitle">{subtitle}</h4>}
                <div className="history-about">{children}</div>
            </div>
        </section>
    );
};
