const express=require('express');
const app=express();
const limit=require('express-rate-limit');

const lim=limit({
    windowMs:20 * 1000,
    max:5

});
app.get('/health',(req,res)=>{
    return res.send("app is runnind fine")
})

const otplim=limit({
    windowMs:5*60 * 1000,
    max:5

});

const otpcontrol=require('../controller/otpcontroll')
app.post('/sendotp',otplim,otpcontrol.sendotp);
app.post('/verifyotp',otplim,otpcontrol.verifyOtp);



// add event data
const isvarify=require('../middleware/isverified')
const solocontrol=require('../controller/solocontroller');
app.post('/registersolo',lim,isvarify.isverified,solocontrol.addData);

const teamcontrol=require('../controller/teamControl');
app.post('/addteam',lim,teamcontrol.addTeam);





module.exports=app;