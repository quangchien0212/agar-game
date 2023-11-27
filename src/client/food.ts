import config from "../config";
import { getRandomArbitrary, randomColor } from "../utils";
import { Game } from "./game";

export class Food {
  game: Game
  x: number
  y: number
  mass: number
  color: string

  get radius() {
    return this.mass * config.massRatio
  }

  constructor(game) {
    this.game = game;
    this.mass = getRandomArbitrary(1, 2)
    this.x = getRandomArbitrary(this.radius, this.game.width - this.radius)
    this.y = getRandomArbitrary(this.radius, this.game.height - this.radius)
    this.color = randomColor()
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color
    context.lineWidth = 2
    context.strokeStyle = this.color
    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    context.save()
    context.globalAlpha = 0.7
    context.fill()
    context.restore()
    context.stroke()
    context.beginPath()
    context.moveTo(this.x, this.y)
    context.stroke()
  }

  remove() {
    const index = this.game.foods.findIndex(food => food === this)
    this.game.foods.splice(index, 1)
  }
}
