import React, { useState, useEffect } from 'react';
import { ArrowLeft, Eye, EyeOff, Calendar, Filter, Users, Building, Mail, Globe, Instagram, Video, Hash, MapPin, MessageSquare, Clock, User, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { collection, query, orderBy, onSnapshot, where, Timestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase/config';
import { CampaignLead, InfluencerApplication } from '../../lib/firebase/leads/leadsModel';

interface Lead {
  id: string;
  data: CampaignLead | InfluencerApplication;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<'campaign' | 'influencer'>('campaign');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateFilter, setDateFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Password check
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'gubiisepic') {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  // Fetch leads from Firestore
  useEffect(() => {
    if (!isAuthenticated) return;

    const q = query(
      collection(db, 'leads'),
      orderBy('submittedAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const leadsData: Lead[] = [];
      querySnapshot.forEach((doc) => {
        leadsData.push({
          id: doc.id,
          data: doc.data() as CampaignLead | InfluencerApplication
        });
      });
      setLeads(leadsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isAuthenticated]);

  // Filter leads based on tab, date, and search
  useEffect(() => {
    let filtered = leads.filter(lead => lead.data.type === activeTab);

    // Date filtering
    if (dateFilter !== 'all') {
      const now = new Date();
      const filterDate = new Date();
      
      switch (dateFilter) {
        case 'today':
          filterDate.setHours(0, 0, 0, 0);
          break;
        case 'week':
          filterDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          filterDate.setMonth(now.getMonth() - 1);
          break;
      }

      filtered = filtered.filter(lead => {
        const leadDate = lead.data.submittedAt?.toDate?.() || new Date(lead.data.submittedAt);
        return leadDate >= filterDate;
      });
    }

    // Search filtering
    if (searchTerm) {
      filtered = filtered.filter(lead => 
        lead.data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.data.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (lead.data.type === 'campaign' && 
          (lead.data as CampaignLead).businessName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredLeads(filtered);
  }, [leads, activeTab, dateFilter, searchTerm]);

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const campaignCount = leads.filter(lead => lead.data.type === 'campaign').length;
  const influencerCount = leads.filter(lead => lead.data.type === 'influencer').length;

  // Modal handlers
  const openModal = (lead: Lead) => {
    setSelectedLead(lead);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedLead(null);
    setShowModal(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black mb-2">Admin Access</h1>
              <p className="text-gray-400">Enter password to continue</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Back to Home */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
        <Link 
          to="/" 
          className="inline-flex items-center px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full hover:border-gray-600"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 pt-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Admin Dashboard
            </span>
          </h1>
          <p className="text-gray-400">Manage your leads and applications</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-500/20 rounded-lg mr-4">
                <Building className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{campaignCount}</h3>
                <p className="text-gray-400">Campaign Leads</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{influencerCount}</h3>
                <p className="text-gray-400">Influencer Applications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('campaign')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'campaign'
                ? 'bg-yellow-500 text-black'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            <Building className="w-4 h-4 inline mr-2" />
            Campaign Leads ({campaignCount})
          </button>
          <button
            onClick={() => setActiveTab('influencer')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'influencer'
                ? 'bg-blue-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Influencer Applications ({influencerCount})
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name, email, or business..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
            />
          </div>
          
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">Past Week</option>
            <option value="month">Past Month</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Loading leads...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-400">No leads found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Email</th>
                    {activeTab === 'campaign' ? (
                      <>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Business</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Website</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Social</th>
                      </>
                    ) : (
                      <>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Platform</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Handle</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Followers</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Niche</th>
                      </>
                    )}
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Submitted</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-white font-medium">{lead.data.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-300">{lead.data.email}</span>
                        </div>
                      </td>
                      
                      {activeTab === 'campaign' ? (
                        <>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <Building className="w-4 h-4 text-gray-400 mr-2" />
                              <span className="text-gray-300">{(lead.data as CampaignLead).businessName}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {(lead.data as CampaignLead).website ? (
                              <div className="flex items-center">
                                <Globe className="w-4 h-4 text-gray-400 mr-2" />
                                <a 
                                  href={(lead.data as CampaignLead).website} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                  {(lead.data as CampaignLead).website}
                                </a>
                              </div>
                            ) : (
                              <span className="text-gray-500">-</span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              {(lead.data as CampaignLead).instagramHandle && (
                                <div className="flex items-center">
                                  <Instagram className="w-4 h-4 text-pink-400 mr-1" />
                                  <span className="text-gray-300 text-sm">{(lead.data as CampaignLead).instagramHandle}</span>
                                </div>
                              )}
                              {(lead.data as CampaignLead).tiktokHandle && (
                                <div className="flex items-center">
                                  <Video className="w-4 h-4 text-red-400 mr-1" />
                                  <span className="text-gray-300 text-sm">{(lead.data as CampaignLead).tiktokHandle}</span>
                                </div>
                              )}
                              {!(lead.data as CampaignLead).instagramHandle && !(lead.data as CampaignLead).tiktokHandle && (
                                <span className="text-gray-500">-</span>
                              )}
                            </div>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                              {(lead.data as InfluencerApplication).platform}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <Hash className="w-4 h-4 text-gray-400 mr-1" />
                              <span className="text-gray-300">{(lead.data as InfluencerApplication).handle}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-gray-300">{(lead.data as InfluencerApplication).followerCount}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-gray-300">{(lead.data as InfluencerApplication).contentNiche}</span>
                          </td>
                        </>
                      )}
                      
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-300 text-sm">{formatDate(lead.data.submittedAt)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => openModal(lead)}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all duration-200"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mt-4 text-center text-gray-400 text-sm">
          Showing {filteredLeads.length} of {leads.filter(lead => lead.data.type === activeTab).length} {activeTab} {activeTab === 'campaign' ? 'leads' : 'applications'}
        </div>
      </div>

      {/* Detail Modal */}
      {showModal && selectedLead && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold text-white">
                {selectedLead.data.type === 'campaign' ? 'Campaign Lead Details' : 'Influencer Application Details'}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                    <div className="flex items-center text-white">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      {selectedLead.data.name}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    <div className="flex items-center text-white">
                      <Mail className="w-4 h-4 text-gray-400 mr-2" />
                      <a href={`mailto:${selectedLead.data.email}`} className="text-blue-400 hover:text-blue-300">
                        {selectedLead.data.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Submission Date</label>
                    <div className="flex items-center text-white">
                      <Clock className="w-4 h-4 text-gray-400 mr-2" />
                      {formatDate(selectedLead.data.submittedAt)}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Type</label>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      selectedLead.data.type === 'campaign' 
                        ? 'bg-yellow-500/20 text-yellow-300' 
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {selectedLead.data.type === 'campaign' ? 'Campaign Lead' : 'Influencer Application'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Type-specific Information */}
              {selectedLead.data.type === 'campaign' ? (
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white border-b border-gray-800 pb-2">Campaign Information</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Business Name</label>
                      <div className="flex items-center text-white">
                        <Building className="w-4 h-4 text-gray-400 mr-2" />
                        {(selectedLead.data as CampaignLead).businessName}
                      </div>
                    </div>
                    
                    {(selectedLead.data as CampaignLead).website && (
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Website</label>
                        <div className="flex items-center text-white">
                          <Globe className="w-4 h-4 text-gray-400 mr-2" />
                          <a 
                            href={(selectedLead.data as CampaignLead).website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 flex items-center"
                          >
                            {(selectedLead.data as CampaignLead).website}
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {(selectedLead.data as CampaignLead).instagramHandle && (
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Instagram Handle</label>
                        <div className="flex items-center text-white">
                          <Instagram className="w-4 h-4 text-pink-400 mr-2" />
                          {(selectedLead.data as CampaignLead).instagramHandle}
                        </div>
                      </div>
                    )}
                    
                    {(selectedLead.data as CampaignLead).tiktokHandle && (
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">TikTok Handle</label>
                        <div className="flex items-center text-white">
                          <Video className="w-4 h-4 text-red-400 mr-2" />
                          {(selectedLead.data as CampaignLead).tiktokHandle}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white border-b border-gray-800 pb-2">Influencer Information</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Platform</label>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300">
                        {(selectedLead.data as InfluencerApplication).platform}
                      </span>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Handle/Username</label>
                      <div className="flex items-center text-white">
                        <Hash className="w-4 h-4 text-gray-400 mr-2" />
                        {(selectedLead.data as InfluencerApplication).handle}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Follower Count</label>
                      <div className="flex items-center text-white">
                        <Users className="w-4 h-4 text-gray-400 mr-2" />
                        {(selectedLead.data as InfluencerApplication).followerCount}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Content Niche</label>
                      <div className="text-white">
                        {(selectedLead.data as InfluencerApplication).contentNiche}
                      </div>
                    </div>
                  </div>

                  {(selectedLead.data as InfluencerApplication).location && (
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Location</label>
                      <div className="flex items-center text-white">
                        <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                        {(selectedLead.data as InfluencerApplication).location}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tell Us More Section */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white border-b border-gray-800 pb-2">
                  {selectedLead.data.type === 'campaign' ? 'Campaign Goals & Details' : 'Content & Goals Description'}
                </h4>
                <div className="bg-black/30 rounded-xl p-4 border border-gray-800">
                  <div className="flex items-start">
                    <MessageSquare className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                      {selectedLead.data.tellUsMore}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 p-6 border-t border-gray-800">
              <button
                onClick={closeModal}
                className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Close
              </button>
              <a
                href={`mailto:${selectedLead.data.email}`}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 