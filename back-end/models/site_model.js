const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
   boardingImage:String,
   logo:String,
   siteName:String,
});

const SiteDataModel = mongoose.model('siteData', siteSchema);

module.exports = SiteDataModel;