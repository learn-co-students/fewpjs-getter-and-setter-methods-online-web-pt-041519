class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
        return Math.PI * this.radius**2
    }

   set diameter(number) {
        this.radius = number/2
   }

   set circumference(number) {
       this.radius = (number/Math.PI)/2
   }

   set area(number) {
        this.radius = Math.sqrt(number/this.pi)
   }


}