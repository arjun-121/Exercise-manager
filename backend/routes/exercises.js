const router = require("express").Router();
let Exercise = require("../models/exercise.model");

const controller = require("../controllers/ExerciseController");

// router.route("/").get((req, res) => {
//   Exercise.find()
//     .then((exercises) => res.json(exercises))
//     .catch((err) => res.status(400).json("Error: " + err));
// });
router.route("/").get(controller.get);

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const isDeleted = false;

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
    isDeleted,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.route('/search/name/:val').get((req,res) => {
//     // Exercise.findById(req.params.val)
//     res.send('Search Done');
// })

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.isDeleted = Boolean(true);
      exercise
        .save()
        .then(() => res.json("Exercise deleted!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
