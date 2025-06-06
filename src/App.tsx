import React from 'react';
import Hero from './components/Hero';
import Positioning from './components/Positioning';
import AudienceSection from './components/AudienceSection';
import CampaignShowcase from './components/CampaignShowcase';
import TiersSection from './components/TiersSection';
import Testimonials from './components/Testimonials';
import ScarcitySection from './components/ScarcitySection';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Positioning />
      <AudienceSection />
      <CampaignShowcase />
      <TiersSection />
      <Testimonials />
      <ScarcitySection />
      <FinalCTA />
    </div>
  );
}

export default App;