const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register_controller'); 
const loginController = require('../controllers/login_controller');

router.post('/register', registerController);
router.post('/login', loginController);
module.exports = router;