const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
const User = require('../models/user');
const Timeframe = require('../models/timeframe');

// NEW ROUTE

router.get('/new', async (req, res)=>{
	console.log('new')
  try {
      
     const allTimeframes = await Timeframe.find({});
     console.log(allTimeframes);


    res.render('timeframes/new.ejs', {
    	frames: allTimeframes
    });

  } catch (err) {

      res.send(err);
  }
});










// EDIT ROUTE

// SHOW ROUTE

// INDEX ROUTE

// DELETE ROUTE



module.exports = router;