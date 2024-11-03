const multer = require('multer');

const Storage = multer.diskStorage({
    destination:'uploads/product_image',
    filename:(req,file,cb)=>{
        
        cb(null,file.originalname)
    },
});
const upload = multer({
  storage: Storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
  fileFilter: (req, file, cb) => {
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
          cb(null, true);
      } else {
          cb(new Error('Only .png and .jpeg format allowed!'), false);
      }
  }
}).array('images',4);
 
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
 