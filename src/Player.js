import GameObject from "./GameObject"

export default class Player extends GameObject {
    constructor(x, y, width, height, color, speed, game) {
        super(x, y, width, height, color, speed, game)
        this.game = game

        this.image = new Image()
        this.image.src = "./assets/Tomte.png"

        this.speedX = 0
        this.speedY = 0
        this.acceleration = 0.2
        this.maxSpeed = 2

        this.eatCooldown = 1500
        this.currentEatCooldown = 0

        this.frameWidth = 64
        this.frameHeight = 64
        this.spriteX = 0
        this.spriteY = 0
        this.maxFrame = 4
        this.timer = 0
        this.fps = 16
        this.interval = 1000 / this.fps
        this.hp = 4
        this.eatenBusselullar = 0
        this.random
        this.jumpscared = true
    }

    update(deltaTime) {

        if (this.currentEatCooldown < this.eatCooldown) {
            this.maxSpeed = 0
        }
        this.maxSpeed = 2

        this.random = Math.random()

        this.currentEatCooldown += deltaTime

        if (this.hp == 4) {
            this.game.ui.heart1.src = "./assets/Hjärta.png"
            this.game.ui.heart2.src = "./assets/Hjärta.png"
            this.game.ui.heart3.src = "./assets/Hjärta.png"
            this.game.ui.heart4.src = "./assets/Hjärta.png"
        }
        if (this.hp == 3) {
            this.game.ui.heart1.src = "./assets/Hjärta.png"
            this.game.ui.heart2.src = "./assets/Hjärta.png"
            this.game.ui.heart3.src = "./assets/Hjärta.png"
            this.game.ui.heart4.src = ""
        } 
        if (this.hp == 2) {
            this.game.ui.heart1.src = "./assets/Hjärta.png"
            this.game.ui.heart2.src = "./assets/Hjärta.png"
            this.game.ui.heart3.src = ""
            this.game.ui.heart4.src = ""
        }
        if (this.hp <= 1) {
            this.game.ui.heart1.src = "./assets/Hjärta.png"
            this.game.ui.heart2.src = ""
            this.game.ui.heart3.src = ""
            this.game.ui.heart4.src = ""
        }
        if (this.hp <= 0) {
            this.game.ui.heart1.src = ""
            this.game.ui.heart2.src = ""
            this.game.ui.heart3.src = ""
            this.game.ui.heart4.src = ""
        }

        if (this.hp <= 0 && this.jumpscared == true) {
            this.jumpscared = false
            this.game.Jumpscare.spawnJumpscare()
        }

        if (this.eatenBusselullar == 1) {
            this.game.ui.busselulleUI1.src = "./assets/Lussekatt.png"
        } else if (this.eatenBusselullar == 2) {
            this.game.ui.busselulleUI2.src = "./assets/Lussekatt.png"
        } else if (this.eatenBusselullar == 3) {
            this.game.ui.busselulleUI3.src = "./assets/Lussekatt.png"
        } else if (this.eatenBusselullar == 4) {
            this.game.ui.busselulleUI4.src = "./assets/Lussekatt.png"
        } else if (this.eatenBusselullar == 5) {
            this.game.ui.busselulleUI5.src = "./assets/Lussekatt.png"
        }

        if (this.game.input.keys.has("a") || this.game.input.keys.has("ArrowLeft")) {
            this.speedX -= this.acceleration
        } if (this.game.input.keys.has("d") || this.game.input.keys.has("ArrowRight")) {
            this.speedX += this.acceleration
        } if (this.game.input.keys.has("w") || this.game.input.keys.has("ArrowUp")) {
            this.speedY -= this.acceleration
        } if (this.game.input.keys.has("s") || this.game.input.keys.has("ArrowDown")) {
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

        if (!this.game.input.keys.has("d") && !this.game.input.keys.has("a") && !this.game.input.keys.has("ArrowLeft") && !this.game.input.keys.has("ArrowRight")) {
            this.speedX = 0
        }
        if (!this.game.input.keys.has("w") && !this.game.input.keys.has("s") && !this.game.input.keys.has("ArrowUp") && !this.game.input.keys.has("ArrowDown")) {
            this.speedY = 0
        }
        if (!this.game.input.keys.has("w") && !this.game.input.keys.has("s") && !this.game.input.keys.has("d") && !this.game.input.keys.has("a") && !this.game.input.keys.has("ArrowUp") && !this.game.input.keys.has("ArrowDown") && !this.game.input.keys.has("ArrowLeft") && !this.game.input.keys.has("ArrowRight")) {
            this.spriteX = 0
            this.interval = 20000000
        }

        if (this.x > this.game.enemy.x - this.width && this.x < this.game.enemy.x + this.game.enemy.width && this.y > this.game.enemy.y - this.height && this.y < this.game.enemy.y + this.game.enemy.height) {
            this.moveEnemy()
            this.hp -= 1
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

        this.game.bg.x -= this.speedX
        this.game.bg.y -= this.speedY

        //this.game.Walls.x -= this.speedX
        //this.game.Walls.y -= this.speedY

        this.game.enemy.x -= this.speedX
        this.game.enemy.y -= this.speedY

        this.game.wallsides1.x -= this.speedX
        this.game.wallsides1.y -= this.speedY

        this.game.walltopbottom1.x -= this.speedX
        this.game.walltopbottom1.y -= this.speedY

        this.game.busselulle1.x -= this.speedX
        this.game.busselulle1.y -= this.speedY
        this.game.busselulle2.x -= this.speedX
        this.game.busselulle2.y -= this.speedY
        this.game.busselulle3.x -= this.speedX
        this.game.busselulle3.y -= this.speedY
        this.game.busselulle4.x -= this.speedX
        this.game.busselulle4.y -= this.speedY
        this.game.busselulle5.x -= this.speedX
        this.game.busselulle5.y -= this.speedY
        this.game.busselulle6.x -= this.speedX
        this.game.busselulle6.y -= this.speedY
        this.game.busselulle7.x -= this.speedX
        this.game.busselulle7.y -= this.speedY
        this.game.busselulle8.x -= this.speedX
        this.game.busselulle8.y -= this.speedY
        this.game.busselulle9.x -= this.speedX
        this.game.busselulle9.y -= this.speedY

        this.game.äpple1.x -= this.speedX
        this.game.äpple1.y -= this.speedY

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

    moveEnemy() {
        this.game.enemy.x = this.game.bg.x + this.game.bg.width * this.random
        this.game.enemy.y = this.game.bg.y + this.game.bg.height * this.random
        this.game.enemy.speed -= 0.15
    }
}