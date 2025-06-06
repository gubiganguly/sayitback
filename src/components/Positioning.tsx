import React from 'react';
import { Target, Zap, TrendingUp } from 'lucide-react';

export default function Positioning() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-8 leading-tight">
              BEYOND
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent"> VIRAL</span>
              <br />
              WE CREATE
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"> LEGENDS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              While others chase trends, we set them. Say It Back doesn't just amplify your brand—we transform it into the cultural phenomenon your competitors wish they could replicate.
            </p>
          </div>
          
          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-black text-black mb-4">PRECISION TARGETING</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't spray and pray. Every influencer, every piece of content, every touchpoint is strategically selected to maximize impact and ROI.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-black mb-4">VIRAL VELOCITY</h3>
              <p className="text-gray-600 leading-relaxed">
                Our campaigns don't just launch—they explode. We engineer content that spreads faster than wildfire and sticks longer than superglue.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-black mb-4">MARKET DOMINATION</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't just increase your market share—we help you own the conversation, define the category, and leave competitors scrambling to catch up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}