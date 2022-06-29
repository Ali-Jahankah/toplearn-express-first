const express = require("express");
const homeRoutes = require("./routes/home");
const adminRoutes = require("./routes/admin");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/home", homeRoutes);
app.use(adminRoutes);

app.get("/form", (req, res) => {
  res.send(
    "<form action='info' method='POST'><input type='text' name='info'><button type='submit'>Send</button></form>"
  );
});

app.use("/", (req, res, next) => {
  console.log("First Middleware...");
  res.send("Home Page");
});

app.listen(4000, () => console.log(`App is running on ${PORT}`));
