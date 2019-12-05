class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.diameter = this.radius * 2;
    }

    set diameter(diameterValue) {
        this.radius = diameterValue / 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    set circumference(circumferenceValue) {
        this.diameter = circumferenceValue / Math.PI
    }

    get area() {
        return this.radius ** 2 * Math.PI
    }


    // Extra - just to see if I could do it
    set area(areaValue) {
        this.radius = Math.sqrt((areaValue / Math.PI))
    }

    // Test for area setter:
    // c = new Circle(5);
    // c.radius 
        // => 5
    // c.area 
        // => 78.53981633974483
    // testArea = 6 ** 2 * Math.PI 
        // => 113.09733552923255
    // c.area = testArea 
        // => 113.09733552923255
    // c.radius 
        // => 6
}