const mongoose = require('mongoose');


const vaccineSchema = new mongoose.Schema({
    months: {type: Number, required: true},
    name: {type: String, required: true},
    rounds: {type: Number, required: true}
});

const Vaccine = mongoose.model('Vaccine', vaccineSchema);

module.exports = Vaccine;