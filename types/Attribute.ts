import type { Entity } from "./Entity"
import {PortableTextBlock} from "@portabletext/types";

export interface Attribute extends Entity {
  name: string
  value: PortableTextBlock[] | string
}
