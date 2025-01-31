import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  // ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    globals: {
      React: "readonly",
    },
    extends: ["next", "next/core-web-vitals", "next/typescript", "eslint:recommended", "prettier"],
    plugins: [
      // "@stylistic"
    ],
    rules: {
      "no-console": "warn",
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-multiple-empty-lines": "warn",
      semi: "warn",
      quotes: ["warn", "double"],
      "prefer-arrow-callback": "warn",
      // "comma-spacing": "warn",
      // "comma-dangle": "off"
    },
  }),
  eslintConfigPrettier,
];

export default eslintConfig;
