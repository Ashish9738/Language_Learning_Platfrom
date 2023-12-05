const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    dob: String,
    gender: String,
    password: String,
    country: String
});

const loginModel = new mongoose.model('UserDetails', loginSchema);
module.exports = loginModel;