import React, { useState } from 'react';
import { ArrowLeft, Send, User, Mail, Users, Hash, MapPin, MessageSquare, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JoinInfluencer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    platform: '',
    handle: '',
    followerCount: '',
    contentNiche: '',
    location: '',
    tellUsMore: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Influencer form submitted:', formData);
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
            
            <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 text-xs md:text-sm font-medium text-black bg-gradient-to-r from-blue-400 to-blue-500 rounded-full">
              <span className="w-2 h-2 bg-white rounded-full mr-2 md:mr-3"></span>
              <span className="hidden sm:inline">Ready to become a star creator?</span>
              <span className="sm:hidden">Ready to shine?</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-4 md:mb-6">
              JOIN AS
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                INFLUENCER
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              Connect with premium brands and earn through 
              <span className="text-white font-semibold"> high-paying campaigns</span> that match your audience and style.
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
                      placeholder="Jane Smith"
                      className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
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
                      placeholder="jane@email.com"
                      className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Platform & Handle Row */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Primary Platform *
                  </label>
                  <div className="relative">
                    <Play className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <select
                      name="platform"
                      value={formData.platform}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-gray-800">Select platform</option>
                      <option value="instagram" className="bg-gray-800">Instagram</option>
                      <option value="tiktok" className="bg-gray-800">TikTok</option>
                      <option value="youtube" className="bg-gray-800">YouTube</option>
                      <option value="twitter" className="bg-gray-800">Twitter/X</option>
                      <option value="linkedin" className="bg-gray-800">LinkedIn</option>
                      <option value="other" className="bg-gray-800">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Handle/Username *
                  </label>
                  <div className="relative">
                    <Hash className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      name="handle"
                      value={formData.handle}
                      onChange={handleInputChange}
                      required
                      placeholder="@yourhandle"
                      className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Follower Count & Niche Row */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Follower Count *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <select
                      name="followerCount"
                      value={formData.followerCount}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-gray-800">Select range</option>
                      <option value="1k-10k" className="bg-gray-800">1K - 10K</option>
                      <option value="10k-50k" className="bg-gray-800">10K - 50K</option>
                      <option value="50k-100k" className="bg-gray-800">50K - 100K</option>
                      <option value="100k-500k" className="bg-gray-800">100K - 500K</option>
                      <option value="500k-1m" className="bg-gray-800">500K - 1M</option>
                      <option value="1m+" className="bg-gray-800">1M+</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Content Niche *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="contentNiche"
                      value={formData.contentNiche}
                      onChange={handleInputChange}
                      required
                      placeholder="Fashion, Tech, Fitness, etc."
                      className="w-full px-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Location <span className="text-gray-500">(optional)</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, Country"
                    className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Tell Us More */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Tell Us About Your Content & Goals *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-500" />
                  <textarea
                    name="tellUsMore"
                    value={formData.tellUsMore}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Describe your content style, audience demographics, past brand collaborations, what types of campaigns interest you, and your content creation goals..."
                    className="w-full pl-12 pr-4 py-3 md:py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative w-full px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold text-base md:text-lg rounded-xl hover:from-blue-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <span className="flex items-center justify-center">
                    <span className="hidden sm:inline">Join as Influencer</span>
                    <span className="sm:hidden">Join Now</span>
                    <Send className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Footer Note */}
              <div className="text-center pt-4">
                <p className="text-sm text-gray-400">
                  By submitting this form, you agree to our terms of service and privacy policy.
                  <br />
                  Our team will review your application within <span className="text-blue-400 font-semibold">48 hours</span>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 