const mongoose = require('mongoose');

const ipblock = mongoose.Schema({
    ip:{
        type: String,
        required: true
    },
    count:{
        type: Number,
        required: true
    }
},
{timestamps: true}
);

module.exports = mongoose.model("ipdata",ipblock); 