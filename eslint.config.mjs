import js from "@eslint/js";
import globals from "globals";
// import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
import markdown from "@eslint/markdown";

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
    { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
    { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    // pluginReact.configs.flat.recommended,
    { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
    { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        plugins: {
            "@stylistic": stylistic,
        },
        rules: {
            "@stylistic/indent": ["error", 4],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/brace-style": ["error", "1tbs"],
            "@stylistic/arrow-parens": ["error", "always"],
            "@stylistic/comma-dangle": ["error", "always-multiline"],
            "@stylistic/eol-last": ["error", "always"],
        },
    },
    ...markdown.configs.recommended,
]);
