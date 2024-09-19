const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.auth = async (req, res, next) => {
    try{

        
        const token = req.body.token 
                        || req.header("Authorization").replace("Bearer ", "");
        
        if(!token) {
            return res.status(401).json({
                success:false,
                message:'Token is missing',
            });
        }

        //verify the token
        // console.log('token ',token)
        try{
            const decode =  jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        }
        catch(err) {
            //verification - issue
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        next();
    }
    catch(error) {  
        return res.status(401).json({
            success:false,
            message:'Something went wrong while validating the token',
        });
    }
}