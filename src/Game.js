import GameObject from "./GameObject"
import Ball from "./Ball"
import Input from "./Input"
import Player from "./Player"
import Enemy from "./Enemy"

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.input = new Input(this)
        this.player = new Player(0, 0, 50, 50, "green", this)
        this.enemy = new Enemy(500, 200, 100, 100, "red", this)
        console.log("bredden: ", this.width)
        //this.box = new GameObject(40, 100, 200, 200, "purple")
        //this.ball = new Ball(100, 200, 100, 100, "red")
    }

    update(deltaTime) {
        //this.box.update(deltaTime)
        //this.ball.update(deltaTime)
        this.player.update(deltaTime)
        this.enemy.update(deltaTime)
    }

    draw(ctx) {
        //this.box.draw(ctx)
        //this.ball.draw(ctx)
        this.player.draw(ctx)
        this.enemy.draw(ctx)
    }
}