const express = require('express');
const { SiteData } = require('../controllers/site_data_controller');

const router = express.Router();

router.get('',SiteData)

module.exports = router;