const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register_controller'); 
const loginController = require('../controllers/login_controller');
const validateTokenController = require('../controllers/validet_token_controller');
const {authMiddleware,isAdmin, isAdminAuth} = require('../middleware/auth_middleware');
const {userlogoutController,adminLogoutController} = require('../controllers/logout_controller');
const { changeName, changePassword } = require('../controllers/profile_controller');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/validate_token', authMiddleware,validateTokenController);
router.post('/logout',authMiddleware,userlogoutController);
router.post('/logout_admin',isAdminAuth,adminLogoutController);
router.post('/isAdmin',isAdmin,loginController);
router.post('/validate_admin_token',isAdminAuth,validateTokenController);
router.put('/change_password',isAdminAuth,changePassword); // for admin
router.put('/change_name',isAdminAuth,changeName);  // for admin 


module.exports = router;