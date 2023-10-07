const express=require('express');
const app=express();


app.get('/health',(req,res)=>{
    res.send("fine");
})


const solocontrol=require('../controller/solocontroller');
app.get('/fetchcsv/:eventname/:gender',solocontrol.fetchcsv);


const dat=require('../controller/EventControl');
app.get('/fettchevent/:type',dat.fetchdata);


module.exports=app;