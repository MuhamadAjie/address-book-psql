// initate express module
const express = require("express");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = require("./app/config/config");

const createContact = `
CREATE TABLE IF NOT EXISTS "Contacts"(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(50)
  )
`;
pool
  .query(createContact)
  .then((data) => {
    console.log(data, "success create table contact");
  })
  .catch((err) => {
    console.log(err, "error create table contact");
  });

// Connect to route
const route = require("./app/routes/routes");
app.use(route);

// PORT
const PORT = 3000;

// Listen from PORT
app.listen(PORT, () => {
  console.log(`Listening app from PORT `, PORT);
});

// Send respond to localhost:PORT
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// Connect to config
const config = require("./app/config/config");
