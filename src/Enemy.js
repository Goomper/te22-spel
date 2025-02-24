export default class Enemy {
    constructor(x, y, width, height, color, speed, game) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.game = game
        this.speed = speed

        this.image = new Image()
        this.image.src = "./public/assets/Santa_Down.png"
        this.flip = false
        this.eatenlussebullar = 0
    }

    update(deltaTime) {
        this.diffX = Math.floor(this.game.player.x - this.x) - (this.width/2 - this.game.player.width/2);
        this.diffY = Math.floor(this.game.player.y - this.y) - (this.height/2 - this.game.player.height/2);
        if (this.diffX > 0) {
            this.x += this.speed
        } else if (this.diffX < 0) {
            this.x -= this.speed
        }
        if (this.diffY > 0) {
            this.y += this.speed
        } else if (this.diffY < 0) {
            this.y -= this.speed
        }

        if (this.game.player.eatenBusselullar == 1 && this.eatenlussebullar == 0) {
            this.eatenlussebullar += 1
            this.speed += 0.3
        }
        else if (this.game.player.eatenBusselullar == 2 && this.eatenlussebullar == 1) {
            this.eatenlussebullar += 1
            this.speed += 0.5
        }

        if (this.diffY > 0 && this.diffY >= this.diffX && this.diffY >= (this.diffX - this.diffX - this.diffX)) {
            this.image.src = "./public/assets/Final_Santa_Down.png"
            this.frameWidth = 240
            this.frameHeight = 260
        } else if (this.diffY <= 0 && this.diffY <= this.diffX && this.diffY <= (this.diffX - this.diffX - this.diffX)) {
            this.image.src = "./public/assets/Final_Santa_Up.png"
            this.frameWidth = 240
            this.frameHeight = 270
        } else if (this.diffX >= 0) {
            this.image.src = "./public/assets/Final_Santa_Right.png"
            this.frameWidth = 279
            this.frameHeight = 260
        } else if (this.diffX < 0) {
            this.image.src = "./public/assets/Final_Santa_Left.png"
            this.frameWidth = 280
            this.frameHeight = 260
        }
    }
    draw(ctx) {
        ctx.drawImage(this.image, 0, 0, this.frameWidth, this.frameHeight, this.x, this.y, this.width, this.height)
    }
}