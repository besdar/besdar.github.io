import type { ComponentChildren, JSX } from "preact";
import cn from "classnames";
import { baseStyles } from "../../../shared/ui";
import blogStyles from "../ui/blog.module.css";

type WithChildren = {
    children?: ComponentChildren;
};

export const isExternalHref = (href: unknown): href is string => typeof href === "string" && /^https?:\/\//.test(href);

export const blogMdxComponents = {
    a: ({ children, href }: JSX.IntrinsicElements["a"]) => {
        const isExternal = isExternalHref(href);

        return (
            <a className={baseStyles.link} href={href} rel={isExternal ? "noopener noreferrer" : undefined} target={isExternal ? "_blank" : undefined}>
                {children}
            </a>
        );
    },
    code: ({ children }: WithChildren) => <code className={blogStyles["blog-code"]}>{children}</code>,
    h1: ({ children }: WithChildren) => <h1 className={blogStyles["blog-title"]}>{children}</h1>,
    h2: ({ children }: WithChildren) => <h2 className={blogStyles["blog-heading"]}>{children}</h2>,
    h3: ({ children }: WithChildren) => <h3 className={blogStyles["blog-subheading"]}>{children}</h3>,
    h4: ({ children }: WithChildren) => <h4 className={blogStyles["blog-minor-heading"]}>{children}</h4>,
    li: ({ children }: WithChildren) => <li className={blogStyles["blog-list-item"]}>{children}</li>,
    ol: ({ children }: WithChildren) => <ol className={cn(blogStyles["blog-list"], blogStyles["blog-ordered-list"])}>{children}</ol>,
    p: ({ children }: WithChildren) => <p>{children}</p>,
    pre: ({ children }: WithChildren) => <pre className={blogStyles["blog-code-block"]}>{children}</pre>,
    ul: ({ children }: WithChildren) => <ul className={blogStyles["blog-list"]}>{children}</ul>,
};
