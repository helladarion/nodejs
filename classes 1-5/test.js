var assert = require("assert");
var math = require("./math");

// console.log(math.add(3, 4))
assert(math.add(3, 4) === 7);

assert(math.subtract(3, 4) === -1);

assert(math.multiply(3, 4) === 12);



console.log("all tests passed!");