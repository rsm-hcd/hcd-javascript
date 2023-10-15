const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
    extends: [
        "@vercel/style-guide/eslint/node",
        "@vercel/style-guide/eslint/typescript",
    ].map(require.resolve),
    parserOptions: {
        project,
    },
    globals: {
        React: true,
        JSX: true,
    },
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    ignorePatterns: ["node_modules/", "dist/"],
    rules: {
        eqeqeq: ["error", "smart"],
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-redundant-type-constituents": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "off",
        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": "off",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/no-unnecessary-type-constraint": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/require-array-sort-compare": "off",
        "require-await": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/unbound-method": "off",
        "func-names": "off",
        "import/no-default-export": "off",
        "import/no-named-as-default-member": "off",
        "import/no-named-as-default": "off",
        "new-cap": "off",
        "no-await-in-loop": "off",
        "no-console": "off",
        "no-constant-binary-expression": "off",
        "no-extend-native": "off",
        "no-param-reassign": "off",
        "no-promise-executor-return": "off",
        "no-prototype-builtins": "off",
        "prefer-named-capture-group": "off",
        "prefer-regex-literals": "off",
        "tsdoc/syntax": "off",
    },
};
