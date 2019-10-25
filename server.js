const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
require('./db/db');

app.use(session({
    secret: 'Shhhhh',
    resave: false,
    saveUninitialized: false
}));

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

const usersController = require('./controllers/users');
app.use('/users', usersController);

const patientsController = require('./controllers/patients');
app.use('/patients', patientsController);

const timeframesController = require('./controllers/timeframes');
app.use('/timeframes', timeframesController);


// HOME PAGE
app.get('/', (req, res) => {
    res.render('index.ejs', {
        message: req.session.message,
        logOut: req.session.logOutMsg
    })
});

// PORT
app.listen(3000, () => {
    console.log('server is listening!!!');
});