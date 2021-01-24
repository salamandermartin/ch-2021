const mongoose = require('mongoose');

const { Schema } = mongoose;

const diet_logModel = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    meal_ingredients: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    emission_score:{
        type: Number,
        required: true
    },
    timestamps:{
        type: Date, 
        default: Date.now
    }
}
);

const modelDiet_log = mongoose.model('Diet_log',  diet_logModel, 'diet_log');

module.exports = modelDiet_log;