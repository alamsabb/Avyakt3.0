const solo = require("../models/users/solo");
const confirm = require("../util/confermationMail");
const parser = require("json2csv").Parser;

exports.addData = async (req, res) => {
  try {
    let { name, rollno, eventname, email, phone, gender } = req.body;
    console.log(eventname);

    const emailroll = email.split(".");
    const trimedroll = rollno.trim();
    const userrollExist = await solo.findOne({
      rollno: { $regex: new RegExp(`^${trimedroll}$`, "i") },
    });
    if (emailroll[0].toLowerCase() === trimedroll.toLowerCase()) {
      if (!userrollExist) {
        const upperroll = rollno.toUpperCase();
        console.log(upperroll);
        await solo.create({
          name,
          rollno: upperroll,
          email,
          phone,
          eventname: [eventname],
          gender,
        });
        await confirm.ConfrmReg({
          eventname,
          email,
          name,
          eventtype:'solo'
        });
        console.log("New user added");
        return res.status(200).json({
          message: "New user added",
        });
      } else {
        if (userrollExist.eventname.includes(eventname)) {
          console.log("event already their");
          return res.status(400).json({
            message: "Event already added",
          });
        } else {
          userrollExist.eventname.push(eventname);
          await userrollExist.save();
          console.log("Event Added");
          await confirm.ConfrmReg({
            eventname,
            email: userrollExist.email,
            name,
            eventtype:'solo'
          });
          return res.status(200).json({
            message: "Event Added",
          });
        }
      }
    } else {
      return res.status(400).json({
        message: "Add your official mail of Giet",
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

exports.showData = async (req, res) => {
  res.status(400);
};

exports.fetchcsv = async (req, res) => {
  try {
    const { eventname, gender } = req.params;
    let users = [];
    const userdata = await solo.find({ eventname: eventname, gender: gender });
    // console.log(userdata);
    userdata.forEach((user) => {
      const { name, rollno, email, phone, gender } = user;
      users.push({ rollno, name, email, phone, gender });
    });
    // console.log(users);
    if (users.length === 0) {
      return res.status(400).json({
        message: `no user registerd for ${eventname} or no event is present`,
      });
    }
    const csvfield = ["Roll no", "Name", "Email", "phone", "gender"];
    const csvparser = new parser({ csvfield });
    const csvdsata = csvparser.parse(users);

    res.setHeader("Content-Type", "application/csv");
    res.setHeader(
      "Content-Disposition",
      `attachment;filename=${eventname}-${gender}.csv`
    );
    return res.status(200).end(csvdsata);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
