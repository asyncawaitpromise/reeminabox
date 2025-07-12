import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ShoppingCart, Copy, Check } from 'react-feather';

const ImageGalleryModal = ({ 
  isOpen, 
  onClose, 
  collection, 
  initialImageIndex = 0
}) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex);
  const [copiedRef, setCopiedRef] = useState(null);

  const nextImage = () => {
    if (!collection) return;
    setCurrentIndex((prev) => (prev + 1) % collection.images.length);
  };

  const prevImage = () => {
    if (!collection) return;
    setCurrentIndex((prev) => 
      prev === 0 ? collection.images.length - 1 : prev - 1
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  useEffect(() => {
    setCurrentIndex(initialImageIndex);
  }, [initialImageIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [isOpen, currentIndex]);

  if (!isOpen || !collection) return null;

  const currentImage = collection.images[currentIndex];

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
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
      >
        <X size={32} />
      </button>

      {/* Navigation Buttons */}
      {collection.images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight size={48} />
          </button>
        </>
      )}

      {/* Main Content */}
      <div className="w-full h-full flex flex-col lg:flex-row">
        {/* Image */}
        <div className="flex-1 flex items-center justify-center p-4">
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Image Info Panel - Mobile/Desktop */}
        <div className="lg:w-80 bg-white lg:bg-gray-50 p-6 lg:p-8 lg:overflow-y-auto">
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
            
            <button
              onClick={() => copyReference(currentImage.reference)}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg transition-colors"
            >
              {copiedRef === currentImage.reference ? (
                <>
                  <Check size={18} className="text-green-600" />
                  Reference Copied!
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy Reference
                </>
              )}
            </button>
          </div>

          {/* Thumbnail Navigation */}
          {collection.images.length > 1 && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Other prints in this collection</h4>
              <div className="grid grid-cols-4 gap-2">
                {collection.images.map((image, index) => (
                  <button
                    key={image.reference}
                    onClick={() => setCurrentIndex(index)}
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
      </div>
    </div>
  );
};

export default ImageGalleryModal;
