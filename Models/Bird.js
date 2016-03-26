var mongoose = require("mongoose");

var birdModel = new mongoose.Schema({
  name: { type: String, lowercase: true },
  order: { type: String, maxlength: 20  },
  status: {
    type: String,
    lowercase: true,
    enum: [
      "least concern",
      "extinct",
      "near threatened"
    ]
  }
});

module.exports = mongoose.model("Birds", birdModel);
