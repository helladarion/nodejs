var math = require("./math");
// console.log(math);
//console.log(process.env.A);
//console.log(process.argv); values passed after node app 4 5



// console.log(module)
var command = process.argv[2];
var a = Number(process.argv[3]);
var b = Number(process.argv[4]);

var value = math[command](a, b);

console.log(value);