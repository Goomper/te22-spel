import Interactable from "./Interactable";

export default class busselulle extends Interactable {
    constructor(x, y, width, height, player, game) {
        super(x, y, width, height, player, game)
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.player = player
        this.game = game

        this.taken = false

        this.img = new Image()
        this.img.src = "./public/assets/Lussekatt.png"
    }

    eat() {
        this.img.src = ""
    }

    update(deltaTime) {
        if (this.player.x + this.player.width > this.x && this.game.player.x < this.x + this.width && this.player.y + this.player.height > this.y && this.game.player.y < this.y + this.height && this.game.input.keys.has("e") && this.taken == false && this.player.currentEatCooldown > this.player.eatCooldown) {
            this.player.currentEatCooldown = 0
            this.player.eatenBusselullar += 1
            console.log(this.player.eatenBusselullar)
            this.taken = true
            this.eat();
        }
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}