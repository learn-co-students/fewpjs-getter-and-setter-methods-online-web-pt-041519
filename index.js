class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter(){
    return 2 * this.radius
  }

  // Set radius based on entered diameter
  set diameter(newD) {
    this.radius = newD / 2
  }

  get circumference(){
    return Math.PI * this.diameter
  }

  // Set radius based on entered circumference
  set circumference(newC) {
    this.radius = (newC / Math.PI) / 2
  }

  get area(){
    return  Math.PI * this.radius ** 2 
  }

  // Set radius based on entered area
  set area(newA) {
    this.radius = sqrt(newA / Math.PI)
  }
}