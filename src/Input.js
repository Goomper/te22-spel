export default class Input {
    constructor(game) {
        this.game = game
        this.keys = new Set()
        this.mouseX = 0
        this.mouseY = 0

        window.addEventListener("keydown", (event) => {
            this.keys.add(event.key)
            console.log(event.key)
        })

        window.addEventListener("keyup", (event) => {
            this.keys.delete(event.key)
        })

        /*window.addEventListener("mousemove", (event) => {
            this.mouseX = event.movementX
            this.mouseY = event.movementY
            console.log("X:" + event.clientX)
            console.log("Y:" + event.clientY)
        })*/
    }
}