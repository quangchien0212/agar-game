import { Player } from "./player"

export class Game {
  width: number
  height: number
  canvas: HTMLCanvasElement
  player: Player
  mouse: {
    x: number
    y: number
  }

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.player = new Player(this)
    this.mouse = {
      x: this.player.x,
      y: this.player.y,
    }

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.offsetX
      this.mouse.y = e.offsetY
    })
  }

  render(context: CanvasRenderingContext2D) {
    this.player.draw(context)
    this.player.move(this.mouse.x, this.mouse.y)
  }
}