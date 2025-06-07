import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LaunchCampaign from './components/LaunchCampaign';
import JoinInfluencer from './components/JoinInfluencer';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/launch-campaign" element={<LaunchCampaign />} />
      <Route path="/join-influencer" element={<JoinInfluencer />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;