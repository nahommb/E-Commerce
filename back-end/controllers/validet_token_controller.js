const User = require("../models/user_model");

const valideteTokenController = (req, res) => {

   // console.log(req.user)
    User.findById(req.user.id).then((user) => {
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'Token is valid',user:user ,valideToken:true});
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    });
    // res.status(200).json({ message: 'Token is valid' ,valideToken:true});
   }

module.exports = valideteTokenController;