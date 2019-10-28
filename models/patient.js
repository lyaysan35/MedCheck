const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    completed: [{
        type: mongoose.Schema.Types.Array,
        name: String,
        round: {type: Number, required: true},
    }],
    vaccines: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vaccine'
    }]
})

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;