const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "12345whoami",
  database: "belajarExp",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
