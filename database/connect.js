const mongooes=require('mongoose');
const url='mongodb+srv://csefest:csefestavyakt3.0@avyakt.ivia67w.mongodb.net/Avyakt3'
exports.connectDB=async()=>{
    await mongooes.connect(process.env.MONGODBURL)
    .then(()=>{
        console.log("connection Success");
    })
    .catch((e)=>{
        console.log(e);
    })
}