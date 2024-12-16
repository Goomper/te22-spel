import GameObject from "./GameObject"

export default class Wallsides extends GameObject {
    constructor(x, y, width, height, color, game, player) {
        super(x, y, width, height, color)
        this.color = color
        this.game = game
        this.player = player
    }

    update(deltaTime) {
        if (this.player.x + this.player.width > this.x && this.game.player.x < this.x + this.width && this.player.y + this.player.height > this.y && this.game.player.y < this.y + this.height) {
            if (this.player.speedX > 0) {
                this.player.x = this.x - this.player.width
            } else if (this.player.speedX < 0) {
                this.player.x = this.x + this.width
            }
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}