// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    //diameter, circumference and area
    get diameter(){
        //Diameter = radius • 2
        return  this.radius * 2; 
    }

    get circumference(){
        return Math.PI * this.diameter 
    }

    get area(){
        //Area = π • radius2
        return Math.PI * this.radius ** 2
    }

    set diameter(input) {
        this.radius = input / 2
      }

    set circumference( input ) {
        this.radius = input / ( Math.PI * 2 )
    }

    get area() {
        return Math.PI * ( this.radius * this.radius )
    }
}