class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius*2
    }

    get circumference(){
        return this.diameter*Math.PI
    }

    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }

    set diameter(newDiameter)
    {
        this.radius = newDiameter/2
    }

    set circumference(newCirc)
    {
        this.radius = newCirc/(Math.PI*2)
    }
}