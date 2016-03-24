// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

// Mongo
var Schema = mongoose.Schema;

// Express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connection
var port = 8000;
app.listen(port, function() {
  console.log("listening on port " + port);
});

// Create
//test
app.get("/", function(req, res) {
  res.send("hello, this is a test");
});
