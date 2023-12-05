const express = require('express');
const router = express.Router();
const User = require('../model/userModel');

router.post('/', async (req, res) => {
    const { name, email, phone, gender, dob, country, password } = req.body;
    let foundUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (foundUser) {
        res.status(300).render('signup', { message: 'username already exists' })
    }
    else {
        //save every fuking thing.Ok sir!
        const newUser = new User({
            password: password,
            name: name,
            phone: phone,
            email: email,
            dob: dob,
            gender: gender,
            country: country
        });
        newUser.save();
        res.status(200).render('login')
    }
})

module.exports = router;