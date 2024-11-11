import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
// import eslintConfigAirbnb from "eslint-config-airbnb";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";
import typescriptParser from "@typescript-eslint/parser";
import tseslint from "typescript-eslint";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";

export default tseslint.config(
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    // eslintConfigAirbnb,
    reactPlugin.configs.flat.recommended, // This is not a plugin object, but a shareable config object
    reactPlugin.configs.flat["jsx-runtime"], // Add this if you are using React 17+
    eslintPluginJsxA11y.flatConfigs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        files: ["src/**/*.ts", "src/**/*.tsx"],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            "react/jsx-filename-extension": [
                "error",
                {
                    extensions: [".tsx"],
                },
            ],
            "import/extensions": [
                "error",
                {
                    tsx: "never",
                    ts: "never",
                },
            ],
            "import/no-unresolved": "off",
            "react/prop-types": "off",
            "import/prefer-default-export": "off",
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": ["error"],
            "import/no-extraneous-dependencies": "off",
            "react/require-default-props": "off",
            "react/function-component-definition": [
                "error",
                {
                    namedComponents: "arrow-function",
                    unnamedComponents: "arrow-function",
                },
            ],
            "react/jsx-props-no-spreading": "off",
        },
        settings: {
            react: {
                version: "detect", // React version. "detect" automatically picks the version you have installed.
                // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                // Defaults to the "defaultVersion" setting and warns if missing, and to "detect" in the future
                defaultVersion: "18.2.0", // Default React version to use when the version you have installed cannot be detected.
            },
        },
    },
);
