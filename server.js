const express=require('express');
const app=express();
const cors=require('cors');

require('dotenv').config();
const port=process.env.PORT||5028;
const routes=require('./routes/routes');
const connect=require('./database/connect');
const fetch=require('./routes/fetchdata');

// const confirm=require('./util/confermationMail');



app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/',routes);
app.use('/fetchdata',fetch);


connect.connectDB();



app.listen(port,()=>{
    console.log(`App is running in the ${port}`);
})