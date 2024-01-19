const mongooes=require('mongoose');
const url=''
exports.connectDB=async()=>{
    await mongooes.connect(url)
    .then(()=>{
        console.log("connection Success");
    })
    .catch((e)=>{
        console.log(e);
    });
}