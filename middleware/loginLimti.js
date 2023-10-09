const limit=require('express-rate-limit');
exports.limit=()=>{
    const lim=limit({
        windowMs:4 * 60 * 1000,
        max:5
    });
    return lim;
}
  
