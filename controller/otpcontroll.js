const otpgen = require("../util/otpgen");
const otpModel = require("../models/otp");
const sendMail = require("../util/mailer");

exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body;
    const trimedemail = email.trim();
    const emailroll = trimedemail.split("@");
    if (emailroll[1] === "giet.edu") {
      let Otp = await otpModel.findOne({ email: email });

      if (!Otp) {
        let otpCode = await otpgen.genotp();
        await otpModel.create({
          email,
          otp: otpCode,
        });
        sendMail.sendMail({
          email,
          otp: otpCode,
        });
        return res.status(200).json({
          message: "Otp has been sent to your email.",
        });
      } else {
        sendMail.sendMail({
          email,
          otp: Otp.otp,
        });
        return res.status(200).json({
          message: "Otp has been sent to your email.",
        });
      }
    } else {
      return res.status(400).json({
        message: "Enter your official mail",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "some error occured",
    });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const OtpData = await otpModel.findOne({ email: email });
    let otpnum = Number(otp);
    console.log(otpnum);
    if (OtpData) {
      if (OtpData.otp === otpnum) {
        await otpModel.deleteOne({ otp: OtpData.otp });
        return res.status(200).json({
          message: "Verified",
        });
      } else {
        return res.status(401).json({
          message: "Invalid Otp",
        });
      }
    } else {
      return res.status(400).json({
        message: "Otp has been Expired",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Some error occured!",
    });
  }
};
