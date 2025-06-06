import React, { useState } from 'react';
import { ArrowLeft, Send, User, Mail, Building, Globe, Instagram, Video, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LaunchCampaign() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    website: '',
    instagramHandle: '',
    tiktokHandle: '',
    tellUsMore: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Back to Home - Top Left */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
        <Link 
          to="/" 
          className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 text-sm md:text-base text-gray-400 hover:text-white transition-colors group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full hover:border-gray-600"
        >
          <ArrowLeft className="w-4 h-4 mr-1 md:mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Back</span>
        </Link>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-20 pt-20 md:pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            
            <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 text-xs md:text-sm font-medium text-black bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full">
              <span className="w-2 h-2 bg-white rounded-full mr-2 md:mr-3"></span>
              <span className="hidden sm:inline">Ready to dominate your market?</span>
              <span className="sm:hidden">Ready to dominate?</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-4 md:mb-6">
              LAUNCH YOUR
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                CAMPAIGN
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              Fill out the form below and our team will get back to you within 24 hours to discuss your 
              <span className="text-white font-semibold"> game-changing campaign</span>.
            </p>
          </div>

          {/* Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@company.com"
                      className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Business Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Business Name *
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Company Inc."
                    className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Website */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Website <span className="text-gray-500">(optional)</span>
                </label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://yourcompany.com"
                    className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Social Media Handles */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Instagram Handle <span className="text-gray-500">(optional)</span>
                  </label>
                  <div className="relative">
                    <Instagram className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      name="instagramHandle"
                      value={formData.instagramHandle}
                      onChange={handleInputChange}
                      placeholder="@yourcompany"
                      className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    TikTok Handle <span className="text-gray-500">(optional)</span>
                  </label>
                  <div className="relative">
                    <Video className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      name="tiktokHandle"
                      value={formData.tiktokHandle}
                      onChange={handleInputChange}
                      placeholder="@yourcompany"
                      className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Tell Us More */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Tell Us More About Your Goals *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-500" />
                  <textarea
                    name="tellUsMore"
                    value={formData.tellUsMore}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell us about your brand, target audience, campaign goals, budget expectations, and what success looks like for you..."
                    className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative w-full px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-base md:text-lg rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/25"
                >
                  <span className="flex items-center justify-center">
                    <span className="hidden sm:inline">Launch My Campaign</span>
                    <span className="sm:hidden">Launch Campaign</span>
                    <Send className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Footer Note */}
              <div className="text-center pt-4">
                <p className="text-sm text-gray-400">
                  By submitting this form, you agree to our terms of service and privacy policy.
                  <br />
                  Our team will respond within <span className="text-yellow-400 font-semibold">24 hours</span>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 