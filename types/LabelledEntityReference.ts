import type { Identifiable } from "./Identifiable"

export interface LabelledEntityReference extends Identifiable {
  label: string
}
