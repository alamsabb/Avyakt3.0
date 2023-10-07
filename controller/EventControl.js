const event = require('../models/Event');

exports.fetchdata=async (req,res)=>{
    try {
        const {type}=req.params;
        if(type==="all"){
            const events=await event.find();
            // console.log(events);
            return res.status(200).json(events);
            
        }else{
            const events = await event.find({eventType:type});
            return res.status(200).json(events);
        }

    } catch (error) {
        console.error('Error fetching events:', error);
        return res.status(500).json({ message: 'Error fetching events' });
    }
};
exports.showData=async (req,res)=>{
   res.status(400).json({message:"not done"})

};