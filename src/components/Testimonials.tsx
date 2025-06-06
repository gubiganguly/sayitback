import React from 'react';
import { Quote, Star, Play } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      type: "client",
      name: "David Williams",
      title: "Executive Chef, Moody Center",
      content: "Say It Back didn't just run our campaign—they created a cultural moment. We went from unknown startup to industry leader in 90 days. The ROI was beyond our wildest dreams.",
      rating: 5,
      metric: "Landed a TV Show"
    },
    {
      type: "creator",
      name: "Marcus Thompson",
      title: "Content Creator, 2.3M followers",
      content: "Working with Say It Back elevated my entire brand. These aren't just collaborations—they're career-defining partnerships. The creative support is unmatched.",
      rating: 5,
      metric: "300% follower growth"
    },
    {
      type: "client",
      name: "David Rodriguez",
      title: "Founder, TechFlow App",
      content: "Our app was drowning in a sea of competitors. Say It Back turned us into the #1 trending app globally. Their influencer network is pure gold.",
      rating: 5,
      metric: "#1 App Store ranking"
    },
    {
      type: "creator",
      name: "Zoe Williams",
      title: "Beauty Creator, 1.8M followers",
      content: "Say It Back connects creators with brands that actually value our work. Premium partnerships, creative freedom, and payments that reflect our worth. This is the future.",
      rating: 5,
      metric: "5x higher brand rates"
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight">
              SUCCESS
              <span className="bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent"> STORIES</span>
              <br />
              THAT SPEAK
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> VOLUMES</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what happens when brands and creators partner with Say It Back.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      testimonial.type === 'client' 
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' 
                        : 'bg-gradient-to-r from-blue-400 to-blue-500'
                    }`}>
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Metric */}
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                  testimonial.type === 'client'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  <Star className="w-4 h-4 mr-2" />
                  {testimonial.metric}
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonials Section */}
          {/* <div className="bg-black rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-black text-white mb-6">
              Hear It Straight From Our Partners
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Watch exclusive video testimonials from brands and creators who've experienced the Say It Back difference.
            </p>
            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center group cursor-pointer hover:from-gray-700 hover:to-gray-800 transition-all">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-semibold">Brand Success Story</p>
                  <p className="text-gray-400 text-sm">3:42 min</p>
                </div>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center group cursor-pointer hover:from-gray-700 hover:to-gray-800 transition-all">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-semibold">Creator Journey</p>
                  <p className="text-gray-400 text-sm">2:18 min</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}