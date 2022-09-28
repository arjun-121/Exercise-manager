const router = require('express').Router();
let User = require('../models/user.model');

const controller = require('../controllers/UserController');

router.route('/').get(controller.get);

router.route('/add').post((req,res) => {
    const username  = req.body.username;
    const newUser = new User({username});

    newUser
    .save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;