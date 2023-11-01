// 00 = Empty Space
// 01 = Solid Tile

type AgentType = 'empty' | 'tile'

export interface MapElement {
  x: number
  y: number
  type: AgentType
}

type ElementTable = {
  [K in AgentType]: AgentType
}

export const elementTable: ElementTable = {
  empty: 'empty',
  tile: 'tile',
}
