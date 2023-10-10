const nodemailer = require("nodemailer");

exports.ConfrmReg = async (data) => {
  APP_EMAIL = "csefest@giet.edu";
  APP_PASSWORD = "ufjekqhelpayoglo";
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });
    console.log(data);

    let solo = `<!doctype html>
        <html lang="en-US">
        
        <head>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
            <title>Otp</title>
            <meta name="description" content="Otp is here">
            <style type="text/css">
                a:hover 
                {
                  text-decoration: underline !important;
                }
            </style>
        </head>
        
        <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
            <!--100% body table-->
            <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
                style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                <tr>
                    <td>
                        <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                            align="center" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="height:80px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align:center;">
                                    <img width="300" src="https://i.postimg.cc/1RkLjXLd/Untitled-4.png" title="logo" alt="logo">
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                        style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06); margin-top: -3%;">
                                        <tr>
                                            <td style="height:5rem;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0 35px;">
                                                <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">AVYAKT <strong>3.0</strong></h1>
                                                <span
                                                    style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                  <p>  </p>
                                                  <tr>
                                                    <td>You Have Successfully Registered for the event<td>
                                                  <tr>
                                                  <tr>
                                                    <td>
                                                      <span style="color: black;font-size:20px;"><span>
                                                      <b style="color: red;font-size:20px;"> ${data.eventname} </b>
                                                    <td>
                                                  <tr>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                          <td style="height:20px;">&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            <tr>
                                <td style="height:20px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align:center;">
                                    <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;"></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="height:80px;">&nbsp;</td>
                                <tr>
                                    <td><b style="font-size:20px">Dept. Computer Science & Engineering</b></td>
                                </tr>
                                <tr>
                                  <td><span style="font-size:10px">GIET University</span></td>
                                </tr>
                            </tr>
                            <tr>
                                <td style="height:20px;">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <!--/100% body table-->
        </body>
        
        </html>`;
    let team = `<!doctype html>
        <html lang="en-US">
        
        <head>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
            <title>Otp</title>
            <meta name="description" content="Otp is here">
            <style type="text/css">
                a:hover 
                {
                  text-decoration: underline !important;
                }
            </style>
        </head>
        
        <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
            <!--100% body table-->
            <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
                style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                <tr>
                    <td>
                        <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                            align="center" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="height:80px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align:center;">
                                    <img width="300" src="https://i.postimg.cc/1RkLjXLd/Untitled-4.png" title="logo" alt="logo">
                                </td>
                            </tr>
                            <tr>
                                <td style="height:20px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td>
                                    <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                        style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                        <tr>
                                            <td style="height:40px;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0 35px;">
                                                <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">AVYAKT <strong style="color: #1e1e2d;">3.0</strong></h1>
                                                <span
                                                    style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                  <p>  </p>
                                                  <tr>
                                                    <td>
                                                      <h1>Registration Successfull for <span style="color: red;">${
                                                        data.eventname
                                                      }</span></h1>
                                                    <td>
                                                  <tr>
                                                  <tr>
                                                  <td>
                                                  ${
                                                    data.teamname
                                                      ? `<span style="font-size:20px;">Team Name:-</span><span style="color: red;font-size:20px;">${data.teamname}</span>`
                                                      : ""
                                                  }
                                              </td>
        
                                                  <tr>
                                                  <tr>
                                                    <td>
                                                      <span style="font-size:16px;">Lead Name:-</span? 
                                                      <span style="color: red;font-size:16px;">${
                                                        data.leadname
                                                      }</span>
                                                    <td>
                                                  <tr>
                                                  <tr>
                                                    <td>
                                                      <span style="font-size:16px;">Member Roll:-</span? 
                                                      <span style="color: red;font-size:16px;">${
                                                        data.memberrollno
                                                      }</span>
                                                    <td>
                                                  <tr>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                          <td style="height:20px;">&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            <tr>
                                <td style="height:20px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align:center;">
                                    <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;"></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="height:80px;">&nbsp;</td>
                                <tr>
                                    <td><b style="font-size:20px">Dept. Computer Science & Engineering</b></td>
                                </tr>
                                <tr>
                                  <td><span style="font-size:10px">GIET University</span></td>
                                </tr>
                            </tr>
                            <tr>
                                <td style="height:20px;">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <!--/100% body table-->
        </body>
        
        </html>`;

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Registration Successfull 👻" <${process.env.APP_EMAIL}>`, // sender address
      to: `${data.email}`, // list of receivers
      subject: `Registration Successfull for ${data.eventname}`,
      html: data.eventtype == "solo" ? solo : team,
    });
    console.log("Message sent: %s", info.messageId, data.email);
  } catch (error) {
    console.log(error);
  }
};
