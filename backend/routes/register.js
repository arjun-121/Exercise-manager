const router = require("express").Router();
let Register = require("../models/register.model");

const controller = require("../controllers/RegisterController");

// router.route("/register").post(controller.post);

router.route("/").post((req, res) => {
  // console.log(req.body);
  // res.send({ username: "Arjun", password: "1234" });
  // console.log(req.body.username);
  const username = req.body.username;
  const password = req.body.password;
  const newRegister = new Register({ username, password });

  newRegister
    .save()
    .then(() => res.json("User registered!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
