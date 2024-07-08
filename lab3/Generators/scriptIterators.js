var obj = {
  name: "menna",
  age: 25,
  salary: 2000,
};
// function objIterator() {
//   var keys = Object.keys(this); //["name","age"]
//   var c = -1;
//   return {
//     next: () => {
//       c += 1;
//       if (c < keys.length) {
//         return {
//           value: [keys[c], this[keys[c]]],
//           done: false,
//         };
//       } else {
//         return {
//           value: undefined,
//           done: true,
//         };
//       }
//     },
//   };
// }
function* objIterator() {
  var keys = Object.keys(this);
  for (let key in this) {
    yield [key, this[key]];
  }
}
obj[Symbol.iterator] = objIterator;
console.log(...obj);
for (const [key, value] of obj) {
  console.log(`Property '${key}' has value '${value}'`);
}
