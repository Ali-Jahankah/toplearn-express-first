const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/test", (req, res, next) => {
  res.send("Hello Satan");
});

app.use("/", (req, res, next) => {
  console.log("First Middleware...");
  res.send("Home Page");
});

app.listen(4000, () => console.log(`App is running on ${PORT}`));
