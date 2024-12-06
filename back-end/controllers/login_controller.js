const User = require('../models/user_model');
const generateToken = require('../helper/generate_token')
const bcrypt = require('bcrypt');


const loginController = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(async user => {
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Compare the provided password with the stored hash
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Password is correct; proceed with generating a token
      const token = generateToken(user);

      // Update the user's refresh token
      await User.findByIdAndUpdate(
        user._id,
        { refreshToken: token },
        { new: true }
      );

      // Remove the password field from the user object
      const updatedUser = await User.findById(user._id).select('-password');

      // Set the appropriate cookie based on user role
      if (updatedUser.role === 'admin') {
        res.cookie('adminRefreshToken', token, {
          httpOnly: true,
          maxAge: 72 * 60 * 60 * 1000, // 72 hours
        });
      } else {
        res.cookie('refreshToken', token, {
          httpOnly: true,
          maxAge: 72 * 60 * 60 * 1000, // 72 hours
        });
      }

      res.status(200).json({ message: 'Login successful', updatedUser });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
};


module.exports = loginController;