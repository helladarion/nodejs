var _ = require("lodash");
var axios = require("axios");


axios.get("http://rest.learncode.academy/api/myuser/friends").then((res) => {
	var jake = _.find(res.data, {name: "Jake"});
	// console.log(res.data);
	console.log(jake);
});
console.log(_.snakeCase("someValue"));









//====================================================================
// var fs = require("fs");

// Read a file
// var m = fs.readFileSync("./class3.js", "utf-8");
// console.log(m);

// Write a file
// fs.writeFileSync("./test.txt", "Hello World");