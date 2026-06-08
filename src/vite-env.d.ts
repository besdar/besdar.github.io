declare module "*.css";

declare module "*.module.css" {
    const classes: Record<string, string>;
    export default classes;
}

declare module "*.mdx" {
    import type { ComponentType } from "preact";

    const MDXContent: ComponentType<{ components?: Record<string, unknown> }>;
    export const metadata: Record<string, string>;
    export default MDXContent;
}
