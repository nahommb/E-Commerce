const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

require('dotenv').config();

const api_key = process.env.CLOUDINARY_CLOUD_NAME
const cloud_name =  process.env.CLOUDINARY_API_KEY
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


const upload = multer({ storage });


// const Storage = multer.diskStorage({
//     destination:'uploads/product_image',
//     filename:(req,file,cb)=>{
//         const originalName = file.originalname;

//         // Replace spaces with underscores
//         const fileNameWithoutSpaces = originalName.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '_');

//         // Limit to 30 characters
//         const shortName = fileNameWithoutSpaces.substring(0, 30);

//         // Get the file extension
//         const fileExtension = originalName.substring(originalName.lastIndexOf('.'));

//         // Create the new filename with Date.now()
//         const newFileName = `${shortName}_${Date.now()}${fileExtension}`;

//         cb(null, newFileName);
//     },
// });
// const upload = multer({
//   storage: Storage,
//   limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
//   fileFilter: (req, file, cb) => {
//       if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'|| file.mimetype === 'image/jpg' || file.mimetype === 'image/webp') {
//           cb(null, true);
//       } else {
//           cb(new Error('Only .png and .jpeg format allowed!'), false);
//       }
//   }
// }).array('images',4);
 
module.exports = upload;



// const AddPreviousWorkController = (req,res)=>{
       
//         upload(req,res,(err)=>{
            
//         console.log(req.body.description)
//          if(err){
//              console.log(err)
//          }
//          else{
        
//              const AddNew = AddPreviousWorkModule({
//                  name:previousworks/${uploadFileName},
//                  description:req.body.description,
//                  location:req.body.location,
//                  image:{
//                      data:req.file.fieldname,
//                      contentType:'image/jpeg'
//                  }
//              })
//              AddNew.save().then(()=>res.json('Successfully uploaded'))
//              .catch((err)=>console.log(err))
//          }
//         })

// }
 