const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
require('./db/db');
const Vaccine = require('./models/vaccine');

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

const vaccinesController = require('./controllers/vaccines');
app.use('/vaccines', vaccinesController);


//2 MONTH vaccines

Vaccine.findOneAndUpdate(
{
	name: "Hepatitis B",
},
{
	months: 2,
	rounds: 2
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
    	console.log('ERROR Creating Vaccine');
    } else {
    	console.log('CREATED Vaccine >>', createdVaccine);
    }

});

Vaccine.findOneAndUpdate(
{
    name: "Diphtheria, tetanus, and whooping cough (pertussis) (DTaP)",
},
{
    months: 2,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});

Vaccine.findOneAndUpdate(
{
    name: "Haemophilus influenzae type b (Hib)",
},
{
    months: 2,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});



Vaccine.findOneAndUpdate(
{
    name: "Polio (IPV)",
},
{
    months: 2,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});



Vaccine.findOneAndUpdate(
{
    name: "Pneumococcal (PCV)",
},
{
    months: 2,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});


Vaccine.findOneAndUpdate(
{
    name: "Rotavirus (RV)",
},
{
    months: 2,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});

// 4 MONTH VACCINE

Vaccine.findOneAndUpdate(
{
    name: "Diphtheria, tetanus, and whooping cough (pertussis) (DTaP)",
},
{
    months: 4,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});



Vaccine.findOneAndUpdate(
{
    name: "Haemophilus influenzae type b (Hib)",
},
{
    months: 4,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});




Vaccine.findOneAndUpdate(
{
    name: "Polio (IPV)",
},
{
    months: 4,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});



Vaccine.findOneAndUpdate(
{
    name: "Pneumococcal (PCV)",
},
{
    months: 4,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});


Vaccine.findOneAndUpdate(
{
    name: "Rotavirus (RV)",
},
{
    months: 4,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});



Vaccine.findOneAndUpdate(
{
    name: "Hepatitis B (HepB)",
},
{
    months: 4,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});


// 6 MONTH VACCINES

Vaccine.findOneAndUpdate(
{
    name: "Diphtheria, tetanus, and whooping cough (pertussis) (DTaP)",
},
{
    months: 6,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});


Vaccine.findOneAndUpdate(
{
    name: "Haemophilus influenzae type b (Hib)",
},
{
    months: 6,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});


Vaccine.findOneAndUpdate(
{
    name: "Polio (IPV)",
},
{
    months: 6,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});


Vaccine.findOneAndUpdate(
{
    name: "Pneumococcal (PCV)",
},
{
    months: 6,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});


Vaccine.findOneAndUpdate(
{
    name: "Rotavirus (RV)",
},
{
    months: 6,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});



Vaccine.findOneAndUpdate(
{
    name: "Influenza (flu)",
},
{
    months: 6,
    rounds: 1
},
{ upsert: true }, function(err, createdVaccine) {
    if(err) {
        console.log('ERROR Creating Vaccine');
    } else {
        console.log('CREATED Vaccine >>', createdVaccine);
    }

});






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