import type { CvSectionProps } from "./types";

export const CvSection = ({ children, id, title }: CvSectionProps) => (
    <article className="description" id={id}>
        <div className="description-title-container">
            <h2 className="description-title">{title}</h2>
        </div>
        {children}
    </article>
);
