var express = require("express");

// fortunes words
var fortunes = [
  "You will pass away very quickly.",
  "Patch griefs with proverbs.",
  "Don't you wish you had more energy... or less ambition?",
  "You enjoy the company of other people.",
  "Your true value depends entirely on what you are compared with.",
];

var app = express();

// set view engine
var handlebars = require("express3-handlebars").create({
  defaultLayout: "main",
});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

// set port
app.set("port", process.env.PORT || 3000);

// static file
app.use(express.static(__dirname + "/public"));

// Routes
app.get("/", function (req, res) {
  res.render("home");
});
app.get("/about", function (req, res) {
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render("about", { fortune: randomFortune });
});
app.get("/setu", function (req, res) {
  res.render("setu");
});

// 404 Pages
app.use(function (req, res) {
  res.status(404);
  res.render("404");
});

// 500 Pages
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render("500");
});

// start listen
app.listen(app.get("port"), function () {
  console.log(
    "Express started on http://localhost:" +
      app.get("port") +
      "; Press Ctrl+C to terminate."
  );
});
