import { pos } from '../globals'
import type { PhaserScene } from '../types'
import { levelMapArray } from './levelMap'
import { elementTable } from './levelMap.types'

export function generateLevelOne(phaser: PhaserScene) {
  phaser.add.text(300, 100, 'Hello World', {
    fontSize: 30,
  })

  phaser.add.text(300, 200, 'Arrows to Move, Space to Jump', {
    fontSize: 16,
  })

  const solid = phaser.physics.add.staticGroup()

  levelMapArray.forEach((element) => {
    solid.create(pos(element.x), pos(element.y), elementTable[element.type])
  })

  return solid
}
