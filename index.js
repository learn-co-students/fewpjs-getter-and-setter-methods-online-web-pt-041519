// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
        return Math.PI * (this.radius ** 2)
    }

    // All instances should also be able to set this.radius by setting 
    // a value to diameter, circumference, or area.
    // set radius(radius) {
    //     this.radius = radius
    // }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    set circumference(newCircumference) {
        this.radius = (newCircumference / Math.PI) / 2
    }



}