import GameObject from "./GameObject"

export default class Player extends GameObject {
    constructor(x, y, width, height, color, speed, game) {
        super(x, y, width, height, color, speed, game)
        this.game = game

        this.image = new Image()
        this.image.src = "./src/assets/Tomte.png"

        this.speedX = 0
        this.speedY = 0
        this.acceleration = 0.2
        this.maxSpeed = 2

        this.frameWidth = 64
        this.frameHeight = 64
        this.spriteX = 0
        this.spriteY = 0
        this.maxFrame = 4
        this.timer = 0
        this.fps = 16
        this.interval = 1000 / this.fps
        this.hp = 4
    }

    update(deltaTime) {
        console.log(this.hp)
        if (this.hp <= 3) {
            this.game.ui.heart4.src = ""
        } 
        if (this.hp <= 2) {
            this.game.ui.heart3.src = ""
        }
        if (this.hp <= 1) {
            this.game.ui.heart2.src = ""
        }
        if (this.hp <= 0) {
            this.game.ui.heart1.src = ""
            
        }

        if (this.game.input.keys.has("a")) {
            this.speedX -= this.acceleration
        } if (this.game.input.keys.has("d")) {
            this.speedX += this.acceleration
        } if (this.game.input.keys.has("w")) {
            this.speedY -= this.acceleration
        } if (this.game.input.keys.has("s")) {
            this.speedY += this.acceleration
        }

        if (this.speedX >= this.maxSpeed) {
            this.speedX = this.maxSpeed
        }
        if (this.speedY >= this.maxSpeed) {
            this.speedY = this.maxSpeed
        }
        if (this.speedY <= -this.maxSpeed) {
            this.speedY = -this.maxSpeed
        }
        if (this.speedX <= -this.maxSpeed) {
            this.speedX = -this.maxSpeed
        }

        if (!this.game.input.keys.has("d") && !this.game.input.keys.has("a")) {
            this.speedX = 0
        }
        if (!this.game.input.keys.has("w") && !this.game.input.keys.has("s")) {
            this.speedY = 0
        }
        if (!this.game.input.keys.has("w") && !this.game.input.keys.has("s") && !this.game.input.keys.has("d") && !this.game.input.keys.has("a")) {
            this.spriteX = 0
            this.interval = 20000000
        }

        if (this.x > this.game.enemy.x - this.width && this.x < this.game.enemy.x + this.game.enemy.width && this.y > this.game.enemy.y - this.height && this.y < this.game.enemy.y + this.game.enemy.height) {
            this.hp -= 1
            this.x = 700
            this.y = 0
            this.speedX = 0
            this.speedY = 0
        }
        if (this.y < 0) {
            this.y = 0.2
        } else if (this.y > this.game.height - this.height) {
            this.y = 429.8
        }
        if (this.x < 0) {
            this.x = 0.2
        } else if (this.x > this.game.width - this.width) {
            this.x = 803.8
        }

        if (this.speedX == 0 && this.speedY == 0 && this.interval != 20000000) {
            this.spriteY = 0
            this.spriteX = 0
            this.interval = 1000 / this.fps
        } else if (this.speedX > 0) {
            this.spriteY = 3
            this.interval = 1000 / this.fps
        } else if (this.speedX < 0) {
            this.spriteY = 1
            this.interval = 1000 / this.fps
        } else if (this.speedY > 0) {
            this.spriteY = 0
            this.interval = 1000 / this.fps
        } else if (this.speedY < 0) {
            this.spriteY = 2
            this.interval = 1000 / this.fps
        }

        this.x += this.speedX
        this.y += this.speedY

        if (this.timer > this.interval) {
            this.spriteX++
            this.timer = 0
        } else {
            this.timer += deltaTime
        }

        if (this.spriteX >= this.maxFrame) {
            this.spriteX = 0
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.spriteX * this.frameWidth, this.spriteY * this.frameHeight, 64, 64, this.x, this.y, this.width, this.height)
    }
}