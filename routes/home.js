const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is the root path for Home m/");
});
router.get("/home-sub-1", (req, res) => {
  res.send("This is home sub 1");
});

module.exports = router;
