var Sighting = require("../Models/Sighting");
// use CRUD model to create method names
module.exports = {
  create: function(req, res) {
    var newSighting = new Sighting(req.body);
    newSighting.save(function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  read: function(req, res) {
    Sighting.find(req.query).exec(function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result)
      }
    });
  },
  update: function(req, res) { //why not query right below, why use params? BECAUSE we used "/sighting/:id" as the route on index.js!
    //how do we have access to params again??
    Sighting.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },
  delete: function(req, res) {
    Sighting.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  }
};
