import React from 'react';
import { Building2, Users, Rocket, Star } from 'lucide-react';

export default function AudienceSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              TWO WORLDS.
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                ONE MISSION.
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're a brand ready to dominate or a creator ready to elevate, Say It Back is your gateway to unprecedented success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Brands Column */}
            <div className="space-y-8">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mr-6">
                  <Building2 className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-yellow-400">FOR BRANDS</h3>
                  <p className="text-gray-300">Ready to own your market</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border border-yellow-400/20 rounded-2xl p-8 bg-gradient-to-br from-yellow-400/5 to-transparent">
                  <h4 className="text-2xl font-bold mb-4 text-white">Stop Chasing. Start Leading.</h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Your competitors are still playing catch-up with yesterday's trends. We're building tomorrow's cultural movements. Partner with Say It Back and watch your brand become the standard everyone else tries to copy.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <Rocket className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                      Campaign strategy that breaks the internet
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                      Access to A-list influencer network
                    </li>
                    <li className="flex items-center">
                      <Users className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                      Creative direction that converts viewers to customers
                    </li>
                    <li className="flex items-center">
                      <Building2 className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                      ROI-driven media buying and optimization
                    </li>
                  </ul>
                </div>

                <button className="w-full py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg rounded-2xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105">
                  Launch Your Domination Campaign
                </button>
              </div>
            </div>

            {/* Influencers Column */}
            <div className="space-y-8">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mr-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-blue-400">FOR CREATORS</h3>
                  <p className="text-gray-300">Ready to level up</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border border-blue-400/20 rounded-2xl p-8 bg-gradient-to-br from-blue-400/5 to-transparent">
                  <h4 className="text-2xl font-bold mb-4 text-white">From Creator to Cultural Icon.</h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Stop settling for brand deals that barely pay rent. Say It Back connects you with premium brands that value your influence and pay accordingly. This is where creators become legends.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      Premium brand collaboration opportunities
                    </li>
                    <li className="flex items-center">
                      <Rocket className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      Professional creative and production support
                    </li>
                    <li className="flex items-center">
                      <Users className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      Exponential audience growth strategies
                    </li>
                    <li className="flex items-center">
                      <Building2 className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      Long-term partnership development
                    </li>
                  </ul>
                </div>

                <button className="w-full py-6 border-2 border-blue-500 text-blue-400 font-bold text-lg rounded-2xl hover:bg-blue-500 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Join Our Elite Creator Network
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}