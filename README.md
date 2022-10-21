# Data Marketplace models

## Installation

```sh
[npm|pnpm|yarn] add @equinor/data-marketplace-models
```

## Usage

```ts
import type { Asset } from "@eqiunor/data-marketplace-models"

function dmAssetFromSource(data: any): Asset { /* ... */ }
```

```tsx
import type { User } from "@equinor/data-marketplace-models"
import type { NextPage } from "next"

type Props = {
  user: User
}

const UserProfileView: NextPage<Props> = () => (
  <main>
    {/* component code */}
  </main>
)
```

## Contributing

First off, thank you for helping out!

No big bells and whistles here. Just clone the repo, create a branch and submit a pull request 🙌

Make sure to update the package version number with `npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]` (see [NPM docs](https://docs.npmjs.com/cli/v8/commands/npm-version) for more information).

This package is versioned in accordance with [Semantic Versioning](https://semver.org).

## Publishing

1. Create a new git tag corresponding with the version in `package.json`
2. Create a release in GitHub
3. Write release notes (this might™ get automated eventually)
4. Trigger the `Publish to NPM` GitHub Workflow in the [Actions tab](https://github.com/equinor/data-marketplace-models/actions)
