const mongoose = require("mongoose");
const event = require("../models/Event");

exports.fetchdata = async (req, res) => {
  try {
    const { type } = req.params;
    if (type === "all") {
      const events = await event.find();
      // console.log(events);
      return res.status(200).json(events);
    } else {
      const events = await event.find({ eventType: type });
      return res.status(200).json(events);
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    return res.status(500).json({ message: "Error fetching events" });
  }
};

exports.fetchdatabyid = async (req, res) => {
  try {
    const { type } = req.params;
    const objid = new mongoose.Types.ObjectId(type);
    const eventsbyid = await event.findOne({
      _id: objid,
    });
    // console.log(eventsbyid);
    return res.status(200).json(eventsbyid);
  } catch (error) {
    console.error("Error fetching events:", error);
    return res.status(500).json({ message: "Error fetching events" });
  }
};
