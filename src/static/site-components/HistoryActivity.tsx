import type { ComponentChildren } from "preact";

type HistoryActivityProps = {
    children?: ComponentChildren;
};

export const HistoryActivity = ({ children }: HistoryActivityProps) => <div className="history-activity">{children}</div>;
