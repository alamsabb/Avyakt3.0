const express=require('express');
const app=express();
const limit=require('express-rate-limit');

const lim=limit({
    windowMs:20 * 1000,
    max:20

});


app.get('/health',(req,res)=>{
    res.send("fine");
})


const solocontrol=require('../controller/solocontroller');
app.get('/fetchcsv/:eventname/:gender',solocontrol.fetchcsv);


const dat=require('../controller/EventControl');
app.get('/fettchevent/:type',dat.fetchdata);
app.get('/fettcheventbyid/:type',dat.fetchdatabyid);


module.exports=app;