const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String, 
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at:{
    type:Date
  },
  refreshToken: { 
    type: String,
  },

});

const User = mongoose.model('users', userSchema);
module.exports = User;