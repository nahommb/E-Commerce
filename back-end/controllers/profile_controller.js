const User = require("../models/user_model");
const bcrypt = require('bcrypt');

const changeName = async (req, res) => {
  const { first_name, last_name } = req.body;

  console.log(req.body)
  try{
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.first_name = first_name||user.first_name;
    user.last_name = last_name||user.last_name;
    await user.save();
    res.status(200).json({ message: 'Name updated successfully' ,user:user});
  }
  catch(error){
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  
try{

  User.findByIdAndUpdate(req.user.id).then((user)=>{
    if(user){
      bcrypt.compare(user.password,currentPassword).then((err,result)=>{
        if(err){
          return res.status(401).json({ message: 'Current password is incorrect' });
        }
        else{
          bcrypt.hash(newPassword,11).then((hash)=>{
            user.password = hash;
            user.save().then(()=>{
              res.status(200).json({message:'password changed'})
      })
    })}
  })}
})
}
  catch(error){
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = { changeName,changePassword };