const jwt = require('jsonwebtoken');
const SECRET=''


exports.isAuth = (req,res,next)=>{
    let token = req.body.token;
    if(!token)
    {
        res.status(401).json({
            message:"You are not authorized!"
        });
    }
    else
    {
        jwt.verify(token,SECRET,(err,data)=>{
            if(err)
            {
                res.status(401).json({
                    message:'session expired.',
                })
            }
            req.user = data;
            next();
        })
    }
};