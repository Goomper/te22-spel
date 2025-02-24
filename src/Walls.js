import WallsImg from "/assets/Väggar.png"

export default class Walls {
    constructor(game, width, height) {
        this.game = game
        this.width = width
        this.height = height
        this.x = 0
        this.y = 0

        this.img = new Image()
        this.img.src = WallsImg

        //this.imgdata = new ImageData(20, 20, 20, 20)

        this.imgdatad = false
    }

    update(deltaTime) {

    //ctx.getImageData(20,20,20,20)
        /*
        const arr = new Uint8ClampedArray(40_000)

        for (let i=0;i<arr.length; i+=4) {
            arr[i + 0] = 250
            arr[i + 1]
            arr[i + 2]
            arr[i + 3] = 255
        }

        let imageData = new ImageData(arr, 200)

        if (this.imgdatad == false) {
            this.imgdatad = true
            console.log(imageData)
        }
            */
        
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.width, this.height)
    }
}