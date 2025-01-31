import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
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
    extends: ["next", "next/core-web-vitals", "next/typescript", "eslint:recommended"],
    ignorePatterns: [
      ".next",
      ".vercel",
      "dist",
      "node_modules",
      "build",
      "public/*",
      ".DS_Store",
      "*.css",
      "*.config.js",
      "*.config.ts",
    ],
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
];

export default eslintConfig;
