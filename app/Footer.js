import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800  text-gray-300 text-center">
      <div className="container mx-auto">
        <p>Copyright © {new Date().getFullYear()} Your Website. All rights reserved.</p>
        <p>Designed by <span className="font-bold">Author Name</span></p>
      </div>
    </footer>
  );
};

export default Footer;
