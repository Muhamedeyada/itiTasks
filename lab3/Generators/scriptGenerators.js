function* fibonacciSeries(count) {
  let previous = 0;
  let current = 1;

  for (let i = 0; i < count; i++) {
    yield previous;
    let next = previous + current;
    previous = current;
    current = next;
  }
}

var count = 7;
var it = fibonacciSeries(count);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
function* fibonacciSeries2(maxNumber) {
  let previous = 0;
  let current = 1;

  while (previous <= maxNumber) {
    yield previous;
    let next = previous + current;
    previous = current;
    current = next;
  }
}
var maxNumber = 90;
var fibMax = fibonacciSeries2(maxNumber);
for (let number of fibMax) {
  console.log(number);
}
