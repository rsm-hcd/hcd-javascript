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
        "@typescript-eslint/ban-ts-comment": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/35
        "@typescript-eslint/ban-types": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/36
        "@typescript-eslint/explicit-function-return-type": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/37
        "@typescript-eslint/naming-convention": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/38
        "@typescript-eslint/no-confusing-void-expression": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/39
        "no-empty-function": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/40
        "@typescript-eslint/no-empty-function": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/40
        "@typescript-eslint/no-explicit-any": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/61
        "@typescript-eslint/no-floating-promises": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/62
        "@typescript-eslint/no-misused-promises": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/41
        "@typescript-eslint/no-non-null-assertion": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/42
        "@typescript-eslint/no-redundant-type-constituents": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/43
        "no-shadow": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/45
        "@typescript-eslint/no-shadow": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/45
        "no-throw-literal": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/46
        "@typescript-eslint/no-throw-literal": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/46
        "@typescript-eslint/no-unnecessary-condition": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/47
        "@typescript-eslint/no-unnecessary-type-constraint": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/48
        "@typescript-eslint/no-unsafe-argument": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/49
        "@typescript-eslint/no-unsafe-assignment": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/50
        "@typescript-eslint/no-unsafe-call": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/51
        "@typescript-eslint/no-unsafe-member-access": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/52
        "@typescript-eslint/no-unsafe-return": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/53
        "@typescript-eslint/require-array-sort-compare": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/53
        "require-await": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/55
        "@typescript-eslint/require-await": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/55
        "@typescript-eslint/unbound-method": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/57
        "func-names": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/58
        "import/no-default-export": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/59
        "import/no-named-as-default-member": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/60
        "import/no-named-as-default": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/63
        "new-cap": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/64
        "no-await-in-loop": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/65
        "no-console": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/66
        "no-constant-binary-expression": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/67
        "no-extend-native": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/68
        "no-param-reassign": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/69
        "no-promise-executor-return": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/70
        "no-prototype-builtins": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/71
        "prefer-named-capture-group": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/72
        "prefer-regex-literals": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/73
        "tsdoc/syntax": "off", // TODO: https://github.com/rsm-hcd/hcd-javascript/issues/74
    },
};
