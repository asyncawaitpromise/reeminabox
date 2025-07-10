import React from 'react';
import { Mail, Phone, Instagram, MapPin, Camera } from 'react-feather';

const Contact = () => {
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
            Ready to capture your special moments? Let's discuss your vision and 
            create something beautiful together.
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
                <h2 className="text-3xl font-light text-gray-800 mb-8">Let's Connect</h2>
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
                      <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-800">
                        +1 (234) 567-890
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
                      <h3 className="font-medium text-gray-800">Location</h3>
                      <span className="text-gray-600">Available Worldwide</span>
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
                    href="tel:+1234567890"
                    className="btn btn-outline btn-lg gap-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:border-gray-900 hover:text-white btn-professional transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    Call Me
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 animate-fade-in-scale">
                <div className="w-12 h-0.5 bg-gray-800 mb-6"></div>
                <h3 className="text-2xl font-light text-gray-800 mb-6 tracking-wide">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent">
                      <option>Select event type...</option>
                      <option>Wedding</option>
                      <option>Portrait Session</option>
                      <option>Event Photography</option>
                      <option>Family Photos</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                      placeholder="Tell me about your vision and what you have in mind..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn btn-primary btn-lg bg-gray-900 hover:bg-gray-800 border-gray-900 hover:border-gray-800 text-white btn-professional transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
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
                  What is your booking process?
                </h3>
                <p className="text-gray-600">
                  I recommend booking as early as possible to secure your preferred date. 
                  We'll start with a consultation to discuss your vision, then I'll send 
                  you a detailed proposal and contract.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  How long does it take to receive photos?
                </h3>
                <p className="text-gray-600">
                  Turnaround time varies by session type. Portrait sessions typically take 
                  1-2 weeks, while larger events like weddings may take 4-6 weeks for 
                  full gallery delivery.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  Do you travel for sessions?
                </h3>
                <p className="text-gray-600">
                  Yes! I'm available for travel worldwide. Travel fees may apply depending 
                  on the location and duration of the trip.
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