const mongoose = require('mongoose');

const { Schema } = mongoose;


const userSchema = new Schema({


    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    createdAt: Number,
    updatedAt: Number,
}, { timestamps: true });




module.exports = { User: mongoose.model('users', userSchema) };