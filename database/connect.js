const mongooes=require('mongoose');

exports.connectDB=async()=>{
    await mongooes.connect(process.env.MONGODBURL)
    .then(()=>{
        console.log("connection Success");
    })
    .catch((e)=>{
        console.log(e);
    })
}