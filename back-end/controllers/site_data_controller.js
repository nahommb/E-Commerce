 const SiteDataModel = require('../models/site_model')
 const {siteDataUpload} = require('../helper/image_uploader');
 const { v2: cloudinary } = require('cloudinary');
const { findOneAndUpdate } = require('../models/product_model');

const SiteData = async (req, res) => {
  console.log('leeeeeeeeeeee 11');

  try {
    const siteData = await SiteDataModel.find({});
    const recent = siteData.length;

    const lastEntry = siteData[recent - 1];

    console.log(lastEntry.vistors);
    console.log(lastEntry.vistors.thisWeek);

    const dayOfUpdate = new Date(lastEntry.vistors.updateDate);
    const afterWeek = new Date(dayOfUpdate);
    afterWeek.setDate(dayOfUpdate.getDate() + 7);
    const today = Date.now();
    const isDayToUpdate = today>afterWeek;
     console.log(isDayToUpdate);
    if(isDayToUpdate){
       
     const previousWeek = lastEntry.vistors.thisWeek
      const twoWeeksAgo = lastEntry.vistors.previousWeek
       const threeWeeksAgo = lastEntry.vistors.twoWeeksAgo
       const currentDate = new Date(lastEntry.vistors.updateDate);
       const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 7);
 
       const updated = await SiteDataModel.findByIdAndUpdate(
      lastEntry._id,
      { $set: { vistors: {  
        updateDate: newDate,
        thisWeek: 1,
        previousWeek: previousWeek,  
        twoWeeksAgo:  twoWeeksAgo,
        threeWeeksAgo: threeWeeksAgo
      }} },
      { new: true } // optional: returns the updated document
    );
    res.status(200).json(updated);
    }
  
   else{
       const updated = await SiteDataModel.findByIdAndUpdate(
      lastEntry._id,
      { $set: { vistors: {
        updateDate: lastEntry.vistors.updateDate,
        thisWeek: lastEntry.vistors.thisWeek + 1,
        previousWeek: lastEntry.vistors.previousWeek,
        twoWeeksAgo: lastEntry.vistors.twoWeeksAgo,
        threeWeeksAgo: lastEntry.vistors.threeWeeksAgo,
      }} },
      { new: true } // optional: returns the updated document
    );

    res.status(200).json(updated); 
   } 

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

 
const addSiteData = async (req, res) => {
    try {
      
        siteDataUpload.array('images', 1)(req, res, async (err) => {
          if (err) {
            return res.status(400).json({ message: err.message });
          }

          const  boardingImage = req.files;
          console.log(boardingImage);  
          // console.log(boardingImage[0].path); 
         const oldsiteData = await SiteDataModel.find({})
          const len = siteData.length
          const vistors = oldsiteData[len-1].vistors


          const siteData = new SiteDataModel({
            siteName:'Niya Sports Wear', 
            boardingImage:boardingImage[0].path,
            vistors:vistors
          });

           await siteData.save();

           const dataLength = (await SiteDataModel.find({})).length

           if(dataLength>1){
           const oldData = await SiteDataModel.findOne({})
           const publicId = oldData.boardingImage.split('/').pop().split('.')[0];
           
           await oldData.deleteOne()
          //  SiteDataModel.findByIdAndDelete(oldData._id)
           cloudinary.uploader.destroy(`site/${publicId}`);
           }

 

           res.status(200).json({message:'successfuly uploaded'});
        });
 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }; 
module.exports = {SiteData, addSiteData}