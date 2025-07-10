import React from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'react-feather';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
            <Camera className="w-6 h-6" />
            <span className="text-xl font-light">reeminabox</span>
          </Link>
          <p className="text-gray-400 mb-4">
            © 2024 Reem Totry Photography. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;