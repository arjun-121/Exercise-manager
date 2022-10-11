const router = require("express").Router();
let Register = require("../models/register.model");
const bcrypt = require("bcryptjs");


router.route("/login").post( async (req,res) => {
    try {
        const username = req.body.user;
        const password = req.body.pwd;

        const user = await Register.findOne({username : username});

        const isMatch = await bcrypt.compare(password , user.password);

        if(isMatch){
            res.status(201).send("Success");
        }
        else{
            res.status(500).send("Invalid login details");
        }
    }
    catch(err){
        res.status(400).send("Invalid login details");
    }




    // const user = Register.findOne({
    //     "username" : req.body.user
    // })
    // .then(data => {
    //     console.log("data found", + user);
    // })
    // .catch(err => {
    //     res.status(400).send('Some error occured' );
    //     console.log(err);
    // })
    // console.log( "User found  " + user);
    // const password = registeredUser.find(password = req.body.password);
//     if(user == null){
//         return res.status(400).send("Cannot find User");

//     }
//     try{
//         if(password === req.body.pwd){
//             res.status(200).send("Logged in successfully");
//         }
//         else{
//             res.status(400).send("Not found");
//         }


//     }
//     catch{
//         res.status(500).send("Invalid Credentials");
// }

});

module.exports = router;