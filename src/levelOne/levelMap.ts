import type { MapElement } from './levelMap.types'

const bottom = 9
const left = 0
const right = 13

const Ground: Array<MapElement> = [
  { x: 0, y: bottom, type: 'tile' },
  { x: 1, y: bottom, type: 'tile' },
  { x: 2, y: bottom, type: 'tile' },
  { x: 3, y: bottom, type: 'tile' },
  { x: 4, y: bottom, type: 'tile' },
  { x: 5, y: bottom, type: 'tile' },
  { x: 6, y: bottom, type: 'tile' },
  { x: 7, y: bottom, type: 'tile' },
  { x: 8, y: bottom, type: 'tile' },
  { x: 9, y: bottom, type: 'tile' },
  { x: 10, y: bottom, type: 'tile' },
  { x: 11, y: bottom, type: 'tile' },
  { x: 12, y: bottom, type: 'tile' },
  { x: 13, y: bottom, type: 'tile' },
]

const Walls: Array<MapElement> = [
  // Left Wall
  { x: left, y: 0, type: 'tile' },
  { x: left, y: 1, type: 'tile' },
  { x: left, y: 2, type: 'tile' },
  { x: left, y: 3, type: 'tile' },
  { x: left, y: 4, type: 'tile' },
  { x: left, y: 5, type: 'tile' },
  { x: left, y: 6, type: 'tile' },
  { x: left, y: 7, type: 'tile' },
  { x: left, y: 8, type: 'tile' },
  // Right Wall
  { x: right, y: 0, type: 'tile' },
  { x: right, y: 1, type: 'tile' },
  { x: right, y: 2, type: 'tile' },
  { x: right, y: 3, type: 'tile' },
  { x: right, y: 4, type: 'tile' },
  { x: right, y: 5, type: 'tile' },
  { x: right, y: 6, type: 'tile' },
  { x: right, y: 7, type: 'tile' },
  { x: right, y: 8, type: 'tile' },
]

const Obstacle: Array<MapElement> = [
  { x: 4, y: bottom - 1, type: 'tile' },
  { x: 5, y: bottom - 1, type: 'tile' },
  { x: 6, y: bottom - 1, type: 'tile' },
  { x: 5, y: bottom - 2, type: 'tile' },
  // Float Platform
  { x: 8, y: bottom - 4, type: 'tile' },
]

export const levelMapArray: Array<MapElement> = [
  ...Ground,
  ...Walls,
  ...Obstacle,
]
