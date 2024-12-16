import Game from "./Game.js"

const setup = (canvas, dummy) => {
    const ctx = canvas.getContext('2d') // Skapar en 2d-kontext för att rita på canvas
    const dummyctx = dummy.getContext('2d')
  // 16:9 aspect ratio
  canvas.width = 854 // sätt bredden på canvas
  canvas.height = 480 // sätt höjden på canvas
  dummy.width = 64
  dummy.height = 64
  
  const game = new Game(canvas.width, canvas.height, dummy)
  let lastTime = 0

  const animate = (timeStamp) => {
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.update(deltaTime)
    game.draw(ctx)
    requestAnimationFrame(animate)
  }
  animate(0)
}

export { setup }