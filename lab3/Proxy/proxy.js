var obj = {
  name: "eyada",
  address: "portSaid-portFoaud-25A",
  age: 26,
};
var handler = {
  get: function (target, prop, pro) {
    if (!(prop in target)) {
      throw "this property name is not exist";
    }

    return target[prop];
  },
  set: function (target, prop, val, pro) {
    if (!(prop in target)) {
      throw "this property name is not exist";
    }
    if (prop == "name") {
      if (val.length !== 7 || typeof val !== "string") throw "error of name";
    }
    if (prop === "address") {
      if (typeof value !== "string") {
        throw " error of address";
      }
    }
    if (prop === "age") {
      if (typeof val !== "number" || val < 25 || val > 60) {
        throw "error in age ";
      }
    }
    target[prop] = val;
  },
};
var prox = new Proxy(obj, handler);
console.log(prox.name);
console.log(prox.address);
console.log(prox.age);
//////////////////////////////////

// prox.name = 7;
// prox.name = "asdfsdfgnger";
console.log(prox.name);

// prox.address = 534535;
console.log(prox.address);
prox.age = 55;
console.log(prox.age);
