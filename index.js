// initate express module
const express = require("express");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
const config = require("./config/config");
