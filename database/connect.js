const mongooes=require('mongoose');
const url='mongodb+srv://csefest:csefestavyakt3.0@avyakt.ivia67w.mongodb.net/Avyakt3'
exports.connectDB=async()=>{
    await mongooes.connect(url)
    .then(()=>{
        console.log("connection Success");
    })
    .catch((e)=>{
        console.log(e);
    });
}