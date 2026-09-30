/**
 * googleAdsData.js
 * Benchmark data for Google Ads (Search, Performance Max, Display, Shopping, YouTube).
 * Accounts for match types, Quality Score, Search Impression Share, and bid strategies.
 */

export const CURRENCIES = {
  BDT: { label: 'BDT (Bangladeshi Taka)', symbol: '৳', usdRate: 118 },
  USD: { label: 'USD (US Dollar)', symbol: '$', usdRate: 1 },
  GBP: { label: 'GBP (British Pound)', symbol: '£', usdRate: 0.79 },
  EUR: { label: 'EUR (Euro)', symbol: '€', usdRate: 0.92 },
  INR: { label: 'INR (Indian Rupee)', symbol: '₹', usdRate: 86 },
  PKR: { label: 'PKR (Pakistani Rupee)', symbol: '₨', usdRate: 278 },
  AED: { label: 'AED (UAE Dirham)', symbol: 'د.إ', usdRate: 3.67 },
  SAR: { label: 'SAR (Saudi Riyal)', symbol: '﷼', usdRate: 3.75 },
  CAD: { label: 'CAD (Canadian Dollar)', symbol: 'C$', usdRate: 1.37 },
  AUD: { label: 'AUD (Australian Dollar)', symbol: 'A$', usdRate: 1.52 },
};

export const COUNTRIES = [
  { id: 'BD', label: 'Bangladesh', currency: 'BDT', cpcMultiplier: 0.45 },
  { id: 'US', label: 'United States', currency: 'USD', cpcMultiplier: 1.35 },
  { id: 'UK', label: 'United Kingdom', currency: 'GBP', cpcMultiplier: 1.15 },
  { id: 'IN', label: 'India', currency: 'INR', cpcMultiplier: 0.40 },
  { id: 'PK', label: 'Pakistan', currency: 'PKR', cpcMultiplier: 0.35 },
  { id: 'AE', label: 'United Arab Emirates', currency: 'AED', cpcMultiplier: 1.10 },
  { id: 'SA', label: 'Saudi Arabia', currency: 'SAR', cpcMultiplier: 1.05 },
  { id: 'CA', label: 'Canada', currency: 'CAD', cpcMultiplier: 1.20 },
  { id: 'AU', label: 'Australia', currency: 'AUD', cpcMultiplier: 1.25 },
  { id: 'OTHER', label: 'Global Average / Other', currency: 'USD', cpcMultiplier: 0.85 },
];

export const INDUSTRIES = [
  { id: 'ecommerce', label: 'E-commerce & Retail', cpc: 1.16, ctr: 2.69, cvr: 2.81, qs: 6.2, roas: 4.0 },
  { id: 'saas', label: 'SaaS & Enterprise Software', cpc: 3.80, ctr: 2.41, cvr: 3.04, qs: 6.0, roas: 3.2 },
  { id: 'real-estate', label: 'Real Estate & Construction', cpc: 2.37, ctr: 3.71, cvr: 2.47, qs: 6.5, roas: 3.5 },
  { id: 'healthcare', label: 'Healthcare & Medical Practice', cpc: 2.62, ctr: 3.27, cvr: 3.36, qs: 6.3, roas: 3.0 },
  { id: 'legal', label: 'Legal & Attorney Services', cpc: 6.75, ctr: 2.93, cvr: 2.15, qs: 5.8, roas: 2.8 },
  { id: 'education', label: 'Education & Online Degrees', cpc: 2.40, ctr: 3.78, cvr: 3.39, qs: 6.4, roas: 3.4 },
  { id: 'travel', label: 'Travel & Hospitality', cpc: 1.53, ctr: 4.68, cvr: 2.60, qs: 6.1, roas: 3.6 },
  { id: 'finance', label: 'Finance & Insurance', cpc: 3.44, ctr: 2.91, cvr: 5.10, qs: 5.9, roas: 3.1 },
  { id: 'home-services', label: 'Home Services & Contractors', cpc: 3.60, ctr: 4.19, cvr: 4.19, qs: 6.6, roas: 3.9 },
  { id: 'automotive', label: 'Automotive & Dealerships', cpc: 1.67, ctr: 3.42, cvr: 2.86, qs: 6.2, roas: 3.3 },
  { id: 'b2b', label: 'B2B & Manufacturing', cpc: 2.96, ctr: 2.55, cvr: 2.31, qs: 5.7, roas: 2.9 },
  { id: 'restaurants', label: 'Restaurants & Hospitality', cpc: 0.87, ctr: 4.50, cvr: 2.65, qs: 6.5, roas: 3.7 },
];

export const OBJECTIVES = [
  { id: 'sales', label: 'Sales / Online Purchases', note: 'Optimizes for revenue & verified transactions', cpcMult: 1.0, ctrMult: 1.0, cvrMult: 1.0, conversionLabel: 'Purchases', costLabel: 'CPA' },
  { id: 'leads', label: 'Qualified Leads', note: 'Form fills, appointment bookings & phone calls', cpcMult: 0.95, ctrMult: 1.05, cvrMult: 1.25, conversionLabel: 'Leads', costLabel: 'Cost/Lead' },
  { id: 'traffic', label: 'Website Traffic', note: 'High volume qualified visits to landing pages', cpcMult: 0.80, ctrMult: 1.15, cvrMult: 0.55, conversionLabel: 'Completions', costLabel: 'Cost/Visit' },
  { id: 'app-promotion', label: 'App Installs & Retention', note: 'Google Play & App Store deep installations', cpcMult: 0.75, ctrMult: 0.90, cvrMult: 0.70, conversionLabel: 'Installs', costLabel: 'Cost/Install' },
  { id: 'awareness', label: 'Brand Consideration & Reach', note: 'YouTube & Display broad awareness impressions', cpcMult: 0.45, ctrMult: 0.65, cvrMult: 0.35, conversionLabel: 'Engaged Views', costLabel: 'CPV' },
];

export const AD_FORMATS = [
  { id: 'search', label: 'Google Search Campaigns', note: 'High-intent keyword-targeted text ads', cpcMult: 1.0, ctrMult: 1.0, cvrMult: 1.0 },
  { id: 'pmax', label: 'Performance Max (PMax)', note: 'Omnichannel automation across Search, Shopping, YouTube, Maps, Gmail', cpcMult: 0.88, ctrMult: 0.82, cvrMult: 1.12 },
  { id: 'shopping', label: 'Google Shopping (Standard)', note: 'Product listing ads with direct price & image previews', cpcMult: 0.78, ctrMult: 0.95, cvrMult: 1.20 },
  { id: 'display', label: 'Google Display Network (GDN)', note: 'Banner & responsive display across 3M+ websites', cpcMult: 0.35, ctrMult: 0.28, cvrMult: 0.40 },
  { id: 'youtube', label: 'YouTube Video Action', note: 'In-stream skippable & shorts direct-response video ads', cpcMult: 0.55, ctrMult: 0.45, cvrMult: 0.65 },
];

export const PLACEMENTS = [
  { id: 'exact', label: 'Exact Match Keywords [keyword]', note: 'Tight intent control, highest CVR, lowest reach', cpcMult: 1.25, ctrMult: 1.35, cvrMult: 1.30 },
  { id: 'phrase', label: 'Phrase Match Keywords "keyword"', note: 'Balanced intent and volume, standard agency core', cpcMult: 1.0, ctrMult: 1.0, cvrMult: 1.0 },
  { id: 'broad', label: 'Broad Match with Smart Bidding', note: 'Maximum reach with Google AI intent expansion', cpcMult: 0.78, ctrMult: 0.72, cvrMult: 0.85 },
];

export const NETWORKS = [
  { id: 'search-only', label: 'Google Search Only', note: 'Google.com SERP auctions only (cleanest intent)', cpcMult: 1.0, ctrMult: 1.0 },
  { id: 'search-partners', label: 'Search + Search Partners', note: 'Includes Ask.com, AOL & partner engines (slightly cheaper clicks)', cpcMult: 0.90, ctrMult: 0.88 },
];

export const BID_STRATEGIES = [
  { id: 'max-conversions', label: 'Maximize Conversions', note: 'Algorithms prioritize raw volume within your budget', cpcMult: 1.0 },
  { id: 'target-cpa', label: 'Target CPA (tCPA)', note: 'Algorithms bid dynamically to maintain target cost/lead', cpcMult: 1.08 },
  { id: 'target-roas', label: 'Target ROAS (tROAS)', note: 'Algorithms bid for maximum cart value & order size', cpcMult: 1.15 },
  { id: 'manual-cpc', label: 'Manual CPC / Enhanced CPC', note: 'Fixed maximum bid limits with manual control', cpcMult: 0.92 },
];

export const COMPETITION_LEVELS = [
  { id: 'low', label: 'Low Auction Competition', cpcMult: 0.80 },
  { id: 'medium', label: 'Moderate / Baseline Competition', cpcMult: 1.0 },
  { id: 'high', label: 'Aggressive Competitor Bidding', cpcMult: 1.30 },
  { id: 'very-high', label: 'Extreme Competition (Bid Wars)', cpcMult: 1.70 },
];

export const SEASONS = [
  { id: 'normal', label: 'Standard Operating Quarter', cpcMult: 1.0 },
  { id: 'shoulder', label: 'Mid-Year / Seasonal Events', cpcMult: 1.12 },
  { id: 'peak', label: 'Q4 Cyber Week & Holiday Surge', cpcMult: 1.35 },
];
