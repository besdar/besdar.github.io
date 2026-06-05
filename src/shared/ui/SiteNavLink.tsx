import cn from "classnames";
import type { PropsWithChildren } from "react";
import baseStyles from "./base.module.css";
import headerStyles from "./header.module.css";

type SiteNavLinkProps = PropsWithChildren<{
    href: string;
}>;

export const SiteNavLink = ({ children, href }: SiteNavLinkProps) => (
    <a className={cn(headerStyles["site-nav-link"], baseStyles.link)} href={href}>
        {children}
    </a>
);
