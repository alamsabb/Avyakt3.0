const otpgen = require("../util/otpgen");
const otpModel = require("../models/otp");
const sendMail = require("../util/mailer");
const randombit = require("../util/randombit");
const bitdb = require("../models/randombit");
const requestIP = require("request-ip");

exports.sendotp = async (req, res) => {
  try {
    const ipAddress = requestIP.getClientIp(req);
    const ipAddress1 =
      req.header("x-forwarded-for") || req.socket.remoteAddress;
    const reqip=req.ip;

    console.log(ipAddress);
    console.log(ipAddress1);
    console.log(reqip);
    const { email } = req.body;
    if (email === undefined) {
      return res.status(400).json({
        message: "enter the email",
      });
    } else {
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
    // console.log(otpnum);
    if (email === undefined || otp == 0) {
      return res.status(400).json({
        message: "enter the email or otp",
      });
    } else {
      if (OtpData) {
        if (OtpData.otp === otpnum) {
          const mbt = "1";
          const slbit = "1";
          const bit = await randombit.generatebit({
            middle: mbt,
            secondlast: slbit,
            botp: otpnum,
          });
          await otpModel.deleteOne({ otp: OtpData.otp });
          await bitdb.create({
            email: email,
            randombit: bit,
          });
          return res.status(200).json({
            message: "Verified",
            data: bit,
          });
        } else {
          return res.status(401).json({
            message: "Invalid Otp",
          });
        }
      } else {
        return res.status(400).json({
          message: "Otp has been Expired",
          data: bit,
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Some error occured!",
    });
  }
};
