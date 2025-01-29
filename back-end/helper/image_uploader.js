const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

require('dotenv').config();

const cloud_name = process.env.CLOUDINARY_CLOUD_NAME
const api_key =  process.env.CLOUDINARY_API_KEY
const api_secret = process.env.CLOUDINARY_API_SECRET


// Configure Cloudinary
cloudinary.config({
  cloud_name: cloud_name,
  api_key:api_key,
  api_secret: api_secret,
});

// Configure Multer Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Specify the folder in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png'], // Allowed file types
  },
});
const siteStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'site', // Specify the folder in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png'], // Allowed file types
  },
});
const siteDataUpload = multer({ storage: siteStorage });
const upload = multer({ storage });


 
module.exports = {
  upload,
  siteDataUpload,
};




 