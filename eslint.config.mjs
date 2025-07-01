import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";

const eslintConfig = [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    // extends: [
    //   "next",
    //   "next/core-web-vitals",
    //   "next/typescript",
    //   "eslint:recommended",
    //   "plugin:react/recommended",
    //   "plugin:@typescript-eslint/recommended",
    //   "plugin:@next/next/recommended",
    //   "prettier",
    // ],

    plugins: {
      react: reactPlugin,
      "@typescript-eslint": typescriptPlugin,
      "@next/next": nextPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: "readonly",
        console: "readonly",
        process: "readonly",
        global: "readonly",
        window: "readonly",
        document: "readonly",
      },
    },
    rules: {
      // Base rules
      ...js.configs.recommended.rules,

      // React rules
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // TypeScript rules
      ...typescriptPlugin.configs.recommended.rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // Next.js rules - explicitly define them
      "@next/next/google-font-display": "warn",
      "@next/next/google-font-preconnect": "warn",
      "@next/next/next-script-for-ga": "warn",
      "@next/next/no-before-interactive-script-outside-document": "warn",
      "@next/next/no-css-tags": "warn",
      "@next/next/no-head-element": "warn",
      "@next/next/no-html-link-for-pages": "warn",
      "@next/next/no-img-element": "warn",
      "@next/next/no-page-custom-font": "warn",
      "@next/next/no-styled-jsx-in-document": "warn",
      "@next/next/no-sync-scripts": "warn",
      "@next/next/no-title-in-document-head": "warn",
      "@next/next/no-unwanted-polyfillio": "warn",

      // Prettier rules (must come last to override conflicts)
      ...prettierConfig.rules,
      "prettier/prettier": "warn",

      // Custom rules
      "no-console": "warn",
      "no-multiple-empty-lines": "warn",
      "prefer-arrow-callback": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
      next: {
        rootDir: ".",
      },
    },
  },
  {
    ignores: [
      ".next/**",
      ".vercel/**",
      "dist/**",
      "node_modules/**",
      "build/**",
      "public/**",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      "next.config.ts",
      "next.config.js",
      "next.config.mjs",
      "tailwind.config.ts",
      "tailwind.config.js",
      "postcss.config.mjs",
      "**/*.config.js",
      "**/*.config.mjs",
      "**/*.config.ts",
    ],
  },
];

export default eslintConfig;
