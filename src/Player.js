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
        this.fps = 8
        this.interval = 1000 / this.fps
    }

    update(deltaTime) {
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

        if (!this.game.input.keys.has("w") && !this.game.input.keys.has("s") && !this.game.input.keys.has("d") && !this.game.input.keys.has("a") && this.speedX < 0.5 && this.speedX > -0.5) {
            this.speedX = 0
        }
        if (!this.game.input.keys.has("w") && !this.game.input.keys.has("s") && !this.game.input.keys.has("d") && !this.game.input.keys.has("a") && this.speedY < 0.5 && this.speedY > -0.5) {
            this.speedY = 0
        }

        if (!this.game.input.keys.has("a")) {
            this.speedX += this.acceleration
        } if (!this.game.input.keys.has("d")) {
            this.speedX -= this.acceleration
        } if (!this.game.input.keys.has("w")) {
            this.speedY += this.acceleration
        } if (!this.game.input.keys.has("s")) {
            this.speedY -= this.acceleration 
        }

        /*
        if (!this.game.input.keys.has("ArrowRight") && !this.game.input.keys.has("ArrowLeft") && this.speedX !== 0) {
            if (this.speedX > 0) {
                this.speedX -= this.maxSpeedX
            } else {
                this.speedX += this.maxSpeedX
            }
        }
        if (!this.game.input.keys.has("ArrowUp") && !this.game.input.keys.has("ArrowDown") && this.speedY !== 0) {
            if (this.speedY > 0) {
                this.speedY -= this.maxSpeedY
            } else {
                this.speedY += this.maxSpeedY
            }
        }
            */

        if (this.x > this.game.enemy.x - this.width && this.x < this.game.enemy.x + this.game.enemy.width && this.y > this.game.enemy.y - this.height && this.y < this.game.enemy.y + this.game.enemy.height) {
            this.x = 0
            this.y = 0
            this.speedX = 0
            this.speedY = 0
        }
        if (this.y < 0) {
            this.y = 0.2
            this.speedY = 0
        } else if (this.y > this.game.height - this.height) {
            this.y = 429.8
            this.speedY = 0
        }
        if (this.x < 0) {
            this.x = 0.2
            this.speedX = 0
        } else if (this.x > this.game.width - this.width) {
            this.x = 803.8
            this.speedX = 0
        }

        if (this.speedX == 0 && this.speedY == 0) {
            this.spriteY = 0
        } else if (this.speedX > 0) {
            this.spriteY = 3
        } else if (this.speedX < 0) {
            this.spriteY = 1
        } else if (this.speedY > 0) {
            this.spriteY = 0
        } else if (this.speedY < 0) {
            this.spriteY = 2
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