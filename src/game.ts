import * as Phaser from 'phaser'
import { generateLevelOne } from './levelOne/index'
import { generatePlayer } from './player/player'

const userViewportWidth = window.innerWidth
const userViewportHeigth = window.innerHeight

var player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
var cursors: Phaser.Types.Input.Keyboard.CursorKeys
var canDoubleJump = true
var spacebar: Phaser.Input.Keyboard.Key
export default class Demo extends Phaser.Scene {
  constructor() {
    var myVar = 0
    super('demo')
  }

  preload() {
    this.load.image('tile', 'assets/tile.png')
    this.load.image('libs', 'assets/libs.png')
    this.load.spritesheet(
      'player',
      'assets/character_maleAdventurer_sheet.png',
      {
        frameWidth: 106,
        frameHeight: 138,
      }
    )
  }

  create() {
    const colliders = generateLevelOne(this)
    player = generatePlayer(this, colliders)
    cursors = this.input.keyboard.createCursorKeys()
    spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
  }

  update(time: number, delta: number): void {
    if (cursors.right.isDown) {
      player.setVelocityX(160)
      player.anims.play('walk', true)
      player.setFlipX(false)
    } else if (cursors.left.isDown) {
      player.setVelocityX(-160)
      player.anims.play('walk', true)
      player.setFlipX(true)
    } else {
      player.setVelocityX(0)
    }

    if (player.body.touching.down) {
      if (player.body.velocity.x === 0) {
        player.anims.play('idle', true)
      }
    } else {
      if (player.anims.currentAnim?.key !== 'doubleJump') {
        player.anims.play('jump', true)
      }
    }

    if (player.body.touching.down) {
      canDoubleJump = true
      if (Phaser.Input.Keyboard.JustDown(spacebar)) {
        player.setVelocityY(-450)
      }
    } else {
      if (Phaser.Input.Keyboard.JustDown(spacebar)) {
        if (canDoubleJump === true) {
          canDoubleJump = false
          player.setVelocityY(-450)
          player.anims.play('doubleJump', true)
        }
      }
    }

    // if (
    //   Phaser.Input.Keyboard.JustDown(spacebar) &&
    //   !player.body.touching.down
    // ) {
    //   console.log('Reached Here')
    //   if (canDoubleJump === true) {
    //     console.log('Set Double Jump to False', canDoubleJump)
    //     canDoubleJump = false
    //     player.setVelocityY(-350)
    //   }
    // }

    console.log(player.anims.currentAnim.key)
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#125555',
  width: userViewportWidth,
  height: userViewportHeigth,
  scene: Demo,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
}

const game = new Phaser.Game(config)
