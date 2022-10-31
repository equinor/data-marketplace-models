export interface BlockChild {
  _type: string
  marks: string[]
  text: string
  _key: string
}

export interface MarkDef {
  _key: string
  _type: string
  [key: string | number]: any
}

export interface Block {
  style: string
  _type: "block"
  children: BlockChild[]
  markDefs: MarkDef[]
  _key: string
}
