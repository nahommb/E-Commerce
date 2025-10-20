const User = require('../models/user_model');

const verificationController = async (req,res)=>{

    const { email, code } = req.body;
   console.log(req.body);
   const user = await User.findOne({ email:email, verificationCode: code , codeExpiresAt: { $gt: Date.now() } });

   if (!user) { 
     console.log('not verified')
     return res.status(400).json({ message: 'Invalid email or verification code',verified:false });
   }
  else{
   user.verified = true;
   user.verificationCode = null; // Clear the verification code
   await user.save();
   res.status(200).json({ message: 'Email verified successfully' ,verified:true});
  console.log(user)
  console.log('verified')
  }

 
  
}
  

module.exports = verificationController;  