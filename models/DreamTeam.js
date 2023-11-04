const mongoose=require('mongoose');

const dreamTeamSchema=new mongoose.Schema({
    NAME:{
        type:String,
        required:true
    },
    ROLE:{
        type:String,
        required:true
    },
    ROLLNO:{
        type:String,
        required:true
    },
    InstaLink:{
        type:String,
        required:true
    },
    LinkdinLink:{
        type:String,
        required:true
    },
    GithubLink:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        required:true
    },
});

const DreamTeam=mongoose.model('DreamTeam',dreamTeamSchema);

module.exports=DreamTeam;