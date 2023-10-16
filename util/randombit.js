exports.generatebit = (data) => {
  let middleBit = "0";
  if (data.middle === "1") {
    middleBit = "1";
  } else {
    middleBit = "0";
  }
  let secondToLastBit = "0";
  if (data.secondlast === "1") {
    secondToLastBit = "1";
  } else {
    secondToLastBit = "0";
  }
  const otp = data.botp;
  const otpinstr = otp.toString();

  const modifiedOTP =
    otpinstr.substring(0, 2) +
    middleBit +
    otpinstr.substring(2, 3) +
    secondToLastBit +
    otpinstr.substring(3, 4);

  const binaryNumber = parseInt(modifiedOTP, 10).toString(2);

  return binaryNumber;
};
