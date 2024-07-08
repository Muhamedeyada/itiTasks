import shape from "./shape.js";

export default class square extends shape {
  constructor(sideLength) {
    super("square");
    this.sideLength = sideLength;
  }

  area() {
    return this.sideLength * this.sideLength;
  }
  perimeter() {
    return 4 * this.sideLength;
  }
}
