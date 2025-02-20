 const SiteDataModel = require('../models/site_model')
 const {siteDataUpload} = require('../helper/image_uploader');
 const { v2: cloudinary } = require('cloudinary');
 const SiteData = async (req,res)=>{

    console.log('leeeeeeeeeeee')
    try{
        const siteData = await SiteDataModel.find({})
        const recent = siteData.length
        res.status(200).json(siteData[recent-1])
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

const addSiteData = async (req, res) => {
    try {
      
        siteDataUpload.array('images', 1)(req, res, async (err) => {
          if (err) {
            return res.status(400).json({ message: err.message });
          }

          const  boardingImage = req.files;
          console.log(boardingImage); 
          // console.log(boardingImage[0].path); 
         
          const siteData = new SiteDataModel({
            siteName:'Niya Sports Wear', 
            boardingImage:boardingImage[0].path,
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