export default class Wallsides {
    constructor(x, y, width, height, color, game, player) {
        this.width = width
        this.height = height
        this.x = x
        this.y = y
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