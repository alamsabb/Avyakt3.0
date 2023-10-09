const otpGenerator = require("otp-generator");

exports.genotp = () => {
    return otpGenerator.generate(4, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      }); 
};
