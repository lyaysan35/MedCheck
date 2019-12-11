const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
const User = require('../models/user');
const Vaccine = require('../models/vaccine');

// Allow Static Files
router.use(express.static('public'));

// NEW ROUTE
// router.get('/new', async (req, res)=>{
	
//   try {
      
//      const allVaccines = await Vaccine.find({});
    


//     res.render('vaccines/new.ejs', {
//     	vaccines: allVaccines
//     });

//   } catch (err) {

//       res.send(err);
//   }
// });


// Add this back if you want to add more vaccines
router.post('/', async (req, res)=> {
	Vaccine.create({
     	month: req.body.month,
     	name: req.body.name,
     	round: req.body.round,
     	description: req.body.description
     }, (err, createdVaccine) => {
     	if(err) {
			res.send(err);
     	} else {
     		res.render('vaccines/show.ejs', {
    			vaccine: createdVaccine
    		});
     	}
     });
});


// EDIT ROUTE

// router.get('/edit/:id', async (req, res)=> {
 	
//     Vaccine.findById(req.params.id, (err, vaccine) => {
//     	if(err) {
//     		;
// 			res.send(err);
//     	} else {
    		
//     		res.render('vaccines/edit.ejs', {
//             	vaccine: vaccine,
//           	});
//   		}
//     });
// });

// router.put('/:id', (req, res) => {
//   Vaccine.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedVaccine) => {
//     if(err){
//       res.send(err);
//     } else{
//       res.render('vaccines/show.ejs', {
//       	vaccine: updatedVaccine
//       });
//     }
//   });
// });


// SHOW ROUTE
router.get('/show/:id', async (req, res) => {
	try {
		Vaccine.findById(req.params.id, (err, vaccine) => {
            if (req.query.json === 'true') {
                res.send({vaccine: vaccine})
            } else {
                res.render('vaccines/show.ejs', {
                    patientId: req.session.patientId,
                    vaccine: vaccine
                });
            }
		});
	} catch(err) {
		
		res.send(err);
	}
});


// INDEX ROUTE
router.get('/', (req, res) => {
	
	Vaccine.find({}, (err, allVaccines) => {
		if(err) {
			
			res.send(err);
		} else {
			res.send(allVaccines);
			
		}
	});
});

// DELETE ROUTE

router.delete('/:id', (req, res) => {
	Vaccine.findByIdAndRemove(req.params.id, (err, foundVaccine) => {
	   if(err){
	      res.send(err)
	   } else {
            if (req.query.json === 'true') {
                res.send({vaccine: vaccine})
            } else {
                res.redirect('/vaccines');
            }
	   }
	});
});

// REMAINING ROUTE

router.post('/remaining', (req, res) => {
    Vaccine.find({}, (err, allVaccines) => {
        if(err) {
            console.log('Error >>', err);
            res.send(err);
        } else {
            try {
                const remainingVaccines = allVaccines
                    .filter(v => v.month >= req.body.age)
                    .sort((a, b) => a.month - b.month);

                const twoMonth = remainingVaccines.filter(v => v.month === 2);
                const fourMonth = remainingVaccines.filter(v => v.month === 4);
                const sixMonth = remainingVaccines.filter(v => v.month === 6);
                const twelveMonth = remainingVaccines.filter(v => v.month === 12);
                
                res.render('index.ejs', {
                    two: twoMonth,
                    four: fourMonth,
                    six: sixMonth,
					twelve: twelveMonth,
					remaining: remainingVaccines

                });
            } catch(err) {
                console.log('ERROR >>', err);
            }
        }
    });
});





module.exports = router;