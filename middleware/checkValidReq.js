const bcrypt = require("bcrypt");

exports.validate = async (req, res, next) => {
  // exports.decryptpassword=async (password,hashedPassword)=>{
  //     const result=await bcrypt.compare(password,hashedPassword);
  //     return result;
  // }
  const password =
    "meranayacodemereawebsitekeliyeiskosecurebannekeliyeitnamehnatkarnapadegakyukisabmohmayahaimamhowareyouinmylifeaapkobahutjayadapayarkartehai";
  try {
    const hash = req.headers["x-webapp"];
    if(hash in hashbox){
        return res.status(401).json({
            message: "Multiple request Detected",
          });
    }

    const result = await bcrypt.compare(password, hash);
    if (result) {
        hashbox[hash]=1
      next();
    // console.log("Valid");
    } else {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};
