
const User = require('../models/user_model');
const  bcrypt = require('bcrypt');

const registerController =  (req, res) => {

  try {
    const { first_name, last_name, email, password } = req.body;

    bcrypt.hash(password, 11, async (err, hashedPassword) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error hashing password' });
      }    
    
    console.log(req.body);
    User.findOne({ email }).then(async existingUser => {
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      else {
      const user = User(
        { 
        first_name:first_name,
        last_name: last_name, 
        email: email,
        role:req.body.role, 
         password: hashedPassword,
         created_at:Date.now()
        }
         );
       await user.save();
        res.status(201).json({ message: 'User registered successfully',registered:true });
      }
    });
    }
    );
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = registerController;