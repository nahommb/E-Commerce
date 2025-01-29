const express = require('express');
const { SiteData, addSiteData } = require('../controllers/site_data_controller');

const router = express.Router();

router.get('',SiteData)
router.post('/add_data',addSiteData)

module.exports = router;