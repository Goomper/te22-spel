import Input from "./Input"
import Player from "./Player"
import Enemy from "./Enemy"
import Wallsides from "./Wallsides"
import Walltopbottom from "./Walltopbottom"
import Background from "./Background"
import UI from "./UI"
import Interactable from "./Interactable"

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.input = new Input(this)
        this.player = new Player(0, 0, 50, 50, "green", 0.2, this)
        this.enemy = new Enemy(300, 200, 100, 100, "red", 0.5, this)
        this.wallsides1 = new Wallsides(400, 100, 64, 64, "red", this, this.player)
        this.walltopbottom1 = new Walltopbottom(400, 100, 63.9, 63.9, "pink", this, this.player)
        this.bg = new Background(0, 0, 1980, 1020, this)
        this.ui = new UI(0, 0, 250, 120, this)
        this.interactable0 = new Interactable(100, 400, 100, 100, "green", this, this.player)
    }

    update(deltaTime) {
        this.player.update(deltaTime)
        this.enemy.update(deltaTime)
        this.wallsides1.update(deltaTime)
        this.walltopbottom1.update(deltaTime)
        this.ui.update(deltaTime)
        this.interactable0.update(deltaTime)
    }

    draw(ctx) {
        this.bg.draw(ctx)
        this.wallsides1.draw(ctx)
        this.walltopbottom1.draw(ctx)
        this.player.draw(ctx)
        this.enemy.draw(ctx)
        this.ui.draw(ctx)
        this.interactable0.draw(ctx)
    }
}