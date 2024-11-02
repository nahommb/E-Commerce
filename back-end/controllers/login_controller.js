const User = require('../models/user_model');
const generateToken = require('../helper/generate_token')


const loginController = (req, res) => {
  
  const { email, password } = req.body;
  console.log(req.body)
  
  User.findOne({ email })
    .then(async user => {
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      else{
        const token = generateToken(user);
        
        const updatedUser = await User.findByIdAndUpdate(
            user._id,
            { refreshToken: token},
            { new: true }
        );
        res.cookie('refreshToken',token,{
            httpOnly:true,
            maxAge: 72 * 60 * 60 * 1000,
        })
        res.status(200).json({ message: 'Login successful',updatedUser });
      }
      
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
};

module.exports = loginController;