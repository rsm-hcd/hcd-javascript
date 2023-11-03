# RSM HCD Javascript Packages

This is a monorepo consisting of numerous core JavaScript packages utilized by engineers within the Human-Centered Design group at RSM.

## Packages

- [`javascript-core`](./packages/javascript-core/README.md): Common patterns, functions, etc... used when building javascript applications (published to npm)
- [`javascript-testing`](./packages/javascript-testing/README.md): Testing utilities for JavaScript (published to npm)
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

## Getting Started

- (Optional) Install [Volta](https://volta.sh/)
  - _If Volta is installed, installing the remaining dependencies can be skipped since Volta handles that for you based it's configuration in `package.json`_
- Install [Node.js](https://nodejs.org/en/) (v18 or higher)
- Install [pnpm](https://pnpm.io/) (v8 or higher)
- Commands
  - `pnpm install`: Install dependencies
  - `pnpm run build`: Build all packages
  - `pnpm run lint`: Lint all packages
  - `pnpm run test`: Test all packages
