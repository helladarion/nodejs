const express = require("express");
const bodyParser = require("body-parser");
const knex = require("knex");

const db = knex({
  client: "mysql",
  connection: {
    host: "172.17.0.3",
    user: "root",
    database: "test",
  }
})

// GET /users get all users
// GET /users:id get single users
// POST /users create users
// PUT /users:id update users
// DELETE /users:id delete user

express()
  .use(bodyParser.json())
  .get("/users", (req, res, next) => {
    db("users").then((users) => {
      res.send(users)
    }, next)
  })
  .post("/users", (req, res, next) => {

    db("users")
    .insert(req.body)
    .then((userIds) => {
      res.send(userIds)
    }, next)
  })
  .get("/users/:id", (req, res, next) => {
    const { id } = req.params;

    db("users")
    .where("id", id)
    .first() // get only one data and doesn't use the array
    .then((users) => {
      if(!users) {
        return res.sendStatus(400);
      }
      res.send(users)
    }, next)
  })
  .put("/users/:id", (req, res, next) => {
    const { id } = req.params;

    db("users")
    .where("id", id)
    .update(req.body)
    .then((result) => {
      if(result === 0) {
        return res.sendStatus(400);
      }
      res.sendStatus(200)
    }, next)
  })
  .delete("/users/:id", (req, res, next) => {
    const { id } = req.params;

    db("users")
    .where("id", id)
    .delete()
    .then((result) => {
      if(result === 0) {
        return res.sendStatus(400);
      }
      res.sendStatus(200)
    }, next)
  })

  .listen(3000)
