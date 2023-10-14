const mongoose = require('mongoose');

const bit = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    randombit:{
        type: String,
        required: true
    }
},
{timestamps: true}
);

module.exports = mongoose.model("Randombit",bit); 