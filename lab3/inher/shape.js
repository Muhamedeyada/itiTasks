export default class shape {
  constructor(name) {
    this.name = name;
  }

  area() {
    return 0;
  }
  perimeter() {
    return 0;
  }
  toString() {
    console.log(
      `Shape name : ${
        this.name
      }, Area: ${this.area()}, Perimeter: ${this.perimeter()}`
    );
  }
}
