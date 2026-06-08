import mdx from "@mdx-js/rollup";
import { defineConfig, type Plugin } from "vite";
import { getCssAssetFileName, getCssModuleClassName, styleEntryFiles, styleEntryNames } from "./vite.config.helpers";

const removeStyleEntryChunks = (): Plugin => ({
    generateBundle(_, bundle) {
        for (const [fileName, asset] of Object.entries(bundle)) {
            if (asset.type === "chunk" && styleEntryNames.has(asset.name)) {
                delete bundle[fileName];
            }
        }
    },
    name: "remove-style-entry-chunks",
});

export default defineConfig({
    publicDir: false,
    css: {
        modules: {
            generateScopedName: getCssModuleClassName,
        },
    },
    plugins: [{ enforce: "pre", ...mdx({ jsxImportSource: "preact" }) }, removeStyleEntryChunks()],
    esbuild: {
        jsxImportSource: "preact",
    },
    build: {
        emptyOutDir: false,
        outDir: "dist",
        rollupOptions: {
            input: {
                index: "src/app/entrypoint/index.ts",
                ...Object.fromEntries(Object.entries(styleEntryFiles).map(([styleName, stylePath]) => [`style-${styleName}`, stylePath])),
            },
            output: {
                assetFileNames: getCssAssetFileName,
                chunkFileNames: "assets/[name].js",
                entryFileNames: "assets/[name].js",
            },
        },
    },
});
