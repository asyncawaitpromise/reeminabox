import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Menu, X } from 'react-feather';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Camera className="w-6 h-6 text-gray-800 group-hover:text-gray-600 transition-colors" />
            <span className="text-xl lg:text-2xl font-light text-gray-800 group-hover:text-gray-600 transition-colors">reeminabox</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 h-full">
            <Link 
              to="/" 
              className={`transition-colors h-full flex items-center border-b-2 ${
                isActive('/') 
                  ? 'text-gray-800 font-medium border-gray-800' 
                  : 'text-gray-600 hover:text-gray-800 border-transparent hover:border-gray-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/portfolio" 
              className={`transition-colors h-full flex items-center border-b-2 ${
                isActive('/portfolio') 
                  ? 'text-gray-800 font-medium border-gray-800' 
                  : 'text-gray-600 hover:text-gray-800 border-transparent hover:border-gray-300'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors h-full flex items-center border-b-2 ${
                isActive('/about') 
                  ? 'text-gray-800 font-medium border-gray-800' 
                  : 'text-gray-600 hover:text-gray-800 border-transparent hover:border-gray-300'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors h-full flex items-center border-b-2 ${
                isActive('/contact') 
                  ? 'text-gray-800 font-medium border-gray-800' 
                  : 'text-gray-600 hover:text-gray-800 border-transparent hover:border-gray-300'
              }`}
            >
              Contact
            </Link>
          </nav>
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-600 hover:text-gray-800 transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors ${
                  isActive('/') 
                    ? 'text-gray-800 font-medium' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/portfolio" 
                className={`transition-colors ${
                  isActive('/portfolio') 
                    ? 'text-gray-800 font-medium' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${
                  isActive('/about') 
                    ? 'text-gray-800 font-medium' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${
                  isActive('/contact') 
                    ? 'text-gray-800 font-medium' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;