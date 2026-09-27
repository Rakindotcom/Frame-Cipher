/**
 * tiktokAdsData.js
 * Benchmark data for TikTok Ads.
 * Includes Video View Rate (VVR - 6 second retention), Engagement rates, and Spark Ad mechanics.
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
  { id: 'UK', label: 'United Kingdom', currency: 'GBP', cpmMultiplier: 0.85 },
  { id: 'DE', label: 'Germany', currency: 'EUR', cpmMultiplier: 0.80 },
  { id: 'CA', label: 'Canada', currency: 'CAD', cpmMultiplier: 0.82 },
  { id: 'AU', label: 'Australia', currency: 'AUD', cpmMultiplier: 0.78 },
  { id: 'AE', label: 'United Arab Emirates', currency: 'AED', cpmMultiplier: 0.70 },
  { id: 'BD', label: 'Bangladesh', currency: 'BDT', cpmMultiplier: 0.18 },
  { id: 'IN', label: 'India', currency: 'INR', cpmMultiplier: 0.15 },
  { id: 'ID', label: 'Indonesia', currency: 'IDR', cpmMultiplier: 0.14 },
  { id: 'PH', label: 'Philippines', currency: 'PHP', cpmMultiplier: 0.20 },
];

export const INDUSTRIES = [
  { id: 'ecommerce', label: 'E-commerce & Direct-to-Consumer', cpm: 9, ctr: 1.6, cvr: 2.2, vvr: 32, engagement: 4.5, freq: 2.4, roas: 3.2 },
  { id: 'fashion-beauty', label: 'Fashion, Skincare & Beauty', cpm: 8, ctr: 1.9, cvr: 2.0, vvr: 38, engagement: 5.8, freq: 2.6, roas: 3.4 },
  { id: 'health-wellness', label: 'Fitness & Health Wellness', cpm: 10, ctr: 1.4, cvr: 2.6, vvr: 30, engagement: 4.0, freq: 2.3, roas: 3.0 },
  { id: 'tech-electronics', label: 'Consumer Gadgets & Tech', cpm: 11, ctr: 1.2, cvr: 1.8, vvr: 28, engagement: 3.2, freq: 2.1, roas: 2.6 },
  { id: 'food-beverage', label: 'Food, Snacks & Beverage', cpm: 8, ctr: 1.8, cvr: 2.4, vvr: 35, engagement: 5.2, freq: 2.5, roas: 3.1 },
  { id: 'education', label: 'Courses, EdTech & Coaching', cpm: 9, ctr: 1.3, cvr: 3.1, vvr: 29, engagement: 3.6, freq: 2.2, roas: 2.9 },
  { id: 'gaming-apps', label: 'Mobile Gaming & Apps', cpm: 7, ctr: 2.1, cvr: 4.0, vvr: 40, engagement: 5.0, freq: 2.8, roas: 2.4 },
  { id: 'real-estate', label: 'Real Estate & Properties', cpm: 12, ctr: 1.0, cvr: 1.5, vvr: 24, engagement: 2.6, freq: 2.0, roas: 2.2 },
  { id: 'finance', label: 'Fintech & Personal Finance', cpm: 13, ctr: 1.1, cvr: 1.7, vvr: 26, engagement: 2.8, freq: 2.0, roas: 2.5 },
  { id: 'travel', label: 'Travel & Experiences', cpm: 9, ctr: 1.5, cvr: 2.0, vvr: 33, engagement: 4.2, freq: 2.3, roas: 2.8 },
];

export const OBJECTIVES = [
  { id: 'sales', label: 'Conversions / TikTok Shop', note: 'Purchase checkouts on website or TikTok Shop', ctrMult: 1.0, cvrMult: 1.0, vvrMult: 1.0, conversionLabel: 'Purchases', costLabel: 'CPA' },
  { id: 'leads', label: 'Lead Generation', note: 'Fast in-app Instant Lead forms', ctrMult: 0.95, cvrMult: 1.25, vvrMult: 0.90, conversionLabel: 'Leads', costLabel: 'CPL' },
  { id: 'traffic', label: 'Traffic & Click Volume', note: 'Direct clicks to landing page', ctrMult: 1.20, cvrMult: 0.80, vvrMult: 0.85, conversionLabel: 'Visits', costLabel: 'Cost/Visit' },
  { id: 'video-views', label: 'Video Views (Focused Reach)', note: 'Optimized for 2-sec & 6-sec video consumption', ctrMult: 0.85, cvrMult: 0.50, vvrMult: 1.35, conversionLabel: '6s Views', costLabel: 'CPV' },
  { id: 'app-promotion', label: 'App Installs & Preregistrations', note: 'Direct store installs and in-app event tracking', ctrMult: 1.10, cvrMult: 1.15, vvrMult: 1.05, conversionLabel: 'Installs', costLabel: 'CPI' },
];

export const AD_FORMATS = [
  { id: 'spark-ads', label: 'Spark Ads (Boost Organic / Creator)', note: 'Promotes authentic creator posts with native engagement', cpmMult: 0.90, ctrMult: 1.25, cvrMult: 1.20 },
  { id: 'in-feed', label: 'Standard In-Feed Video Ads', note: 'Full-screen 9:16 vertical ads in the For You Feed', cpmMult: 1.0, ctrMult: 1.0, cvrMult: 1.0 },
  { id: 'tiktok-shop', label: 'TikTok Shop Product Card Ads', note: 'Direct shoppable product tags embedded in video', cpmMult: 0.95, ctrMult: 1.15, cvrMult: 1.30 },
  { id: 'topview', label: 'TopView / Reservation (Brand Takeover)', note: 'First video seen when opening the app (premium scale)', cpmMult: 2.20, ctrMult: 1.80, cvrMult: 0.85 },
];

export const PLACEMENTS = [
  { id: 'tiktok-only', label: 'TikTok Only (For You Feed)', note: 'Core TikTok feed (highest brand authenticity)', cpmMult: 1.0 },
  { id: 'automatic', label: 'Automatic (TikTok + Pangle + CapCut)', note: 'Wider distribution across ByteDance partner network', cpmMult: 0.82 },
];

export const BID_STRATEGIES = [
  { id: 'lowest-cost', label: 'Lowest Cost (Maximize Delivery)', note: 'Spends budget for maximum results at lowest price', cpmMult: 1.0 },
  { id: 'cost-cap', label: 'Cost Cap (Target CPA)', note: 'Maintains average cost per result below your threshold', cpmMult: 1.10 },
  { id: 'bid-cap', label: 'Bid Cap (Strict Max Bid)', note: 'Strict ceiling on maximum bid per auction', cpmMult: 1.18 },
];

export const COMPETITION_LEVELS = [
  { id: 'low', label: 'Low Competition', cpmMult: 0.82 },
  { id: 'medium', label: 'Standard Competition', cpmMult: 1.0 },
  { id: 'high', label: 'High Viral Competition', cpmMult: 1.28 },
  { id: 'very-high', label: 'Intense Trend / Category Surge', cpmMult: 1.60 },
];

export const SEASONS = [
  { id: 'normal', label: 'Normal Quarter', cpmMult: 1.0 },
  { id: 'shoulder', label: 'Festive / Seasonal Trend', cpmMult: 1.15 },
  { id: 'peak', label: 'Holiday & Q4 Shopping Festival', cpmMult: 1.45 },
];
