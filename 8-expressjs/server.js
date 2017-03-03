const express = require("express");

const app = express();

// app.get("/", (req, res) => {
// 	res.send("Hello World");
// })

// app.get("/profile", (req, res) => {
// 	var profile = {
// 		name: "Rafael"
// 	}
// 	res.send(profile);
// })
app
	.use((req, res, next) => {
		var profile = {name: "Rafa"};
		req.profile = profile;
		next();
	})

	.get("/", (req, res) => {
		res.send("Hello World");
	})
	.get("/profile", (req, res) => {
		var profile = {
			name: "Rafael"
		}
		res.send(req.profile);
	})

app.listen(3000);