

exports.generatebit = (data) => {
  const firstBits = Math.floor(Math.random() * 4)
    .toString(2)
    .padStart(2, "0");

  // Generate the last 3 bits randomly
  const lastBits = Math.floor(Math.random() * 8)
    .toString(2)
    .padStart(3, "0");

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
  binaryotp = otp.toString(2);

  const binaryNumber =
    firstBits + middleBit + secondToLastBit + lastBits + binaryotp;

  return binaryNumber;
};
