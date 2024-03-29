const team = require("../models/users/team");
const confirm = require("../util/confermationMail");
const parser = require("json2csv").Parser;
const ipdb = require("../models/ipblock");
const requestIP = require("request-ip");

function isEmailPrefixMatchingRoll(email, rollno) {
  const emailParts = email.split(".");
  const trimmedRoll = rollno.trim();
  return emailParts[0].toLowerCase() === trimmedRoll.toLowerCase();
}
async function isLead(rollno, eventname) {
  // console.log(rollno, eventname);
  const teamexist = await team.findOne({
    leadrollno: { $regex: new RegExp(`^${rollno}$`, "i") },
    eventname: eventname.trim(),
  });
  const result = teamexist !== null;
  // console.log(result);
  return result;
}

exports.addTeam = async (req, res) => {
  try {
    const ipAddress = requestIP.getClientIp(req);
    let ipblocked = await ipdb.findOne({
      ip: ipAddress,
    });
    if (!ipblocked || ipblocked.count < 20) {
      const {
        teamname,
        leadname,
        email,
        leadphone,
        leadrollno,
        eventname,
        memberrollno,
        memberemail,
      } = req.body;
      // console.log(req.body);
      const trimedrolllead = leadrollno.trim();
      const isleadValidlead = isEmailPrefixMatchingRoll(email, trimedrolllead);

      if (isleadValidlead) {
        const memberRollArray = await memberrollno
          .split(",")
          .map((rollno) => rollno.trim());
        const memberEmailArray = await memberemail
          .split(",")
          .map((email) => email.trim());
        const isValid = await memberRollArray.every((rollno, index) =>
          isEmailPrefixMatchingRoll(memberEmailArray[index], rollno)
        );
        if (isValid) {
          const teamexist = await team.findOne({
            leadrollno: { $regex: new RegExp(`^${trimedrolllead}$`, "i") },
            eventname: eventname.trim(),
          });
          // const memberasalead = await team.findOne({
          //   memberrollno: { $regex: new RegExp(`^${trimedrolllead}$`, "i") },
          //   eventname: eventname.trim(),
          // });
          // const memberasalead = await memberRollArray.every(async (rollno) => 
          //   await isLead(rollno, eventname)
          // );
          const anyMemberIsLead = await Promise.all(memberRollArray.map(async (rollno) =>
          await isLead(rollno, eventname)
        ));
          const memberAlreadyRegistered = await team.findOne({
            eventname: eventname,
            memberrollno: { $in: memberRollArray },
          });
          // console.log(memberasalead);

          if (!anyMemberIsLead.includes(true)) {
            if (!memberAlreadyRegistered) {
              if (!teamexist) {
                if (memberrollno === "" || memberemail === "") {
                  await team.create({
                    teamname,
                    leadname: leadname.trim(),
                    leademail: email,
                    leadrollno: leadrollno.trim().toUpperCase(),
                    leadphone: leadphone.trim(),
                    eventname,
                  });
                  await confirm.ConfrmReg({
                    eventname,
                    email,
                    leadname,
                    teamname,
                    memberrollno,
                    eventtype: "solo",
                  });
                  return res.status(200).json({
                    message: "Event added",
                  });
                } else {
                  await team.create({
                    teamname,
                    leadname: leadname.trim(),
                    leademail: email,
                    leadrollno: leadrollno.trim().toUpperCase(),
                    leadphone: leadphone.trim(),
                    eventname,
                    memberrollno: memberRollArray,
                    memberemail: memberEmailArray,
                  });
                  const mail = [email, memberemail.split(",")];
                  await confirm.ConfrmReg({
                    eventname,
                    email: mail,
                    leadname,
                    teamname,
                    memberrollno,
                    eventtype: "team",
                  });
                  return res.status(200).json({
                    message: "Event added",
                  });
                }
              } else {
                return res.status(400).json({
                  message: "You have Already Rgisterd as a team",
                });
              }
            } else {
              return res.status(400).json({
                message:
                  "Member is already registered for this event, select new member",
              });
            }
          } else {
            return res.status(400).json({
              message:
                "Member is already registered as a lead for this event, select new member",
            });
          }
        } else {
          return res.status(400).json({
            message: "Give the official mail of Members",
          });
        }
      } else {
        return res.status(400).json({
          message: "Give the offical mail of Lead",
        });
      }
    } else {
      return res.status(405).json({
        message: "you have tried to spam the server so you have been blocked",
      });
    }
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      return res.status(400).json({
        message: "Team name or email already exist.",
      });
    } else {
      console.error(error);
      return res.status(500).json({
        message: "Some error occurred",
      });
    }
  }
};

exports.teamfetchcsv = async (req, res) => {
  try {
    const { eventname } = req.params;
    let users = [];
    const userdata = await team.find({ eventname: eventname });
    userdata.forEach((user) => {
      const {
        teamname,
        leadname,
        leademail,
        leadphone,
        leadrollno,
        eventname,
        memberrollno,
        memberemail,
      } = user;
      const memberInforoll = memberrollno.join(",");
      const memberInfoemail = memberemail.join(",");
      users.push({
        teamname,
        leadname,
        leademail,
        leadphone,
        leadrollno,
        eventname,
        memberInfoemail,
        memberInforoll,
      });
    });
    if (users.length === 0) {
      return res.status(400).json({
        message: `no user registerd for ${eventname} or no event is present`,
      });
    }
    const fields = [
      "teamname",
      "leadname",
      "leademail",
      "leadphone",
      "leadrollno",
      "eventname",
      "memberInfoemail",
      "memberInforoll",
    ];
    const csvparser = new parser({ fields });
    const csvdsata = csvparser.parse(users);

    res.setHeader("Content-Type", "application/csv");
    res.setHeader(
      "Content-Disposition",
      `attachment;filename=${eventname}.csv`
    );
    return res.status(200).end(csvdsata);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Some error occurred",
    });
  }
};

exports.showdata=async (req,res)=>{
  try {
    const {eventname}=req.params;
    // console.log(req.params);
    const data=await team.find({eventname:eventname});
    return res.status(200).json({
      message:"data fetched",
      data,
      length:data.length,
    })
  } catch (error) {
    return res.status(500).json({
      message:"Request can't be proccesed"
    })
    
  }
}