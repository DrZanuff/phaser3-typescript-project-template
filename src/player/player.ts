import { pos } from '../globals'
import { PhaserScene } from '../types'
import Phaser from 'phaser'

export function generatePlayer(
  phaser: PhaserScene,
  colliders: Phaser.Physics.Arcade.StaticGroup
) {
  const player = phaser.physics.add.sprite(
    pos(3, false),
    pos(4, false),
    'player'
  )
  player.setBounce(0.08)
  player.setCollideWorldBounds(true)

  phaser.anims.create({
    key: 'walk',
    frames: phaser.anims.generateFrameNumbers('player', { start: 3, end: 10 }),
    frameRate: 10,
    repeat: -1,
  })

  phaser.anims.create({
    key: 'idle',
    frames: phaser.anims.generateFrameNumbers('player', { start: 1, end: 1 }),
    frameRate: 10,
  })

  phaser.anims.create({
    key: 'jump',
    frames: phaser.anims.generateFrameNumbers('player', { start: 0, end: 0 }),
    frameRate: 10,
  })

  phaser.anims.create({
    key: 'doubleJump',
    frames: phaser.anims.generateFrameNumbers('player', { start: 2, end: 2 }),
    frameRate: 10,
    repeat: 5,
  })

  player.body.setGravityY(400)

  phaser.physics.add.collider(player, colliders)

  return player
}
