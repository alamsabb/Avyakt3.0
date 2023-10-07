const otpGenerator = require("otp-generator");

exports.genotp = () => {
    return otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      }); 
};
