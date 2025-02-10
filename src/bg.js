export default class bg {
    constructor(game, width, height) {
        this.game = game
        this.width = width
        this.height = height
        this.x = 0
        this.y = 0

        this.img = new Image()
        this.img.src = "./assets/Map.png"

        /*
        this.wall1.x = 61
        this.wall1.y = 62
        this.wall1.width = 58
        this.wall1.height = 49

        this.wall2.x = 114
        this.wall2.y = 43
        this.wall2.width = 251
        this.wall2.height = 49

        this.wall3.x = 360
        this.wall3.y = 81
        this.wall3.width = 113
        this.wall3.height = 49

        this.wall4.x = 468
        this.wall4.y = 31
        this.wall4.width = 391
        this.wall4.height = 49

        this.wall5.x = 854
        this.wall5.y = 81
        this.wall5.width = 23
        this.wall5.height = 65

        this.wall6.x = 872
        this.wall6.y = 43
        this.wall6.width = 203
        this.wall6.height = 49

        this.wall7.x = 1070
        this.wall7.y = 93
        this.wall7.width = 5
        this.wall7.height = 265

        this.wall8.x = 61
        this.wall8.y = 62
        this.wall8.width = 5
        this.wall8.height = 181

        this.wall8.x = 120
        this.wall8.y = 194
        this.wall8.width = 5
        this.wall8.height = 95

        this.wall9.x = 67
        this.wall9.y = 240
        this.wall9.width = 111
        this.wall9.height = 49

        this.wall10.x = 67
        this.wall10.y = 240
        this.wall10.width = 5
        this.wall10.height = 162

        this.wall11.x = 147
        this.wall11.y = 328
        this.wall11.width = 52
        this.wall11.height = 49

        this.wall12.x = 147
        this.wall12.y = 328
        this.wall12.width = 5
        this.wall12.height = 123

        this.wall13.x = 50
        this.wall13.y = 402
        this.wall13.width = 102
        this.wall13.height = 49

        this.wall14.x = 50
        this.wall14.y = 402
        this.wall14.width = 5
        this.wall14.height = 252

        this.wall15.x = 50
        this.wall15.y = 605
        this.wall15.width = 108
        this.wall15.height = 49
        */
       
    }

    update(deltaTime) {
        //console.log(imgData)
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}