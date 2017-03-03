const knex = require("knex");

const db = knex({
  client: "mysql",
  connection: {
    host: "172.17.0.3",
    user: "root",
    database: "test",
  }
})

module.exports = db;
