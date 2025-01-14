 const SiteDataModel = require('../models/site_model')
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

module.exports = {SiteData}