const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }, 
    image: {
        type: String,
    },
    activated: {
        type: Boolean,
        default: false
    },
    temporaryToken: {
        type: String,
    },
    role: {
        type: String,
    },
    products: [{
        type: mongoose.Types.ObjectId,
        ref: 'products'
    }],
    staff: [{
        type: mongoose.Types.ObjectId,
        ref: 'staff'
    }]
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('users', userSchema);

