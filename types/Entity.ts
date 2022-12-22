import type { Identifiable } from "./Identifiable"

export interface Entity extends Identifiable {
  /** When the entity was created */
  createdAt: Date | number
  /** When the entity was last updated */
  updatedAt: Date | number
}
