
const valideteTokenController = (req, res) => {

    res.status(200).json({ message: 'Token is valid' ,valideToken:true});
   }

module.exports = valideteTokenController;