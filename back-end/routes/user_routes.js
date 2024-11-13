const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register_controller'); 
const loginController = require('../controllers/login_controller');
const validateTokenController = require('../controllers/validet_token_controller');
const authMiddleware = require('../middleware/auth_middleware');
const logoutController = require('../controllers/logout_conroller');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/validate_token', authMiddleware,validateTokenController);
router.post('/logout',authMiddleware,logoutController);

module.exports = router;