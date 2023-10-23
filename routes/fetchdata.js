const express=require('express');
const app=express();
const limit=require('express-rate-limit');


app.get('/health',(req,res)=>{
    res.send("fine");
})


const solocontrol=require('../controller/solocontroller');
app.get('/fetchcsv/:eventname/:gender',solocontrol.fetchcsv);

const teamcontrol=require('../controller/teamControl');
app.get('/fetchTeamcsv/:eventname',teamcontrol.teamfetchcsv);


const dat=require('../controller/EventControl');
app.get('/fettchevent/:type',dat.fetchdata);
app.get('/fettcheventbyid/:type',dat.fetchdatabyid);


module.exports=app;