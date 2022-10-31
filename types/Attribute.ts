import type { Entity } from "./Entity"
import type { Block } from "./Block"

export interface Attribute extends Entity {
  name: string
  value: Block[] | string
}
