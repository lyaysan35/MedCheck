const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
const User = require('../models/user');
const Vaccine = require('../models/vaccine');

// NEW ROUTE
router.get('/new', async (req, res)=>{
   try {
      const allPatients = await Patient.find();
     res.render('patients/new.ejs', {
         patients: allPatients
       });
   } catch (err) {
       res.send(err);
   }
 });

// POST ROUTE
router.post('/', async (req, res) => {
   try {
     const findUser = await User.findOne({_id: req.session.userId});
     const createPatient = await Patient.create(req.body)
     const [foundUser, createdPatient] = await Promise.all([findUser, createPatient]);
     foundUser.patients.push(createdPatient);
     const vaccines = await Vaccine.find({});
     for(let i = 0; i < vaccines.length; i++) {
      createdPatient.vaccines.push(vaccines[i]._id);
     };
     createdPatient.save();
     console.log(createdPatient, 'THIS IS THE CREATED PATIENT')
     await foundUser.save();
     res.redirect('/users')
   } catch (err) {
       res.send(err);
   }
})

// EDIT ROUTE
router.get('/:id/edit', async (req, res) => {
 try {
   const foundPatient = await Patient.findById({_id: req.params.id});
    res.render('patients/edit.ejs', {
        patient : foundPatient
    })
   } catch {
     res.send(err);
   }
})

router.post('/:id/add/:vaccineId', async (req, res) => {
	try {
    const foundVaccine = await Vaccine.findOne({_id: req.params.vaccineId});
    const foundPatient = await Patient.findById(req.params.id);
    await foundPatient.completed.push(foundVaccine);
    await foundPatient.vaccines.remove(req.params.vaccineId);
    await foundPatient.save();
    console.log(foundVaccine, 'THIS IS THE FOUND VACCINE')
    console.log(foundPatient, ' FOUND PATIENT')
    res.redirect('/patients/'+req.params.id)
	} catch(err) {
    res.send(err);
  }
})

// PUT ROUTE
router.put('/:id', async (req, res) => {
 try {
     const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, {new: true});
     res.redirect('/patients')
 } catch (err) {
     res.send(err);
 }
})

// SHOW ROUTE
router.get('/:id', async (req, res) => {
 try {
   const foundPatient = await Patient.findById({_id: req.params.id})
   .populate('vaccines')
   .populate('completed')
   .exec();
   
   res.render('patients/show.ejs', {
      patient: foundPatient,
      vaccines: foundPatient.vaccines,
      completedVaccines: foundPatient.completed
   })
 } catch (err) {
   res.send(err);
 }
});

// INDEX ROUTE
router.get('/', async (req, res)=>{
   try {
     const foundPatients = await Patient.find({});
     res.render('patients/index.ejs', {
         patients: foundPatients
       });
   } catch(err){
     res.send(err);
   }
 });

// DELETE ROUTE
router.delete('/:id', async (req, res) => {
 try {

     const foundPatient = await Patient.findByIdAndRemove(req.params.id);
     const findUser = User.findOne({'patients': req.params.id});
     const [deletedPatientResponse, foundUser] = await Promise.all([foundPatient, findUser]);
     await foundUser.save();
     res.redirect('/patients');
 } catch(err) {
     res.send(err);
 }
})




module.exports = router;