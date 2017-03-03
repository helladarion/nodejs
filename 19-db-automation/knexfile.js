module.exports = {
    development: {
      client: "mysql",
      connection: {
        host: "172.17.0.3",
        user: "root",
        database: "test",
      }
    },
    production: {
      client: "mysql",
      connection: {
        host: "172.17.0.3",
        user: "production",
        database: "test",
      }
    }

}
