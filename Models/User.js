var mongoose = require("mongoose");

var userModel = new mongoose.Schema({
  email: String,
  username: String,
  level: Number,
  location: String,
  Member: Number
});

userModel.pre("save", function(next) { //fires BEFORE a user is saved
  var user = this;
  user.updatedAt = new Date();
  next();
});

module.exports = mongoose.model("Users", userModel);
