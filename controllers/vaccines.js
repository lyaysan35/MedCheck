const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
const User = require('../models/user');
const Vaccine = require('../models/vaccine');

// Allow Static Files
router.use(express.static('public'));

// NEW ROUTE
router.get('/new', async (req, res)=>{
	
  try {
      
     const allVaccines = await Vaccine.find({});
    


    res.render('vaccines/new.ejs', {
    	vaccines: allVaccines
    });

  } catch (err) {

      res.send(err);
  }
});

router.post('/', async (req, res)=> {
	
  try {
     Vaccine.create({
     	months: req.body.months,
     	name: req.body.name,
     	rounds: req.body.rounds
     }, (err, createdVaccine) => {
     	if(err) {
			
     	} else {
     		
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
 	
    Vaccine.findById(req.params.id, (err, vaccine) => {
    	if(err) {
    		;
			res.send(err);
    	} else {
    		
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
	
	try {
		Vaccine.findById(req.params.id, (err, vaccine) => {
			res.render('vaccines/show.ejs', {
				vaccine: vaccine
			});
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
			res.render('vaccines/index.ejs', {
				vaccines: allVaccines
			});
			
		}
	});
});

// DELETE ROUTE

router.delete('/:id', (req, res) => {
	Vaccine.findByIdAndRemove(req.params.id, (err, foundVaccine) => {
		if(err){
			
	   } else {
	   	
	   	res.redirect('/vaccines');
	   }
	});
});

// REMAINING ROUTE

router.post('/remaining', (req, res) => {
	console.log('REQUEST AGE >>', req.body.age);
	Vaccine.find({}, (err, allVaccines) => {
		if(err) {
			console.log('Error >>', err);
			res.send(err);
		} else {
			try {
				// console.log('ALL VACCINES >>', allVaccines);
				const remainingVaccines = allVaccines
					.filter(v => v.month >= req.body.age)
					.sort((a, b) => a.month - b.month);
				let twoMonth = [];
				let fourMonth = [];
				let sixMonth = [];
				let twelveMonth = [];
				
				for(let i = 0; i < remainingVaccines.length; i++) {
					if(remainingVaccines[i].month === 2) {
						
						twoMonth.push(remainingVaccines[i]);
					}
				}
				
				console.log(twoMonth, 'TWO')
				console.log(fourMonth, 'FOUR')
				console.log(sixMonth, 'SIX')
				console.log(twelveMonth, 'TWELVE')
				// console.log('REMAINING >>', remainingVaccines);
				res.render('index.ejs', {
					remaining: remainingVaccines
				});
			} catch(err) {
				console.log('ERROR >>', err);
			}
		}
	});
});

/*const remainingVaccines = [];
for(let vaccine of allVaccines) {
	remainingVaccines.push(filter(vaccine));
}
function filter(v) {
	if(v.month >= req.body.age) {
		return v;
	}
}*/





module.exports = router;