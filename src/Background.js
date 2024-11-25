import Layer from './Layer'

export default class Background {
  constructor(game) {
    this.game = game
    this.width = 1920
    this.height = 1080

    this.bg = new Image()
    this.bg.src = "./src/assets/Bakgrund.png"

    this.backgroundLayers = [
      new Layer(this.game, this.width, this.height, 1, this.bg)
    ]
  }

  update(deltaTime) {
    this.backgroundLayers.forEach(layer => {
      layer.update(deltaTime)
    })
  }

  draw(ctx) {
    this.backgroundLayers.forEach(layer => {
      layer.draw(ctx)
    })
  }

}