class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newArea) {
        this.radius = newArea / 2
    }

    get circumference() {
        return Math.PI * (this.radius * 2)
    }

    set circumference(newArea) {
        this.radius = (newArea / 2) / Math.PI
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea)
    }


}