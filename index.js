var express = require("express");
var app = express();
const calculator = require("./calculator");
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/calculate", calculator);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Hello World!");
});
