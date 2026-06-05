/** @type {import("jest").Config} */
const config = {
    clearMocks: true,
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    moduleNameMapper: {
        "\\.mdx$": "<rootDir>/test/mocks/mdxModule.tsx",
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
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
