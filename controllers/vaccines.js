const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
const User = require('../models/user');
const Vaccine = require('../models/vaccine');

// NEW ROUTE

router.get('/new', async (req, res)=>{
	console.log('new')
  try {
      
     const allVaccines = await Vaccine.find({});
     console.log(allVaccines);


    res.render('vaccines/new.ejs', {
    	vaccines: allVaccines
    });

  } catch (err) {

      res.send(err);
  }
});

router.post('/', async (req, res)=> {
	console.log('new');
  try {
     Vaccine.create({
     	months: req.body.months,
     	name: req.body.name,
     	rounds: req.body.rounds
     }, (err, createdVaccine) => {
     	if(err) {
			console.log('Error creating vaccine');
     	} else {
     		console.log('Created Vaccine >>', createdVaccine);
     		res.render('vaccines/show.ejs', {
    			vaccine: createdVaccine
    		});
     	}
     });

  } catch (err) {
      res.send(err);
  }
});


// EDIT ROUTE

router.get('/edit/:id', async (req, res)=>{
 console.log('edit')
  try {

    const Vaccine = await Vaccine.findById(req.params.id);

    res.render('vaccines/edit.ejs', {
            
            vaccine: Vaccine,
          
          });

  } catch(err){
    res.send(err);
  }
   });




// SHOW ROUTE
router.get('/show/:id', async (req, res) => {
	console.log('showing');
	try {
		Vaccine.findById(req.params.id, (err, vaccine) => {
			res.render('vaccines/show.ejs', {
				vaccine: vaccine
			});
		});
	} catch(err) {
		console.log('Error Getting Vaccine Details', err);
		res.send(err);
	}
})
// INDEX ROUTE
router.get('/', async (req, res) => {
	console.log('Displaying List of Vaccines');
	try {
		const Vaccines = await Vaccine.find({});
		res.render('vaccines/index.ejs', {
			vaccines: Vaccines
		});
		console.log('Details for All Vaccines >>', Vaccines);
	} catch(err) {
		console.log('Error fetching all vaccines from db');
		res.send(err);
	}
})

// DELETE ROUTE



module.exports = router;