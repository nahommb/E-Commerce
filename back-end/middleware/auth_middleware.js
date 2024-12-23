const jwt = require('jsonwebtoken');
const User = require('../models/user_model');

const authMiddleware = async (req, res, next) =>{

  try{
    const token = req.cookies.refreshToken;

    const storedToken = await User.findOne({refreshToken:token});
    //  console.log(token)
    if (!token ) {
      
      return res.status(403).json({ message: 'No token provided' });
    }
  
    if (!storedToken) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        
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


const isAdminAuth = async (req, res, next) => {
   //console.log(req.user)

   try{
    const token = req.cookies.adminRefreshToken;
    const storedToken = await User.findOne({refreshToken:token});


    if (!token) {
      
      return res.status(403).json({ message: 'No token provided' });
    }
    
    if (!storedToken) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      await User.findById(decoded.id).then((user)=>{
        
        if(user){
            req.user = decoded; 
            if(user.role === 'admin'){
            
                next();
            }
          else{
              return res.status(403).json({ message: 'Unauthorized' });
            }
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


const isAdmin = async (req, res, next) => {
  
   await User.findOne({email:req.body.email}).then((user)=>{
    if(user){
        if(user.role === 'admin'){
            
            next();
        }
        else{
            return res.status(401).json({ message: 'Unauthorized' });
        }
    }
    else{
        return res.status(401).json({ message: 'User not found' });
    }
   })
}





  module.exports = {authMiddleware,isAdminAuth,isAdmin};