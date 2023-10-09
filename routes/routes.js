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


const otpcontrol=require('../controller/otpcontroll')
app.post('/sendotp',otpcontrol.sendotp);
app.post('/verifyotp',otpcontrol.verifyOtp);



// add event data
const solocontrol=require('../controller/solocontroller');
app.post('/registersolo',lim,solocontrol.addData);

const teamcontrol=require('../controller/teamControl');
app.post('/addteam',lim,teamcontrol.addTeam);


// // send & otp verify
// const otpcon=require('../controller/otpconrol');
// app.post('/sendotp',otpcon.sendotp);
// app.post('/verifyotp',otpcon.verifyOtp);






module.exports=app;