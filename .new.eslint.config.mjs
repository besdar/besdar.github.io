import js from "@eslint/js";
import eslintConfigAirbnb from "eslint-config-airbnb";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";
import typescriptParser from "@typescript-eslint/parser";
import React from "react";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";

export default [
    js.configs.recommended,
    eslintConfigAirbnb,
    eslintPluginReact.configs.recommended,
    eslintPluginReactHooks.configs.recommended,
    eslintPluginJsxA11y.configs.recommended,
    eslintConfigPrettier,
    {
        files: ["src/**/*.ts", "src/**/*.tsx"],
        plugins: {
            React,
            typescriptPlugin,
        },
        languageOptions: {
            parser: typescriptParser,
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2021,
                myCustomGlobal: "readonly",
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
    },
];
