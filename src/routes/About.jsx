import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pb-20 animate-fade-in">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-8"></div>
          <h1 className="text-4xl lg:text-5xl font-light text-gray-800 mb-6 tracking-wide">
            About reeminabox
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Get to know the photographer behind the lens and discover the passion 
            that drives every capture.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="animate-slide-up">
                <img
                  src="https://picsum.photos/600/700?random=99"
                  alt="Reem Totry - Photographer"
                  className="w-full rounded-lg shadow-lg professional-image"
                />
              </div>
              <div className="animate-fade-in-scale">
                <div className="w-12 h-0.5 bg-gray-800 mb-6"></div>
                <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-8 tracking-wide">
                  Hello, I'm Reem Totry
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                  Welcome to my world of photography. I'm a passionate photographer 
                  who believes in capturing the essence of every moment through my lens.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                  My journey in photography began with a simple love for storytelling and has 
                  evolved into a dedication to preserving memories and emotions in their most 
                  authentic form.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                  Every photograph tells a story, and I'm here to help you tell yours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-800 font-medium w-32">Specialty:</span>
                    <span className="text-gray-600">Portrait & Event Photography</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-800 font-medium w-32">Experience:</span>
                    <span className="text-gray-600">5+ Years</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-800 font-medium w-32">Location:</span>
                    <span className="text-gray-600">Available Worldwide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-12 mb-20 relative overflow-hidden animate-fade-in-scale">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-8"></div>
                <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mb-6 text-center tracking-wide">
                  My Artistic Philosophy
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto font-light">
                  I believe that photography is more than just capturing moments—it's about creating 
                  timeless pieces of art that evoke emotion and inspire contemplation. Each print in my 
                  collection is carefully curated and crafted to bring beauty into your space. 
                  My work focuses on the interplay of light, shadow, and form, creating pieces that 
                  are both visually striking and emotionally resonant. Every print is produced using 
                  premium materials to ensure longevity and museum-quality presentation.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">🎨</span>
                </div>
                <h4 className="text-xl font-medium text-gray-800 mb-2">Fine Art Prints</h4>
                <p className="text-gray-600">Museum-quality prints using premium papers and archival inks.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">📦</span>
                </div>
                <h4 className="text-xl font-medium text-gray-800 mb-2">Secure Shipping</h4>
                <p className="text-gray-600">Carefully packaged and shipped worldwide with tracking and insurance.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">⭐</span>
                </div>
                <h4 className="text-xl font-medium text-gray-800 mb-2">Limited Editions</h4>
                <p className="text-gray-600">Each piece is part of a limited collection, ensuring exclusivity and value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;