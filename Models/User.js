var mongoose = require("mongoose");

var userModel = new mongoose.Schema({
  email: String,
  username: String,
  level: Number,
  location: String,
  Member: Number
});
