const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const env = require("dotenv").config();
const route = require("./routes/route");
const { dbConnection } = require("./database/db");
const url = process.env.dbConnection;
const port = process.env.port;
const app = express();

app.use(bodyParser.json());
app.use(multer().any());
app.use(bodyParser.urlencoded({ extended: true }));

dbConnection(url);
app.use("/", route);

app.listen(port || 3001, () => {
  console.log("server start");
});
