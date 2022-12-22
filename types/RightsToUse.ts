import type { Entity } from "./Entity"
import type { Attribute } from "./Attribute"
import type { PortableTextBlock } from "@portabletext/types"

export interface RightsToUse extends Entity {
  name: string
  description: PortableTextBlock[] | string
  authURL: Attribute
  terms: Attribute
}
