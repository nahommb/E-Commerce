const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  boardingImage: String,
  logo: String,
  siteName: String,
  vistors: {
    thisWeek: { type: Number, default: 0 },
    previousWeek: { type: Number, default: 0 },
    twoWeeksAgo: { type: Number, default: 0 },
    threeWeeksAgo: { type: Number, default: 0 },
  },
});

const SiteDataModel = mongoose.model('siteData', siteSchema);

module.exports = SiteDataModel;
