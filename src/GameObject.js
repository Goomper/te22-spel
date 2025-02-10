export default class GameObject {
    constructor(x, y, width, height) {
        this.width = width
        this.height = height
        this.x = x
        this.y = y
    }

    update(deltaTime) {
        
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}