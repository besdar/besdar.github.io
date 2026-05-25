import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    publicDir: false,
    plugins: [
        { enforce: "pre", ...mdx() },
        react({
            include: /\.(jsx|js|mdx|md|tsx|ts)$/,
        }),
    ],
    build: {
        emptyOutDir: false,
        outDir: "dist",
        rollupOptions: {
            input: {
                index: "src/scripts/index.ts",
            },
            output: {
                assetFileNames: "assets/[name][extname]",
                chunkFileNames: "assets/[name].js",
                entryFileNames: "assets/[name].js",
            },
        },
    },
});
