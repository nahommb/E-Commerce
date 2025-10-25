
require('dotenv').config();
const User = require('../models/user_model');
const  bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const host = process.env.MAIL_HOST;
const port = process.env.MAIL_PORT;
const user = process.env.MAIL_USERNAME;
const pass = process.env.MAIL_PASSWORD;



const transporter = nodemailer.createTransport({
    host: host,
    port: port, // or 587
    secure: true, // true for 465, false for 587
    auth: {
        user: user,
        pass: pass,
    },
});



async function sendVerificationEmail(to, code) {
    const info = await transporter.sendMail({
        from: `"Niya sports wear" <${user}>`,
        to: to,
        subject: "Verify your account",
        text: `Your verification code is: ${code}`,
        html: `<p>Your verification code is: <b>${code}</b></p>`,
    });

    console.log("Message sent: %s", info.messageId);
} 


const registerController =  (req, res) => {

  const verificationCode = crypto.randomInt(100000, 999999).toString();

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
        if(existingUser.verified){
        return res.status(400).json({ message: 'Email already exists' ,verified:true});
      }
      else{
        //resend verification code
         existingUser.verificationCode = verificationCode;
         existingUser.codeExpiresAt = Date.now()+5*60*1000; //5 min
         existingUser.first_name = first_name;
         existingUser.last_name = last_name;
         existingUser.password = hashedPassword;
         await existingUser.save();
         await sendVerificationEmail(email, verificationCode).catch(console.error);
        return res.status(200).json({ message: 'Verification code resent',verified:false });
      }  
    }  
      else {
      await sendVerificationEmail(email, verificationCode).catch(console.error);
      const user = User(
        {  
        first_name:first_name, 
        last_name: last_name, 
        email: email,
        role:req.body.role, 
         password: hashedPassword,
         verified:false,
         verificationCode:verificationCode,
         codeExpiresAt:Date.now()+5*60*1000, //5 min
         created_at:Date.now()
        }
         ); 
       await user.save();
        res.status(201).json({ message: 'User registered successfully',registered:true ,verified:false });
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