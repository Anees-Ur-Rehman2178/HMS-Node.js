const jwt = require("jsonwebtoken");     // Importing json-web-token
require("dotenv").config();      // importing .env file

// syntex for creating middleware/authentication
const jwtAuthMiddleware = (req, res, next) => {
  // 1- the token/authorizatuion exist in the request or not (sb sy phly token mill rha ha ya nhi)
  const authorization = req.headers.authorization;
  if(!authorization) return res.status(401).json({error : "Token not found"})
  //2- Extracting jwt token form the request header     
  const token = req.headers.authorization.split(' ')[1];
  if (!token) return res.status(401).json({ error: "unauthorized" });      //  key mill rhi ha ya nhi

  try {
    // verify the JWT token we need two things 1- token 2- secret key matches or not
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;    // this is basically payload
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Invalid token" });
  }
};

// Function to generate JWT token
const generateToken = (userdata) => {       // 'userData' is basically payload which is almost user data
    // Generate a new JWT token using user data   
    return jwt.sign(userdata, process.env.JWT_SECRET, {expiresIn: 30000})     // 8 hours tkk vaiid rhy ga yh token
};

module.exports = {jwtAuthMiddleware, generateToken}; 
