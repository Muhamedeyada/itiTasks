import shape from "./shape.js";

export default class rectangle extends shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}
