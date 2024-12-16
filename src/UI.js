import GameObject from '/src/GameObject'

export default class UI extends GameObject {
    constructor(x, y, width, height, game) {
        super(x, y, width, height)
        this.game = game
        this.heartbox = new Image()
        this.heartbox.src = "./src/assets/UI_HealthBar.png"
        this.heart1 = new Image()
        this.heart1.src = "./src/assets/Hjärta.png"
        this.heart2 = new Image()
        this.heart2.src = "./src/assets/Hjärta.png"
        this.heart3 = new Image()
        this.heart3.src = "./src/assets/Hjärta.png"
        this.heart4 = new Image()
        this.heart4.src = "./src/assets/Hjärta.png"
    }

    draw(ctx) {
        ctx.drawImage(this.heartbox, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.heart1, 20, 12, 80, 80)
        ctx.drawImage(this.heart2, 65, 12, 80, 80)
        ctx.drawImage(this.heart3, 110, 12, 80, 80)
        ctx.drawImage(this.heart4, 155, 12, 80, 80)
    }
}