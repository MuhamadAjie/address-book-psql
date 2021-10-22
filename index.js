const express = require("express");
const app = express()
const port = 3000;

app.use(express.urlencoded({ extended: false}))
app.use(express.json())


const db = require("./app/models")
db.sequelize.sync()

require('./app/routes/routes')(app)


app.listen(port, function () {
    console.log("sever running at port" + port)
})