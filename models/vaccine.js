const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({
    name: {type: String, required: true},
    months: {type: Number, required: true},
    round: Number
});

const Vaccine = mongoose.model('Vaccine', vaccineSchema);

module.exports = Vaccine;