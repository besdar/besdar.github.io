import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores: ["dist", "node_modules", ".cache"],
    },
    js.configs.recommended,
    tseslint.configs.recommended,
    {
        files: ["**/*.{js,mjs,ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
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
        rules: {
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": ["error"],
        },
    },
);
