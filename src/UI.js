import GameObject from '/src/GameObject'

export default class UI extends GameObject {
    constructor(x, y, width, height, game) {
        super(x, y, width, height)
        this.game = game
        this.heartbox = new Image()
        this.heartbox.src = "./assets/UI_HealthBar.png"
        this.heart1 = new Image()
        this.heart1.src = "./assets/Hjärta.png"
        this.heart2 = new Image()
        this.heart2.src = "./assets/Hjärta.png"
        this.heart3 = new Image()
        this.heart3.src = "./assets/Hjärta.png"
        this.heart4 = new Image()
        this.heart4.src = "./assets/Hjärta.png"

        this.busselulleUI1 = new Image()
        this.busselulleUI1.src = ""
        this.busselulleUI2 = new Image()
        this.busselulleUI2.src = ""
        this.busselulleUI3 = new Image()
        this.busselulleUI3.src = ""
        this.busselulleUI4 = new Image()
        this.busselulleUI4.src = ""
        this.busselulleUI5 = new Image()
        this.busselulleUI5.src = ""
        this.busselulleUI6 = new Image()
        this.busselulleUI6.src = ""
        this.busselulleUI7 = new Image()
        this.busselulleUI7.src = ""
        this.busselulleUI8 = new Image()
        this.busselulleUI8.src = ""
        this.busselulleUI9 = new Image()
        this.busselulleUI9.src = ""
        this.drawnbusselulle = 0

        this.time = 0
        this.timerun = true

        this.randposX1 = Math.random() * 140
        this.randposY1 = Math.random() * 20

        this.randposX2 = Math.random() * 140
        this.randposY2 = Math.random() * 20

        this.randposX3 = Math.random() * 140
        this.randposY3 = Math.random() * 20

        this.randposX4 = Math.random() * 140
        this.randposY4 = Math.random() * 20

        this.randposX5 = Math.random() * 140
        this.randposY5 = Math.random() * 20

        this.randposX6 = Math.random() * 140
        this.randposY6 = Math.random() * 20

        this.randposX7 = Math.random() * 140
        this.randposY7 = Math.random() * 20

        this.randposX8 = Math.random() * 140
        this.randposY8 = Math.random() * 20

        this.randposX9 = Math.random() * 140
        this.randposY9 = Math.random() * 20
    }

    update(deltaTime) {
        if (this.timerun == true) {
            this.time += deltaTime
        }
    }

    draw(ctx) {
        ctx.drawImage(this.heartbox, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.heart1, 20, 12, 80, 80)
        ctx.drawImage(this.heart2, 65, 12, 80, 80)
        ctx.drawImage(this.heart3, 110, 12, 80, 80)
        ctx.drawImage(this.heart4, 155, 12, 80, 80)
        ctx.drawImage(this.heartbox, 620, 370, this.width, this.height)
        
        ctx.font = "20px Arial"
        ctx.fillText(`Time: ${Math.floor(this.time / 1000)}s`, this.game.width/2, 50)

        ctx.drawImage(this.busselulleUI1, this.randposX1 + 630, this.randposY1 + 380, 70, 70)
        ctx.drawImage(this.busselulleUI2, this.randposX2 + 630, this.randposY2 + 380, 70, 70)
        ctx.drawImage(this.busselulleUI3, this.randposX3 + 630, this.randposY3 + 380, 70, 70)
        ctx.drawImage(this.busselulleUI4, this.randposX4 + 630, this.randposY4 + 380, 70, 70)
        ctx.drawImage(this.busselulleUI5, this.randposX5 + 630, this.randposY5 + 380, 70, 70)
        ctx.drawImage(this.busselulleUI6, this.randposX5 + 630, this.randposY6 + 380, 70, 70)
        ctx.drawImage(this.busselulleUI7, this.randposX5 + 630, this.randposY7 + 380, 70, 70)
        ctx.drawImage(this.busselulleUI8, this.randposX5 + 630, this.randposY8 + 380, 70, 70)
        ctx.drawImage(this.busselulleUI9, this.randposX5 + 630, this.randposY9 + 380, 70, 70)

    }
}