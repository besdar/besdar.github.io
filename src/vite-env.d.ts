declare module "*.css";

declare module "*.mdx" {
    import type { ComponentType } from "react";

    const MDXContent: ComponentType<{ components?: Record<string, unknown> }>;
    export const metadata: Record<string, string>;
    export default MDXContent;
}
