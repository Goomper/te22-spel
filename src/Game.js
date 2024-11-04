import GameObject from "./GameObject"

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        console.log("bredden: ", this.width)
        this.box = new GameObject(40, 100, 200, 200, "purple")
    }

    update(deltaTime) {
        this.box.update(deltaTime)
    }

    draw(ctx) {
        this.box.draw(ctx)
    }
}