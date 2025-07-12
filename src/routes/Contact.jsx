import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Mail, Phone, Instagram, MapPin, Camera, X } from 'react-feather';

const Contact = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [inquiryItems, setInquiryItems] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check URL parameters for selected print
    const refParam = searchParams.get('ref');
    const titleParam = searchParams.get('title');
    
    if (refParam && titleParam) {
      // Handle single print selection from URL parameters
      const selectedPrint = { 
        reference: decodeURIComponent(refParam), 
        title: decodeURIComponent(titleParam) 
      };
      setInquiryItems([selectedPrint]);
      setMessage(`Hi! I'm interested in this print:\n\n• ${selectedPrint.title} (Ref: ${selectedPrint.reference})\n\nPlease let me know about availability, sizing options, and pricing. Thank you!`);
    } else {
      // Check if a specific print was selected from navigation state (fallback)
      const selectedPrint = location.state?.selectedPrint;
      
      if (selectedPrint) {
        // Handle single print selection from "Add to Inquiry"
        setInquiryItems([selectedPrint]);
        setMessage(`Hi! I'm interested in this print:\n\n• ${selectedPrint.title} (Ref: ${selectedPrint.reference})\n\nPlease let me know about availability, sizing options, and pricing. Thank you!`);
      } else {
        // Load existing inquiry items from localStorage
        const items = JSON.parse(localStorage.getItem('inquiryItems') || '[]');
        setInquiryItems(items);
        
        // Generate initial message if items exist
        if (items.length > 0) {
          const itemsList = items.map(item => `• ${item.title} (Ref: ${item.reference})`).join('\n');
          setMessage(`Hi! I'm interested in the following prints:\n\n${itemsList}\n\nPlease let me know about availability, sizing options, and pricing. Thank you!`);
        }
      }
    }
  }, [location.state, searchParams]);

  const removeInquiryItem = (reference) => {
    const updatedItems = inquiryItems.filter(item => item.reference !== reference);
    setInquiryItems(updatedItems);
    
    // Only update localStorage if not from navigation state
    if (!location.state?.selectedPrint) {
      localStorage.setItem('inquiryItems', JSON.stringify(updatedItems));
    }
    
    // Update message
    if (updatedItems.length > 0) {
      const itemsList = updatedItems.map(item => `• ${item.title} (Ref: ${item.reference})`).join('\n');
      const prefix = updatedItems.length === 1 ? 'Hi! I\'m interested in this print:' : 'Hi! I\'m interested in the following prints:';
      setMessage(`${prefix}\n\n${itemsList}\n\nPlease let me know about availability, sizing options, and pricing. Thank you!`);
    } else {
      setMessage('');
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pb-20 animate-fade-in">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-8"></div>
          <h1 className="text-4xl lg:text-5xl font-light text-gray-800 mb-6 tracking-wide">
            Get In Touch
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Interested in purchasing fine art prints? Have questions about sizing, framing, 
            or custom orders? I'd love to help you find the perfect piece for your space.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-light text-gray-800 mb-8">Purchase Inquiries</h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <a href="mailto:reem@reeminabox.com" className="text-gray-600 hover:text-gray-800">
                        reem@reeminabox.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Phone</h3>
                      <a href="tel:+16194039215" className="text-gray-600 hover:text-gray-800">
                        (619) 403-9215
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Instagram</h3>
                      <a 
                        href="https://instagram.com/reeminabox" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        @reeminabox
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Shipping</h3>
                      <span className="text-gray-600">Worldwide Delivery Available</span>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:reem@reeminabox.com"
                    className="btn btn-primary btn-lg gap-2 bg-gray-900 hover:bg-gray-800 border-gray-900 hover:border-gray-800 text-white btn-professional transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-5 h-5" />
                    Email Me
                  </a>
                  <a
                    href="tel:+16194039215"
                    className="btn btn-outline btn-lg gap-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:border-gray-900 hover:text-white btn-professional transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    Call Me
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 md:p-8 animate-fade-in-scale">
                <div className="w-12 h-0.5 bg-gray-800 mb-4"></div>
                <h3 className="text-xl md:text-2xl font-light text-gray-800 mb-4 tracking-wide">Quick Inquiry</h3>
                
                {/* Inquiry Items */}
                {inquiryItems.length > 0 && (
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="text-sm font-medium text-blue-800 mb-3">Prints in your inquiry:</h4>
                    <div className="space-y-2">
                      {inquiryItems.map((item) => (
                        <div key={item.reference} className="flex items-center justify-between text-sm">
                          <span className="text-blue-700">
                            {item.title} <span className="text-blue-500">({item.reference})</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => removeInquiryItem(item.reference)}
                            className="text-blue-400 hover:text-blue-600 p-1"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <form className="space-y-4">
                  {/* Full Name - Single Field */}
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      autocomplete="name"
                      className="w-full h-12 md:h-14 px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent peer placeholder-transparent bg-white text-gray-900"
                      placeholder="Your full name"
                      required
                    />
                    <label 
                      htmlFor="fullName"
                      className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500"
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autocomplete="email"
                      className="w-full h-12 md:h-14 px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent peer placeholder-transparent bg-white text-gray-900"
                      placeholder="your@email.com"
                      required
                    />
                    <label 
                      htmlFor="email"
                      className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500"
                    >
                      Email
                    </label>
                  </div>

                  {/* Inquiry Type - Compact */}
                  <div className="relative">
                    <select 
                      id="inquiryType"
                      name="inquiryType"
                      className="w-full h-12 md:h-14 px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent appearance-none bg-white text-gray-900"
                      required
                    >
                      <option value="">Choose...</option>
                      <option value="print-purchase">Print Purchase</option>
                      <option value="custom-size">Custom Size</option>
                      <option value="bulk-order">Bulk Order (5+ prints)</option>
                      <option value="general">General Question</option>
                    </select>
                    <label 
                      htmlFor="inquiryType"
                      className="absolute left-4 top-2 text-xs text-gray-500 pointer-events-none"
                    >
                      What can I help with?
                    </label>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Message - Compact */}
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={inquiryItems.length > 0 ? 5 : 3}
                      className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent peer placeholder-transparent resize-none bg-white text-gray-900"
                      placeholder="Which prints interest you? Any specific sizes or questions?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                    <label 
                      htmlFor="message"
                      className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500"
                    >
                      Your Message
                    </label>
                  </div>

                  {/* Submit Button - Sticky on mobile */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full h-12 md:h-14 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 active:scale-95"
                    >
                      Send Inquiry
                    </button>
                  </div>
                </form>
                
                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Your info is safe. I'll respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  What print sizes and materials do you offer?
                </h3>
                <p className="text-gray-600">
                  All prints are available in multiple sizes from 8x10 to 40x60 inches. 
                  I use premium archival papers including fine art matte, pearl, and metallic finishes. 
                  Custom sizes are also available upon request.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  How long does shipping take?
                </h3>
                <p className="text-gray-600">
                  Most prints are shipped within 5-7 business days. Domestic shipping takes 3-5 days, 
                  while international orders typically arrive within 7-14 days. All orders include 
                  tracking and insurance.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  Do you offer framing services?
                </h3>
                <p className="text-gray-600">
                  While I don't offer framing directly, I can recommend professional framers 
                  and provide specifications for optimal presentation. All prints come with 
                  care instructions to ensure longevity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;