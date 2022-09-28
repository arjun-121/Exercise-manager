let Exercise = require("../models/exercise.model");

module.exports = {
  get: (req, res) => {
    Exercise.find({isDeleted : false})
      .then((exercises) => res.json(exercises))
      .catch((err) => res.status(400).json("Error: " + err));
  },
};


