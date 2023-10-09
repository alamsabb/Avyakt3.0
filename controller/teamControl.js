const team = require("../models/users/team");
const confirm = require("../util/confermationMail");
const parser = require("json2csv").Parser;

function isEmailPrefixMatchingRoll(email, rollno) {
  const emailParts = email.split(".");
  const trimmedRoll = rollno.trim();
  return emailParts[0].toLowerCase() === trimmedRoll.toLowerCase();
}

exports.addTeam = async (req, res) => {
  try {
    const {
      teamname,
      leadname,
      leademail,
      leadphone,
      leadrollno,
      eventname,
      memberrollno,
      memberemail,
    } = req.body;
    const trimedrolllead = leadrollno.trim();
    const isleadValidlead = isEmailPrefixMatchingRoll(
      leademail,
      trimedrolllead
    );
    if (isleadValidlead) {
      const memberRollArray = await memberrollno.split(",");
      const memberEmailArray = await memberemail.split(",");
      const isValid = await memberRollArray.every((rollno, index) =>
        isEmailPrefixMatchingRoll(memberEmailArray[index], rollno)
      );
      if (isValid) {
        const teamexist = await team.findOne({
          leadrollno: { $regex: new RegExp(`^${trimedrolllead}$`, "i") },
          eventname: eventname.trim(),
        });
        const memberasalead = await team.findOne({
          memberrollno: { $regex: new RegExp(`^${trimedrolllead}$`, "i") },
          eventname: eventname.trim(),
        });
        if(!memberasalead){
            if(!teamexist){
                await team.create({
                    teamname,
                    leadname,
                    leademail,
                    leadrollno,
                    leadphone,
                    eventname,
                    memberrollno: memberRollArray,
                    memberemail: memberEmailArray,
                  });
                const mail=[leademail,memberemail.split(",")];
                await confirm.ConfrmReg({
                    eventname,
                    email:mail,
                    leadname,
                    teamname,
                    memberrollno
                });    
                return res.status(200).json({
                    message:'Event added'
                });               
                
            }else{
                return res.status(400).json({
                    message:"You have Already Rgisterd as a team"
                });
            }

        }else{
            return res.status(400).json({
                message:"One of you Member is registerd as a lead for the event"
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
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      return res.status(400).json({
        message: "Team name or email already exist.", // Updated error message
      });
    } else {
      console.error(error);
      return res.status(500).json({
        message: "Some error occurred",
      });
    }
  }
};
