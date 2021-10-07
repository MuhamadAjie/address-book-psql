const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "eca82013",
  database: "db_contacts",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
