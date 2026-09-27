/**
 * openAiAdsData.js
 * Benchmark data for ChatGPT / OpenAI & Conversational AI Search Placements.
 * Illustrative planning estimates for conversational sponsored answers, product cards, and voice mode.
 */

export const CURRENCIES = {
  USD: { label: 'USD — US Dollar', symbol: '$', usdRate: 1 },
  BDT: { label: 'BDT — Bangladeshi Taka', symbol: '৳', usdRate: 118 },
  GBP: { label: 'GBP — British Pound', symbol: '£', usdRate: 0.79 },
  INR: { label: 'INR — Indian Rupee', symbol: '₹', usdRate: 86 },
  PKR: { label: 'PKR — Pakistani Rupee', symbol: '₨', usdRate: 278 },
  AED: { label: 'AED — UAE Dirham', symbol: 'د.إ', usdRate: 3.67 },
  SAR: { label: 'SAR — Saudi Riyal', symbol: '﷼', usdRate: 3.75 },
  CAD: { label: 'CAD — Canadian Dollar', symbol: 'C$', usdRate: 1.37 },
  AUD: { label: 'AUD — Australian Dollar', symbol: 'A$', usdRate: 1.52 },
  EUR: { label: 'EUR — Euro', symbol: '€', usdRate: 0.92 },
};

export const COUNTRIES = [
  { id: 'US', label: 'United States', currency: 'USD', cpcMultiplier: 1.30 },
  { id: 'BD', label: 'Bangladesh', currency: 'BDT', cpcMultiplier: 0.40 },
  { id: 'UK', label: 'United Kingdom', currency: 'GBP', cpcMultiplier: 1.10 },
  { id: 'IN', label: 'India', currency: 'INR', cpcMultiplier: 0.38 },
  { id: 'PK', label: 'Pakistan', currency: 'PKR', cpcMultiplier: 0.32 },
  { id: 'AE', label: 'United Arab Emirates', currency: 'AED', cpcMultiplier: 1.05 },
  { id: 'SA', label: 'Saudi Arabia', currency: 'SAR', cpcMultiplier: 1.00 },
  { id: 'CA', label: 'Canada', currency: 'CAD', cpcMultiplier: 1.15 },
  { id: 'AU', label: 'Australia', currency: 'AUD', cpcMultiplier: 1.20 },
  { id: 'OTHER', label: 'Global Average / Other', currency: 'USD', cpcMultiplier: 0.80 },
];

export const INDUSTRIES = [
  { id: 'ecommerce', label: 'E-commerce & Retail Shopping', cpc: 1.35, ctr: 3.10, cvr: 3.00, qs: 6.4, roas: 4.1 },
  { id: 'saas', label: 'SaaS & AI Software Tools', cpc: 4.10, ctr: 2.60, cvr: 3.20, qs: 6.1, roas: 3.1 },
  { id: 'real-estate', label: 'Real Estate & Rentals', cpc: 2.60, ctr: 3.90, cvr: 2.50, qs: 6.5, roas: 3.4 },
  { id: 'healthcare', label: 'Healthcare, Wellness & Clinics', cpc: 2.90, ctr: 3.40, cvr: 3.30, qs: 6.2, roas: 2.9 },
  { id: 'legal', label: 'Legal Consultation & Attorneys', cpc: 7.20, ctr: 2.70, cvr: 2.10, qs: 5.7, roas: 2.7 },
  { id: 'education', label: 'Certifications & Online Bootcamps', cpc: 2.50, ctr: 4.00, cvr: 3.40, qs: 6.4, roas: 3.3 },
  { id: 'travel', label: 'Travel Planning & Bookings', cpc: 1.70, ctr: 4.90, cvr: 2.70, qs: 6.2, roas: 3.5 },
  { id: 'finance', label: 'Fintech & Investment Advisory', cpc: 3.70, ctr: 3.00, cvr: 4.90, qs: 5.8, roas: 3.0 },
  { id: 'home-services', label: 'Contractors & Home Services', cpc: 3.80, ctr: 4.30, cvr: 4.00, qs: 6.6, roas: 3.8 },
  { id: 'automotive', label: 'Automotive & EV Comparison', cpc: 1.85, ctr: 3.60, cvr: 2.80, qs: 6.3, roas: 3.2 },
  { id: 'b2b', label: 'B2B Solutions & Logistics', cpc: 3.15, ctr: 2.60, cvr: 2.20, qs: 5.6, roas: 2.8 },
  { id: 'restaurants', label: 'Dining & Specialty Food', cpc: 1.00, ctr: 4.70, cvr: 2.60, qs: 6.5, roas: 3.6 },
];

export const OBJECTIVES = [
  { id: 'sales', label: 'Purchases & Cart Checkout', note: 'Surfaced in shopping and product recommendation queries', cpcMult: 1.0, ctrMult: 1.0, cvrMult: 1.0, conversionLabel: 'Purchases', costLabel: 'CPA' },
  { id: 'leads', label: 'Consultations & Qualified Inquiries', note: 'Captured when users ask for service recommendations', cpcMult: 0.93, ctrMult: 1.08, cvrMult: 1.30, conversionLabel: 'Leads', costLabel: 'Cost/Lead' },
  { id: 'traffic', label: 'Site Exploration & Deep Reads', note: 'Outbound click links cited in synthesized answers', cpcMult: 0.78, ctrMult: 1.20, cvrMult: 0.50, conversionLabel: 'Visits', costLabel: 'Cost/Visit' },
  { id: 'app-promotion', label: 'App & Custom GPT Installs', note: 'Recommended plugins, custom GPTs, and apps', cpcMult: 0.82, ctrMult: 0.95, cvrMult: 0.85, conversionLabel: 'Installs', costLabel: 'Cost/Install' },
];

export const AD_FORMATS = [
  { id: 'sponsored-answer', label: 'Sponsored AI Answer Citation', note: 'Contextual brand recommendation inside conversational answer', cpcMult: 1.0, ctrMult: 1.0, cvrMult: 1.0 },
  { id: 'product-card', label: 'Interactive AI Product Card', note: 'Rich product preview with specs, pricing, and 1-click checkout', cpcMult: 0.92, ctrMult: 1.20, cvrMult: 1.25 },
  { id: 'shopping-assistant', label: 'ChatGPT Shopping Assistant Placement', note: 'Dedicated comparison table placement in buyer comparison prompts', cpcMult: 1.15, ctrMult: 1.35, cvrMult: 1.30 },
  { id: 'search-overview', label: 'AI Search Overview Citation', note: 'Source attribution snippet in ChatGPT Search web results', cpcMult: 0.85, ctrMult: 0.90, cvrMult: 0.75 },
];

export const PLACEMENTS = [
  { id: 'prompt-response', label: 'In-Prompt Direct Answers', note: 'Surfaced directly when user asks for specific solution or tool', cpcMult: 1.0 },
  { id: 'sidebar-card', label: 'Side Canvas / Resource Drawer', note: 'Persistent card alongside long-form research sessions', cpcMult: 0.85 },
];

export const NETWORKS = [
  { id: 'chatgpt-web-app', label: 'ChatGPT Web & Mobile App', note: 'Core ChatGPT Free & Plus direct user surface', cpcMult: 1.0 },
  { id: 'api-partners', label: 'OpenAI Ecosystem Partner Interfaces', note: 'Third-party developer apps integrating OpenAI Search API', cpcMult: 0.88 },
];

export const BID_STRATEGIES = [
  { id: 'value-optimized', label: 'Intent-Value Optimized', note: 'Algorithms bid higher when conversation semantic intent is purchase-ready', cpcMult: 1.10 },
  { id: 'target-cost', label: 'Target Cost Per Citation', note: 'Maintains fixed acquisition cost ceiling', cpcMult: 1.0 },
  { id: 'maximum-citations', label: 'Maximize Citations / Reach', note: 'Captures maximum brand appearances across relevant prompt topics', cpcMult: 0.90 },
];

export const COMPETITION_LEVELS = [
  { id: 'low', label: 'Early Adopter / Low Saturation', cpcMult: 0.80 },
  { id: 'medium', label: 'Moderate Prompt Competition', cpcMult: 1.0 },
  { id: 'high', label: 'Crowded Category / High Intent Prompts', cpcMult: 1.30 },
  { id: 'very-high', label: 'Heavy Category Bidding (e.g. CRM, Cloud, Wealth)', cpcMult: 1.70 },
];

export const SEASONS = [
  { id: 'normal', label: 'Standard Operating Baseline', cpcMult: 1.0 },
  { id: 'shoulder', label: 'Quarter-End / Back to School', cpcMult: 1.12 },
  { id: 'peak', label: 'Q4 Enterprise Budget Flush & Cyber Week', cpcMult: 1.35 },
];
