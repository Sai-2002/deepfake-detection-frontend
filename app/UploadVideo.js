'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Popup';
import Footer from './Footer';


const VideoUploadComponent = () => {
  const [video, setVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleVideoChange = (e) => {
    const selectedVideo = e.target.files[0];
    setVideo(selectedVideo);
    setPreviewUrl(URL.createObjectURL(selectedVideo));
  };

  const handleVideoRemove = () => {
    setVideo(null);
    setPreviewUrl(null);
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Simulating API call delay
  //     await new Promise(resolve => setTimeout(resolve, 2000));
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  const sendVideo = async() => {
    setIsLoading(true);

    
    try {
      const formData = new FormData();
      formData.append('file',video);

      const response = await axios.post('http://127.0.0.1:5000/extractVideo', formData,{
        headers: {
          // 'Content-Type': 'multipart/form-data', // Set the content type
          'Access-Control-Allow-Origin': 'http://localhost:3000', // Specify the allowed origin
          // Add other headers if needed
        },
      });

      console.log('File uploaded successfully:', response.data);

      const resp1 = await axios.get('http://127.0.0.1:8000/predictFace', {
        headers: {
          // 'Content-Type': 'multipart/form-data', // Set the content type
          'Access-Control-Allow-Origin': 'http://localhost:3000', // Specify the allowed origin
          // Add other headers if needed
        },
      });

      const resp = resp1.data;
      console.log(resp['prediction']);
      setResult(resp['prediction']);

      toggleModal();

    } catch (error) {
      console.log(error);
    }
    finally{
      setIsLoading(false);
    }

     
// console.log(video);
//     setTimeout(() => {
//       // Hide progress bar after API responds
//       console.log("next")
//       setIsLoading(false);
//       // Add your API call here
//     }, 2000);
    console.log("sai")
  };

  return (
    // <div className='border border-gray-400 rounded-lg p-4'>
      <div className="flex flex-col items-center justify-center " id='videoUpload'>
        <label
          htmlFor="video-upload"
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
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z"
              clipRule="evenodd"
            />
          </svg>
          Upload Video
        </label>
        <input
          id="video-upload"
          type="file"
          accept="video/*"
          className="hidden"
          onChange={handleVideoChange}
        />
        {previewUrl && (
          <div className="mt-4">
            <video src={previewUrl} controls className="max-w-xs"></video>
            <div className='p-4 flex justify-between'>
            <button
              onClick={handleVideoRemove}
              className="mt-2 inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-md"
            >
              Remove
            </button>{
              !isLoading && (
              <button
              onClick={sendVideo}
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
              onClick={sendVideo} disabled
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


        
      {/* <Footer/> */}
      </div>


    // </div>
  )
};

export default VideoUploadComponent;