/** @type {import("jest").Config} */
const config = {
    clearMocks: true,
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    moduleNameMapper: {
        "\\.mdx$": "<rootDir>/test/mocks/mdxModule.tsx",
        "^preact$": "<rootDir>/node_modules/preact/dist/preact.js",
        "^preact/hooks$": "<rootDir>/node_modules/preact/hooks/dist/hooks.js",
        "^preact/jsx-runtime$": "<rootDir>/node_modules/preact/jsx-runtime/dist/jsxRuntime.js",
        "^preact/jsx-dev-runtime$": "<rootDir>/node_modules/preact/jsx-runtime/dist/jsxRuntime.js",
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
    testEnvironment: "jsdom",
    testMatch: ["<rootDir>/{build,src,test}/**/*.test.{mjs,ts,tsx}", "<rootDir>/*.test.{mjs,ts,tsx}"],
    transform: {
        "^.+\\.(ts|tsx)$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.json",
                useESM: true,
            },
        ],
    },
    watchman: false,
};

export default config;
