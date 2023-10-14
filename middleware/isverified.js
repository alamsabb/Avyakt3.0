const bitdb = require("../models/randombit");

exports.isverified = async (req, res, next) => {
  try {
    const email = req.body.email;
    const bit = req.body.bit;
    if (!bit) {
      return res.status(400).json({
        message: "Not Authorised",
      });
    } else {
      const bitdbdata = await bitdb.findOne({ email: email });
      if (!bitdbdata) {
        return res.status(400).json({
          message: "Go with the flow",
        });
      } else {
        if (bit === bitdbdata.randombit) {
          await bitdb.deleteOne({ email: email });
          next();
        } else {
          return res.status(400).json({
            message: "not verified",
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "some Error",
    });
  }
};
