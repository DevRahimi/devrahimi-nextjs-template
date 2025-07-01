# Next.js + Bun Template

A **Next.js** starter template powered by **Bun** for a smooth developer experience. This project uses **Husky**, **ESLint**, **Prettier**, and **.nvmrc** for Node version management, and includes a `.vscode` setup with recommended extensions and project-specific settings.

## Requirements

- **Node** (via `.nvmrc`) → `lts/*`
- **Bun** 1.x (default)
- **npm** or **Yarn** (optional, see below)

## Features

- **Next.js** with Turbopack in development (`next dev --turbopack`).
- **Bun** for fast package management and scripts (default).
- **ESLint** for code linting.
- **Prettier** for code formatting.
- **Husky** to manage Git hooks (pre-commit, pre-push).
- **`.nvmrc`** set to `lts/*`, ensuring you're always on the latest LTS version of Node.
- **VS Code** recommended extensions and settings in `.vscode/`.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DevRahimi/devrahimi-nextjs-template.git
cd devrahimi-nextjs-template
```

### 2. Install Node (if not already)

```bash
nvm install
nvm use
```

### 3. Install Bun (if not already)

```bash
curl -fsSL https://bun.sh/install | bash
```

### 4. Install dependencies (with Bun)

```bash
bun install
```

### 5. Run the development server

```bash
bun run dev
```

Starts Next.js on [http://localhost:3000](http://localhost:3000) (with Turbopack).

---

## Switching Package Managers (Bun → npm/pnpm)

This project is Bun-first, but you can use npm or pnpm if you prefer:

### Using npm

1. Remove or update the `"npm": "please-use-bun"` entry in `package.json` under `engines`.
2. Delete `bun.lock` if present.
3. Run:
   ```bash
   npm install
   npm run dev
   ```

### Using pnpm

1. Remove or update the `"npm": "please-use-bun"` entry in `package.json` under `engines` (optional for pnpm).
2. Delete `bun.lock` if present.
3. Run:
   ```bash
   pnpm install
   pnpm dev
   ```

> **Note:** Some scripts in `package.json` use `bun run ...` in `lint-staged` or Husky hooks. Update these to use `npm run ...` or `pnpm ...` as needed.

---

## Scripts

In your `package.json`, you'll find these main scripts:

- **`dev`**: Launches Next.js dev server with Turbopack.
- **`build`**: Builds Next.js production bundle with debug mode enabled.
- **`start`**: Serves the production build on port 3001.
- **`lint`**: Lints code using ESLint.
- **`format`**: Formats code using Prettier.
- **`info`**: Displays info about your Next.js setup.
- **`prepare`**: Installs Husky hooks.

## Linting & Formatting

- **ESLint**
  - Lints JavaScript/TypeScript/React code. Configured in `eslint.config.mjs`.
- **Prettier**
  - Formats code. Configured in `prettier.config.mjs`.
  - Plugins: `@trivago/prettier-plugin-sort-imports`, `prettier-plugin-tailwindcss`.

## Git Hooks & Commit Messages

- **Husky** runs pre-commit and pre-push scripts to ensure everything is formatted, linted, and built before pushing code.
- **Commitlint** (if configured) enforces a standard commit message convention.

### Husky Hooks

- **pre-commit**: Runs `lint-staged` to check and format only staged files before committing. This helps catch lint/format issues early and keeps your codebase clean.
- **pre-push**: Runs `bun run lint` and `bun run build` before pushing to remote. If linting or build fails, the push is aborted. This ensures only working, linted, and buildable code is pushed to the repository.

## VS Code Setup

In the `.vscode/` folder, you'll find:

- **`extensions.json`**: Recommends installing ESLint, Prettier, and other useful extensions.
- **`settings.json`**: Preconfigured to automatically organize and sort imports on save.

## UI Components & Theming

This project uses [shadcn/ui](https://ui.shadcn.com/) as its component library, providing a set of beautifully-designed, accessible, and customizable React components. Theming is handled with [next-themes](https://github.com/pacocoursey/next-themes), allowing for seamless light/dark/system theme switching.

To further customize the look and feel of your shadcn/ui components, you can use [TweakCN](https://tweakcn.com/), a visual tool for editing and previewing shadcn themes.
