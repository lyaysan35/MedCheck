const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    completed: [{
        type: mongoose.Schema.Types.Array,
        ref: 'Procedure'
    }]
})

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;