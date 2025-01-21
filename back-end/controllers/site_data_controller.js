 const SiteDataModel = require('../models/site_model')
 const upload = require('../helper/image_uploader');
 const SiteData = async (req,res)=>{

    console.log('leeeeeeeeeeee')
    try{
        const siteData = await SiteData.find({})
        console.log(siteData);
        res.status(200).json(siteData)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

const addSiteData = async (req, res) => {
    try {
     
        upload.array('images', 1)(req, res, async (err) => {
          if (err) {
            return res.status(400).json({ message: err.message });
          }

          const  boardingImage = req.files;
          console.log(boardingImage);

          const siteData = new SiteDataModel({
            boardingImage,
            logo,
          });

          await siteData.save();

          res.status(200).json(siteData);
        });

      // Update or insert new site data test
      const siteData = await SiteData.findOneAndUpdate(
        {}, // Empty filter to match any existing document
        {
          boardingImage: req.body.boardingImage,
          logo: req.body.logo,
        },
        { upsert: true, new: true } // Create a new document if none exists
      );
  
      res.status(200).json(siteData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
module.exports = {SiteData}