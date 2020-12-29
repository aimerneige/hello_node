// require
var express = require("express");

// a express app
var app = express();

// set port
app.set("port", process.env.PORT || 3000);

// Routes
app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('Please give arg');
});
app.get('/about', function(req, res) {
  res.type('text/plain');
  res.send('Simple API build with node and express by AimerNeige For Learning');
});

// 404 Error
app.use(function (req, res) {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

// 500 Error
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server Error");
});

// start listen
app.listen(app.get("port"), function () {
  console.log(
    "Server started on http://localhost:" +
      app.get("port") +
      "; Press Ctrl+C to terminate."
  );
});
