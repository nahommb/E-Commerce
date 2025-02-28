const User = require('../models/user_model');
const generateToken = require('../helper/generate_token')
const bcrypt = require('bcrypt');

const loginController = async (req, res) => {
  
  const { email, password } = req.body;
  console.log('check'+req.body.email)
  
 
  User.findOne({ email })
    .then(async user => {
    const checkPassword =  await bcrypt.compare(password,user.password)
   

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      if (!checkPassword) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      else{
        const token = generateToken(user);
              await User.findByIdAndUpdate(
            user._id,
            { refreshToken: token},
            { new: true }
        );

       // Remove the password field
         const updatedUser = await User.findById(user._id).select('-password');
       
        if(updatedUser.role ==='admin'){
          res.cookie('adminRefreshToken',token,{
            httpOnly:true,
            maxAge: 72 * 60 * 60 * 1000,
            secure: true,
            sameSite: 'None',
            path: "/",
        }) 
         } 
         else{
        //   res.cookie('refreshToken',token,{
        //     httpOnly:true,
        //     maxAge: 72 * 60 * 60 * 1000,
        //     secure: true,
        //     sameSite: 'None',
        // })
        res.cookie('refreshToken', token, {
          httpOnly: true,
          secure: true,  // Required for HTTPS
          sameSite: "None",  // Allows cross-site usage
          path: "/",  // Ensures the cookie is available for all routes
          maxAge: 72 * 60 * 60 * 1000, // 72 hours
        });
        
         }
      
       // console.log(updatedUser)
        res.status(200).json({ message: 'Login successful',updatedUser:updatedUser });
      }
      
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
};


module.exports = loginController;