/**
 * metaAdsData.js
 * Benchmark data for Meta Ads (Facebook & Instagram).
 * Midpoint planning estimates across 10 industries and 10 countries.
 */

export const CURRENCIES = {
  USD: { label: 'US Dollar (USD)', symbol: '$', usdRate: 1 },
  BDT: { label: 'Bangladeshi Taka (BDT)', symbol: '৳', usdRate: 118 },
  GBP: { label: 'British Pound (GBP)', symbol: '£', usdRate: 0.79 },
  EUR: { label: 'Euro (EUR)', symbol: '€', usdRate: 0.92 },
  AUD: { label: 'Australian Dollar (AUD)', symbol: 'A$', usdRate: 1.52 },
  CAD: { label: 'Canadian Dollar (CAD)', symbol: 'C$', usdRate: 1.37 },
  INR: { label: 'Indian Rupee (INR)', symbol: '₹', usdRate: 86 },
  AED: { label: 'UAE Dirham (AED)', symbol: 'AED', usdRate: 3.67 },
  IDR: { label: 'Indonesian Rupiah (IDR)', symbol: 'Rp', usdRate: 16300 },
  PHP: { label: 'Philippine Peso (PHP)', symbol: '₱', usdRate: 58 },
};

export const COUNTRIES = [
  { id: 'US', label: 'United States', currency: 'USD', cpmMultiplier: 1.0 },
  { id: 'UK', label: 'United Kingdom', currency: 'GBP', cpmMultiplier: 0.88 },
  { id: 'DE', label: 'Germany', currency: 'EUR', cpmMultiplier: 0.82 },
  { id: 'CA', label: 'Canada', currency: 'CAD', cpmMultiplier: 0.85 },
  { id: 'AU', label: 'Australia', currency: 'AUD', cpmMultiplier: 0.80 },
  { id: 'AE', label: 'United Arab Emirates', currency: 'AED', cpmMultiplier: 0.75 },
  { id: 'BD', label: 'Bangladesh', currency: 'BDT', cpmMultiplier: 0.20 },
  { id: 'IN', label: 'India', currency: 'INR', cpmMultiplier: 0.16 },
  { id: 'ID', label: 'Indonesia', currency: 'IDR', cpmMultiplier: 0.15 },
  { id: 'PH', label: 'Philippines', currency: 'PHP', cpmMultiplier: 0.22 },
];

export const INDUSTRIES = [
  { id: 'ecommerce', label: 'E-commerce & Retail', cpm: 11, ctr: 1.8, cvr: 2.4, roas: 3.5, freq: 2.2 },
  { id: 'fashion-beauty', label: 'Fashion & Beauty', cpm: 10, ctr: 2.0, cvr: 2.2, roas: 3.6, freq: 2.4 },
  { id: 'health-wellness', label: 'Health & Wellness', cpm: 12, ctr: 1.6, cvr: 2.6, roas: 3.2, freq: 2.1 },
  { id: 'tech-electronics', label: 'Tech & Electronics', cpm: 13, ctr: 1.3, cvr: 1.9, roas: 2.8, freq: 2.0 },
  { id: 'food-beverage', label: 'Food & Beverage', cpm: 9, ctr: 1.9, cvr: 2.3, roas: 3.1, freq: 2.3 },
  { id: 'education', label: 'Education & Courses', cpm: 10, ctr: 1.4, cvr: 3.0, roas: 3.0, freq: 2.0 },
  { id: 'saas', label: 'SaaS & B2B Tech', cpm: 14, ctr: 1.2, cvr: 1.8, roas: 2.9, freq: 1.8 },
  { id: 'real-estate', label: 'Real Estate & Property', cpm: 15, ctr: 1.0, cvr: 1.5, roas: 2.3, freq: 1.9 },
  { id: 'finance', label: 'Finance & Fintech', cpm: 16, ctr: 1.1, cvr: 1.7, roas: 2.6, freq: 1.9 },
  { id: 'travel', label: 'Travel & Hospitality', cpm: 11, ctr: 1.5, cvr: 2.1, roas: 2.9, freq: 2.2 },
];

export const OBJECTIVES = [
  { id: 'sales', label: 'Sales / Conversions', type: 'conversion', ctrMult: 1.0, cvrMult: 1.0, note: 'Optimized for on-site purchase transactions', conversionLabel: 'Purchases', costLabel: 'CPA' },
  { id: 'leads', label: 'Leads / Instant Forms', type: 'conversion', ctrMult: 0.95, cvrMult: 1.15, note: 'Native Instant Forms or on-site lead capture', conversionLabel: 'Leads', costLabel: 'CPL' },
  { id: 'traffic', label: 'Landing Page Traffic', type: 'consideration', ctrMult: 1.15, cvrMult: 0.85, note: 'High click volume to website or product page', conversionLabel: 'Conversions', costLabel: 'CPA' },
  { id: 'engagement', label: 'Engagement & Community', type: 'consideration', ctrMult: 0.95, cvrMult: 0.70, note: 'Post engagements, comments, video views & shares', conversionLabel: 'Engagements', costLabel: 'Cost/Eng.' },
  { id: 'app-promotion', label: 'App Installs', type: 'app', ctrMult: 1.05, cvrMult: 1.10, note: 'App store installs & in-app key events', conversionLabel: 'Installs', costLabel: 'CPI' },
  { id: 'awareness', label: 'Brand Awareness & Reach', type: 'awareness', ctrMult: 0.70, cvrMult: 0.45, note: 'Maximum unique reach & brand recall lift', conversionLabel: 'Reach Lift', costLabel: 'Cost/Lift' },
];

export const PLACEMENTS = [
  { id: 'auto', label: 'Advantage+ Placements (Recommended)', cpmMult: 1.0, note: 'Meta dynamic allocation across feeds, reels, stories & explore' },
  { id: 'feed', label: 'Feeds Only (FB & IG)', cpmMult: 1.10, note: 'High-intent primary feed placements with extended copy space' },
  { id: 'stories', label: 'Reels & Stories Only', cpmMult: 0.95, note: 'Full-screen 9:16 vertical video mobile surfaces' },
  { id: 'audience-network', label: 'Audience Network Only', cpmMult: 0.60, note: 'Lower-cost third-party apps, lower conversion intent' },
  { id: 'messenger', label: 'Messenger & Direct Inbox', cpmMult: 0.85, note: 'Direct conversation openers and sponsored messages' },
];

export const COMPETITION_LEVELS = [
  { id: 'low', label: 'Low Competition (Niche / Off-season)', cpmMult: 0.80 },
  { id: 'medium', label: 'Medium Competition (Standard Industry Baseline)', cpmMult: 1.0 },
  { id: 'high', label: 'High Competition (Crowded Market)', cpmMult: 1.25 },
  { id: 'very-high', label: 'Intense Competition (Heavy VC / Big-Brand Spend)', cpmMult: 1.55 },
];

export const SEASONS = [
  { id: 'normal', label: 'Standard Operating Season', cpmMult: 1.0 },
  { id: 'shoulder', label: 'Shoulder Season (Eid, Back to School, Summer Sales)', cpmMult: 1.15 },
  { id: 'peak', label: 'Q4 Peak Season (Black Friday, Cyber Week, Year-End)', cpmMult: 1.40 },
];
