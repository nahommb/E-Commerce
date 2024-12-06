const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register_controller'); 
const loginController = require('../controllers/login_controller');
const validateTokenController = require('../controllers/validet_token_controller');
const {authMiddleware,isAdmin, isAdminAuth} = require('../middleware/auth_middleware');
const logoutController = require('../controllers/logout_controller');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/validate_token', authMiddleware,validateTokenController);
router.post('/logout',authMiddleware,logoutController);
router.post('/isAdmin',isAdmin,loginController);
router.post('/validate_admin_token',isAdminAuth,validateTokenController);

module.exports = router;