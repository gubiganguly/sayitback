import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config';

// Campaign Lead Interface
export interface CampaignLead {
  name: string;
  email: string;
  businessName: string;
  website?: string;
  instagramHandle?: string;
  tiktokHandle?: string;
  tellUsMore: string;
  submittedAt?: any; // Firestore timestamp
  type: 'campaign';
}

// Influencer Application Interface
export interface InfluencerApplication {
  name: string;
  email: string;
  platform: string;
  handle: string;
  followerCount: string;
  contentNiche: string;
  location?: string;
  tellUsMore: string;
  submittedAt?: any; // Firestore timestamp
  type: 'influencer';
}

// Save Campaign Lead
export const saveCampaignLead = async (leadData: Omit<CampaignLead, 'submittedAt' | 'type'>) => {
  try {
    const campaignLead: CampaignLead = {
      ...leadData,
      type: 'campaign',
      submittedAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, 'leads'), campaignLead);
    console.log('Campaign lead saved with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving campaign lead: ', error);
    return { success: false, error: error };
  }
};

// Save Influencer Application
export const saveInfluencerApplication = async (applicationData: Omit<InfluencerApplication, 'submittedAt' | 'type'>) => {
  try {
    const influencerApplication: InfluencerApplication = {
      ...applicationData,
      type: 'influencer',
      submittedAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, 'leads'), influencerApplication);
    console.log('Influencer application saved with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving influencer application: ', error);
    return { success: false, error: error };
  }
};
