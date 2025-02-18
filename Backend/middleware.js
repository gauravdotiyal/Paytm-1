const {JWT_SECRET} = require('./config');
const jwt=require("jsonwebtoken")

const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({
            message:"Headers message unrecognized"
        })
    }

    const token=authHeader.split(' ')[1];
    // console.log(token);
    // console.log(JWT_SECRET);
    
    try {
        const decoded=jwt.verify(token,JWT_SECRET); 
        req.userId=decoded.userId; 
        next();
    } catch (error) {
        // console.log(error);
        res.status(403).json({
            message:"Token not verified"
        })
    }

}

module.exports={
    authMiddleware
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2I0NWVmYmFjNTE4NWNmYmU2NmRiZGIiLCJpYXQiOjE3Mzk4NzQwNDN9.m8iMAqJA408ApO9cJdMUdU6ksvphubtefTrP18ga0cg   