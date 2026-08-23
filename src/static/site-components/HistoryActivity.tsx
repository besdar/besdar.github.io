import type { ComponentChildren } from "preact";

interface HistoryActivityProps {
    children?: ComponentChildren;
}

export const HistoryActivity = ({ children }: HistoryActivityProps) => <div className="history-activity">{children}</div>;
