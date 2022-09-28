let Register = require("../models/register.model");

module.exports = {
  post: (req, res) => {
    //     res.send({"username" : "Arjun",
    // "password" : "1234"})
    const username = req.headers.get("username");
    const password = req.headers.get("password");
    const newRegister = new Register({ username, password });
    // console.log(req.headers.username);

    newRegister
      .save()
      .then(() => res.json("User added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  },
};
