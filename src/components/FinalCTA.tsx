import React from 'react';
import { ArrowRight, Play, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">
              YOUR MOMENT
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                IS NOW
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every empire starts with a single decision. Every legend begins with one campaign. 
              <span className="text-white font-semibold"> Your transformation awaits.</span>
            </p>
          </div>

          {/* Dual CTA Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Brand CTA */}
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-400/20 rounded-3xl p-12 text-center group hover:border-yellow-400/40 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-3xl font-black mb-4">READY TO DOMINATE?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Stop being another brand in the noise. Start being the brand everyone talks about. 
                Let's architect your market domination together.
              </p>
              <ul className="text-left space-y-3 mb-8 text-gray-300">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-3" />
                  Campaign strategy consultation
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-3" />
                  Influencer network access
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-3" />
                  ROI-focused execution
                </li>
              </ul>
              <Link 
                to="/launch-campaign"
                className="block w-full py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl rounded-2xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 group"
              >
                <span className="flex items-center justify-center">
                  Launch Your Campaign
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Creator CTA */}
            <div className="bg-gradient-to-br from-blue-400/10 to-blue-600/10 border border-blue-400/20 rounded-3xl p-12 text-center group hover:border-blue-400/40 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-4">READY TO LEVEL UP?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Stop settling for mediocre brand deals. Join our elite creator network and 
                collaborate with premium brands that value your influence.
              </p>
              <ul className="text-left space-y-3 mb-8 text-gray-300">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-blue-400 mr-3" />
                  Premium brand partnerships
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-blue-400 mr-3" />
                  Creative production support
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-blue-400 mr-3" />
                  Long-term growth strategy
                </li>
              </ul>
              <Link 
                to="/join-influencer"
                className="block w-full py-6 border-2 border-blue-500 text-blue-400 font-bold text-xl rounded-2xl hover:bg-blue-500 hover:text-black transition-all duration-300 transform hover:scale-105 group"
              >
                <span className="flex items-center justify-center">
                  Join Creator Network
                  <Play className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center">
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              The brands that will define the next decade are making their move today. 
              The creators who will shape culture tomorrow are joining our network now.
            </p>
            <p className="text-2xl font-bold text-white">
              Which side of history will you choose?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}