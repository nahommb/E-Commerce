const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
   boardingImage:String,
   logo:String,
   siteName:String,
   vistors:Number,
});

const SiteDataModel = mongoose.model('siteData', siteSchema);

module.exports = SiteDataModel;