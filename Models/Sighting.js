var mongoose = require("mongoose");
var birdModel = require("./Bird");

//or could do
//var Schema = mongoose.Schema;
//new Schema ({
//type: Schema.Types.ObjectId

var sightingModel = new mongoose.Schema ({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" }, //don't have to require User.js to access this
  bird: [birdModel], //this is embedded, while user is referential
  confirmed: { type: Boolean, default: false },
  numberSeen: { type: Number, min: 1 }
});

//double check on what this name actually relates to
module.exports = mongoose.model("Sightings", sightingModel);
//"Sighting" should be the name that the collection is - look in Robomongo
//but for some reason, mine isn't
//preivously was Sighting, but made it plural because it's a collection
