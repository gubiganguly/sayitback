import React from 'react';
import Hero from './Hero';
import Positioning from './Positioning';
import AudienceSection from './AudienceSection';
import CampaignShowcase from './CampaignShowcase';
import TiersSection from './TiersSection';
import Testimonials from './Testimonials';
import ScarcitySection from './ScarcitySection';
import FinalCTA from './FinalCTA';

export default function Home() {
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