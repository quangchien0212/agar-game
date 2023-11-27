import { Game } from "./game"

window.addEventListener("load", () => {
  const canvas = document.getElementById("cvs") as HTMLCanvasElement
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const game = new Game(canvas)
  game.init()

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.render(ctx)
    requestAnimationFrame(animate)
  }

  animate()
})
