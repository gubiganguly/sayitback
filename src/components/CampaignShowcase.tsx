import React from 'react';
import { Play, ExternalLink, TrendingUp } from 'lucide-react';

export default function CampaignShowcase() {
  const campaigns = [
    {
      brand: "RETREATS",
      title: "Gram Camp",
      videoUrl: "/videos/gramcamp.MP4",
      metrics: "14k+ views • 200+ engagement • 847% ROI",
      description: "Transformed a startup fashion brand into the most-talked-about label of the year through strategic TikTok takeover."
    },
    {
      brand: "FESTIVALS",
      title: "Freedom Fest",
      videoUrl: "/videos/freedomfest.MP4",
      metrics: "100M+ impressions • 12M downloads • #1 App Store",
      description: "Launched a productivity app to cultural phenomenon status through influencer-driven viral challenges."
    },
    {
      brand: "BEAUTY BRAND",
      title: "Makeup Movement Revolution",
      videoUrl: "/videos/makeup-movement.mp4",
      metrics: "75M+ reach • 5.2M UGC posts • 1200% sales increase",
      description: "Created a beauty trend that dominated social feeds and drove unprecedented product demand."
    },
    {
      brand: "FITNESS BRAND",
      title: "Wellness Redefined",
      videoUrl: "/videos/wellness-redefined.mp4",
      metrics: "200M+ views • 8.7M participants • Global trend",
      description: "Sparked a global fitness movement that redefined how people approach wellness and self-care."
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight">
              CAMPAIGNS THAT
              <br />
              <span className="bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">
                BREAK THE INTERNET
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When other agencies deliver campaigns, we deliver cultural phenomena. Here's how we've transformed brands into movements.
            </p>
          </div>

          {/* Campaign Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {campaigns.map((campaign, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Video */}
                <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
                  <video 
                    className="w-full h-full object-cover"
                    src={campaign.videoUrl}
                    loop
                    playsInline
                    onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                    onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div 
                      className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        const video = e.currentTarget.closest('.relative')?.querySelector('video') as HTMLVideoElement;
                        if (video) {
                          if (video.paused) {
                            video.play();
                          } else {
                            video.pause();
                          }
                        }
                      }}
                    >
                      <Play className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-white text-xs font-semibold">
                    {campaign.brand}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-yellow-400 to-blue-400 p-2 rounded-full">
                    <ExternalLink className="w-4 h-4 text-black" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-black mb-3">{campaign.title}</h3>
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm font-semibold text-green-600">{campaign.metrics}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{campaign.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="px-12 py-6 bg-gradient-to-r from-black to-gray-800 text-white font-bold text-lg rounded-full hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              View Full Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}