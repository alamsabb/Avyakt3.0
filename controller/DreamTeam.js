// const mongoose = require("mongoose");
const DrTeam = require("../models/DreamTeam");

exports.getDreeamTeam = async (req, res) => {
    try {
        const Team=await DrTeam.find();
        return res.status(200).json(Team);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error fetching Team" });
        
    }
};