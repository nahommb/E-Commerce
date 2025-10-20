const { verify } = require('jsonwebtoken');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    // required: true,
  },
  email: {
    type: String, 
    required: true,
  },
  role:{
    type:String,
    default:'user',
  },
  password: {
    type: String,
    // required: true,
  },
  created_at:{
    type:Date
  },
  refreshToken: { 
    type: String,
  },
  verified:{
    type:Boolean,
    default:false
  },
  verificationCode:{
    type:String,
  },
  codeExpiresAt:{
    type:Date,
  }

});

const User = mongoose.model('users', userSchema);
module.exports = User;