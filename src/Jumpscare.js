import Jumpscare from "/assets/Santa_Jumpscare.png"

export default class Jumpscare {
    constructor(x, y, width, height, game) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.game = game

        this.jumpscare = new Image()
        this.jumpscare.src = ""

        this.endScreen = new Image()
        this.endScreen.src = ""

        this.Ymove = 20
        this.Xmove = 5
        this.jumpscareTimer = 3000
        this.currentJumpscareTimer = -5
    }

    update(deltaTime) {
        this.y += this.Ymove
        this.x += this.Xmove

        if (this.x + this.width/2 > 20) {
            this.Xmove = -this.Xmove
        }

        if (this.x + this.width/2 < -20) {
            this.Xmove = Mathf.abs(this.Xmove)
        }

        if (this.y + this.height/2 > 10) {
            this.Ymove = -this.Ymove
        }      

        if (this.y + this.height/2 < -10) {
            this.Ymove = Mathf.abs(this.Ymove)
        }

        if (this.currentJumpscareTimer >= 0 && this.currentJumpscareTimer <= 1000) {
            this.jumpscare.src = ""
        }

        this.currentJumpscareTimer -= deltaTime
    }

    spawnJumpscare() {
        this.jumpscare.src = Jumpscare
        this.currentJumpscareTimer = this.jumpscareTimer
        this.game.ui.timerun = false
    }

    draw(ctx) {
        ctx.drawImage(this.jumpscare, this.x, this.y, this.width, this.height)
    }
}