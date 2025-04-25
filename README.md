# Next.js + Bun Template

A **Next.js** starter template powered by **Bun** for a smooth developer experience. This project uses **Husky**, **Biome.js**, **.nvmrc** for Node version management, and includes a `.vscode` setup with recommended extensions and project-specific settings.

## Requirements

- **Node** (via `.nvmrc`) → `lts/*`
- **Bun** 1.x
- (npm is intentionally not used—please install Bun.)

## Features

- **Next.js** with Turbopack in development (`next dev --turbopack`).
- **Bun** for blazing-fast package management and scripts.
- **Biome.js** for code quality checks, formatting, and linting.
- **Husky** to manage Git hooks (pre-commit, pre-push).
- **`.nvmrc`** set to `lts/*`, ensuring you’re always on the latest LTS version of Node.
- **VS Code** recommended extensions and settings in `.vscode/`.

## Getting Started

1. **Install Node** (if not already):

   ```bash
   nvm install
   nvm use
   ```

   Picks up `lts/*` from `.nvmrc`.

2. **Install Bun** (if not already):

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

3. **Install dependencies**:

   ```bash
   bun install
   ```

4. **Run the development server**:
   ```bash
   bun run dev
   ```
   Starts Next.js on [http://localhost:3000](http://localhost:3000) (with Turbopack).

## Scripts

In your `package.json`, you’ll find these main scripts:

- **`dev`**: Launches Next.js dev server with Turbopack.
- **`build`**: Formats code, then builds Next.js production bundle with debug mode enabled.
- **`start`**: Serves the production build on port 3001.
- **`lint`**: Lints code using Biome.js.
- **`format`**: Runs Biome.js to format all files.
- **`check`**: Checks if files conform to Biome.js rules - runs `lint` and `format` in one command.
- **`info`**: Displays info about your Next.js setup.
- **`prepare`**: Installs Husky hooks.

## Linting & Formatting

- **Biome.js**
  - This project uses Biome for linting and formatting. Configuration is located in biome.json.
  - Code is formatted with tabs (2 spaces), double quotes, and semicolons.
  - Imports are automatically organized.
  - Linting rules are based on Biome's recommended settings, with some customized warnings related to accessibility, correctness, and security.

- ~~**ESLint**~~
  - ~~Extends **Next**, **ESLint Recommended**, and **Prettier**.~~
  - ~~Warns on `no-console`, `no-unused-vars` (ignoring `_prefixed`), multiple empty lines, etc.~~
  - ~~Prefers double quotes, semicolons, and arrow callbacks.~~

- ~~**Prettier**~~
  - ~~**Plugins**:~~
    - ~~`@trivago/prettier-plugin-sort-imports` sorts and groups imports.~~
    - ~~`prettier-plugin-tailwindcss` sorts Tailwind classes (`tailwindConfig: "./tailwind.config.ts"`).~~
  - ~~**Key Options**:~~
    - ~~`tabWidth: 2`, `printWidth: 120`, `semi: true`, `singleQuote: false` (double quotes), `arrowParens: "always"`, `singleAttributePerLine`.~~
    - ~~Custom `importOrder` for modules and relative imports.~~

## Git Hooks & Commit Messages

- **Husky** runs pre-commit and pre-push scripts to ensure everything is formatted, linted, and built before pushing code.
- **Commitlint** enforces a standard commit message convention.

## VS Code Setup

In the `.vscode/` folder, you’ll find:

- **`extensions.json`**: Recommends installing Biome.js.
- **`settings.json`**: Preconfigured to automatically organize and sort imports on save.

## License

MIT

## Contributing

Feel free to open issues or pull requests. Make sure your code is linted and your commit messages pass Commitlint checks!
