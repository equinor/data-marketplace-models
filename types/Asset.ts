import type { LabelledEntityReference } from "./LabelledEntityReference"
import type { NamedEntityReference } from "./NamedEntityReference"
import type { NamedEntity } from "./NamedEntity"
import type { PortableTextBlock } from "@portabletext/types"

export interface Asset extends NamedEntity {
  /** A short description of the asset in plain text */
  excerpt?: PortableTextBlock[]
  /** A longer description of the asset */
  description: PortableTextBlock[]
  /** Describes how often an asset is updated */
  updateFrequency: PortableTextBlock[]
  /** A reference to the provider the asset was sourced from (e.g. Collibra) */
  provider: NamedEntityReference
  /** The type of asset (e.g. Data Product) */
  type: NamedEntityReference
  /** The Community the Asset belongs to */
  community: NamedEntityReference
  /** A list of tags registered on an asset */
  tags?: LabelledEntityReference[]
  /** A number between 0 and 1, representing of the calculated quality of the asset */
  qualityScore: number
  /** A number between 0 and 1, represeting the user rating of an asset */
  rating: number
}
