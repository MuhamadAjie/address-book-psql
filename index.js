const express = require("express");
const app = express();
const port = 3000;
const pool = require("./app/config/config.js");
const router = require("./app/routes/routes.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const createContacts = `
  CREATE TABLE IF NOT EXISTS "Contacts"(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    phone_number VARCHAR(50) NOT NULL,
    email VARCHAR(20) NOT NULL
  )
`;

pool
  .query(createContacts)
  .then((data) => {
    console.log(data, "success create table contacts");
  })
  .catch((err) => {
    console.log(err, "Error create table contacts");
  });

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
