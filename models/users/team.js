const mongoose  = require('mongoose');

const teamUser = mongoose.Schema({
    teamname:{
        type:String,
        default:null        
    },
    leadname:{
        type: String,
        required: true,
    },
    leademail:{
        type: String,
        required: true,
    },
    leadphone:{
        type: String,
        required: true
    },
    leadrollno:{
        type: String,
        required: true,
    },
    eventname:{
        type:String,
        require:true
    },
    memberrollno:{
        type:[String],
        required:true
    },
    memberemail:{
        type:[String],
        required:true
    },

},{timestamps:true}
);

module.exports = mongoose.model("TEAMUser",teamUser);