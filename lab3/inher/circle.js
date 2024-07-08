import shape from "./shape.js";

export default class circle extends shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}
