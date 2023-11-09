const eventModel = require("../models/Event");
const jwtgen = require("../util/jwtGen");
exports.login = async (req, res) => {
  try {
    const { roll, pass } = req.body;
    if (!roll)
      return res.status(400).json({
        message: "Roll not recived",
      });
    if (!pass)
      return res.status(400).json({
        message: "pass not recived",
      });
    const data = await eventModel.find({ coordinatorRoll: roll });
    if (!data)
      return res.status(400).json({
        message: "Roll not Found Contact Admin",
      });
    const isPassMatched = data.some((event) =>
      event.coordinatorPhno.includes(pass)
    );
    if (!isPassMatched)
      return res.status(400).json({
        message: "Password not matched",
      });

    const eventIDs = data.map((event) => event._id);
    const token = await jwtgen.genJwt({
      rollno: roll,
      eventids: eventIDs,
    });
    return res.status(200).json({
      token,
      message: "login Successed",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server Error",
    });
  }
};
