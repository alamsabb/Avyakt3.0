const jwt = require("jsonwebtoken");
const SECRET = "AVYAKT3.0@COMPUTERCSEDEPT";
exports.genJwt = async (data) => {
  return jwt.sign(data, SECRET, {
    expiresIn: "30m",
  });
};
