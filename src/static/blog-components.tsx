import React from "react";

export const blogMdxComponents = {
    a: ({ children, href }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
        const isExternal = typeof href === "string" && /^https?:\/\//.test(href);

        return (
            <a className="link" href={href} rel={isExternal ? "noopener noreferrer" : undefined} target={isExternal ? "_blank" : undefined}>
                {children}
            </a>
        );
    },
    code: ({ children }: React.PropsWithChildren) => <code className="blog-code">{children}</code>,
    h1: ({ children }: React.PropsWithChildren) => <h1 className="blog-title">{children}</h1>,
    h2: ({ children }: React.PropsWithChildren) => <h2 className="blog-heading">{children}</h2>,
    h3: ({ children }: React.PropsWithChildren) => <h3 className="blog-subheading">{children}</h3>,
    h4: ({ children }: React.PropsWithChildren) => <h4 className="blog-minor-heading">{children}</h4>,
    li: ({ children }: React.PropsWithChildren) => <li className="blog-list-item">{children}</li>,
    ol: ({ children }: React.PropsWithChildren) => <ol className="blog-list blog-ordered-list">{children}</ol>,
    p: ({ children }: React.PropsWithChildren) => <p className="blog-paragraph">{children}</p>,
    pre: ({ children }: React.PropsWithChildren) => <pre className="blog-code-block">{children}</pre>,
    ul: ({ children }: React.PropsWithChildren) => <ul className="blog-list">{children}</ul>,
};
