import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended", "plugin:cypress/recommended"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },
    },

    rules: {
        camelcase: "error",

        indent: ["error", 4, {
            SwitchCase: 1,
        }],

        "no-multiple-empty-lines": ["error", {
            max: 2,
            maxEOF: 0,
        }],

        "operator-assignment": ["error", "always"],
        "space-infix-ops": "error",
        "space-before-blocks": "error",
        "space-in-parens": "error",
        "keyword-spacing": "error",

        "lines-around-comment": ["error", {
            beforeBlockComment: true,
            beforeLineComment: true,
            allowBlockStart: true,
        }],

        "spaced-comment": "error",

        "newline-per-chained-call": ["error", {
            ignoreChainWithDepth: 3,
        }],

        quotes: ["error", "single"],
        "newline-after-var": "error",
        "arrow-spacing": "error",
    },
}];