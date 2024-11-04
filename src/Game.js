import GameObject from "./GameObject"

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        console.log("bredden är ", this.width)
        this.box = new GameObject(40, 100, 200, 200, "purple")
    }

    update(deltaTime) {
        this.box.draw(deltaTime)
    }

    draw(ctx) {
        this.box.draw(ctx)
    }
}