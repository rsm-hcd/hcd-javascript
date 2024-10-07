# HCD JavaScript React

Common patterns, functions, etc... used when building react applications

## Getting started

This package is installed via npm, pnpm or yarn

```shell
# npm
npm install --save-dev @rsm-hcd/javascript-react

# pnpm
pnpm install --save-dev @rsm-hcd/javascript-react

# yarn
yarn add @rsm-hcd/javascript-react --dev
```

From there you can import the variety of modules.

```typescript
import {
    AuthenticatedRoute,
    NestedRoute,
    NestedRoutes,
} from "@rsm-hcd/javascript-react";
```

## Documentation

[Full API documentation](docs/README.md)

## Peer dependencies

This package wraps several external packages for our own configuration and ease of use, such as `axios`, `i18next`, etc. These will need to be installed alongside this package, even if you do not plan on leveraging features that rely on them.
