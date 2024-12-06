const User = require("../models/user_model");
const bcrypt = require('bcrypt');

const ChangeName = async (req, res) => {
  const { first_name, last_name } = req.body;

  try{
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.first_name = first_name||user.first_name;
    user.last_name = last_name||user.last_name;
    await user.save();
    res.status(200).json({ message: 'Name updated successfully' });
  }
  catch(error){
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const ChangePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
 
try{


//   User.findById(req.user.id).then((user) => {
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     if (user.password !== currentPassword) {
//       return res.status(401).json({ message: 'Current password is incorrect' });
//     }
//     user.password = newPassword;
//     user.save().then(() => {
//       res.status(200).json({ message: 'Password updated successfully' });
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     });
//   })
}
  catch(error){
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = { ChangeName };