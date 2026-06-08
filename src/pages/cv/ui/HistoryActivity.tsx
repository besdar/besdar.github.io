import type { ComponentChildren } from "preact";
import styles from "./historyActivity.module.css";

type HistoryActivityProps = {
    children?: ComponentChildren;
};

export const HistoryActivity = ({ children }: HistoryActivityProps) => <div className={styles["history-activity"]}>{children}</div>;
