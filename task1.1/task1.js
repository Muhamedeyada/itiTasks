/*
var rectangle = {
  this.width = width;
  this.height = height;
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
  displayInfo: function () {
    return (
      "width:" +
      this.width +
      " " +
      " height:" +
      this.height +
      "area:" +
      this.area() +
      " perimeter:" +
      this.perimeter()
    );
  },
};
console.log(rectangle.displayInfo());*/

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function () {
  return this.width * this.height;
};
Rectangle.prototype.preimeter = function () {
  return 2 * (this.width + this.height);
};
var rec = new Rectangle(5, 5);

console.log(rec.area());
console.log(rec.preimeter());
console.log(Rectangle());
