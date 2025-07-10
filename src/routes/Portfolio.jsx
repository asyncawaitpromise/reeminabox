import React from 'react';

const Portfolio = () => {
  const portfolioCategories = [
    {
      title: "Portrait Photography",
      slug: "portraits",
      description: "Capturing authentic moments and natural beauty",
      thumbnail: "https://picsum.photos/400/500?random=1",
      imageCount: 25,
      aspectRatio: "4:5"
    },
    {
      title: "Landscape Photography",
      slug: "landscapes",
      description: "Natural beauty and scenic vistas",
      thumbnail: "https://picsum.photos/600/400?random=2",
      imageCount: 18,
      aspectRatio: "16:9"
    },
    {
      title: "Event Photography",
      slug: "events",
      description: "Special moments and celebrations",
      thumbnail: "https://picsum.photos/400/600?random=3",
      imageCount: 32,
      aspectRatio: "3:4"
    },
    {
      title: "Street Photography",
      slug: "street",
      description: "Urban life and candid moments",
      thumbnail: "https://picsum.photos/500/500?random=4",
      imageCount: 22,
      aspectRatio: "1:1"
    },
    {
      title: "Wedding Photography",
      slug: "weddings",
      description: "Capturing love stories and precious moments",
      thumbnail: "https://picsum.photos/450/600?random=5",
      imageCount: 45,
      aspectRatio: "3:4"
    },
    {
      title: "Nature Photography",
      slug: "nature",
      description: "Wildlife and natural environments",
      thumbnail: "https://picsum.photos/700/400?random=6",
      imageCount: 30,
      aspectRatio: "16:9"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pb-20 animate-fade-in">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-8"></div>
          <h1 className="text-4xl lg:text-5xl font-light text-gray-800 mb-6 tracking-wide">
            Portfolio
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Explore my collection of photography work showcasing the art of visual storytelling 
            across various styles and subjects.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {portfolioCategories.map((category, index) => (
              <div
                key={category.slug}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative">
                  <img
                    src={category.thumbnail}
                    alt={category.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 professional-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-800">
                      {category.imageCount} images
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl lg:text-2xl font-light mb-2 tracking-wide">{category.title}</h3>
                    <p className="text-sm lg:text-base opacity-90 mb-2 font-light">{category.description}</p>
                    <div className="w-12 h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;