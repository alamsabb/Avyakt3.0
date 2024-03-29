const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    unique: true,
  },
  eventDesc: {
    type: String,
  },
  eventType: {
    type: String,
  },
  eventTeamType: {
    type: String,
  },
  maxTeamSize: {
    type: Number,
  },
  minTeamSize: {
    type: Number,
  },
  coordinatorName: {
    type: [String],
  },
  coordinatorPhno: {
    type: [String],
  },
  coordinatorRoll: {
    type: [String],
  },
  eventImage: {
    type: String,
  },
  facultycordinator: {
    type: [String],
  },
  facultycordinatorphone: {
    type: [String],
  },
  docUrl: {
    type: String,
    default: null,
  },
  eventClosed: {
    type: String,
    default: "False",
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
