const nodemailer = require("nodemailer");

exports.CnfReg = async (data)=>{    
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
        // let solo=`<!DOCTYPE html>
        // <html>
        // <head>
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        // <link rel="preconnect" href="https://fonts.googleapis.com">
        // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        // <link href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap" rel="stylesheet">
        // <link href="https://fonts.cdnfonts.com/css/ethnocentric" rel="stylesheet">
        // <link rel="preconnect" href="https://fonts.googleapis.com">
        
        // <link rel="preconnect" href="https://fonts.googleapis.com">
        // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        // <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet">
        // <style>
        //   .con{
        //     display: flex;
        //     justify-content: center;
        //   }
        // .card {
        //   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        //   transition: 0.3s;
        //   width: 100%;
        //   height: auto;
        //   height: 1200px;
        //   /* padding: 3px ; */
        
        // }
        
        
        // .container {
        //     margin-top: 33%;
        //   padding: 2px 16px;
        // }
        // .text-otp {
        //   position: absolute;
        //   top: 64%;
        //   left: 55%;
        //   transform: translate(-50%, -50%);
        //   text-align: center;
        //   color: white;
        //   font-family: 'Black Ops One', cursive;
        // color: black;
        // }
        // .text-promo {
        //   position: absolute;
        //   top: 52%;
        //   left: 49%;
        //   transform: translate(-50%, -50%);
        //   text-align: center;
        //   color: white;
        //   font-family: 'Shrikhand', cursive;
        //   color: #C64596;
        //   margin-top: 204px;
        
        // }
        // .divo{
        //     position: relative;
        
        // }
        // </style>
        // </head>
        // <body>
        //   <div class="con">
        // <div class="card">
        // <div class="divo">
        //   <img src="https://i.postimg.cc/rw2fGG1S/promo.gif"  style="width:96%; height:30%; margin-left: 5px;margin-top: 6px;">
          
        // </div>
        // <div class="divo">
        //   <!-- <img src="https://i.postimg.cc/RC8Jm5cC/Purple-Futuristic-National-Space-Day-Animated-Social-Media.png" style="width:96%; height:30%; margin-left: 5px;margin-top: -4px;"> -->
        //   <div class="text-promo">
        //     <h3 style="font-size:60px;">Registration Successful for the </h3>
        //     <h3 style="font-size:60px;">${(data.eventname)}</h3>
        //   </div>
        //   <!-- <div class="text-otp">
        //     <h3 style="font-size:17px;"> 123678</h3>
        //   </div> -->
        // </div>
        //   <div class="container">
        //     <h4>Dept. Computer<br>Science & Engineering</h4> 
        //     <h4></h4> 
        //     <p>GIET University</p> 
        //   </div>
        // </div>
        // </div>
        
        // </body>
        // </html>
        
        // `;
        
        let solo=`<!doctype html>
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
                                    <img style="height: 61%; width: 95%; " src="https://i.postimg.cc/rw2fGG1S/promo.gif" title="logo" alt="logo">
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
                                                    <td>You Have Successfully Registered forthe event<td>
                                                  <tr>
                                                  <tr>
                                                    <td>
                                                      <span style="color: black;font-size:20px;">Your otp For the event ${data.eventname} is:-<span>
                                                      <b style="color: red;font-size:20px;">${data.otp}</b>
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
        
        </html>`
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
                                    <img width="200" src="https://i.postimg.cc/gk3q1vTZ/Screenshot-1-removebg-preview.png" title="logo" alt="logo">
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
                                                <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">AVYAKT <strong style="color: red;">2.0</strong></h1>
                                                <span
                                                    style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                  <p>  </p>
                                                  <tr>
                                                    <td>
                                                      <h1><span style="color: red;">R</span>egistration Successfull for ${
                                                        data.eventname
                                                      }</h1>
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
                                                      <span style="color: red;font-size:16px;">${data.leadname}</span>
                                                    <td>
                                                  <tr>
                                                  <tr>
                                                    <td>
                                                      <span style="font-size:16px;">Member Roll:-</span? 
                                                      <span style="color: red;font-size:16px;">${data.memberrollno}</span>
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
            subject: `Registration Successfull for ${data.eventname}`, // Subject line
            // text: 'Your otp is:-', // plain text body
            // html: `<span style="color: black;font-size:20px;">Your opt is:-<span>
            // <b style="color: red;font-size:20px;">${data.otp}</b>`, // html body
            html:Array.isArray(data.emial) ?solo:team,
          });
        
          console.log("Message sent: %s", info.messageId, data.email);
        
        
    } catch (error) {
        console.log(error);
        
    }
  };