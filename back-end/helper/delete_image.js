const fs = require('fs');
const path = require('path');

// Function to delete a file
const deleteFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        // console.error(`Error deleting file: ${err.message}`);
        reject(err);
      } else {
        // console.log('File deleted successfully:', filePath);
        resolve();
      }
    });
  });
};

// Example Usage
// const fileToDelete = path.join(__dirname, 'uploads', 'example.txt'); // Adjust path as needed

// deleteFile(fileToDelete)
//   .then(() => console.log('File deletion completed'))
//   .catch((error) => console.error('Failed to delete file:', error));


  module.exports = { deleteFile };