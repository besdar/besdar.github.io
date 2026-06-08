import type { ComponentChildren } from "preact";

type ProjectDetailsProps = {
    children?: ComponentChildren;
};

export const ProjectDetails = ({ children }: ProjectDetailsProps) => (
    <details className="projects-details">
        <summary className="projects-summary-title">Project(s) description</summary>
        {children}
    </details>
);
