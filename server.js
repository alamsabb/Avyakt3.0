const express=require('express');
const app=express();
const cors=require('cors');

require('dotenv').config();
const port=process.env.PORT||5000;
const routes=require('./routes/routes');
const connect=require('./database/connect');
const fetch=require('./routes/fetchdata');



app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.set('trust proxy', false);

app.use('/',routes);
app.use('/fetchdata',fetch);
app.set('trust proxy', 1)

const report=require('./routes/repoert');
app.use('/r',report)


connect.connectDB();

global.hashbox={};

setInterval(() => {
    hashbox={}
}, 21600000);

app.listen(port,()=>{
    console.log(`App is running in the ${port}`);
})