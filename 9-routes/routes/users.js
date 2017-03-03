const express = require("express");
const router = express.Router();


router
.get("/", (req, res) => {
	res.send(users);
})
.get("/:id", (req, res) => {
	const { id } = req.params;
	const user = users.find(user => user.id == id);
	if (user) {
		res.send(user);
	} else {
		res.status(404).send(`User ${id} does not exist`);
	}
})
.delete("/:id", (req, res) => {
	const { id } = req.params;
	const index = users.findIndex(user => user.id == id);

	if(index > -1) {
		users.splice(index, 1);
		res.sendStatus(200);
	} else {
		res.status(404).send(`User ${id} does not exist`)
	}
})

module.exports = router;

var users = [{
  "id": 1,
  "first_name": "Timothy",
  "last_name": "Snyder",
  "email": "tsnyder0@flickr.com",
  "gender": "Male",
  "ip_address": "149.125.167.185"
}, {
  "id": 2,
  "first_name": "Wayne",
  "last_name": "Warren",
  "email": "wwarren1@squidoo.com",
  "gender": "Male",
  "ip_address": "30.91.192.185"
}, {
  "id": 3,
  "first_name": "Victor",
  "last_name": "Moreno",
  "email": "vmoreno2@live.com",
  "gender": "Male",
  "ip_address": "59.112.44.147"
}, {
  "id": 4,
  "first_name": "Joan",
  "last_name": "Burns",
  "email": "jburns3@cmu.edu",
  "gender": "Female",
  "ip_address": "230.106.213.53"
}, {
  "id": 5,
  "first_name": "Steven",
  "last_name": "Johnson",
  "email": "sjohnson4@360.cn",
  "gender": "Male",
  "ip_address": "238.30.59.28"
}, {
  "id": 6,
  "first_name": "Barbara",
  "last_name": "James",
  "email": "bjames5@wikia.com",
  "gender": "Female",
  "ip_address": "62.75.44.61"
}, {
  "id": 7,
  "first_name": "Sarah",
  "last_name": "Woods",
  "email": "swoods6@liveinternet.ru",
  "gender": "Female",
  "ip_address": "40.240.238.19"
}, {
  "id": 8,
  "first_name": "Jeffrey",
  "last_name": "Simmons",
  "email": "jsimmons7@phpbb.com",
  "gender": "Male",
  "ip_address": "27.77.95.134"
}, {
  "id": 9,
  "first_name": "Terry",
  "last_name": "Evans",
  "email": "tevans8@state.gov",
  "gender": "Male",
  "ip_address": "222.253.26.114"
}, {
  "id": 10,
  "first_name": "Kenneth",
  "last_name": "Rose",
  "email": "krose9@123-reg.co.uk",
  "gender": "Male",
  "ip_address": "62.91.71.13"
}, {
  "id": 11,
  "first_name": "Andrew",
  "last_name": "King",
  "email": "akinga@smh.com.au",
  "gender": "Male",
  "ip_address": "208.26.187.185"
}, {
  "id": 12,
  "first_name": "Sean",
  "last_name": "Castillo",
  "email": "scastillob@xrea.com",
  "gender": "Male",
  "ip_address": "243.171.185.169"
}, {
  "id": 13,
  "first_name": "Todd",
  "last_name": "Garza",
  "email": "tgarzac@oracle.com",
  "gender": "Male",
  "ip_address": "134.98.69.115"
}, {
  "id": 14,
  "first_name": "Jacqueline",
  "last_name": "Welch",
  "email": "jwelchd@google.co.jp",
  "gender": "Female",
  "ip_address": "24.31.49.145"
}, {
  "id": 15,
  "first_name": "Roger",
  "last_name": "Ramirez",
  "email": "rramireze@soup.io",
  "gender": "Male",
  "ip_address": "179.207.117.17"
}, {
  "id": 16,
  "first_name": "Albert",
  "last_name": "Rivera",
  "email": "ariveraf@prnewswire.com",
  "gender": "Male",
  "ip_address": "253.253.215.211"
}, {
  "id": 17,
  "first_name": "Stephen",
  "last_name": "Bishop",
  "email": "sbishopg@constantcontact.com",
  "gender": "Male",
  "ip_address": "13.11.15.174"
}, {
  "id": 18,
  "first_name": "Evelyn",
  "last_name": "Ramos",
  "email": "eramosh@dion.ne.jp",
  "gender": "Female",
  "ip_address": "147.39.109.108"
}, {
  "id": 19,
  "first_name": "Marilyn",
  "last_name": "Ramos",
  "email": "mramosi@tmall.com",
  "gender": "Female",
  "ip_address": "61.178.152.226"
}, {
  "id": 20,
  "first_name": "Nancy",
  "last_name": "Long",
  "email": "nlongj@google.com",
  "gender": "Female",
  "ip_address": "191.22.123.252"
}]
