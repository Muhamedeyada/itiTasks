var obj = {
  id: "29610300",
  location: "PortSaid",
  age: "26",
  getSetGen: function () {
    var caller = this; //should create caller to avoid loop this this in get recursive
    for (var key in caller) {
      if (typeof caller[key] !== "function" && !caller[`get${key}`]) {
        (function (key) {
          //closure  to save to capture the correct value of the key.
          Object.defineProperty(caller, `get${key}`, {
            value: function () {
              return caller[key];
            },
            enumerable: false,
          });
          Object.defineProperty(caller, `set${key}`, {
            value: function (newValue) {
              caller[key] = newValue;
            },
            enumerable: false,
          });
        })(key);
      }
    }
  },
};
console.log(obj);

obj.getSetGen();
console.log(obj);

console.log(obj.getage());
console.log(obj.getid());
obj.setid("SD-20");
console.log(obj.getid());

var obj2 = {
  salary: 2000,
  address: "portfouad",
};
obj.getSetGen.call(obj2);

console.log(obj2.getsalary());
obj2.setsalary(2500);
console.log(obj2.getsalary());
console.log(obj2.getaddress());
obj2.setaddress("new address");
console.log(obj2.getaddress());
