const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String
    },
    operationalArea: {
        type: String
    },
    phoneNumber: {
        type: Number,
    },
    idNumber: {
        type: String
    },
    education: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    experience: {
        type: String
    },
    skills: {
        type: String
    },
    additionalDetails: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    image: {
        type: String,
    },
});

module.exports = mongoose.model('staff', staffSchema);