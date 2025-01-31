/**
 * @type {import('prettier').Config & import("@ianvs/prettier-plugin-sort-imports").PluginConfig}
 */
const config = {
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
  tabWidth: 2,
  printWidth: 120,
  useTabs: false,
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  singleAttributePerLine: true,
  importOrder: ["^react$", "^next", "<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};

export default config;
