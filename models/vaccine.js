const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number, required: true},
    round: Number,
    description: String
});

const Vaccine = mongoose.model('Vaccine', vaccineSchema);

module.exports = Vaccine;