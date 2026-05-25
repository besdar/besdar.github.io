import type { BlogLinkProps } from "./types";

export const BlogLink = ({ children, href }: BlogLinkProps) => (
    <a className="site-nav-link link" href={href}>
        {children}
    </a>
);
