const router = require("express").Router();
let Register = require("../models/register.model");
const bcrypt = require("bcryptjs");


// const controller = require("../controllers/RegisterController");

// router.route("/register").post(controller.post);

router.route("/").post( async (req, res) => {
  
  const username = req.body.username;
  // const password = req.body.password;
  const hashedPwd =  await bcrypt.hash(req.body.password , 10);
  // hashedPwd = JSON.stringify(hashedPwd);
  const newRegister = new Register({ username, password : hashedPwd });

  newRegister
    .save()
    .then(() => res.json("User registered!"))
    .catch((err) => res.status(400).json("Error: " + err),
    console.log(err)
    );
  
});

module.exports = router;
