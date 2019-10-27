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

router.get('/edit/:id', async (req, res)=> {
 	console.log('edit');
    Vaccine.findById(req.params.id, (err, vaccine) => {
    	if(err) {
    		console.log('Error Getting Vaccine from DB >>', err);
			res.send(err);
    	} else {
    		console.log('Got Vaccine from DB >>', vaccine);
    		res.render('vaccines/edit.ejs', {
            	vaccine: vaccine,
          	});
  		}
    });
});



router.put('/:id', (req, res) => {
  Vaccine.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedVaccine) => {
    if(err){
      res.send(err);
    } else{
      res.render('vaccines/show.ejs', {
      	vaccine: updatedVaccine
      });
    }
  });
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
});
// INDEX ROUTE
router.get('/', (req, res) => {
	console.log('Displaying List of Vaccines');
	Vaccine.find({}, (err, allVaccines) => {
		if(err) {
			console.log('Error fetching all vaccines from db');
			res.send(err);
		} else {
			res.render('vaccines/index.ejs', {
				vaccines: allVaccines
			});
			console.log('Details for All Vaccines >>', allVaccines);
		}
	});
});

// DELETE ROUTE


router.delete('/:id', (req, res) => {
	Vaccine.findByIdAndRemove(req.params.id, (err, foundVaccine) => {
		if(err){
			console.log(err);
	   } else {
	   	console.log('Deleted!');
	   	res.redirect('/vaccines');
	   }
	});
});




module.exports = router;