var User = require("../Models/User");

module.exports = {

  create: function(req, res) {
    var newUserDocument = new User(req.body);
    newUserDocument.save(function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  read: function(req, res) { //instructions want ability to query by specific user, bird name, or if sighting is confirmed or not
    User.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  update: function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }

};
