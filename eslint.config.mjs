import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig(
    {
        ignores: ["**/dist/**", "**/node_modules/**", "**/.cache/**"],
    },
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    eslintConfigPrettier,
    {
        files: [tseslint.globs.jsts],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
            globals: {
                HTMLCanvasElement: "readonly",
                HTMLSpanElement: "readonly",
                CanvasRenderingContext2D: "readonly",
                cancelAnimationFrame: "readonly",
                clearTimeout: "readonly",
                console: "readonly",
                document: "readonly",
                process: "readonly",
                requestAnimationFrame: "readonly",
                setTimeout: "readonly",
                window: "readonly",
            },
        },
    },
    {
        files: [tseslint.globs.js],
        extends: [tseslint.configs.disableTypeChecked],
    },
);
