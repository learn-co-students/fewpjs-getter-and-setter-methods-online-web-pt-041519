// Add your Circle class here
const pi = Math.PI

class Circle {

  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }
  
  get circumference() {
    return 2 * pi * this.radius;
  }

  get area() {
    return (this.radius ** 2) * pi;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  set circumference(value) {
    this.radius = value / (pi * 2);
  }
  
}