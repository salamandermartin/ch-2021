const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
    username: {
        type: String,
        trim: true,
        uppercase: true,
        unique: true,
        required: true,
        index: true
    },
    first_name: {
        type: String,
        trim: true,
        uppercase: true,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        uppercase: true,
        required: true
    }
}
);

const modelUser = mongoose.model('User', userModel, 'users');

modelUser.createIndexes();

module.exports = modelUser;