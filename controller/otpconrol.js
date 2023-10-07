const otpgen=require('../util/otpgen');
const otpModel=require('../models/otp');
const sendMail=require('../util/mailer');



exports.sendotp=async (req,res) =>{
    const{email} =req.body;
    // console.log(email);
    try {
        // const User = await user.findOne({email:email});
        // console.log(User);
        // if(User) {
            let Otp = await otpModel.findOne({ email: email });
            
            if (!Otp) {
                let otpCode = await otpgen.genotp();
                await otpModel.create({
                    email,
                    otp: otpCode
                });
                await sendMail.sendMail({
                    email,
                    otp: otpCode
                })
                return res.status(200).json({
                    message: "Otp has been sent to your email."
                })
            }
            else {
                await sendMail.sendMail({
                    email,
                    otp: Otp.otp
                })
                return res.status(200).json({
                    message: "Otp has been sent to your email."
                })
            }
        }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "some error occured"
        })
    }
}


exports.verifyOtp = async (req, res) => {
    console.log(req.body);
    const { email, otp } = req.body;
    const OtpData = await otpModel.findOne({ email: email });
    let otpnum=Number(otp);
    try {
        if (OtpData.otp === otpnum) {
            await otpModel.deleteOne({otp:OtpData.otp})
            return res.status(200).json({
                message: "Verified"
            })
        }
        else {
            return res.status(401).json({
                message: "Invalid Otp"
            })
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Some error occured!"
        })
    }
};