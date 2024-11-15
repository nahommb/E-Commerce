import React, { useRef } from 'react';
import { MdAttachFile } from 'react-icons/md';
import { MdUpload } from 'react-icons/md';
import {Button} from '@mui/material'


export const AddProducts = ()=>{

    const fileInputRef = useRef(null);
    const handleFileSelect = (e) => {
        e.preventDefault(); //
        fileInputRef.current.click(); // Trigger the file input click
      };
      const handleFileChange = (event) => {
        const fileName = event.target.files[0]?.name || 'No file chosen';
        console.log(fileName);
        // You can update the state here if you want to display the file name
      };

    return  <div className="p-12  w-full">
    <form>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
   

   <div>
    <label htmlFor="product-name" className="block text-lg text-light-purple">
        Product Name
      </label>
      <input type="text" className="input-field "/>
    </div>
     
    <div>
    <label htmlFor="product-name" className="block text-lg text-light-purple">
        Price
      </label>
      <input type="text" className="input-field "/>
    </div>
    <div>
    <label htmlFor="product-name" className="block text-lg text-light-purple">
        Category
      </label>
      <input type="text" className="input-field "/>
    </div>
    <div>
    <label htmlFor="product-name" className="block text-lg text-light-purple">
        Custom Print Availeble
      </label>
    <select className="p-2 w-52 border border-light-purple rounded-lg text-light-purple">
        <option>Yes</option>
        <option>No</option>
       
    </select>
    </div>
    </div> 
    <div className="flex justify-center">
    <div className="flex flex-col mt-20 h-60 w-6/12 border rounded-lg items-center pt-20 p-3">
        <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="block" 
            style={{ display: 'none' }} 
        />
        <button 
            className='bg-light-purple mb-2'  // Add bottom margin for spacing
            onClick={handleFileSelect} 
            style={buttonStyle}
        >
            <MdUpload />
        </button>
        <p className="text-center text-light-purple">  {/* Center the text */}
            You can Only Upload 4 images: Front, Back, Right, and Left Respectively.
        </p>
    </div>
</div>
   <div className='flex justify-center mt-20'>
    <Button>Submit</Button>
   </div>
    
     </form>
     
  </div>
  
}

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    // backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
  };
  