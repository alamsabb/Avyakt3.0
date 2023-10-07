const mongoose  = require('mongoose');

const user = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true
    },
    rollno:{
        type: String,
        required: true,
        unique:true
    },
    eventname:{
        type:[String],
        require:true
    },
    gender:{
        type:String,
        required:true
    }    
});

module.exports = mongoose.model("SOLOUser",user);