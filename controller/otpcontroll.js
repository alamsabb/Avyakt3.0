const otpgen = require("../util/otpgen");
const otpModel = require("../models/otp");
const sendMail = require("../util/mailer");
const randombit = require("../util/randombit");
const bitdb = require("../models/randombit");
const ipdb = require("../models/ipblock");
const requestIP = require("request-ip");

exports.sendotp = async (req, res) => {
  try {
    const pattern = /^[0-9]{2}(cse|cseaiml|cseds|cst|bca|mca)\d+\.\w+@giet\.edu$/;
    const ipAddress = requestIP.getClientIp(req);
    let ipblocked = await ipdb.findOne({
      ip: ipAddress,
    });
    if (!ipblocked || ipblocked.count < 20) {
      const { email } = req.body;
      if (email === undefined) {
        return res.status(400).json({
          message: "enter the email",
        });
      } else {
        if (pattern.test(email)) {
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
        } else {
          return res.status(400).json({ message: "Enter a valid mail" });
        }
      }
    } else {
      return res.status(438).json({
        message: "you have been blocked contact Admin",
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
    const ipAddress = requestIP.getClientIp(req);
    let ipblocked = await ipdb.findOne({
      ip: ipAddress,
    });
    if (!ipblocked || ipblocked.count <= 20) {
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
      }
    } else {
      return res.status(405).json({
        message: "you have been blocked contact admin",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Some error occured!",
    });
  }
};
