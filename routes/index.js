const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("I m here again12");
});

module.exports = router;
