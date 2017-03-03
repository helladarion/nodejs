const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const RedisStore = require('connect-redis')(session)
const passport = require("passport")
const authRoutes = require("./routes/auth")
const postRoutes = require("./routes/posts")
const cache = require("./cache")
const db = require("./db")
require("./passport")

express()
  .set("view engine", "hjs")
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use(session({
    store: new RedisStore(),
    secret: "i love dogs",
    resave: false,
    saveUninitialized: false
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use(authRoutes)
  .use(postRoutes)
  .get("/", cache.route({expire: 5, prefix: "home"}), (req, res, next) => {
    setTimeout(() => {
      const headlines = [
        "Fuschia is the new Black",
        "what will the Pacific Ocean do Next?",
        "Wall Street to Build Even More Walls",
      ];

      res.render("headlines", {headlines: headlines})
    }, 2000)
    /*
    res.send({
      session: req.session,
      user: req.user,
      authenticated: req.isAuthenticated(),
    })*/
  })
  .listen(3000)
