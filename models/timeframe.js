const mongoose = require('mongoose');

const timeframeSchema = new mongoose.Schema({
    months: {type: Number, required: true},
    procedures: [{
        type: mongoose.Schema.Types.Array,
        name: String,
        rounds: {type: Number, required: true}
    }]
});

const Timeframe = mongoose.model('Timeframe', timeframeSchema);

module.exports = Timeframe;

// const appointmentSchema = new.mongoose.Schema ({
//     patientAge: {type: Number, required: true}
//     vaccinations: [{
//         type: mongoose.Schema.Types.Array,
//         name: String
//     }]

// })