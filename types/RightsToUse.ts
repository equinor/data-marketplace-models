import type { Entity } from "./Entity"
import type {Attribute} from "./Attribute";

export interface RightsToUse extends Entity {
  name: string
  description: string
  authURL: Attribute
  terms: Attribute
}
