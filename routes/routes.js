const express=require('express');
const app=express();


app.get('/health',(req,res)=>{
    return res.send("app is runnind fine")
})

// add event data
const solocontrol=require('../controller/solocontroller');
app.post('/registersolo',solocontrol.addData);

const teamcontrol=require('../controller/teamControl');
app.post('/addteam',teamcontrol.addTeam);


// send & otp verify
const otpcon=require('../controller/otpconrol');
app.post('/sendotp',otpcon.sendotp);
app.post('/verifyotp',otpcon.verifyOtp);






module.exports=app;