import type { PropsWithChildren } from "react";

export const ProjectDetails = ({ children }: PropsWithChildren) => (
    <details className="projects-details">
        <summary className="projects-summary-title">Project(s) description</summary>
        {children}
    </details>
);
