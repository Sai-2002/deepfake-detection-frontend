'use client';

import React, { useState } from 'react';
import Modal from './Popup';
import axios from 'axios';

const FileUploadComponent = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  };

  const handleFileRemove = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const sendImage = async() => {
    setIsLoading(true);
  
    
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://127.0.0.1:5000/extractImage', formData,{
        headers: {
          // 'Content-Type': 'multipart/form-data', // Set the content type
          'Access-Control-Allow-Origin': 'http://localhost:3000', // Specify the allowed origin
          // Add other headers if needed
        },
      });

      console.log('File uploaded successfully:', response.data);
      const resp = response.data;
      console.log(resp['Predicted label']);
      setResult(resp['Predicted label']);

      toggleModal();

    } catch (error) {
      console.log(error);
    }
    finally{
      setIsLoading(false);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <label
        htmlFor="file-upload"
        className="mt-4 mb-2 inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-md shadow-md cursor-pointer"
      >
        <svg
          className="w-6 h-6 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Upload Image
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
      {previewUrl && (
        <div className="mt-4">
          <img src={previewUrl} alt="Preview" className="max-w-xs" />
          <div className='p-4 flex justify-between'>
            <button
              onClick={handleFileRemove}
              className="mt-2 inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-md"
            >
              Remove
            </button>
            {
              !isLoading && (
              <button
              onClick={sendImage}
              className="mt-2 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md"
            >
              Next
            </button>
              )
            }

            {isLoading && (
            // <div>
            // <div className="flex justify-between mb-1">
            //   <span className="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
            //   <span className="text-sm font-medium text-blue-700 dark:text-white">45%</span>
            // </div>
            // <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            //   <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
            // </div>
            // </div>
            <button
              onClick={null}
              className="mt-2 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md"
            >
             <div className='flex justify-start items-center'>

              <div className="inline-block w-5 h-5 
              border-t-8 
              border-gray-500  
              rounded-full 
              animate-spin"></div>

              <div className='pl-4'>Loading</div>
              </div>
            </button>
            
          )}

            
          </div>
          
          
          </div>
        )}

        {showModal && <Modal setShowModal={setShowModal} result={result}/>}
    </div>
  );
};

export default FileUploadComponent;