const express = require("express");
const app = express();
const limit = require("express-rate-limit");
const requestIP = require("request-ip");
const ipdb = require("../models/ipblock");

const lim = limit({
  windowMs: 20 * 1000,
  max: 5,
});
app.get("/health", (req, res) => {
  return res.send("app is runnind fine");
});

const otplim = limit({
  windowMs: 5 * 60 * 1000,
  max: 6,
  handler: async (req, res) => {
    try {
      const ipAddress = requestIP.getClientIp(req);
      const ipAddress1 =
        req.header("x-forwarded-for") || req.socket.remoteAddress;
      const reqip = req.ip;

      console.log("Lib", ipAddress);
      console.log("header", ipAddress1);
      console.log("req.ip", reqip);
      let ipblocked = await ipdb.findOne({ ip: ipAddress });
      if (!ipblocked) {
        await ipdb.create({
          ip: ipAddress,
          count: 1,
        });
        return res.status(429).json({
          message:
            "too many request try again after some time or else you will be blocked",
        });
      } else {
        await ipdb.updateOne({ ip: ipAddress }, { $inc: { count: 1 } });
        if (ipblocked.count >= 20) {
          return res.status(403).json({
            message: "you have been blocked contact the admin 9668887102",
          });
        }else{
            return res.status(405).json({
                message:"Do not try Again you will be blocked"
            })
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        message: "Too many request",
      });
    }
  },
});

const otpcontrol = require("../controller/otpcontroll");
// app.post("/sendotp", otplim, otpcontrol.sendotp);
const headermiddle=require('../middleware/checkValidReq');
app.post("/sendotp", headermiddle.validate,otplim, otpcontrol.sendotp);
app.post("/android/app/jetpackcompose/sendotp",otplim,otpcontrol.sendotp);
app.post("/verifyotp", otplim, otpcontrol.verifyOtp);

// add event data
const isvarify = require("../middleware/isverified");
const solocontrol = require("../controller/solocontroller");
app.post("/registersolo", lim, isvarify.isverified, solocontrol.addData);

const teamcontrol = require("../controller/teamControl");
app.post("/addteam", lim,isvarify.isverified, teamcontrol.addTeam);

app.get('/ip', (request, response) => response.send(request.ip))
app.get('/ip2', (request, response) => response.send(request.headers['x-forwarded-for']))


// const report=require('../controller/Report');
// app.get('/report',report.genreport);
const DreamTeam = require("../controller/DreamTeam");
app.get("/Dream-Team",DreamTeam.getDreeamTeam);

const auth=require("../controller/AuthController");
app.post("/login",auth.login);

module.exports = app;
