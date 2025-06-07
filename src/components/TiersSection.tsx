import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TiersSection() {
  const tiers = [
    {
      name: "STARTER",
      icon: Zap,
      price: "$25K",
      period: "per campaign",
      description: "Perfect for brands ready to make their first big splash",
      features: [
        "5 premium influencers",
        "30-day campaign duration",
        "Creative strategy & direction",
        "Content creation support",
        "Performance analytics",
        "Community management"
      ],
      cta: "Launch Starter Campaign",
      popular: false,
      gradient: "from-gray-600 to-gray-700"
    },
    {
      name: "MOMENTUM",
      icon: Star,
      price: "$75K",
      period: "per campaign",
      description: "For brands serious about market domination",
      features: [
        "15 A-list influencers",
        "60-day campaign duration",
        "Multi-platform strategy",
        "Professional video production",
        "Paid media amplification",
        "Real-time optimization",
        "Dedicated account manager",
        "Competitor analysis"
      ],
      cta: "Build Momentum",
      popular: true,
      gradient: "from-yellow-400 to-yellow-500"
    },
    {
      name: "EMPIRE",
      icon: Crown,
      price: "$200K+",
      period: "per campaign",
      description: "The ultimate cultural takeover package",
      features: [
        "50+ elite influencers",
        "90-day campaign duration",
        "Global multi-platform domination",
        "Celebrity partnerships",
        "Event & experiential marketing",
        "PR & media relations",
        "Custom trend creation",
        "White-glove service",
        "Quarterly strategy reviews"
      ],
      cta: "Build Your Empire",
      popular: false,
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              CHOOSE YOUR
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
                LEVEL OF DOMINATION
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every empire starts with a single campaign. Choose the package that matches your ambition.
            </p>
          </div>

          {/* Tiers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {tiers.map((tier, index) => (
              <div key={index} className={`relative bg-gray-900 rounded-3xl p-8 ${tier.popular ? 'ring-4 ring-yellow-400 transform scale-105' : ''} transition-all duration-300 hover:transform hover:scale-105`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tier.gradient} rounded-2xl mb-4`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-black">{tier.price}</span>
                    <span className="text-gray-400 text-sm ml-2">{tier.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  to="/launch-campaign"
                  className={`block w-full py-4 font-bold text-lg rounded-2xl transition-all duration-300 text-center ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400' 
                      : 'border-2 border-gray-600 text-gray-300 hover:border-white hover:text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Custom Solutions */}
          <div className="text-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12">
            <h3 className="text-3xl font-black mb-4">Need Something Custom?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Every brand is unique. Let's create a bespoke campaign strategy that perfectly fits your vision and budget.
            </p>
            <Link 
              to="/launch-campaign"
              className="inline-block px-12 py-6 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Let's Talk Custom Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}