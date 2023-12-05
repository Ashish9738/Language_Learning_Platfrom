const express = require("express");
const app = express();
const path = require('path')
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ashish');
}


//get method
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/arabicquiz1', (req, res) => {
    res.render('arabic-quiz1')
})
app.get('/arabicquiz2', (req, res) => {
    res.render('arabic-quiz2')
})
app.get('/arabic', (req, res) => {
    res.render('arabic')
})
app.get('/englishcontent', (req, res) => {
    res.render('english-content')
})
app.get('/englishquiz1', (req, res) => {
    res.render('english-quiz1')
})
app.get('/englishquiz2', (req, res) => {
    res.render('english-quiz2')
})
app.get('/explore', (req, res) => {
    res.render('explore')
})
app.get('/frenchcontent', (req, res) => {
    res.render('french-content')
})
app.get('/frenchquiz1', (req, res) => {
    res.render('french-quiz1')
})
app.get('/frenchquiz2', (req, res) => {
    res.render('french-quiz3')
})
app.get('/japanesecontent', (req, res) => {
    res.render('japanese-content')
})
app.get('/japanesequiz1', (req, res) => {
    res.render('japanese-quiz1')
})
app.get('/japanesequiz2', (req, res) => {
    res.render('japanese-quiz2')
})

app.get('/koreancontent', (req, res) => {
    res.render('korean-content')
})
app.get('/koreanquiz1', (req, res) => {
    res.render('korean-quiz1')
})
app.get('/koreanquiz2', (req, res) => {
    res.render('korean-quiz2')
})

app.get('/spanishcontent', (req, res) => {
    res.render('spanish-content')
})
app.get('/spanishquiz1', (req, res) => {
    res.render('spanish-quiz1')
})
app.get('/spanishquiz2', (req, res) => {
    res.render('spanish-quiz2')
})

//post method
const loginPost = require('./routes/login')
app.use('/login', loginPost)

const signupPost = require('./routes/signup')
app.use('/signup', signupPost)

const contact = require('./routes/contact')
app.use('/contact', contact)

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`(port: ${port})`);
})
