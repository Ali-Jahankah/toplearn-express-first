const express = require("express");

const router = express.Router();
const fs = require("fs");

router.post("/info", (req, res) => {
  const mes = req.body.info;
  console.log(req.body);
  fs.writeFile("./data/info.txt", mes, (er) => {
    if (er) {
      throw er;
    }
    res.redirect("/");
  });
});

module.exports = router;
