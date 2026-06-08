import type { ComponentChildren, JSX } from "preact";

type WithChildren = {
    children?: ComponentChildren;
};

export const blogMdxComponents = {
    a: ({ children, href }: JSX.IntrinsicElements["a"]) => {
        const isExternal = typeof href === "string" && /^https?:\/\//.test(href);

        return (
            <a className="link" href={href} rel={isExternal ? "noopener noreferrer" : undefined} target={isExternal ? "_blank" : undefined}>
                {children}
            </a>
        );
    },
    code: ({ children }: WithChildren) => <code className="blog-code">{children}</code>,
    h1: ({ children }: WithChildren) => <h1 className="blog-title">{children}</h1>,
    h2: ({ children }: WithChildren) => <h2 className="blog-heading">{children}</h2>,
    h3: ({ children }: WithChildren) => <h3 className="blog-subheading">{children}</h3>,
    h4: ({ children }: WithChildren) => <h4 className="blog-minor-heading">{children}</h4>,
    li: ({ children }: WithChildren) => <li className="blog-list-item">{children}</li>,
    ol: ({ children }: WithChildren) => <ol className="blog-list blog-ordered-list">{children}</ol>,
    p: ({ children }: WithChildren) => <p className="blog-paragraph">{children}</p>,
    pre: ({ children }: WithChildren) => <pre className="blog-code-block">{children}</pre>,
    ul: ({ children }: WithChildren) => <ul className="blog-list">{children}</ul>,
};
