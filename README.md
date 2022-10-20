# Data Marketplace models

## Installation

```sh
[npm|pnpm|yarn] add @equinor/dm-models
```

## Usage

```ts
import type { Asset } from "@eqiunor/dm-models"

function dmAssetFromSource(data: any): Asset { /* ... */ }
```

```tsx
import type { User } from "@equinor/dm-models"
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
