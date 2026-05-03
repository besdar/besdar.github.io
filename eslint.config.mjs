import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
// import eslintConfigAirbnb from "eslint-config-airbnb";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";

export default tseslint.config(
    js.configs.recommended,
    // eslintConfigAirbnb,
    reactPlugin.configs.flat.recommended, // This is not a plugin object, but a shareable config object
    reactPlugin.configs.flat["jsx-runtime"], // Add this if you are using React 17+
    eslintPluginJsxA11y.flatConfigs.recommended,
    tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        files: ["src/**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
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
    },
);
