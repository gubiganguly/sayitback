import React from 'react';
import { Clock, AlertTriangle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ScarcitySection() {
  return (
    <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-3"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Alert Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8 animate-pulse">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
          
          {/* Main Message */}
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            EXCLUSIVE ACCESS
            <br />
            <span className="text-yellow-300">LIMITED SLOTS</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            We only take on <span className="font-black text-white">3 brands per month</span> to ensure each campaign gets our full attention and resources. 
            <span className="font-bold"> Don't wait—secure your launch window now.</span>
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-yellow-300 mr-3" />
                <span className="text-3xl font-black">2</span>
              </div>
              <p className="text-red-100">Slots Remaining</p>
              <p className="text-xs text-red-200 mt-1">This Month</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-yellow-300 mr-3" />
                <span className="text-3xl font-black">48</span>
              </div>
              <p className="text-red-100">Hours Average</p>
              <p className="text-xs text-red-200 mt-1">Response Time</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-yellow-300 mr-3" />
                <span className="text-3xl font-black">100%</span>
              </div>
              <p className="text-red-100">Success Rate</p>
              <p className="text-xs text-red-200 mt-1">Campaign Goals Met</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="space-y-4">
            <Link 
              to="/launch-campaign"
              className="inline-block px-12 py-6 bg-white text-red-700 font-black text-xl rounded-full hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Secure Your Slot Now
            </Link>
            <p className="text-red-200 text-sm">
              ⚡ Applications reviewed within 24 hours
            </p>
          </div>
          
          {/* Countdown Timer Placeholder */}
          <div className="mt-12 bg-black/20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <h4 className="text-lg font-bold mb-4">Next Available Launch Window:</h4>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-black text-yellow-300">12</div>
                <div className="text-xs text-red-200">DAYS</div>
              </div>
              <div>
                <div className="text-2xl font-black text-yellow-300">05</div>
                <div className="text-xs text-red-200">HRS</div>
              </div>
              <div>
                <div className="text-2xl font-black text-yellow-300">32</div>
                <div className="text-xs text-red-200">MIN</div>
              </div>
              <div>
                <div className="text-2xl font-black text-yellow-300">18</div>
                <div className="text-xs text-red-200">SEC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}