import Input from "./Input.js"
import Player from "./Player.js"
import Enemy from "./Enemy.js"
import Wallsides from "./Wallsides.js"
import Walltopbottom from "./Walltopbottom.js"
import UI from "./UI.js"
import Interactable from "./Interactable.js"
import busselulle from "./busselulle.js"
import äpple from "./Äpple.js"
import bg from "./bg.js"
import Jumpscare from "./Jumpscare.js"
import Walls from "./Walls.js"

export default class Game {
    constructor(width, height, dummywidth, dummmyheight) {
        this.width = width
        this.height = height
        this.dummywidth = dummywidth
        this.dummmyheight = dummmyheight
        this.Walls = new Walls(this, 1920, 1080)
        this.bg = new bg(this, 1920, 1080)
        this.input = new Input(this)
        this.player = new Player(this.width/2, this.height/2, 50, 50, "green", 0.2, this)
        this.enemy = new Enemy(0, 400, 100, 100, "red", 0.5, this)
        this.wallsides1 = new Wallsides(400, 100, 64, 64, "red", this, this.player)
        this.walltopbottom1 = new Walltopbottom(400, 100, 64, 64, "pink", this, this.player)
        this.ui = new UI(0, 0, 250, 120, this)
        this.busselulle1 = new busselulle(1600, 860, 64, 64, this.player, this)
        this.busselulle2 = new busselulle(600, 300, 64, 64, this.player, this)
        this.busselulle3 = new busselulle(80, 405, 64, 64, this.player, this)
        this.busselulle4 = new busselulle(140, 630, 64, 64, this.player, this)
        this.busselulle5 = new busselulle(700, 950, 64, 64, this.player, this)
        this.busselulle6 = new busselulle(790, 690, 64, 64, this.player, this)
        this.busselulle7 = new busselulle(780, 210, 64, 64, this.player, this)
        this.busselulle8 = new busselulle(1460, 80, 64, 64, this.player, this)
        this.busselulle9 = new busselulle(175, 925, 64, 64, this.player, this)
        this.äpple1 = new äpple(400, 400, 64, 64, this.player, this)
        this.Jumpscare = new Jumpscare(this.player.x - 854/2, this.player.y - 480/2, 854, 480, this)
    }

    update(deltaTime) {
        this.Walls.update(deltaTime)
        this.bg.update(deltaTime)
        this.player.update(deltaTime)
        this.enemy.update(deltaTime)
        this.wallsides1.update(deltaTime)
        this.walltopbottom1.update(deltaTime)
        this.ui.update(deltaTime)
        this.busselulle1.update(deltaTime)
        this.busselulle2.update(deltaTime)
        this.busselulle3.update(deltaTime)
        this.busselulle4.update(deltaTime)
        this.busselulle5.update(deltaTime)
        this.busselulle6.update(deltaTime)
        this.busselulle7.update(deltaTime)
        this.busselulle8.update(deltaTime)
        this.busselulle9.update(deltaTime)
        this.äpple1.update(deltaTime)
        this.Jumpscare.update(deltaTime)
    }

    draw(ctx) {
        this.Walls.draw(ctx)
        this.bg.draw(ctx)
        this.wallsides1.draw(ctx)
        this.walltopbottom1.draw(ctx)
        this.enemy.draw(ctx)
        this.player.draw(ctx)
        this.busselulle1.draw(ctx)
        this.busselulle2.draw(ctx)
        this.busselulle3.draw(ctx)
        this.busselulle4.draw(ctx)
        this.busselulle5.draw(ctx)
        this.busselulle6.draw(ctx)
        this.busselulle7.draw(ctx)
        this.busselulle8.draw(ctx)
        this.busselulle9.draw(ctx)
        this.äpple1.draw(ctx)
        this.ui.draw(ctx)
        this.Jumpscare.draw(ctx)
    }
}