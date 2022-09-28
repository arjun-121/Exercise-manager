let User = require("../models/user.model");

module.exports = {
  get: (req, res) => {
    // console.log(req.headers.username);
    const userValue = req.headers.username;
    // const pattern = new RegExp(`/^${userValue}/`);

    User.find({
      username: { $regex: `(\^${userValue})`, $options: "i" },
    })
      // User.find({ username: { $regex: pattern, $options: "i" } }, {})
      .then((exercises) => res.json(exercises))
      .catch((err) => res.json("Error: " + err));
  },

  post: (req, res) => {
    const username = req.body.username;

    const newUser = new User(username);

    newUser
      .save()
      .then(() => res.json("User added!"))
      .catch((err) => res.status(400).json("Error " + err));
  },
};
