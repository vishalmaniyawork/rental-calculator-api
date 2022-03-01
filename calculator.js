var express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.params);
  res.header("Access-Control-Allow-Origin", "*");
  res.json("calculate");
});

module.exports = router;
