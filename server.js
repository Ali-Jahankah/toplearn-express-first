const express = require("express");
const homeRoutes = require("./routes/home");
const adminRoutes = require("./routes/admin");
const bodyParser = require("body-parser");
const rootDir = require("./utils/paths");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/home", homeRoutes);
app.use(adminRoutes);
app.get("/form", (req, res) => {
  res.sendFile(path.join(rootDir, "pages", "form.html"));
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "pages", "home.html"));
});
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "pages", "404.html"));
});
app.listen(4000, () => console.log(`App is running on ${PORT}`));
