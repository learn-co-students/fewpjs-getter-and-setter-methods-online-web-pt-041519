class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(diameter) {
        if (diameter > 0) {
            this.radius = diameter / 2
        } else {
            console.warn("Diameter cannot be less than 0");
        }
    }

    set circumference(circumference) {
        if (circumference > 0) {
            this.radius = circumference / Math.PI / 2
        } else {
            console.warn("Circumference cannot be less than 0");
        }
    }

    set area(area) {
        if (area > 0) {
            this.radius = area / 2
        } else {
            console.warn("Area cannot be less than 0");
        }
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }
}