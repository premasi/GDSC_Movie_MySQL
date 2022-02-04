const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {registerValidation, loginValidation} = require ('../validation');

//register
router.post('/register', async(req, res) => {

    //validate the data
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    

    //check data
    const nameExist = await User.findOne({name: req.body.name});
    if(nameExist) return res.status(400).send('Username already taken');

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt); 

    //create new user
    const user = new User({
        name: req.body.name,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

//login
router.post('/login', async(req, res) => {

    //validate the data
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //check data username
    const user = await User.findOne({name: req.body.name});
    if(!user) return res.status(400).send('Username is wrong');

    //check data password
    const passExist = await bcrypt.compare(req.body.password, user.password);
    if(!passExist) return res.status(400).send('Password is wrong');

    res.send('Success');

})

module.exports = router;