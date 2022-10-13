import type { Identifiable } from "./Identifiable"

export interface NamedEntityReference extends Identifiable {
  name: string
}
