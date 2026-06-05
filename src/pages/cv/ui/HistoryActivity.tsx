import type { PropsWithChildren } from "react";
import styles from "./historyActivity.module.css";

export const HistoryActivity = ({ children }: PropsWithChildren) => <div className={styles["history-activity"]}>{children}</div>;
