import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ShoppingCart, Copy, Check, ArrowLeft, Share, Download } from 'react-feather';

const ImageView = () => {
  const { collectionSlug, imageRef: imageReference } = useParams();
  const navigate = useNavigate();
  const [collection, setCollection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedRef, setCopiedRef] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showMobileInfo, setShowMobileInfo] = useState(false);
  const imageRef = useRef(null);

  // Generate sample images for collections (same as CollectionView)
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

  // Collection data (same as CollectionView)
  const portfolioCollections = {
    abstract: {
      title: "Abstract Collection",
      slug: "abstract",
      description: "Bold compositions exploring form, color, and texture",
      images: generateCollectionImages("abstract", 12, 100)
    },
    landscapes: {
      title: "Landscape Series",
      slug: "landscapes",
      description: "Fine art prints of natural beauty and scenic vistas",
      images: generateCollectionImages("landscapes", 10, 200)
    },
    urban: {
      title: "Urban Poetry",
      slug: "urban",
      description: "Artistic interpretations of city life and architecture",
      images: generateCollectionImages("urban", 15, 300)
    },
    minimalist: {
      title: "Minimalist Studies",
      slug: "minimalist",
      description: "Clean, simple compositions with powerful impact",
      images: generateCollectionImages("minimalist", 8, 400)
    },
    portraits: {
      title: "Emotional Portraits",
      slug: "portraits",
      description: "Intimate fine art portraits capturing human essence",
      images: generateCollectionImages("portraits", 12, 500)
    },
    nature: {
      title: "Nature's Details",
      slug: "nature",
      description: "Macro and detail studies of the natural world",
      images: generateCollectionImages("nature", 18, 600)
    }
  };

  const nextImage = () => {
    if (!collection) return;
    const nextIndex = (currentIndex + 1) % collection.images.length;
    const nextRef = collection.images[nextIndex].reference;
    navigate(`/portfolio/${collectionSlug}/${nextRef}`, { replace: true });
  };

  const prevImage = () => {
    if (!collection) return;
    const prevIndex = currentIndex === 0 ? collection.images.length - 1 : currentIndex - 1;
    const prevRef = collection.images[prevIndex].reference;
    navigate(`/portfolio/${collectionSlug}/${prevRef}`, { replace: true });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') navigate(`/portfolio/${collectionSlug}`);
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  // Touch gesture handling for mobile swipe navigation
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && collection?.images.length > 1) {
      nextImage();
    }
    if (isRightSwipe && collection?.images.length > 1) {
      prevImage();
    }
  };

  const handleShare = async () => {
    if (navigator.share && currentImage) {
      try {
        await navigator.share({
          title: currentImage.title,
          text: `Check out this fine art print: ${currentImage.title}`,
          url: window.location.href,
        });
      } catch (err) {
        // Fallback to copying URL
        copyToClipboard(window.location.href);
      }
    } else {
      // Fallback for browsers without Web Share API
      copyToClipboard(window.location.href);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedRef('url');
      setTimeout(() => setCopiedRef(null), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard');
    }
  };

  useEffect(() => {
    const foundCollection = portfolioCollections[collectionSlug];
    if (foundCollection) {
      setCollection(foundCollection);
      
      // Find the current image index based on the reference
      const imageIndex = foundCollection.images.findIndex(img => img.reference === imageReference);
      if (imageIndex !== -1) {
        setCurrentIndex(imageIndex);
      } else {
        // Image not found, redirect to collection
        navigate(`/portfolio/${collectionSlug}`);
      }
    } else {
      // Collection not found, redirect to portfolio
      navigate('/portfolio');
    }
  }, [collectionSlug, imageReference, navigate]);

  useEffect(() => {
    // Only disable body scroll on desktop, allow on mobile for better UX
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, collectionSlug]);

  const copyReference = async (refNumber) => {
    try {
      await navigator.clipboard.writeText(refNumber);
      setCopiedRef(refNumber);
      setTimeout(() => setCopiedRef(null), 2000);
    } catch (err) {
      console.error('Failed to copy reference number');
    }
  };

  const handleAddToInquiry = () => {
    if (currentImage) {
      // Navigate to contact form with URL parameters
      navigate(`/contact?ref=${encodeURIComponent(currentImage.reference)}&title=${encodeURIComponent(currentImage.title)}`);
    }
  };

  const handleImageSelect = (index) => {
    const selectedRef = collection.images[index].reference;
    navigate(`/portfolio/${collectionSlug}/${selectedRef}`, { replace: true });
  };

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center text-white">
          <h1 className="text-4xl font-light mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  const currentImage = collection.images[currentIndex];

  if (!currentImage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center text-white">
          <h1 className="text-4xl font-light mb-4">Image not found</h1>
          <Link to={`/portfolio/${collectionSlug}`} className="text-blue-400 hover:text-blue-300">
            Return to collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black lg:fixed lg:inset-0 lg:z-50">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-20 bg-black bg-opacity-90 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <Link
            to={`/portfolio/${collectionSlug}`}
            className="p-2 text-white hover:text-gray-300 transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
          
          <div className="flex items-center gap-1">
            <button
              onClick={handleShare}
              className="p-2 text-white hover:text-gray-300 transition-colors"
            >
              <Share size={20} />
            </button>
            <button
              onClick={() => setShowMobileInfo(!showMobileInfo)}
              className="px-3 py-1 text-xs bg-white bg-opacity-20 text-white rounded-full"
            >
              Info
            </button>
          </div>
        </div>
        
        {/* Mobile Image Counter */}
        <div className="px-4 pb-3">
          <div className="text-center text-white text-sm opacity-80">
            {currentIndex + 1} of {collection.images.length}
          </div>
          <div className="text-center text-white text-xs opacity-60 mt-1">
            {currentImage.reference}
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block">
        <Link
          to={`/portfolio/${collectionSlug}`}
          className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
        >
          <X size={32} />
        </Link>

        <Link
          to={`/portfolio/${collectionSlug}`}
          className="absolute top-4 left-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
        >
          <ArrowLeft size={32} />
        </Link>
      </div>

      {/* Navigation Buttons - Desktop Only */}
      {collection.images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-20 hover:bg-opacity-40 rounded-full"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={nextImage}
            className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-20 hover:bg-opacity-40 rounded-full"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:h-full">
        {/* Image Container */}
        <div 
          className="flex-1 flex items-center justify-center relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Mobile Swipe Indicators */}
          {collection.images.length > 1 && (
            <>
              <div className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-black bg-opacity-30 rounded-full">
                <ChevronLeft size={20} className="text-white opacity-60" />
              </div>
              <div className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-black bg-opacity-30 rounded-full">
                <ChevronRight size={20} className="text-white opacity-60" />
              </div>
            </>
          )}
          
          <div className="w-full h-[60vh] lg:h-full flex items-center justify-center p-4 lg:p-8">
            <img
              ref={imageRef}
              src={currentImage.url}
              alt={currentImage.title}
              className="max-w-full max-h-full object-contain rounded-lg lg:rounded-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile Info Panel - Collapsible */}
        <div className={`lg:hidden transition-all duration-300 bg-white ${
          showMobileInfo ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="p-4 border-t border-gray-200">
            <MobileInfoContent 
              currentImage={currentImage}
              collection={collection}
              collectionSlug={collectionSlug}
              currentIndex={currentIndex}
              copiedRef={copiedRef}
              copyReference={copyReference}
              handleAddToInquiry={handleAddToInquiry}
              handleImageSelect={handleImageSelect}
            />
          </div>
        </div>

        {/* Desktop Info Panel */}
        <div className="hidden lg:block lg:w-80 bg-white lg:bg-gray-50 p-6 lg:p-8 lg:overflow-y-auto">
          <DesktopInfoContent 
            currentImage={currentImage}
            collection={collection}
            collectionSlug={collectionSlug}
            currentIndex={currentIndex}
            copiedRef={copiedRef}
            copyReference={copyReference}
            handleAddToInquiry={handleAddToInquiry}
            handleImageSelect={handleImageSelect}
            handleShare={handleShare}
          />
        </div>
      </div>

      {/* Mobile Bottom Actions - Sticky */}
      <div className="lg:hidden sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <div className="flex gap-3 mb-3">
          <button
            onClick={handleAddToInquiry}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg transition-colors"
          >
            <ShoppingCart size={18} />
            Add to Inquiry
          </button>
          
          <button
            onClick={() => copyReference(currentImage.reference)}
            className="flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-4 rounded-lg transition-colors"
          >
            {copiedRef === currentImage.reference ? (
              <Check size={18} className="text-green-600" />
            ) : (
              <Copy size={18} />
            )}
          </button>
        </div>
        
        {/* Photo Description */}
        <div className="text-center">
          <p className="text-sm text-gray-600 leading-relaxed">
            {currentImage.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Mobile Info Content Component
const MobileInfoContent = ({ 
  currentImage, 
  collection, 
  collectionSlug, 
  currentIndex, 
  copiedRef, 
  copyReference, 
  handleAddToInquiry, 
  handleImageSelect 
}) => (
  <div className="space-y-4">
    <div>
      <h3 className="text-lg font-light text-gray-800 mb-1">
        {currentImage.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {currentImage.description}
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4 text-sm">
      <div>
        <span className="text-gray-500">Collection:</span>
        <p className="text-gray-800 font-medium">{collection.title}</p>
      </div>
      <div>
        <span className="text-gray-500">Sizes:</span>
        <p className="text-gray-800">{currentImage.sizes}</p>
      </div>
      <div>
        <span className="text-gray-500">Price Range:</span>
        <p className="text-gray-800 font-medium">{currentImage.priceRange}</p>
      </div>
      <div>
        <span className="text-gray-500">Reference:</span>
        <button
          onClick={() => copyReference(currentImage.reference)}
          className="text-gray-800 font-mono text-xs underline"
        >
          {currentImage.reference}
        </button>
      </div>
    </div>

    {/* Thumbnail Navigation */}
    {collection.images.length > 1 && (
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Other prints</h4>
        <div className="grid grid-cols-5 gap-2">
          {collection.images.map((image, index) => (
            <button
              key={image.reference}
              onClick={() => handleImageSelect(index)}
              className={`aspect-square rounded overflow-hidden border-2 transition-all ${
                index === currentIndex 
                  ? 'border-gray-800 scale-105' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img
                src={image.thumbnail}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
);

// Desktop Info Content Component
const DesktopInfoContent = ({ 
  currentImage, 
  collection, 
  collectionSlug, 
  currentIndex, 
  copiedRef, 
  copyReference, 
  handleAddToInquiry, 
  handleImageSelect,
  handleShare 
}) => (
  <div>
    {/* Breadcrumb */}
    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
      <Link to="/portfolio" className="hover:text-gray-700 transition-colors">
        Portfolio
      </Link>
      <span>/</span>
      <Link to={`/portfolio/${collectionSlug}`} className="hover:text-gray-700 transition-colors">
        {collection.title}
      </Link>
      <span>/</span>
      <span className="text-gray-800">{currentImage.title}</span>
    </div>

    <div className="flex items-center justify-between mb-4">
      <span className="text-sm text-gray-500">
        {currentIndex + 1} of {collection.images.length}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400">REF:</span>
        <button
          onClick={() => copyReference(currentImage.reference)}
          className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
        >
          {copiedRef === currentImage.reference ? (
            <Check size={12} className="text-green-600" />
          ) : (
            <Copy size={12} />
          )}
          {currentImage.reference}
        </button>
      </div>
    </div>

    <h3 className="text-xl lg:text-2xl font-light text-gray-800 mb-2">
      {currentImage.title}
    </h3>
    
    <p className="text-gray-600 mb-4 font-light">
      {currentImage.description}
    </p>

    <div className="space-y-3 mb-6">
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Collection:</span>
        <span className="text-gray-800">{collection.title}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Available Sizes:</span>
        <span className="text-gray-800">{currentImage.sizes}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Price Range:</span>
        <span className="text-gray-800 font-medium">{currentImage.priceRange}</span>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="space-y-3">
      <button
        onClick={handleAddToInquiry}
        className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
      >
        <ShoppingCart size={18} />
        Add to Inquiry
      </button>
      
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => copyReference(currentImage.reference)}
          className="flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors text-sm"
        >
          {copiedRef === currentImage.reference ? (
            <>
              <Check size={16} className="text-green-600" />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} />
              Copy Ref
            </>
          )}
        </button>
        
        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors text-sm"
        >
          <Share size={16} />
          {copiedRef === 'url' ? 'Shared!' : 'Share'}
        </button>
      </div>
    </div>

    {/* Thumbnail Navigation */}
    {collection.images.length > 1 && (
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Other prints in this collection</h4>
        <div className="grid grid-cols-4 gap-2">
          {collection.images.map((image, index) => (
            <button
              key={image.reference}
              onClick={() => handleImageSelect(index)}
              className={`aspect-square rounded overflow-hidden border-2 transition-all ${
                index === currentIndex 
                  ? 'border-gray-800 scale-105' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img
                src={image.thumbnail}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default ImageView;