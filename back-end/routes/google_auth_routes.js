const express = require('express');
const router = express.Router();

const {googleLogin,googleAuthCallback} = require('../controllers/google_auth_controller');

router.get('/google',googleLogin);
router.get('/google/callback',googleAuthCallback);  

module.exports = router;