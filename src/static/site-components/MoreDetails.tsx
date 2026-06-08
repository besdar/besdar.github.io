import type { ComponentChildren } from "preact";

type MoreDetailsProps = {
    children?: ComponentChildren;
};

export const MoreDetails = ({ children }: MoreDetailsProps) => (
    <details className="description-details">
        <summary className="description-summary-title">Earlier work experience</summary>
        {children}
    </details>
);
