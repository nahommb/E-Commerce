const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register_controller'); 
const loginController = require('../controllers/login_controller');
const validateTokenController = require('../controllers/validet_token_controller');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/validate_token', validateTokenController);


module.exports = router;