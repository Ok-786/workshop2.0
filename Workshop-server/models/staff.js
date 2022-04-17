const mongoose = require('mongoose');
require('mongoose-double')(mongoose);


var SchemaTypes = mongoose.Schema.Types;
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
    longitude: {
        type: SchemaTypes.Double,
        default: 73.0961 - Math.random().toFixed(3) 
    },
    latitude: {
        type: SchemaTypes.Double,
        default: 33.5163 + Math.random() 
    },
    timeoffLeaves: {
        type: Number
    },
    timeoffDescription: {
        type: String
    },
    timeoffCompleted: {
        type: Number
    }
});

module.exports = mongoose.model('staff', staffSchema);