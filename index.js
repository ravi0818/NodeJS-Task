const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const age = Number(req.body.age);
  res.send("Your age in Dog years is: " + age/15 + " Dog years");
});
app.listen(port);