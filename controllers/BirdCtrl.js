var Bird = require("../Models/Bird");

module.exports = {

  create: function(req, res) {
    var newBird = new Bird(req.body);
    newBird.save(function(err,result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  read: function(req, res) {
    console.log("req.query: " + req.query);
    Bird.find(req.query).exec(function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  update: function(req, res) {
    Bird.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  delete: function(req, res) {
    Bird.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result)
      }
    });
  }

};
