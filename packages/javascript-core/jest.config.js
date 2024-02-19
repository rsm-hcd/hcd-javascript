module.exports = {
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                diagnostics: false,
                tsconfig: "<rootDir>/tsconfig.json",
            },
        ],
    },
    moduleDirectories: ["node_modules", "src"],
    modulePathIgnorePatterns: ["<rootDir>/dist"],
    preset: "ts-jest",
    roots: ["<rootDir>/src"],
    setupFilesAfterEnv: ["<rootDir>/src/setup-tests.ts"],
    testEnvironment: "jsdom",
};
