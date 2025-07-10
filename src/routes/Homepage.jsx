import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://picsum.photos/1920/1080?random=100)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 lg:px-8">
          <h1 className="text-5xl lg:text-7xl font-light mb-6 drop-shadow-lg">
            Reem Totry Photography
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-md">
            Discover and purchase fine art photography prints. 
            Explore my curated collection of artistic photographs available for your home or collection.
          </p>
          <Link 
            to="/portfolio" 
            className="btn btn-primary btn-lg text-white bg-white bg-opacity-25 hover:bg-opacity-35 border-white border-2 backdrop-blur-sm transition-all duration-300 drop-shadow-lg font-medium"
          >
            Shop Prints
          </Link>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-16 lg:py-20 animate-fade-in bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-6"></div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4 tracking-wide">Featured Prints</h2>
            <p className="text-gray-600 text-lg font-light">Fine art photography prints available for purchase</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <img
                src="https://picsum.photos/400/600?random=10"
                alt="Featured work 1"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm font-light">Abstract Art • $45</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <img
                src="https://picsum.photos/400/600?random=11"
                alt="Featured work 2"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm font-light">Nature Series • $55</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <img
                src="https://picsum.photos/400/600?random=12"
                alt="Featured work 3"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm font-light">Urban Collection • $65</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/portfolio" 
              className="btn btn-outline btn-lg border-gray-900 text-gray-900 hover:bg-gray-900 hover:border-gray-900 hover:text-white"
            >
              Browse All Prints
            </Link>
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-8"></div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-8 tracking-wide">About reeminabox</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light max-w-3xl mx-auto">
              Welcome to my artistic journey. I'm Reem Totry, a fine art photographer 
              creating unique prints that capture emotion, beauty, and perspective. 
              Each piece is carefully crafted and available as limited edition prints for collectors and art enthusiasts.
            </p>
            <Link 
              to="/about" 
              className="btn btn-outline btn-lg border-gray-900 text-gray-900 hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300 hover:scale-105 font-medium"
            >
              Learn More About My Art
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
