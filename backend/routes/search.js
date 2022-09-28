const router = require("express").Router();

let Exercise = require("../models/exercise.model");
let User = require("../models/user.model");

router.route("/:key").get((req, res) => {
  console.log(req.params.key);
});

module.exports = router;
