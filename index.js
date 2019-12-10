// Add your Circle class here

const pi = Math.PI;

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(value){
        this.radius = value / 2;
    }

    get circumference(){
        return pi * this.diameter;
    }

    set circumference(value){
        this.radius = value / pi / 2;
    }

    get area(){
        return pi * (this.radius ** 2);
    }

    set area(value){
        this.radius = sqrt(value / pi); 
    }


}