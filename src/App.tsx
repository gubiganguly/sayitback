import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LaunchCampaign from './components/LaunchCampaign';
import JoinInfluencer from './components/JoinInfluencer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/launch-campaign" element={<LaunchCampaign />} />
      <Route path="/join-influencer" element={<JoinInfluencer />} />
    </Routes>
  );
}

export default App;