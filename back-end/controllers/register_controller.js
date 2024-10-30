const User = require('../models/user_module');

const registerController = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const user = User({ first_name, last_name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = registerController;