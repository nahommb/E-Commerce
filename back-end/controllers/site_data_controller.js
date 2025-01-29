 const SiteDataModel = require('../models/site_model')
 const {siteDataUpload} = require('../helper/image_uploader');
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
     
        siteDataUpload.array('images', 1)(req, res, async (err) => {
          if (err) {
            return res.status(400).json({ message: err.message });
          }

          const  boardingImage = req.files;
          console.log(boardingImage[0].path);
         
          const siteData = new SiteDataModel({
            siteName:'Niya Sports Wear',
            boardingImage:boardingImage[0].path,
          });

           await siteData.save();

          // res.status(200).json(siteData);
        });

      // Update or insert new site data test
      // const siteData = await SiteData.findOneAndUpdate(
      //   {}, // Empty filter to match any existing document
      //   {
      //     boardingImage: req.body.boardingImage,
      //     logo: req.body.logo,
      //   },
      //   { upsert: true, new: true } // Create a new document if none exists
      // );
  
      res.status(200).json({message:'successfuly uploaded'});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
module.exports = {SiteData, addSiteData}