const jwt = require('jsonwebtoken');
const User = require('../models/user_model');

const authMiddleware = async (req, res, next) =>{

  try{
    const token = req.cookies.refreshToken;
    //  console.log(token)
    if (!token) {
      
      return res.status(403).json({ message: 'No token provided' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      //  console.log(decoded)
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      await User.findById(decoded.id).then((user)=>{
        
        if(user){
            req.user = decoded; 
          
             next();
        }
        else{
            return res.status(401).json({ message: 'User not found' });
        }
      })    
     
    });
  }
  catch(error){
    return res.status(500).json({ message: 'Internal server error' });
  }
   
  } 

  module.exports = authMiddleware;