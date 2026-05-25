import type { PropsWithChildren } from "react";

export const MoreDetails = ({ children }: PropsWithChildren) => (
    <details className="description-details">
        <summary className="description-summary-title">Earlier work experience</summary>
        {children}
    </details>
);
