// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

// Controllers
var SightingCtrl = require("./controllers/SightingCtrl");
var UserCtrl = require("./controllers/UserCtrl");
var BirdCtrl = require("./controllers/BirdCtrl");

// Mongo
var Schema = mongoose.Schema;
var mongoUri = "mongodb://localhost:27017/mini-birds-mongoose";
mongoose.set("debug", true); //logs stuff in terminal through node or nodemon
mongoose.connect(mongoUri);
mongoose.connection.once("open", function() {
  console.log("connected to mongoDB at " + port);
}); //once connection is made, invoke callback function


// Express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoints
app.post("/sighting", SightingCtrl.create); //don't have to invoke this since it's a method on an object
app.get("/sighting", SightingCtrl.read);
app.put("/sighting/:id", SightingCtrl.update);
app.delete("/sighting/:id", SightingCtrl.delete); //to delete, do /sighting/545439058439t734 not /sighting?id=483294890324

app.post("/user", UserCtrl.create);
app.get("/user", UserCtrl.read);
app.put("/user/:id", UserCtrl.update);
app.delete("/user/:id", UserCtrl.delete);

app.post("/bird", BirdCtrl.create);
app.get("/bird", BirdCtrl.read);
app.put("/bird/:id", BirdCtrl.update);
app.delete("/bird/:id", BirdCtrl.delete);



// Connections
var port = 8000;
app.listen(port, function() {
  console.log("listening on port " + port);
});

//test
// app.get("/", function(req, res) {
//   res.send("hello, this is a test");
// });
