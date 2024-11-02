const jwt = require('jsonwebtoken');
const User = require('../models/user_model');

const authMiddleware = async (req, res, next) =>{
    const token = req.headers['authorization']?.split(' ')[1];
  
    if (!token) {
      return res.status(403).json({ message: 'No token provided' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      console.log(decoded);
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

  module.exports = authMiddleware;