import Game from "./Game.js"

const setup = (canvas, dummy) => {
    const ctx = canvas.getContext('2d') // Skapar en 2d-kontext för att rita på canvas
    const dummyctx = dummy.getContext('2d')
  // 16:9 aspect ratio
  canvas.width = 854 // sätt bredden på canvas
  canvas.height = 480 // sätt höjden på canvas
  dummy.width = 854
  dummy.height = 480
  
  const game = new Game(canvas.width, canvas.height)
  let lastTime = 0

  const animate = (timeStamp) => {
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    dummyctx.clearRect(0, 0, dummy.width, dummy.height)
    game.update(deltaTime)
    game.draw(ctx)
    game.draw(dummyctx)
    requestAnimationFrame(animate)
  }
  animate(0)
}

export { setup }