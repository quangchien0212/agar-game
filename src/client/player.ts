import config from "../config"
import { randomColor } from "../utils"
import { Game } from "./game"

export class Player {
  game: Game
  x: number
  y: number
  mass: number
  color: string
  distanceX?: number
  distanceY?: number
  dx?: number
  dy?: number
  speed: number

  constructor(game) {
    this.game = game;
    this.x = this.game.width / 2
    this.y = this.game.height / 2
    this.mass = config.defaultMass
    this.color = randomColor()
    this.speed = config.defaultSpeed
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath()
    context.arc(this.x, this.y, this.mass * 20, 0, Math.PI * 2)
    context.save()
    context.globalAlpha = 0.7
    context.fill()
    context.restore()
    context.stroke()
    context.beginPath()
    context.moveTo(this.x, this.y)
    context.stroke()
  }

  move(x: number, y: number) {
    this.dx = x - this.x
    this.dy = y - this.y
    const distance = Math.hypot(this.dy, this.dx)

    //fix flick object issue
    if (distance > 5) {
      this.distanceX = this.dx * this.speed / distance || 0
      this.distanceY = this.dy * this.speed / distance || 0
    } else {
      this.distanceX = 0
      this.distanceY = 0
    }
    this.x += this.distanceX
    this.y += this.distanceY
  }
}