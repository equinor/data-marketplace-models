import type { Entity } from "./Entity"
import type { NamedEntityReference } from "./NamedEntityReference"
import type { LabelledEntityReference } from "./LabelledEntityReference"

export interface Asset extends Entity {
  /** A short description of the asset in plain text */
  excerpt?: string
  /** A longer description of the asset */
  description: string
  /** Describes how often an asset is updated */
  updateFrequency: string
  /** A reference to the provider the asset was sourced from (e.g. Collibra) */
  provider: NamedEntityReference
  /** The type of asset (e.g. Data Product) */
  type: NamedEntityReference
  /** A list of tags registered on an asset */
  tags?: LabelledEntityReference[]
  /** A number between 0 and 1, representing of the calculated quality of the asset */
  qualityScore: number
  /** A number between 0 and 1, represeting the user rating of an asset */
  rating: number
}
