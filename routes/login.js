const express = require('express');
const router = express.Router();
const User = require('../model/userModel')

router.post('/', async (req, res) => {
    const { userInput, password } = req.body;
    try {
        let user;
        const isPhoneNumber = /^\d+$/.test(userInput);
        if (isPhoneNumber) {
            user = await User.findOne({ phone: userInput });
        }
        else {
            user = await User.findOne({ email: userInput });
        }

        if (!user) {
            return res.render('login', { message: 'invalid user' })
        }
        if (user.password !== password) {
            return res.render('login', { message: 'invalid password' })
        }
        res.render('explore')
    }
    catch {
        console.error(error)
        res.status(500).send("Server Error")
    }

})

module.exports = router;