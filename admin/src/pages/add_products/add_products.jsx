import React, { useRef, useState, useEffect } from 'react';
import { MdUpload } from 'react-icons/md';
import { Button, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../../context/redux/products/productsAction';
import { Popup } from '../../components/popup/popup';
import { PreviewCard } from '../../components/preview_card/preview_card';

export const AddProducts = () => {

const user = useSelector((state) => state.authReducer.user);

console.log(user);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: 'Successfully uploaded' });
  const [selectedImages, setSelectedImages] = useState([]);
  const isUploaded = useSelector((state) => state.productsReducer.isUploaded);
  const isLoading =  useSelector((state) => state.productsReducer.isLoading);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    dispatch({
      type: 'ADDPRODUCTSRESPONSE',
      payload: { message: 'Some error occurred' }
    });
  };

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Club');
  const [customPrint, setCustomPrint] = useState('Yes');
  const [files, setFiles] = useState([]);

  const handleFileSelect = (e) => {
    e.preventDefault();
    fileInputRef.current.click(); // Trigger the file input click
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const fileArray = Array.from(selectedFiles);
    setFiles(fileArray); // Store files in local state
    
    // Create image URLs based on the latest selected files
    const imageUrls = fileArray.map(file => URL.createObjectURL(file));
    setSelectedImages(imageUrls);
    console.log(imageUrls); // Log the selected images to the console
  };

  useEffect(() => {
    // Revoke the object URLs to avoid memory leaks
    return () => {
      selectedImages.forEach(url => URL.revokeObjectURL(url));
    };
  }, [selectedImages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    files.forEach(file => {
      formData.append('images', file); // Append each file to the formData
    });
    formData.append('product_name', productName);
    formData.append('price', price);
    formData.append('product_category', category);
    formData.append('custom_print', customPrint);
    // formData.append('email', user.email);
    console.log(formData.getAll('images')); // Log the formData to check if files are being sent
    dispatch(addProducts(formData));
    setProductName('');
    setPrice('');
    setSelectedImages([]);
    setIsModalOpen(true);
    // Reset form or provide further feedback as needed
  };

  return (
    <div className="p-8 w-full">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div>
            <label htmlFor="product-name" className="block text-lg text-light-purple">
              Product Name
            </label>
            <input 
              type="text" 
              className="input-field" 
              value={productName} 
              onChange={(e) => setProductName(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-lg text-light-purple">
              Price
            </label>
            <input 
              type="number" 
              className="input-field" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-lg text-light-purple">
              Category
            </label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              className="p-2 w-52 border border-light-purple rounded-lg text-light-purple"
            >
              <option>Club</option>
              <option>International</option>
              <option>Retro</option>
              <option>Others</option>
            </select>
          </div>

          <div>
            <label htmlFor="custom-print" className="block text-lg text-light-purple">
              Custom Print Available
            </label>
            <select 
              value={customPrint} 
              onChange={(e) => setCustomPrint(e.target.value)} 
              className="p-2 w-52 border border-light-purple rounded-lg text-light-purple"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <PreviewCard images={selectedImages} />

        <div className="flex justify-center">
          <div className="flex flex-col mt-20 h-60 w-6/12 border rounded-lg items-center pt-20 p-3">
            <input 
              type="file"
              multiple
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="block" 
              style={{ display: 'none' }}      
            />
            <button 
              className='bg-light-purple mb-2' 
              onClick={handleFileSelect} 
              style={buttonStyle}
            >
              <MdUpload />
            </button>
            <p className="text-center text-light-purple">
              You can Only Upload 4 images: Front, Back, Right, and Left Respectively.
            </p>
          </div>
        </div>

        <div>
          {isLoading? 
            <div className='fixed top-80  flex w-9/12 justify-center'><div><CircularProgress></CircularProgress></div></div>:
            (isUploaded?<Popup isOpen={isModalOpen} onClose={handleCloseModal} content={modalContent} /> :
            <Popup isOpen={isModalOpen} onClose={handleCloseModal} content={{title:'Some Error Occured Please Try Again'}} />
            )
            
          }
        </div>
    
        <div className='flex justify-center mt-5'>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
};
