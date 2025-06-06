import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-medium text-black bg-white rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Only 3 brand slots available this month
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8">
            WE DON'T BUILD
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              CAMPAIGNS
            </span>
            <br />
            WE ARCHITECT
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              DOMINANCE
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Say It Back transforms brands into cultural movements through 
            <span className="text-white font-semibold"> influencer-driven campaigns</span> that 
            don't just go viral—they dominate markets.
          </p>
          
          {/* Dual CTAs */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              to="/launch-campaign"
              className="group relative px-12 py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25"
            >
              <span className="flex items-center">
                Launch a Campaign
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              to="/join-influencer"
              className="group relative px-12 py-6 border-2 border-blue-500 text-blue-400 font-bold text-lg rounded-full hover:bg-blue-500 hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="flex items-center">
                Join as Influencer
                <Play className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-400 mb-2">500M+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Total Reach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">15X</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-2">97%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}