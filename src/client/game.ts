import { Player } from "./player"
import { Food } from "./food"
import config from "../config"
import { checkImpact, getDistance } from "../utils"

export class Game {
  width: number
  height: number
  canvas: HTMLCanvasElement
  player: Player
  mouse: {
    x: number
    y: number
  }
  foods: Food[]

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.player = new Player(this)
    this.mouse = {
      x: this.player.x,
      y: this.player.y,
    }
    this.foods = []

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.offsetX
      this.mouse.y = e.offsetY
    })
  }

  render(context: CanvasRenderingContext2D) {
    this.player.draw(context)
    this.player.move(this.mouse.x, this.mouse.y)
    this.foods.forEach((food) => {
      if (checkImpact(this.player, food)) {
        this.player.eat(food)
      } else {
        food.draw(context)
      }
    })
  }

  init() {
    this.generateFood()
  }

  generateFood() {
    let attempts = 0

    while(this.foods.length < config.maxFood && attempts < config.maxFoodAttempts) {
      attempts++
      const tempFood = new Food(this)

      const overlapFood = this.foods.find((food) => {
        const distance = getDistance(tempFood, food)
        const sumRadii = tempFood.radius + food.radius

        return distance - sumRadii < config.minFoodDistance
      })

      if (!overlapFood) {
        this.foods.push(tempFood)
      }
    }
  }
}
