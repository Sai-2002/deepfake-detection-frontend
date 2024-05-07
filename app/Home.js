import Image from "next/image";
import FileUploadComponent from "./UploadImage";
import VideoUploadComponent from "./UploadVideo";
import Modal from "./Popup";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

export default function DFD() {
  return (
    <div className="relative h-screen">
      <Navbar/>
      <div className="relative z-10 h-full pt-20 pl-10 pr-10 pb-20">
        <Hero/>
        <div className="grid grid-cols-4 gap-3 p-4">
          <div></div> 
          <div className="bg-gray-400 bg-opacity-65 border border-none min-h-0 rounded-md mb-10 p-4 col-span-2">
            <h2 className="text-center text-lg font-extrabold">You can upload your video here</h2>
            <p className="text-center text-sm font-semibold">Click on the button to upload</p>
            <VideoUploadComponent/>
          </div>
        </div>

      <Footer/>
      </div>
    </div>
  );
}
