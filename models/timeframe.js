const mongoose = require('mongoose');

const timeframeSchema = new mongoose.Schema({
    months: {type: Number, required: true},
    procedures: [{
        name: String,
        completed: Boolean
    }]
});

const Timeframe = mongoose.model('Timeframe', timeframeSchema);

module.exports = Timeframe;