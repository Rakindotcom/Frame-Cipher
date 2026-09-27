/**
 * allAdsCalculatorsConfig.js
 * Master configuration for all 10 advertising service calculators:
 * 1. Google Ads
 * 2. Meta Ads (Facebook & Instagram)
 * 3. TikTok Ads
 * 4. LinkedIn Ads
 * 5. Amazon Ads
 * 6. ChatGPT & AI Search Ads
 * 7. Microsoft (Bing) Ads
 * 8. Pinterest Ads
 * 9. Remarketing & Retargeting Ads
 * 10. Lead Generation Ads
 *
 * Includes divided textbook math equations, platform terms glossary,
 * and comprehensive Schema.org FAQ data for each dedicated route.
 */

export const ALL_ADS_CALCULATORS = [
  {
    slug: 'google-ads',
    title: 'Google Ads Budget & Quality Score Calculator',
    shortTitle: 'Google Ads',
    serviceSlug: '/services/paid-advertising/google-ads',
    badge: 'Search & Performance Max',
    metaTitle: 'Google Ads Budget & ROAS Calculator | Frame Cipher',
    metaDescription:
      'Calculate your Google Ads budget, Quality Score CPC discounts, Search Impression Share, and break-even ROAS. Free agency media planning calculator.',
    headline: 'Reverse-Engineer Google Search Bids & Quality Score Economics',
    description:
      'Plan your Google Ads budget with auction-calibrated math. Calculate how Quality Score improvements lower your effective CPC and how much Search Impression Share your budget can capture.',
    equations: [
      {
        name: 'Actual Cost Per Click (Second-Price Auction)',
        leftSide: 'Actual CPC',
        numerator: 'Ad Rank of Competitor Below You',
        denominator: 'Your Quality Score',
        suffix: '+ $0.01',
        explanation:
          'Google uses a generalized second-price auction. You do not pay your maximum bid; you pay only the minimum required to maintain rank above the advertiser immediately beneath you, divided by your Quality Score.',
        example:
          'If the competitor below you has Ad Rank 30, and your Quality Score is 10/10, your Actual CPC is ($30 / 10) + $0.01 = $3.01. If your Quality Score drops to 5/10, your CPC surges to ($30 / 5) + $0.01 = $6.01 for the exact same position.',
      },
      {
        name: 'Ad Rank Equation',
        leftSide: 'Ad Rank',
        expression: 'Max CPC Bid × Quality Score + Ad Assets Impact',
        isDirectFormula: true,
        explanation:
          'Ad Rank determines your ad position on the Google search results page. Higher Quality Scores allow you to outrank higher-bidding competitors while paying less per click.',
        example:
          'Advertiser A bids $2.00 with QS 10 -> Ad Rank = 20. Advertiser B bids $4.00 with QS 4 -> Ad Rank = 16. Advertiser A ranks #1 despite bidding half as much.',
      },
      {
        name: 'Search Impression Share (IS)',
        leftSide: 'Impression Share',
        numerator: 'Actual Impressions Captured',
        denominator: 'Total Eligible Search Auctions',
        suffix: '× 100%',
        explanation:
          'The percentage of available market queries your ads showed up for. Uncaptured volume is lost either to daily budget exhaustion (Lost IS Budget) or poor Ad Rank (Lost IS Rank).',
        example:
          'If there are 50,000 monthly searches for your keywords and your ads appeared 22,500 times, your Search Impression Share is 45%.',
      },
      {
        name: 'Cost Per Acquisition (CPA)',
        leftSide: 'CPA',
        numerator: 'Effective Cost Per Click (CPC)',
        denominator: 'Landing Page Conversion Rate (CVR)',
        explanation:
          'The acquisition cost for a completed lead or purchase. CPA is mathematically driven by the ratio between click price and checkout conversion efficiency.',
        example:
          'At $2.50 CPC and a 2.5% Conversion Rate, CPA = $2.50 / 0.025 = $100.00 per customer.',
      },
    ],
    terms: [
      {
        term: 'Quality Score (QS)',
        definition:
          'Google’s 1–10 diagnostic score reflecting Expected CTR, Ad Relevance, and Landing Page Experience compared to competitors.',
      },
      {
        term: 'Lost IS (Budget)',
        definition:
          'The percentage of eligible auctions missed because your daily spend cap ran out too early in the day.',
      },
      {
        term: 'Lost IS (Rank)',
        definition:
          'The percentage of auctions missed because your bids or Quality Scores were too low to qualify for top-of-page placements.',
      },
      {
        term: 'Exact Match [keyword]',
        definition:
          'Keywords enclosed in brackets that trigger ads only for searches with identical meaning or tight intent.',
      },
      {
        term: 'Phrase Match "keyword"',
        definition:
          'Keywords in quotes that match searches containing the core meaning, allowing surrounding contextual queries.',
      },
      {
        term: 'Performance Max (PMax)',
        definition:
          'Google’s automated cross-channel campaign type that allocates budget across Search, Shopping, YouTube, Maps, and Display.',
      },
    ],
    faqs: [
      {
        question: 'How does Google Ads Quality Score reduce my click costs?',
        answer:
          'Google calculates your Actual CPC using the formula: (Competitor Ad Rank Below / Your Quality Score) + $0.01. Because Quality Score sits in the denominator, lifting your score from 5/10 to 10/10 cuts your effective cost per click by up to 50% for the exact same ad position.',
      },
      {
        question: 'What is a healthy Search Impression Share to aim for?',
        answer:
          'For branded terms, aim for >85% Impression Share. For high-intent non-brand commercial queries, a share between 40% and 65% is standard. If your Lost IS (Budget) exceeds 20%, raising your daily spend will directly scale customer volume.',
      },
      {
        question: 'What is the minimum budget required to test Google Search ads?',
        answer:
          'We recommend a budget that can generate at least 15–20 clicks per day for 30 days. For e-commerce with a $1.20 CPC, $800–$1,500/month is a healthy testing baseline; for B2B or legal services with higher CPCs, $2,500–$5,000/month ensures statistically significant data.',
      },
      {
        question: 'Should I use Maximize Conversions or Target CPA (tCPA)?',
        answer:
          'For new campaigns with under 30 historical conversions, start with Maximize Conversions so Google machine learning gathers purchase data. Once your account logs 30+ conversions in 30 days, transition to Target CPA with a cap aligned to your unit margins.',
      },
    ],
  },
  {
    slug: 'meta-ads',
    title: 'Meta Ads Budget & Advantage+ ROAS Calculator',
    shortTitle: 'Meta Ads',
    serviceSlug: '/services/paid-advertising/meta-ads',
    badge: 'Facebook & Instagram',
    metaTitle: 'Meta Ads ROAS & Budget Calculator | Frame Cipher',
    metaDescription:
      'Calculate Facebook & Instagram ad spend, Advantage+ ROAS, creative fatigue frequency, and break-even CPA. Free Meta ads media planner.',
    headline: 'Model Meta Auction CPMs, Frequency & Unit Margin ROAS',
    description:
      'Forecast Facebook and Instagram media spend with empirical CTR and CVR benchmarks. Calculate your allowable customer acquisition cost and creative saturation thresholds.',
    equations: [
      {
        name: 'Return On Ad Spend (ROAS)',
        leftSide: 'ROAS',
        numerator: 'Total Attributed Gross Revenue',
        denominator: 'Total Meta Ad Spend',
        explanation:
          'The top-line revenue generated for every dollar or Taka spent on Meta Ads. Must be evaluated alongside gross margin.',
        example:
          'Spending $2,000 on Meta Ads to generate $8,400 in gross sales produces a ROAS of $8,400 / $2,000 = 4.20x.',
      },
      {
        name: 'Break-Even ROAS Equation',
        leftSide: 'Break-Even ROAS',
        numerator: '1',
        denominator: 'Gross Profit Margin %',
        suffix: '= 1 / (1 - COGS %)',
        explanation:
          'The minimum ROAS needed to cover product cost of goods, packaging, and gateway fees without losing money on advertising.',
        example:
          'If your gross profit margin is 35% (COGS is 65%), Break-Even ROAS = 1 / 0.35 = 2.86x. Any campaign operating below 2.86x loses money on every order.',
      },
      {
        name: 'Effective Cost Per Click from CPM',
        leftSide: 'CPC',
        numerator: 'CPM (Cost Per 1,000 Impressions)',
        denominator: '1000 × Link Click-Through Rate (CTR)',
        explanation:
          'Meta auctions impressions, not clicks. Your creative click-through rate directly determines how cheap your traffic becomes.',
        example:
          'With a $12.00 CPM and a 2.0% link CTR, CPC = $12.00 / (1,000 × 0.02) = $0.60 per click.',
      },
      {
        name: 'Ad Impression Frequency',
        leftSide: 'Frequency',
        numerator: 'Total Ad Impressions',
        denominator: 'Unique Reach (Individuals)',
        explanation:
          'The average number of times a single user saw your ad. Frequency above 3.5 in prospecting indicates creative fatigue.',
        example:
          'If 150,000 impressions were shown to 60,000 unique people, your average frequency is 2.5.',
      },
    ],
    terms: [
      {
        term: 'Advantage+ Shopping Campaigns (ASC)',
        definition:
          'Meta’s machine-learning automated campaign type that dynamically combines prospecting and retargeting using broad audience signals.',
      },
      {
        term: 'Link CTR vs CTR (All)',
        definition:
          'Link CTR measures only clicks that lead to your website; CTR (All) includes post likes, photo clicks, and comment expansions.',
      },
      {
        term: 'Conversions API (CAPI)',
        definition:
          'Server-to-server tracking pipeline that sends web events directly from your server to Meta, bypassing iOS ad-blockers and cookie restrictions.',
      },
      {
        term: 'Ad Fatigue',
        definition:
          'Performance decay occurring when the target audience sees the same creative too many times, causing CTR to drop and CPM to rise.',
      },
    ],
    faqs: [
      {
        question: 'What is a good ROAS for Meta Ads in 2026?',
        answer:
          'A "good" ROAS depends entirely on your product gross margin. If your margin is 60%, a 2.5x ROAS is highly profitable. If your margin is 25%, you need a 4.0x ROAS just to break even. Always calculate Break-Even ROAS = 1 / Margin before judging campaign success.',
      },
      {
        question: 'How do I lower my CPC on Facebook and Instagram?',
        answer:
          'Because Meta auctions CPM (impressions), your CPC is mathematically: CPM / (10 × CTR%). The fastest lever to cut CPC in half is lifting your creative CTR by testing high-contrast hooks, user-generated content (UGC), and clear value propositions in the first 3 seconds.',
      },
      {
        question: 'What causes Meta CPMs to suddenly spike?',
        answer:
          'CPMs spike due to: 1) High ad frequency (>3.5) causing audience fatigue; 2) Overly narrow interest targeting (<200k audience); 3) Negative user feedback signals; or 4) Q4 seasonal retail competition (Black Friday/Cyber Week).',
      },
      {
        question: 'How long is the Meta learning phase?',
        answer:
          'Meta ad sets require approximately 50 conversion events within a 7-day rolling window to exit the "Learning" status. Ensure your daily budget is at least 7x your target CPA divided by 7.',
      },
    ],
  },
  {
    slug: 'tiktok-ads',
    title: 'TikTok Ads Budget & Video Retention Calculator',
    shortTitle: 'TikTok Ads',
    serviceSlug: '/services/paid-advertising/tiktok-ads',
    badge: 'Short-Form Video & UGC',
    metaTitle: 'TikTok Ads Budget & 6s Retention Calculator | Frame Cipher',
    metaDescription:
      'Forecast TikTok ad spend, 6-second video view rate (VVR), Spark Ads engagement, and TikTok Shop CPA. Free TikTok media planner.',
    headline: 'Model Short-Form Video Retention & Viral TikTok ROAS',
    description:
      'TikTok performance is governed by hook rate and 6-second video consumption. Calculate your required video views, click-through volume, and conversion economics.',
    equations: [
      {
        name: '6-Second Video View Rate (VVR)',
        leftSide: 'VVR (6s)',
        numerator: '6-Second Video Views',
        denominator: 'Total Video Impressions',
        suffix: '× 100%',
        explanation:
          'Measures how effectively your video ad holds attention past the critical opening window. A high VVR signals viral retention to TikTok’s recommendation algorithm.',
        example:
          'If 100,000 video impressions generate 34,000 views of at least 6 seconds, your 6s VVR is 34.0%.',
      },
      {
        name: '3-Second Hook Rate',
        leftSide: 'Hook Rate',
        numerator: '3-Second Video Views',
        denominator: 'Total Video Impressions',
        suffix: '× 100%',
        explanation:
          'The percentage of scrolling users who stop and watch the initial 3-second hook before swiping away.',
        example:
          'If 100,000 impressions yield 42,000 3-second views, your Hook Rate is 42.0%. A hook rate above 35% is considered top-tier on TikTok.',
      },
      {
        name: 'Cost Per Acquisition (CPA)',
        leftSide: 'CPA',
        numerator: 'Total TikTok Media Spend',
        denominator: 'Total Purchases / Installs',
        explanation:
          'The average ad spend needed to acquire a paying customer or app installation through TikTok ads.',
        example:
          'Spending $1,500 on TikTok Spark Ads to secure 60 completed orders yields a CPA of $25.00.',
      },
    ],
    terms: [
      {
        term: 'Spark Ads',
        definition:
          'Native ad format enabling brands to boost organic creator posts while preserving organic comments, shares, duets, and profile follows.',
      },
      {
        term: 'TikTok Shop Shopping Ads',
        definition:
          'In-feed video ads with direct shoppable product tags allowing 1-click in-app checkout without leaving TikTok.',
      },
      {
        term: 'Creative Decay / Burnout',
        definition:
          'The rapid drop in TikTok ad performance occurring every 10–14 days as fast-swiping users grow blind to repeated visual concepts.',
      },
    ],
    faqs: [
      {
        question: 'Why do TikTok ads stop working after 2 weeks?',
        answer:
          'TikTok is an entertainment platform with ultra-high consumption velocity. Creative fatigue happens 3x faster than on Facebook. Top-performing TikTok brands rotate 3–5 fresh creative variations (different hooks, creators, text overlays) every 10 to 14 days.',
      },
      {
        question: 'Are Spark Ads better than standard In-Feed video ads?',
        answer:
          'Yes. Spark Ads typically achieve 25–40% higher CTR and 30% higher conversion rates because they look like genuine creator content rather than intrusive commercial interruptions.',
      },
      {
        question: 'What is a good 3-second hook rate on TikTok?',
        answer:
          'Below 25% is poor (users swipe away immediately). 25%–35% is average. Above 35% is excellent. To lift hook rate, cut brand logos, start in the middle of action, and use bold on-screen text questions.',
      },
    ],
  },
  {
    slug: 'linkedin-ads',
    title: 'LinkedIn Ads B2B Pipeline & CAC Calculator',
    shortTitle: 'LinkedIn Ads',
    serviceSlug: '/services/paid-advertising/linkedin-ads',
    badge: 'B2B Enterprise & ABM',
    metaTitle: 'LinkedIn Ads Budget & B2B CAC Calculator | Frame Cipher',
    metaDescription:
      'Model LinkedIn B2B ad budgets, Cost Per Lead (CPL), MQL-to-SQL pipeline conversion, and enterprise customer acquisition cost. Free B2B calculator.',
    headline: 'Calculate High-Ticket B2B Economics & Account-Based CPL',
    description:
      'LinkedIn commands high CPMs ($35–$80) and CPCs ($6–$18), but targets verified corporate decision-makers. Reverse-engineer your pipeline CAC and deal economics.',
    equations: [
      {
        name: 'Customer Acquisition Cost (CAC)',
        leftSide: 'Pipeline CAC',
        numerator: 'Total LinkedIn Ad Spend',
        denominator: 'Closed-Won Enterprise Customers',
        explanation:
          'The total media spend required to take a target account from initial impression through MQL and SQL to a signed contract.',
        example:
          'Spending $12,000 to generate 60 leads, resulting in 12 sales demos and 3 closed contracts = $12,000 / 3 = $4,000 CAC. On a $30,000 annual contract, this is highly profitable (7.5x LTV:CAC).',
      },
      {
        name: 'Cost Per Lead (CPL)',
        leftSide: 'CPL',
        numerator: 'Total Media Spend',
        denominator: 'Total Form Fills / Lead Submissions',
        explanation:
          'The average cost per verified professional lead collected through LinkedIn Lead Gen Forms.',
        example:
          'Spending $4,500 to collect 45 verified VP/Director leads yields a CPL of $100.00.',
      },
      {
        name: 'Lead-to-Customer Pipeline Ratio',
        leftSide: 'Required Leads',
        numerator: 'Target Closed Deals',
        denominator: 'Demo Booking Rate × Sales Close Rate',
        explanation:
          'Reverse-engineers the volume of MQLs needed based on your internal sales pipeline conversion rates.',
        example:
          'To close 5 deals with a 25% demo rate and a 20% close rate: Required Leads = 5 / (0.25 × 0.20) = 100 leads.',
      },
    ],
    terms: [
      {
        term: 'LinkedIn Lead Gen Forms',
        definition:
          'In-app forms pre-populated with verified LinkedIn profile data (full name, job title, company size, business email).',
      },
      {
        term: 'Account-Based Marketing (ABM)',
        definition:
          'Targeting designated lists of high-value target companies (e.g. Fortune 500 or specific company domains) directly.',
      },
      {
        term: 'MQL (Marketing Qualified Lead)',
        definition:
          'A prospect who submitted a form and meets ideal customer profile (ICP) criteria.',
      },
      {
        term: 'SQL (Sales Qualified Lead)',
        definition:
          'An MQL vetted by sales that has agreed to an exploratory discovery call or software demo.',
      },
    ],
    faqs: [
      {
        question: 'Why are LinkedIn CPCs so much higher than Google or Meta?',
        answer:
          'LinkedIn sells verified professional identity data (job title, senior executive level, company size, industry). While Facebook CPC might be $1.00, LinkedIn CPC is often $8–$14 because you are reaching enterprise buyers with six-figure purchasing authority.',
      },
      {
        question: 'What is a realistic Cost Per Lead (CPL) on LinkedIn?',
        answer:
          'Using native LinkedIn Lead Gen Forms, CPL ranges from $60–$140 for managers/directors, and $150–$300 for C-suite and VP decision-makers in competitive tech and fintech sectors.',
      },
      {
        question: 'Should I drive LinkedIn traffic to my website or use Lead Gen Forms?',
        answer:
          'Native LinkedIn Lead Gen Forms convert 2x to 4x higher than external landing pages because forms auto-fill from the member’s profile, eliminating mobile friction.',
      },
    ],
  },
  {
    slug: 'amazon-ads',
    title: 'Amazon Ads ACoS & TACoS Profitability Calculator',
    shortTitle: 'Amazon Ads',
    serviceSlug: '/services/paid-advertising/amazon-ads',
    badge: 'Marketplace & Sponsored Ads',
    metaTitle: 'Amazon Ads ACoS & TACoS Calculator | Frame Cipher',
    metaDescription:
      'Calculate Amazon Advertising Cost of Sale (ACoS), Total ACoS (TACoS), break-even thresholds, and organic rank multipliers. Free Amazon media calculator.',
    headline: 'Master Amazon ACoS, TACoS & Organic Rank Multipliers',
    description:
      'Sponsored Products, Sponsored Brands, and Sponsored Display drive sales velocity that lifts organic BSR (Best Sellers Rank). Calculate true marketplace profitability.',
    equations: [
      {
        name: 'Advertising Cost of Sale (ACoS)',
        leftSide: 'ACoS',
        numerator: 'Direct Amazon Ad Spend',
        denominator: 'Attributed Ad Sales Revenue',
        suffix: '× 100%',
        explanation:
          'The primary metric in Amazon advertising. Measures what percentage of attributed ad sales was spent on media.',
        example:
          'Spending $1,200 on Sponsored Products to generate $4,800 in direct ad sales = ($1,200 / $4,800) × 100% = 25.0% ACoS.',
      },
      {
        name: 'Total Advertising Cost of Sale (TACoS)',
        leftSide: 'TACoS',
        numerator: 'Total Amazon Ad Spend',
        denominator: 'Total Amazon Store Revenue (Organic + Ads)',
        suffix: '× 100%',
        explanation:
          'Measures ad spend against overall brand revenue. A falling TACoS indicates ads are successfully driving organic rank gains.',
        example:
          'Spending $2,000 on ads while total store revenue is $20,000 = ($2,000 / $20,000) × 100% = 10.0% TACoS.',
      },
      {
        name: 'Break-Even ACoS',
        leftSide: 'Break-Even ACoS',
        expression: 'Gross Product Margin % (Price - COGS - Amazon FBA Fees)',
        isDirectFormula: true,
        explanation:
          'Your gross profit margin before ad spend equals your exact break-even ACoS. If your margin after FBA fees is 32%, any ACoS under 32% generates profit.',
        example:
          'Selling price $50, product cost $15, Amazon referral & FBA fee $15 -> Net margin = $20 / $50 = 40%. Break-Even ACoS = 40%.',
      },
    ],
    terms: [
      {
        term: 'Sponsored Products',
        definition:
          'Keyword- and ASIN-targeted cost-per-click ads that appear directly within Amazon search results and product detail pages.',
      },
      {
        term: 'TACoS vs ACoS',
        definition:
          'ACoS looks only at paid ad sales; TACoS measures total store revenue to gauge whether paid traffic is lifting organic search velocity.',
      },
      {
        term: 'BSR (Best Sellers Rank)',
        definition:
          'Amazon’s algorithmic sales velocity ranking. Faster sales velocity moves your product higher in organic search results.',
      },
    ],
    faqs: [
      {
        question: 'What is a good ACoS target on Amazon?',
        answer:
          'A good ACoS is any number comfortably below your Break-Even ACoS (product margin after FBA fees). Typically, 18%–28% is considered healthy for mature products, while 35%–45% is acceptable during product launch flights to build organic rank.',
      },
      {
        question: 'Why is TACoS more important than ACoS for Amazon brands?',
        answer:
          'Amazon rewards sales velocity. When you run ads, your organic BSR improves, generating free organic sales. If ACoS is 30% but TACoS drops from 15% to 8%, your total business profitability is surging because ads are compounding organic rank.',
      },
    ],
  },
  {
    slug: 'chatgpt-ads',
    title: 'ChatGPT & AI Search Sponsored Citations Calculator',
    shortTitle: 'ChatGPT Ads',
    serviceSlug: '/services/paid-advertising/chatgpt-ads',
    badge: 'Conversational AI Commerce',
    metaTitle: 'ChatGPT & AI Search Ads Calculator | Frame Cipher',
    metaDescription:
      'Plan conversational AI advertising budgets, sponsored answer citations, and interactive product cards in ChatGPT and AI search engines.',
    headline: 'Forecast Generative Search Citations & Conversational ROI',
    description:
      'Model outbound citation CPCs, shopping assistant placements, and conversational purchase intent for emerging AI search inventory.',
    equations: [
      {
        name: 'Conversational Citation CPC',
        leftSide: 'Citation CPC',
        numerator: 'Media Spend',
        denominator: 'Outbound Referral Clicks',
        explanation:
          'The effective cost paid when a user clicks an interactive product card or source link in a synthesized ChatGPT answer.',
        example:
          'Spending $2,000 to earn 1,250 outbound clicks to your product page yields an effective CPC of $1.60.',
      },
      {
        name: 'Semantic Relevance Discount Factor',
        leftSide: 'Effective CPC',
        expression: 'Base Bid × (1 + (Industry Relevance Benchmark - Your Relevance Score) × 0.05)',
        isDirectFormula: true,
        explanation:
          'AI search models favor high semantic congruence. Entities with clean knowledge graph alignment receive priority citation placement at lower simulated cost.',
        example:
          'An advertiser with Relevance Score 9/10 versus benchmark 6/10 receives an estimated 15% auction cost reduction.',
      },
    ],
    terms: [
      {
        term: 'Sponsored Answer Citation',
        definition:
          'A contextual recommendation embedded directly inside ChatGPT’s conversational answer with a clickable source card.',
      },
      {
        term: 'Generative Engine Optimization (GEO)',
        definition:
          'Optimizing digital PR and entity schema so large language models cite your brand in answer syntheses.',
      },
    ],
    faqs: [
      {
        question: 'How do ads inside ChatGPT work?',
        answer:
          'When users ask commercial queries (e.g. "What is the best CRM for real estate?"), OpenAI presents sponsored product cards or contextual citations alongside the synthesized answer.',
      },
      {
        question: 'How are ChatGPT ad costs determined?',
        answer:
          'Costs follow second-price semantic intent auctions, where advertisers bid on conversational topics and categories rather than isolated exact keywords.',
      },
    ],
  },
  {
    slug: 'microsoft-ads',
    title: 'Microsoft (Bing) Ads Desktop & Copilot Calculator',
    shortTitle: 'Microsoft Ads',
    serviceSlug: '/services/paid-advertising/microsoft-ads',
    badge: 'Bing & Copilot Search',
    metaTitle: 'Microsoft Ads & Bing Search Calculator | Frame Cipher',
    metaDescription:
      'Calculate Microsoft Bing Ads budgets, Copilot AI placements, and desktop B2B audience economics with 20–35% lower CPCs than Google.',
    headline: 'Capture High-Income Desktop Audiences at 30% Lower CPCs',
    description:
      'Microsoft Ads commands 35%+ of US desktop search market share with higher average household income. Model cheaper search traffic and Copilot AI ads.',
    equations: [
      {
        name: 'Microsoft Search CPC Advantage',
        leftSide: 'Bing CPC',
        numerator: 'Google Search CPC Benchmark',
        denominator: '1.35 (Average 25%–35% Cost Discount)',
        explanation:
          'Because competition on Microsoft Advertising is lower than Google, click costs average 25% to 35% cheaper for identical keyword queries.',
        example:
          'If a legal keyword costs $6.00 on Google Search, the equivalent query on Microsoft Ads averages ~$4.15.',
      },
    ],
    terms: [
      {
        term: 'Microsoft Copilot Ads',
        definition:
          'Sponsored recommendations surfaced in the sidebar of Windows Copilot and Bing Chat conversational sessions.',
      },
      {
        term: 'LinkedIn Profile Targeting in Bing',
        definition:
          'Unique capability to target Bing searchers by company, job industry, and job function using Microsoft-owned LinkedIn data.',
      },
    ],
    faqs: [
      {
        question: 'Why should I advertise on Microsoft Ads if Google is bigger?',
        answer:
          'Microsoft owns default search on Windows PCs and Edge browsers, capturing enterprise office workers and older demographics with high disposable income at 25–35% lower CPCs.',
      },
    ],
  },
  {
    slug: 'pinterest-ads',
    title: 'Pinterest Ads High-Intent Visual Search Calculator',
    shortTitle: 'Pinterest Ads',
    serviceSlug: '/services/paid-advertising/pinterest-ads',
    badge: 'Visual Discovery & Home DTC',
    metaTitle: 'Pinterest Ads Budget & ROAS Calculator | Frame Cipher',
    metaDescription:
      'Plan Pinterest advertising spend, Promoted Pins, Shopping Catalog CPCs, and long-tail visual search attribution for home, fashion, and beauty.',
    headline: 'Model Visual Discovery Economics & Extended Attribution',
    description:
      'Pinterest users plan purchases weeks before buying. Calculate your media budget with extended 30-day view attribution and visual search conversion rates.',
    equations: [
      {
        name: 'Effective Cost Per Click',
        leftSide: 'Pinterest CPC',
        numerator: 'Promoted Pin CPM',
        denominator: '1000 × Pin Click-Through Rate',
        explanation:
          'Pinterest users save and re-pin ads, generating earned organic repins that drive free secondary clicks.',
        example:
          'A $7.50 CPM with a 1.5% CTR yields an initial $0.50 CPC, which drops further as users re-pin your ad.',
      },
    ],
    terms: [
      {
        term: 'Promoted Pins',
        definition:
          'Native visual pins boosted into users’ home feeds and visual search results.',
      },
      {
        term: 'Re-Pin Earned Media',
        definition:
          'Free viral impressions generated when a user saves your sponsored pin to their personal inspiration board.',
      },
    ],
    faqs: [
      {
        question: 'What types of businesses succeed most on Pinterest Ads?',
        answer:
          'Home decor, fashion, beauty, food, wedding planning, architecture, and luxury gifts achieve exceptional ROAS because users actively browse to plan upcoming purchases.',
      },
    ],
  },
  {
    slug: 'remarketing',
    title: 'Remarketing & Retargeting ROAS Calculator',
    shortTitle: 'Remarketing',
    serviceSlug: '/services/paid-advertising/remarketing',
    badge: 'Full-Funnel Retention',
    metaTitle: 'Remarketing & Retargeting ROAS Calculator | Frame Cipher',
    metaDescription:
      'Calculate retargeting ad budgets, cart abandonment recovery rates, frequency caps, and incremental ROAS across Google, Meta, and Display.',
    headline: 'Recover Abandoned Carts & Maximize Warm Audience ROAS',
    description:
      'Retargeting converts visitors who did not purchase on their first visit. Model warm-audience conversion rates (4%–12%) and prevent wasted ad spend with frequency caps.',
    equations: [
      {
        name: 'Cart Recovery Revenue',
        leftSide: 'Recovered Revenue',
        expression: 'Abandoned Carts × Retargeting CVR % × Average Order Value',
        isDirectFormula: true,
        explanation:
          'The incremental revenue won back by serving dynamic product ads to shoppers who added items to cart without completing checkout.',
        example:
          '1,000 cart abandoners × 8% retargeting CVR × $85 AOV = $6,800 recovered revenue on a $600 retargeting budget (11.3x ROAS).',
      },
    ],
    terms: [
      {
        term: 'Dynamic Product Ads (DPA)',
        definition:
          'Automated carousel ads displaying the exact catalog items a shopper viewed or abandoned on your store.',
      },
      {
        term: 'Frequency Cap',
        definition:
          'Setting a limit (e.g. max 3 impressions per user per day) to avoid annoying warm prospects with ad fatigue.',
      },
    ],
    faqs: [
      {
        question: 'What percentage of my ad budget should go to retargeting?',
        answer:
          'Typically 15% to 25% of total media spend. Allocating too much to retargeting starves top-of-funnel prospecting of new customers.',
      },
    ],
  },
  {
    slug: 'lead-generation-ads',
    title: 'Lead Generation CPA & Sales Pipeline Calculator',
    shortTitle: 'Lead Gen Ads',
    serviceSlug: '/services/paid-advertising/lead-generation-ads',
    badge: 'B2B & High-Ticket Inquiries',
    metaTitle: 'Lead Generation Ads CPA & Pipeline Calculator | Frame Cipher',
    metaDescription:
      'Calculate Cost Per Lead (CPL), appointment show-up rates, sales close rates, and customer acquisition cost for lead gen campaigns.',
    headline: 'Reverse-Engineer High-Ticket Leads & Closed-Won Deals',
    description:
      'A low CPL means nothing if leads never show up. Model form-fill costs, sales qualification percentages, and final closed deal ROI.',
    equations: [
      {
        name: 'True Cost Per Closed Customer',
        leftSide: 'Customer Acquisition Cost',
        numerator: 'Cost Per Lead (CPL)',
        denominator: 'Qualification Rate × Close Rate',
        explanation:
          'The real cost to acquire a signed client after factoring in disqualified inquiries and sales drop-offs.',
        example:
          'At $50 CPL, 50% qualification rate, and 20% sales close rate: Real CAC = $50 / (0.50 × 0.20) = $500 per customer.',
      },
    ],
    terms: [
      {
        term: 'Instant Forms vs Landing Pages',
        definition:
          'In-app forms generate higher volume at lower CPL; external landing pages filter tire-kickers and generate higher sales intent.',
      },
    ],
    faqs: [
      {
        question: 'How can I improve the quality of my ad leads?',
        answer:
          'Add 1 or 2 qualification questions (e.g. "What is your monthly budget?"), introduce two-step phone verification, and use intent-focused ad copy rather than clickbait hooks.',
      },
    ],
  },
]

export function getCalculatorBySlug(slug) {
  if (!slug) return null
  const clean = slug.toLowerCase().trim()
  return ALL_ADS_CALCULATORS.find((c) => c.slug === clean) || null
}
