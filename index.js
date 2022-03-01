var express = require("express");
var app = express();
const calculator = require("./calculator");
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/calculate", calculator);

app.listen(8080, () => {
  console.log("Hello World!");
});
