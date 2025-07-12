import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Copy, Check, ChevronLeft, ChevronRight } from 'react-feather';

const CollectionView = () => {
  const { collectionSlug } = useParams();
  const navigate = useNavigate();
  const [collection, setCollection] = useState(null);
  const [copiedRef, setCopiedRef] = useState(null);

  // Generate sample images for collections
  const generateCollectionImages = (slug, count, baseRandom) => {
    return Array.from({ length: count }, (_, i) => {
      const randomId = baseRandom + i;
      return {
        reference: `${slug.toUpperCase()}-${String(i + 1).padStart(3, '0')}`,
        title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Print ${i + 1}`,
        description: `Fine art photography print from the ${slug} collection. Printed on premium archival paper with museum-quality inks.`,
        url: `https://picsum.photos/800/1000?random=${randomId}`,
        thumbnail: `https://picsum.photos/400/400?random=${randomId}`,
        sizes: "8x10, 11x14, 16x20, 24x30",
        priceRange: "$35 - $125"
      };
    });
  };

  // Collection data
  const portfolioCollections = {
    abstract: {
      title: "Abstract Collection",
      slug: "abstract",
      description: "Bold compositions exploring form, color, and texture",
      longDescription: "This collection represents my exploration into the abstract realm of photography, where form, color, and texture take precedence over literal representation. Each piece invites viewers to engage with their own interpretations and emotional responses.",
      images: generateCollectionImages("abstract", 12, 100)
    },
    landscapes: {
      title: "Landscape Series",
      slug: "landscapes",
      description: "Fine art prints of natural beauty and scenic vistas",
      longDescription: "Capturing the raw beauty and tranquil moments found in nature's landscapes. From sweeping vistas to intimate natural details, this series celebrates the diverse moods and atmospheres of our natural world.",
      images: generateCollectionImages("landscapes", 10, 200)
    },
    urban: {
      title: "Urban Poetry",
      slug: "urban",
      description: "Artistic interpretations of city life and architecture",
      longDescription: "Finding poetry in the concrete jungle - this collection explores the geometric beauty, human stories, and architectural marvels that define our urban environments. Each image captures a moment where city life becomes art.",
      images: generateCollectionImages("urban", 15, 300)
    },
    minimalist: {
      title: "Minimalist Studies",
      slug: "minimalist",
      description: "Clean, simple compositions with powerful impact",
      longDescription: "Less is more in this carefully curated collection of minimalist photography. Through negative space, simple forms, and subtle tonal variations, these images demonstrate the power of restraint in visual storytelling.",
      images: generateCollectionImages("minimalist", 8, 400)
    },
    portraits: {
      title: "Emotional Portraits",
      slug: "portraits",
      description: "Intimate fine art portraits capturing human essence",
      longDescription: "Beyond mere likeness, these portraits seek to capture the essence, emotion, and inner life of the subject. Each image tells a story of human experience, vulnerability, and strength.",
      images: generateCollectionImages("portraits", 12, 500)
    },
    nature: {
      title: "Nature's Details",
      slug: "nature",
      description: "Macro and detail studies of the natural world",
      longDescription: "A closer look at the intricate details and patterns found in nature. From delicate textures to bold natural geometries, this collection celebrates the artistry found in the smallest elements of our natural world.",
      images: generateCollectionImages("nature", 18, 600)
    }
  };

  useEffect(() => {
    const foundCollection = portfolioCollections[collectionSlug];
    if (foundCollection) {
      setCollection(foundCollection);
    } else {
      // Collection not found, redirect to portfolio
      navigate('/portfolio');
    }
  }, [collectionSlug, navigate]);

  const handleAddToInquiry = (reference, title) => {
    // Navigate to contact form with URL parameters
    navigate(`/contact?ref=${encodeURIComponent(reference)}&title=${encodeURIComponent(title)}`);
  };

  const copyReference = async (refNumber) => {
    try {
      await navigator.clipboard.writeText(refNumber);
      setCopiedRef(refNumber);
      setTimeout(() => setCopiedRef(null), 2000);
    } catch (err) {
      console.error('Failed to copy reference number');
    }
  };

  const openImageView = (index) => {
    const imageRef = collection.images[index].reference;
    navigate(`/portfolio/${collectionSlug}/${imageRef}`);
  };

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-800 mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-24 pb-8 lg:pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/portfolio" className="hover:text-gray-700 transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-gray-800">{collection.title}</span>
          </div>

          {/* Back Button */}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Collections
          </Link>

          {/* Collection Info */}
          <div className="max-w-4xl">
            <div className="w-16 h-0.5 bg-gray-800 mb-6"></div>
            <h1 className="text-4xl lg:text-5xl font-light text-gray-800 mb-6 tracking-wide">
              {collection.title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-4 leading-relaxed font-light">
              {collection.description}
            </p>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              {collection.longDescription}
            </p>
            <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
              <span>{collection.images.length} prints available</span>
              <span>Premium archival quality</span>
              <span>Multiple sizes available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {collection.images.map((image, index) => (
              <div
                key={image.reference}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden cursor-pointer" onClick={() => openImageView(index)}>
                  <img
                    src={image.thumbnail}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3">
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-800 text-sm">{image.title}</h3>
                    <button
                      onClick={() => copyReference(image.reference)}
                      className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                    >
                      {copiedRef === image.reference ? (
                        <Check size={10} className="text-green-600" />
                      ) : (
                        <Copy size={10} />
                      )}
                      {image.reference}
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-3">{image.priceRange}</p>
                  
                  <button
                    onClick={() => handleAddToInquiry(image.reference, image.title)}
                    className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-xs py-2 px-3 rounded transition-colors"
                  >
                    <ShoppingCart size={12} />
                    Add to Inquiry
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CollectionView;
