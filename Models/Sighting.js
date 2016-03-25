var mongoose = require("mongoose");

var sightingModel = new mongoose.Schema ({
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
  },
  confirmed: { type: Boolean, default: false },
  numberSeen: { type: Number, min: 1 }
});

//double check on what this name actually relates to
module.exports = mongoose.model("Sightings", sightingModel);
//"Sighting" should be the name that the collection is - look in Robomongo
//but for some reason, mine isn't
//preivously was Sighting, but made it plural because it's a collection
