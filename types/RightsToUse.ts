import type { Entity } from "./Entity"
import type { Attribute } from "./Attribute"
import type { Block } from "./Block"

export interface RightsToUse extends Entity {
  name: string
  description: Block[] | string
  authURL: Attribute
  terms: Attribute
}
