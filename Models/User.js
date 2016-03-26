var mongoose = require("mongoose");

var userModel = new mongoose.Schema({
  email: String,
  username: String,
  level: Number,
  location: String,
  member: { type: Boolean, default: false },
  updatedAt: Date
});

userModel.pre("save", function(next) { //hook that fires BEFORE a user is saved
  var user = this;
  user.updatedAt = new Date();
  next();
});

module.exports = mongoose.model("Users", userModel);
