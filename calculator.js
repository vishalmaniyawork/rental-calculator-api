var express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query);
  res.header("Access-Control-Allow-Origin", "*");
  res.json("calculate");
});

module.exports = router;
