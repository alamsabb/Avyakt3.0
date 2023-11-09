const express=require('express');
const app=express();
const limit=require('express-rate-limit');


app.get('/health',(req,res)=>{
    res.send("fine");
})


const solocontrol=require('../controller/solocontroller');
app.get('/fetchcsv/:eventname/:gender',solocontrol.fetchcsv);
app.post('/fetchdata/fetchintable/:eventname',solocontrol.showData)

const teamcontrol=require('../controller/teamControl');
app.get('/fetchTeamcsv/:eventname',teamcontrol.teamfetchcsv);
app.post('/fetchTeamdata/fetchintable/:eventname',teamcontrol.showdata)


const dat=require('../controller/EventControl');
app.get('/fettchevent/:type',dat.fetchdataandroid);
app.get('/fettchevent/website/:type',dat.fetchdata);

app.get('/fettcheventbyid/:type',dat.fetchdatabyid);


module.exports=app;