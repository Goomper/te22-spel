import Layer from './Layer'

export default class Background {
  constructor(game) {
    this.game = game
    this.width = 1920
    this.height = 1080

    this.bg0 = new Image()
    this.bg0.src = "./src/assets/Map.png"

    this.bg1 = new Image()
    this.bg1.src = "./src/assets/Väggar.png"

    this.backgroundLayers = [
      new Layer(this.game, this.width, this.height, 1, this.bg0),
      new Layer(this.game, this.width, this.height, 2, this.bg1)
    ]
  }

  update(deltaTime) {
    bg1.getImageData(this.x, this.y, this.width, this.height).data
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