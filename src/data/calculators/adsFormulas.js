/**
 * adsFormulas.js
 * In-depth mathematical breakdowns and derivations for the Ads Budget & ROAS Engine.
 * Explains how each function, multiplier, and scenario operates mathematically.
 */

export const ADS_FORMULAS_EXPLAINED = [
  {
    id: 'funnel-mathematics',
    title: '1. The Universal Conversion Funnel Equation',
    subtitle: 'From Capital to Gross Revenue',
    latex: '\\text{Spend} \\xrightarrow{\\div \\text{CPC}} \\text{Clicks} \\xrightarrow{\\times 0.94} \\text{LP Visits} \\xrightarrow{\\times \\text{CVR}} \\text{Conversions} \\xrightarrow{\\times \\text{AOV}} \\text{Revenue}',
    summary: 'How an advertising budget traverses through impressions, click-throughs, landing page retention, conversion rate, and Average Order Value.',
    steps: [
      {
        step: 'Step 1: Impressions Generated',
        formula: '\\text{Impressions} = \\frac{\\text{Budget}}{\\text{CPM}} \\times 1000',
        explanation: 'In impression-based auctions (Meta, TikTok), your budget purchases ad views. A $1,000 budget at $10 CPM delivers exactly 100,000 ad impressions.',
      },
      {
        step: 'Step 2: Clicks Earned',
        formula: '\\text{Clicks} = \\text{Impressions} \\times \\text{CTR \\%}',
        explanation: 'If your ad achieves a 2.0% CTR, 100,000 impressions produce 2,000 link clicks (or $0.50 CPC).',
      },
      {
        step: 'Step 3: Landing Page Visits',
        formula: '\\text{Landing Page Visits} = \\text{Clicks} \\times 0.94',
        explanation: 'Approximately 5% to 8% of users bounce or abandon before the landing page finishes loading due to network latency, accidental misclicks, or slow DNS. We model an industry-standard 94% retention.',
      },
      {
        step: 'Step 4: Conversions (Purchases or Leads)',
        formula: '\\text{Conversions} = \\text{Landing Page Visits} \\times \\text{CVR \\%}',
        explanation: 'At a 2.5% on-site conversion rate, 1,880 landing page visitors generate 47 paying customers.',
      },
      {
        step: 'Step 5: Gross Revenue & ROAS',
        formula: '\\text{Revenue} = \\text{Conversions} \\times \\text{AOV} \\quad \\Big| \\quad \\text{ROAS} = \\frac{\\text{Revenue}}{\\text{Budget}}',
        explanation: 'If Average Order Value (AOV) is $80, 47 orders generate $3,760 gross revenue. On a $1,000 budget, the final ROAS is 3.76x.',
      },
    ],
    workedExample: {
      inputs: 'Ad Spend = $2,500 | CPM = $12.50 | CTR = 2.0% | CVR = 3.0% | AOV = $110 | Gross Margin = 40%',
      calculations: [
        'Impressions = ($2,500 / $12.50) * 1,000 = 200,000 impressions',
        'Clicks = 200,000 * 2.0% = 4,000 clicks (Effective CPC = $0.625)',
        'Landing Page Visits = 4,000 * 94% = 3,760 visits',
        'Conversions = 3,760 * 3.0% = 112.8 completed orders',
        'Gross Revenue = 112.8 * $110 = $12,408',
        'ROAS = $12,408 / $2,500 = 4.96x',
        'Gross Profit = $12,408 * 40% margin - $2,500 ad spend = $4,963 - $2,500 = $2,463 Net Profit (98.5% ROI)',
      ],
    },
  },
  {
    id: 'break-even-economics',
    title: '2. Break-Even ROAS & Profit Margin Mechanics',
    subtitle: 'Derivation of the Zero-Profit Line',
    latex: '\\text{Break-Even ROAS} = \\frac{1}{1 - \\text{COGS \\%}} = \\frac{1}{\\text{Gross Margin \\%}}',
    summary: 'Why your profit margin determines whether high ROAS makes or loses real money.',
    steps: [
      {
        step: 'The Mathematical Proof',
        formula: '\\text{Net Profit} = \\text{Revenue} - \\text{COGS} - \\text{Ad Spend} = 0',
        explanation: 'At the exact break-even point, Net Profit is zero: Revenue - (Revenue * COGS %) - Ad Spend = 0. Rearranging gives: Revenue * (1 - COGS %) = Ad Spend. Therefore: Revenue / Ad Spend = 1 / (1 - COGS %).',
      },
      {
        step: 'Numerical Sensitivity Table',
        formula: '\\text{Margin: } 20\\% \\implies 5.0\\text{x ROAS} \\quad | \\quad 40\\% \\implies 2.5\\text{x} \\quad | \\quad 60\\% \\implies 1.67\\text{x} \\quad | \\quad 80\\% \\implies 1.25\\text{x}',
        explanation: 'A low-margin retailer (20% margin) requires a massive 5.0x ROAS just to keep the lights on. A digital software company (80% margin) makes substantial profit at only 1.5x ROAS.',
      },
    ],
    workedExample: {
      inputs: 'Client A has 30% Gross Margin. Client B has 65% Gross Margin. Both achieve 3.0x ROAS on $10,000 ad spend ($30,000 Revenue).',
      calculations: [
        'Client A Break-Even ROAS = 1 / 0.30 = 3.33x. Result: At 3.0x ROAS, Client A generated $9,000 gross margin but spent $10,000 on ads. Net Loss = -$1,000.',
        'Client B Break-Even ROAS = 1 / 0.65 = 1.54x. Result: At 3.0x ROAS, Client B generated $19,500 gross margin and spent $10,000 on ads. Net Profit = +$9,500.',
        'Conclusion: ROAS without unit economics context is meaningless.',
      ],
    },
  },
  {
    id: 'two-stage-multiplier',
    title: '3. The Two-Stage Multiplier: CTR × CVR',
    subtitle: 'The Compounding Power of Creative & Landing Page Synergy',
    latex: '\\text{CPA} = \\frac{\\text{CPM}}{1000 \\times \\text{CTR} \\times \\text{CVR}}',
    summary: 'Why lifting both creative appeal and checkout conversion slashes your customer acquisition cost exponentially rather than linearly.',
    steps: [
      {
        step: 'The Math of Compounding Efficiency',
        formula: '\\text{Multiplier} = (1 + \\Delta\\text{CTR}) \\times (1 + \\Delta\\text{CVR})',
        explanation: 'If you optimize your ad creative to improve CTR by 25% (e.g. from 1.6% to 2.0%) AND you optimize your landing page to improve CVR by 25% (e.g. from 2.0% to 2.5%), your overall throughput improves by 1.25 x 1.25 = 1.5625 (a 56.25% increase in conversions for the same ad spend).',
      },
      {
        step: 'Impact on Acquisition Cost',
        formula: '\\text{New CPA} = \\frac{\\text{Old CPA}}{1.5625} = 0.64 \\times \\text{Old CPA}',
        explanation: 'A 36% reduction in CPA without changing your budget or negotiating auction CPMs.',
      },
    ],
    workedExample: {
      inputs: 'Baseline: $5,000 budget, $10 CPM, 1.5% CTR, 2.0% CVR, $100 AOV. Then optimized: 2.2% CTR (+46%) & 3.0% CVR (+50%).',
      calculations: [
        'Baseline: 500,000 impressions -> 7,500 clicks -> 7,050 LP visits -> 141 orders ($14,100 rev). CPA = $35.46. ROAS = 2.82x.',
        'Optimized: 500,000 impressions -> 11,000 clicks -> 10,340 LP visits -> 310 orders ($31,000 rev). CPA = $16.12. ROAS = 6.20x.',
        'Takeaway: 2.2x more orders, 55% cheaper CPA, and 2.2x higher revenue from pure creative & conversion rate engineering.',
      ],
    },
  },
  {
    id: 'google-quality-score',
    title: '4. Google Quality Score & Second-Price Auction Economics',
    subtitle: 'How Google Discounts Winning Advertisers',
    latex: '\\text{Ad Rank} = f(\\text{Max Bid}, \\text{Quality Score}, \\text{Ad Extensions}) \\quad | \\quad \\text{Actual CPC} = \\frac{\\text{Ad Rank of Next Competitor}}{\\text{Your Quality Score}} + \\$0.01',
    summary: 'How Google rewards hyper-relevant advertisers with cheaper clicks while penalizing poor landing pages with an auction tax.',
    steps: [
      {
        step: 'Quality Score Mechanics (1 to 10)',
        formula: '\\text{QS Components} = \\text{Expected CTR} + \\text{Ad Relevance} + \\text{Landing Page Experience}',
        explanation: 'Google normalizes Quality Score against the industry average (typically 6.0). In our calculator, every point above or below baseline adjusts effective CPC by approximately 6% (clamped between 0.55x and 1.60x).',
      },
      {
        step: 'Auction Rank Math',
        formula: '\\text{Advertiser A (QS 10, Bid \\$2.00)} \\implies \\text{Ad Rank 20} \\quad | \\quad \\text{Advertiser B (QS 4, Bid \\$4.00)} \\implies \\text{Ad Rank 16}',
        explanation: 'Advertiser A bids HALF of Advertiser B, yet ranks HIGHER because their Quality Score is 10 vs 4. Furthermore, Advertiser A pays only enough to beat B, achieving an effective CPC under $1.61, while B pays full bid.',
      },
    ],
    workedExample: {
      inputs: 'Industry CPC benchmark = $3.00. Advertiser A has Quality Score 9/10. Advertiser B has Quality Score 4/10.',
      calculations: [
        'Advertiser A (QS 9) receives a ~18% discount: Effective CPC = $2.46.',
        'Advertiser B (QS 4) incurs a ~24% penalty: Effective CPC = $3.72.',
        'On a 10,000-click monthly campaign, Advertiser A spends $24,600, while Advertiser B spends $37,200 for the exact same clicks—a difference of $12,600/month purely due to ad and landing page relevance.',
      ],
    },
  },
  {
    id: 'search-impression-share',
    title: '5. Search Impression Share & Lost IS Dynamics',
    subtitle: 'Budget Constraint vs. Rank Constraint Modeling',
    latex: '\\text{Impression Share (IS)} = 100\\% - \\text{Lost IS (Budget)} - \\text{Lost IS (Rank)}',
    summary: 'Diagnosing whether missing ad volume is caused by lack of spend or poor bid/ad relevance.',
    steps: [
      {
        step: 'Lost IS (Budget)',
        formula: '\\text{Lost IS (Budget)} = \\max\\left(0, 100\\% - \\frac{\\text{Actual Budget}}{\\text{Ideal Market Budget}} \\times 100\\%\\right)',
        explanation: 'Occurs when your daily spend runs out before all search volume is satisfied. If this is high, increasing budget directly scales conversions.',
      },
      {
        step: 'Lost IS (Rank)',
        formula: '\\text{Lost IS (Rank)} = \\max(0, (7.5 - \\text{Effective QS}) \\times 6)',
        explanation: 'Occurs when bids are too low or Quality Score is deficient to enter top ad placements. Raising budget will NOT fix this—you must improve Ad Rank and QS.',
      },
    ],
    workedExample: {
      inputs: 'Account has 48% Impression Share, 38% Lost IS (Rank), and 14% Lost IS (Budget).',
      calculations: [
        'Diagnosis: 38% of missed customers are lost due to poor Ad Rank (ad copy and page experience), while only 14% is lost due to budget exhaustion.',
        'Strategic Action: Do not increase budget yet. Rebuild ad relevance, add single-theme keyword groups, and optimize landing page speed first to capture the 38% lost rank before increasing daily spend.',
      ],
    },
  },
];
