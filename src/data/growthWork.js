export function resolveGrowthImagePath(path) {
  return path
    .replace('/case-studies/facebook-ads/', '/growth-work/paid-ads/')
    .replace('/case-studies/border-locksmiths/', '/growth-work/border-locksmiths/')
    .replace('/case-studies/Jarixo/Jarixo%20Website.png', '/growth-work/jarixo/jarixo-website.png')
    .replace('/case-studies/phone-fashion-fix/', '/growth-work/phone-fashion-fix/')
    .replace('/case-studies/pixc-retouch/', '/growth-work/pixc-retouch/')
}

const image = (path, alt, caption = '') => ({
  src: resolveGrowthImagePath(path),
  alt,
  caption,
})

const paidAdsTools = [
  'Meta Ads Manager',
  'Messenger Conversations',
  'Broad Targeting',
  'Creative Testing',
  'Advantage+',
]

const sharedPaidAdsLessons = [
  'Fresh creative variations gave Meta more useful signals than a single polished ad left to run for months.',
  'We matched the conversion path to the business model: Messenger, calls, lead forms, purchases, or ThruPlay.',
]

export const growthPortfolio = [
  {
    slug: 'sumons-aroma-messenger-commerce',
    category: 'Paid Ads',
    client: "Sumon's Aroma & Sister Brands",
    title: "Facebook & Instagram Ads - Sumon's Aroma & Sister Brands",
    summary: 'Several campaigns landed below $0.10 per messaging conversation. Across 36 campaigns, $756.71 generated 1.6 million impressions and reached over a million unique people.',
    image: '/case-studies/facebook-ads/sumons-aroma.png',
    metrics: [['36 campaigns', 'Campaigns'], ['$756.71', 'Spend']],
    tags: ['Facebook Ads', 'Instagram Ads', 'Meta Ads'],
  },
  {
    slug: 'rihawebtech-meta-ads',
    category: 'Paid Ads',
    client: 'Riha Webtech',
    title: 'Facebook & Instagram Ads - Riha Webtech',
    summary: 'A modest $431 spend across 18 campaigns generated 275K impressions and messaging conversations for as little as $0.04.',
    image: '/case-studies/facebook-ads/riha-webtech.png',
    metrics: [['18 campaigns', 'Campaigns'], ['$431', 'Spend']],
    tags: ['Facebook Ads', 'Instagram Ads', 'Meta Ads'],
  },
  {
    slug: 'ipb-edu-happy-tours-meta-ads',
    category: 'Paid Ads',
    client: 'IPB Edu & Happy Tours',
    title: 'Facebook & Instagram Ads - IPB Edu & Happy Tours',
    summary: 'Messaging conversations frequently cost $0.09–$0.15. Across 37 campaigns, $1,141.45 produced 1.83 million impressions.',
    image: '/case-studies/facebook-ads/ipb-happy-tours.png',
    metrics: [['37 campaigns', 'Campaigns'], ['$1,141.45', 'Spend']],
    tags: ['Facebook Ads', 'Instagram Ads', 'Meta Ads'],
  },
  {
    slug: 'ruposhi-mart-meta-ads',
    category: 'Paid Ads',
    client: 'Ruposhi Mart & Partner Brands',
    title: 'Facebook & Instagram Ads - Ruposhi Mart & Partner Brands',
    summary: 'Across 138 campaigns, $6,315.66 produced 7.28 million impressions and reached 1.8 million people with low frequency across most awareness campaigns.',
    image: '/case-studies/facebook-ads/ruposhi-mart.png',
    metrics: [['138 campaigns', 'Campaigns'], ['$6,315.66', 'Spend']],
    tags: ['Facebook Ads', 'Instagram Ads', 'Meta Ads'],
  },
  {
    slug: 'luxury-beauty-rwt-meta-ads',
    category: 'Paid Ads',
    client: 'Luxury Beauty - RWT',
    title: 'Facebook & Instagram Ads - Luxury Beauty - RWT',
    summary: 'On $350.23 in spend, the account reached 388,554 people with 488,251 impressions while purchase campaigns held cost per purchase in the low single digits.',
    image: '/case-studies/facebook-ads/luxury-beauty-rwt.png',
    metrics: [['23 campaigns', 'Campaigns'], ['$350.23', 'Spend']],
    tags: ['Facebook Ads', 'Instagram Ads', 'Meta Ads'],
  },
  {
    slug: 'rpl-consultancy-meta-ads',
    category: 'Paid Ads',
    client: 'RPL Consultancy',
    title: 'Facebook & Instagram Ads - RPL Consultancy',
    summary: 'A lead-form campaign converted at $1.42 per lead. Eight campaigns generated 1.15 million impressions and reached 663,407 people from $273.17.',
    image: '/case-studies/facebook-ads/rpl-consultancy.png',
    metrics: [['8 campaigns', 'Campaigns'], ['$273.17', 'Spend']],
    tags: ['Facebook Ads', 'Instagram Ads', 'Meta Ads'],
  },
  {
    slug: 'travel-lifestyle-meta-ads',
    category: 'Paid Ads',
    client: 'Travel & Lifestyle Testing Engine',
    title: 'Facebook & Instagram Ads - Travel & Lifestyle Testing Engine',
    summary: 'Travel messaging campaigns held costs between $0.03 and $0.32. Across 74 campaigns, $719.94 generated 1.38 million impressions.',
    image: '/case-studies/facebook-ads/travel-lifestyle.png',
    metrics: [['74 campaigns', 'Campaigns'], ['$719.94', 'Spend']],
    tags: ['Facebook Ads', 'Instagram Ads', 'Meta Ads'],
  },
  {
    slug: 'border-locksmiths-local-seo',
    category: 'SEO',
    client: 'Border Locksmiths',
    title: 'Border Locksmiths Local SEO',
    summary: 'A five-month campaign grew search visibility to 2.1M impressions and 12.2K clicks across the tracked period.',
    image: '/case-studies/border-locksmiths/border-locksmiths-1.png',
    metrics: [['2.1M', 'Search impressions'], ['12.2K', 'Search clicks']],
    tags: ['Local SEO', 'On-Page SEO', 'Technical SEO'],
  },
  {
    slug: 'phone-fashion-fix-local-seo',
    category: 'SEO',
    client: 'Phone Fashion Fix',
    title: 'Phone Fashion Fix Local SEO',
    summary: 'A 34-page service architecture expanded organic visibility for a device-repair business in Ocala, Florida.',
    image: '/case-studies/phone-fashion-fix/image-4.png',
    metrics: [['34 pages', 'Service architecture'], ['263 → 6,980', 'Search impressions']],
    tags: ['Local SEO', 'Technical SEO', 'Content Strategy'],
  },
  {
    slug: 'pixc-retouch-global-seo',
    category: 'SEO',
    client: 'PixC Retouch',
    title: 'PixC Retouch Global SEO',
    summary: 'A global campaign across e-commerce, fashion, real estate, and portrait search categories put 29 of 32 tracked keywords in the top ten.',
    image: '/case-studies/pixc-retouch/image-1.png',
    metrics: [['29 of 32', 'Keywords in top 10'], ['+203%', 'Search click growth']],
    tags: ['Global SEO', 'Content Strategy', 'Technical SEO'],
  },
]

export const growthCaseStudies = [
  {
    slug: 'facebook-instagram-ads-portfolio',
    category: 'Paid Ads',
    client: 'Seven managed Meta Ads accounts',
    industry: 'Performance Marketing',
    title: 'Facebook & Instagram Ads Portfolio',
    summary: 'Seven creative-led Meta Ads case studies across fragrance, fashion, beauty, education, travel, web development, and overseas-study consultancy.',
    timeline: 'Lifetime account totals as of late June 2026',
    primaryFocus: 'Meta Ads Manager',
    image: image('/case-studies/facebook-ads/sumons-aroma.png', 'Facebook and Instagram Ads portfolio'),
    metrics: [
      ['334', 'Managed campaigns'],
      ['$9,988.16', 'Managed ad spend'],
      ['14M+', 'Impressions'],
      ['5.5M+', 'People reached'],
    ],
    sections: [
      {
        title: 'Portfolio snapshot',
        paragraphs: [
          'This portfolio brings together seven live Meta Ads accounts spanning fragrance, fashion, beauty, education, travel, web development, and overseas-study consultancy. Across 334 campaigns and $9,988.16 in managed ad spend, these accounts generated over 14 million impressions and reached more than 5.5 million people - almost entirely through small daily-budget campaigns rather than large one-off pushes.',
          'The common operating model was built for Meta’s Andromeda update: broad targeting, messaging-first creative, and a constant rotation of new ad variations designed to keep pace with a system that increasingly ranks ads by creative signal rather than narrow audience definitions.',
        ],
      },
      {
        title: 'Why Andromeda changed the playbook',
        paragraphs: [
          'Meta’s Andromeda retrieval system changed how ads earn a place in the auction. The platform reads hooks, pacing, message, and format to predict who is likely to respond before detailed targeting settings do most of the work.',
          'For small and mid-sized advertisers, we responded with fewer stacked-interest audiences, more creative variations, broader ad sets, and structures built around signals the system could learn from quickly, especially Messenger conversations and video ThruPlays. We ran smaller ad sets and many practical tests instead of depending on one polished creative for months.',
        ],
      },
      {
        title: 'The common thread',
        paragraphs: [
          'No account depended on a large budget. Across fragrance, web design, education, travel, fashion, beauty, and consultancy, the repeatable rhythm was small daily budgets, frequent creative refreshes, messaging-first conversion paths, and campaign structures broad enough for Meta’s delivery system to do its work.',
          'The central lesson is portable across categories: creative velocity (how many honest, useful variations we can give the system) can outperform budget size when each variation communicates a clear offer and conversion path.',
          'Figures were compiled from Meta Ads Manager lifetime reporting across the seven managed accounts as of late June 2026.',
        ],
      },
    ],
    gallery: [
      image('/case-studies/facebook-ads/sumons-aroma.png', "Sumon's Aroma Ads Manager results", "Sumon's Aroma & sister brands"),
      image('/case-studies/facebook-ads/riha-webtech.png', 'Riha Webtech Ads Manager results', 'Riha Webtech'),
      image('/case-studies/facebook-ads/ipb-happy-tours.png', 'IPB Edu and Happy Tours Ads Manager results', 'IPB Edu & Happy Tours'),
      image('/case-studies/facebook-ads/ruposhi-mart.png', 'Ruposhi Mart Ads Manager results', 'Ruposhi Mart & partner brands'),
      image('/case-studies/facebook-ads/luxury-beauty-rwt.png', 'Luxury Beauty RWT Ads Manager results', 'Luxury Beauty - RWT'),
      image('/case-studies/facebook-ads/rpl-consultancy.png', 'RPL Consultancy Ads Manager results', 'RPL Consultancy'),
      image('/case-studies/facebook-ads/travel-lifestyle.png', 'Travel and lifestyle Ads Manager results', 'Travel & lifestyle testing engine'),
    ],
    tools: ['Meta Ads Manager', 'Messenger Conversations', 'Lead Forms', 'Video ThruPlay', 'Advantage+'],
    lessons: [
      'Creative velocity can outperform budget size when the system receives enough fresh signals.',
      'Broad targeting works best when each creative clearly communicates one offer, audience problem, or service line.',
      'Messenger conversations, lead forms, purchases, and ThruPlay views each need a structure that matches the conversion path.',
    ],
  },
  ...[
    {
      slug: 'sumons-aroma-messenger-commerce',
      client: "Sumon's Aroma & Sister Brands",
      industry: 'Fragrance, Beauty & D2C Messenger Commerce',
      title: "Meta Ads Case Study: Sumon's Aroma & Sister Brands",
      summary: 'Several campaigns landed below $0.10 per messaging conversation. Across 36 campaigns, $756.71 generated 1.6 million impressions and reached over a million unique people, with blended CPM below $0.50.',
      imagePath: '/case-studies/facebook-ads/sumons-aroma.png',
      metrics: [['36', 'Campaigns'], ['$756.71', 'Managed spend'], ['1.6 million', 'Impressions'], ['1M+', 'Unique people reached']],
      alignment: 'Frequent, low-cost creative refreshes across many small partner brands created the volume-over-polish pattern Meta’s retrieval system now favors.',
    },
    {
      slug: 'rihawebtech-meta-ads',
      client: 'Riha Webtech',
      industry: 'Web Design & Local Digital Services',
      title: 'Meta Ads Case Study: Riha Webtech',
      summary: 'On a modest $431 spend across 18 campaigns, the account generated 275K impressions and drove messaging conversations at costs as low as $0.04; landing-page and tracking-setup campaigns settled around $0.15–$0.20 per conversation.',
      imagePath: '/case-studies/facebook-ads/riha-webtech.png',
      metrics: [['18', 'Campaigns'], ['$431', 'Managed spend'], ['275K', 'Impressions'], ['Not reported', 'Reach']],
      alignment: 'We used one creative angle per service line instead of asking one ad to sell everything, giving Meta a cleaner signal to match against buyer intent.',
    },
    {
      slug: 'ipb-edu-happy-tours-meta-ads',
      client: 'IPB Edu & Happy Tours',
      industry: 'Education Consultancy & Travel Booking',
      title: 'Meta Ads Case Study: IPB Edu & Happy Tours',
      summary: 'Cost per messaging conversation frequently landed between $0.09 and $0.15. One May campaign produced more than 30,000 impressions from a $5 daily budget. Across 37 campaigns, $1,141.45 produced 1.83 million impressions.',
      imagePath: '/case-studies/facebook-ads/ipb-happy-tours.png',
      metrics: [['37', 'Campaigns'], ['$1,141.45', 'Managed spend'], ['1.83 million', 'Impressions'], ['Not reported', 'Reach']],
      alignment: 'A weekly refresh cadence, rather than one long-running ad, supplied the creative diversity the delivery system was built to reward.',
    },
    {
      slug: 'ruposhi-mart-meta-ads',
      client: 'Ruposhi Mart & Partner Brands',
      industry: 'Fashion & Beauty E-Commerce, Multi-Brand Portfolio',
      title: 'Meta Ads Case Study: Ruposhi Mart & Partner Brands',
      summary: 'A $10-per-day awareness campaign for Rupchaya reached 156,545 people. Across 138 campaigns, $6,315.66 produced 7.28 million impressions and reached 1.8 million people, with low frequency across most awareness activity.',
      imagePath: '/case-studies/facebook-ads/ruposhi-mart.png',
      metrics: [['138', 'Campaigns'], ['$6,315.66', 'Managed spend'], ['7.28 million', 'Impressions'], ['1.8 million', 'People reached']],
      alignment: 'Six brands and dozens of parallel small-budget campaigns created a wide creative surface area for the delivery system to sort through.',
    },
    {
      slug: 'luxury-beauty-rwt-meta-ads',
      client: 'Luxury Beauty - RWT',
      industry: 'Beauty & Skincare, Direct-Response Sales',
      title: 'Meta Ads Case Study: Luxury Beauty - RWT',
      summary: 'On $350.23 in spend, the account reached 388,554 people with 488,251 impressions, while purchase-optimized campaigns held cost per purchase in the low single digits.',
      imagePath: '/case-studies/facebook-ads/luxury-beauty-rwt.png',
      metrics: [['23', 'Campaigns'], ['$350.23', 'Managed spend'], ['488,251', 'Impressions'], ['388,554', 'People reached']],
      alignment: 'Short-lived, fast-rotating sales campaigns reduced the creative fatigue that modern delivery systems increasingly penalize.',
    },
    {
      slug: 'rpl-consultancy-meta-ads',
      client: 'RPL Consultancy',
      industry: 'Overseas Education & Immigration Consultancy',
      title: 'Meta Ads Case Study: RPL Consultancy',
      summary: 'The lead-form campaign converted at $1.42 per lead, the awareness campaign reached 329,646 people using ad-set budget optimization, and ThruPlay views cost fractions of a cent. Eight campaigns generated 1.15 million impressions and reached 663,407 people from $273.17.',
      imagePath: '/case-studies/facebook-ads/rpl-consultancy.png',
      metrics: [['8', 'Campaigns'], ['$273.17', 'Managed spend'], ['1.15 million', 'Impressions'], ['663,407', 'People reached']],
      alignment: 'Fewer, sharper formats paired with genuinely broad targeting showed that the system could find relevant people without complex audience segmentation.',
    },
    {
      slug: 'travel-lifestyle-meta-ads',
      client: 'Travel & Lifestyle Testing Engine',
      industry: 'Travel Agencies, Visa Services & Lifestyle Products',
      title: 'Meta Ads Case Study: Travel & Lifestyle Testing Engine',
      summary: 'Travel messaging campaigns held costs between $0.03 and $0.32. RMSD ThruPlay campaigns ran at roughly $0.001 per view. Across 74 campaigns, $719.94 generated 1.38 million impressions and reached 824,745 people.',
      imagePath: '/case-studies/facebook-ads/travel-lifestyle.png',
      metrics: [['74', 'Campaigns'], ['$719.94', 'Managed spend'], ['1.38 million', 'Impressions'], ['824,745', 'People reached']],
      alignment: 'Seventy-four campaigns on less than $750 demonstrated the value of test volume over budget size: we fed the system more useful creative signals instead of trying to outspend competitors.',
    },
  ].map((study) => ({
    ...study,
    category: 'Paid Ads',
    timeline: 'Lifetime account totals as of late June 2026',
    primaryFocus: 'Meta Ads Manager',
    image: image(study.imagePath, `${study.client} Meta Ads performance`),
    sections: [
      {
        title: 'Campaign overview',
        paragraphs: [`We managed the ${study.client} account across ${study.metrics[0][0]} campaigns, using live Meta Ads Manager reporting to guide creative and budget decisions.`],
      },
      {
        title: 'Strategy and execution',
        paragraphs: [study.summary],
      },
      {
        title: 'Creative alignment',
        paragraphs: [study.alignment],
      },
    ],
    gallery: [image(study.imagePath, `${study.client} Ads Manager performance snapshot`, 'First-party campaign reporting')],
    tools: paidAdsTools,
    lessons: [study.alignment, ...sharedPaidAdsLessons],
  })),
  {
    slug: 'border-locksmiths-local-seo',
    category: 'SEO',
    client: 'Border Locksmiths',
    industry: 'Locksmith Services',
    title: 'Local Service SEO for an Australian Locksmith Business',
    summary: 'Targeted on-page, technical, content, and off-page SEO grew Border Locksmiths from a near-zero organic footprint to 2.1 million tracked search impressions.',
    timeline: '5-month active campaign, with reporting tracked into late 2023',
    primaryFocus: 'Google Search Console',
    image: image('/case-studies/border-locksmiths/border-locksmiths-1.png', 'Border Locksmiths Google Search Console results'),
    snapshot: [
      ['Location', 'Melbourne & Gold Coast, Australia'],
      ['Target searches', 'Emergency auto, commercial, and residential locksmith services'],
      ['Scope', 'Technical SEO, on-page optimization, content SEO, keyword research, link building, and reporting'],
    ],
    metrics: [['12.2K', 'Total clicks'], ['2.1M', 'Total impressions'], ['1.3K', 'Ranking keywords'], ['1.6K', 'Backlinks']],
    sections: [
      {
        title: 'The challenge',
        paragraphs: [
          'Border Locksmiths began with almost no organic search presence. The website had thin content, no structured keyword targeting, and no technical SEO foundation, leaving it invisible for local searches that drive calls: emergency lockouts, commercial rekeying, and residential lock installation.',
          'Our goal was to build the topical and technical foundation from scratch, index commercially relevant pages, and turn organic search into a measurable lead channel inside a short five-month active campaign.',
        ],
      },
      {
        title: 'Strategy and execution',
        items: [
          'Foundation: audited the full website and benchmarked established Australian locksmith competitors.',
          'Keyword research: mapped difficulty, related language, underserved local intent, and low-competition Keyword Golden Ratio opportunities.',
          'Content: replaced thin copy with unique service and location pages written around real search intent.',
          'On-page SEO: improved URLs, titles, metadata, headings, images, internal links, duplicate metadata, keyword prominence, and orphan pages.',
          'Technical SEO: configured Analytics and Search Console, robots.txt, sitemaps, canonicals, schema, page speed, and indexing fixes.',
          'Off-page SEO: used competitor backlink analysis, outreach, guest posts, Web 2.0 profiles, business listings, directories, and social signals.',
        ],
      },
      {
        title: 'Search performance',
        paragraphs: [
          'Across the tracked period, Google Search Console recorded 12.2K clicks and 2.1M impressions. A representative seven-day window late in the period produced 364 clicks and 62.9K impressions, with average position improving to 47.7 from the longer-term 53.7 average.',
          'Semrush recorded an Authority Score of 11, 1.3K ranking keywords, 1.6K backlinks, and 373 referring domains. Across 44 tracked core terms, ranking-keyword count increased 51.7%, estimated traffic increased 395%, and estimated traffic value increased 300%.',
          'Estimated organic traffic reached roughly 2,180 visits per month. One page about front-door lock security earned three separate top-15 positions, while an Auto Locksmith Gold Coast page reached organic position five with a 4.8-star, 64-review search profile.',
        ],
      },
      {
        title: 'Commercial keyword movement',
        items: [
          '“home depot front door locks” reached position 7 at 170 monthly searches.',
          '“entry door lock sets” reached position 8, and “high security front door locks” reached position 13 from the same consolidated guide.',
          '“front door security lock” reached position 66 as the broader keyword footprint developed.',
          '“how much do locksmiths make” reached position 83 through the supporting informational layer.',
          '“locksmith 24/7 near me” reached position 99 through the emergency locksmith landing page.',
          'The Auto Locksmith Gold Coast page reached organic position 5 on a competitive commercial result page.',
        ],
      },
      {
        title: 'An accurate five-month picture',
        paragraphs: [
          'Most tracked terms were still in positions 51–100 or appearing through SERP features at the five-month mark. For a low-authority domain that began near zero, this was expected: the visibility gains came from a widening base of long- and mid-tail searches rather than a small set of head terms.',
          'The next phase was designed to move that large 21–100 keyword base toward page one through deeper content, stronger internal links, and continued authority building.',
        ],
      },
    ],
    gallery: Array.from({ length: 8 }, (_, index) => image(
      `/case-studies/border-locksmiths/border-locksmiths-${index + 1}.png`,
      `Border Locksmiths SEO performance snapshot ${index + 1}`,
      [
        'Cumulative Google Search Console performance',
        'Seven-day Search Console snapshot',
        'Semrush domain and authority overview',
        'Tracked keyword growth and traffic value',
        'Organic traffic trend',
        'Keyword-level rankings',
        'Live search-result visibility',
        'Tracked position distribution',
      ][index],
    )),
    tools: ['Google Search Console', 'Semrush', 'Google Analytics', 'Technical SEO', 'On-page SEO', 'Content SEO'],
    lessons: [
      'A complete technical and content foundation can create a meaningful search footprint before most head terms reach page one.',
      'Long-tail visibility compounds when service pages, location intent, internal linking, and authority building reinforce one another.',
      'Transparent reporting should show the large pool of developing terms as well as the strongest rankings.',
    ],
  },
  {
    slug: 'jarixo-topical-map-seo-visibility',
    category: 'SEO',
    client: 'Jarixo',
    industry: 'DTC Wellness',
    title: 'Building a Topical Map to Boost SEO Visibility for Jarixo',
    summary: 'A 10-pillar topical-authority framework turned an 11-SKU wellness catalog into a structured content and internal-linking system built for organic growth.',
    timeline: 'Topical map and content strategy project',
    primaryFocus: 'Topical Authority Framework',
    image: image('/case-studies/Jarixo/Jarixo%20Website.png', 'Jarixo wellness product website'),
    metrics: [['10', 'Topical pillars'], ['11', 'Products mapped'], ['100+', 'Planned content pieces'], ['3', 'Content layers']],
    sections: [
      {
        title: 'Overview and challenge',
        paragraphs: [
          'Jarixo is a direct-to-consumer wellness brand selling at-home, device-based relief products across neck, back, knee, hand, eye, muscle-recovery, travel, and sleep categories. Eleven products and several Shopify collections were live, but no blog or internal-link system connected the catalog to search intent.',
          'The project had to prevent collection pages and future articles from competing for the same head terms, connect every content idea to a product, support a neglected seasonal Gift Ideas collection, and replace an earlier draft built around truncated slugs instead of real search phrases.',
        ],
      },
      {
        title: 'Topical authority methodology',
        paragraphs: [
          'We defined the central entity as “At-Home Muscle, Joint & Body Wellness Devices,” then framed Jarixo’s source context as practical, device-based, non-clinical relief for desk workers, travelers, athletes, and seniors. This kept the content useful without drifting into diagnosis or treatment claims.',
          'The central search intent covered people researching pain, tension, or discomfort in a body area: from informational questions such as why pain occurs to commercial queries such as the best device for relief.',
        ],
      },
      {
        title: 'The ten pillars',
        items: [
          'Neck & Shoulder Pain Relief → Neck & Shoulder Relief collection',
          'Lower Back & Lumbar Pain Relief → Back & Lumbar Care',
          'Knee & Joint Pain Relief → Knee & Joint Therapy',
          'Hand, Wrist & Finger Pain Relief → Hand & Joint Comfort',
          'Eye Strain & Screen Fatigue → Eye Care & Relaxation',
          'Sleep, Travel & Pillow Comfort → Pillows & Sleep Comfort',
          'Muscle Recovery & Percussion Therapy → Muscle Recovery & Massage Guns',
          'Office & Desk Ergonomics → Office & Desk Wellness',
          'Travel Wellness → Travel Essentials',
          'Gift & Seasonal → Gift Ideas cross-catalog collection',
        ],
      },
      {
        title: 'Three-layer content hierarchy',
        items: [
          'Pillar blog hub: a broad educational guide targeting informational variants and linking to every cluster and its matching collection.',
          'Commercial collection: the Shopify category page targeting “best,” “shop,” and “buy” searches without competing with the educational hub.',
          'Cluster article: a narrow, single-intent spoke linking upward to the hub and sideways to one or two closely related articles.',
        ],
      },
      {
        title: 'Topical matrix and rollout',
        paragraphs: [
          'Every core pillar was evaluated across eleven content angles: definition, causes, symptoms, home remedies, comparison, buying guide, how-to, myths versus facts, audience, when to see a doctor, and reviews. We left cells empty when an angle did not fit naturally rather than forcing irrelevant content.',
          'The matrix produced roughly 100 content opportunities across the nine core pillars plus a six-piece seasonal cluster. Each row included a target phrase, funnel stage, priority, word-count guide, and internal-link destination.',
        ],
        items: [
          'Month 1: all nine hub pages plus buying-guide and comparison clusters for the fastest commercial impact.',
          'Month 2: causes, symptoms, home remedies, reviews, and social-proof clusters to build reach and trust.',
          'Month 3: audience-specific and usage clusters for long-tail visibility and post-purchase value.',
          'Ongoing: myths, doctor-guidance pages, and seasonal gift content refreshed around Q3 and Q4.',
        ],
      },
      {
        title: 'Internal linking and launch controls',
        items: [
          'Every cluster links to its pillar hub and at least one related cluster.',
          'Every hub links to all of its clusters and prominently to the matching commercial collection.',
          'Every collection links back to its educational hub once.',
          'Office, travel, and gift bridge pillars cross-link into the core body-area pillars they draw from.',
          'Before writing, directional keywords require Semrush or Ahrefs validation, final Shopify URLs need confirmation, review sourcing needs a process, and medical-adjacent pages need one consistent disclaimer.',
        ],
      },
    ],
    gallery: [image('/case-studies/Jarixo/Jarixo%20Website.png', 'Jarixo product catalog used for topical mapping', 'The 11-product catalog mapped into the content system')],
    tools: ['Topical Authority Framework', 'Semrush', 'Ahrefs', 'Shopify'],
    lessons: [
      'Architecture before content gives every page a clear job and conversion destination.',
      'Separating educational hubs, commercial collections, and cluster articles prevents keyword cannibalization.',
      'A complete product-to-topic map keeps organic traffic connected to something the store can convert into.',
    ],
  },
  {
    slug: 'phone-fashion-fix-local-seo',
    category: 'SEO',
    client: 'Phone Fashion Fix',
    industry: 'Mobile Device & Electronics Repair',
    title: 'Building Top-10 Local Search Visibility for Phone Fashion Fix',
    summary: 'A local and technical SEO program built a 34-page service architecture for an Ocala repair business, growing three-month impressions from 263 to 6,980 and clicks from 12 to 196.',
    timeline: 'Phased campaign, 2026',
    primaryFocus: 'Google Search Console',
    image: image('/case-studies/phone-fashion-fix/image-4.png', 'Phone Fashion Fix Search Console growth'),
    snapshot: [
      ['Market', 'Ocala, Florida - hyper-local single-city service area'],
      ['Competition', 'National repair chains, mall kiosks, and established local competitors'],
      ['Our role', 'SEO strategy, architecture, keyword mapping, briefs, implementation oversight, and link acquisition'],
    ],
    metrics: [['34', 'Service pages ranked'], ['+2,554%', 'Three-month impressions'], ['+1,533%', 'Three-month clicks'], ['5', 'Topical silos built']],
    sections: [
      {
        title: 'Problem and research',
        paragraphs: [
          'The business had no meaningful organic footprint, service-specific architecture, content depth, or off-site trust signal. One generic repair page could not match the exact searches customers use for individual devices and repair types in Ocala.',
          'We researched keywords, competitors, the service catalog, and the existing site, then mapped the opportunity across five silos: iPhone repair, iPad repair, Android smartphone repair, tablet repair, and common repair issues.',
        ],
      },
      {
        title: 'Local site architecture',
        items: [
          'iPhone: screen, battery, charging port, camera, water damage, and back glass repair.',
          'iPad: screen, battery, charging port, water damage, and button repair.',
          'Android: Samsung, Google Pixel, cracked screen, battery, charging port, and water damage repair.',
          'Tablet: screen, battery, charging port, water damage, and diagnostic services.',
          'Common issues: cracked screens, battery drain, charging failures, water damage, and camera repair.',
        ],
      },
      {
        title: 'Execution timeline',
        items: [
          'Foundation: keyword and competitor research, silo mapping, URL structure, and the local money-page build.',
          'Service rollout: published 34 device-and-service landing pages across the five silos.',
          'Semantic layer: mapped supporting blog clusters to build depth around each commercial silo.',
          'Off-page campaign: built directory citations, branded profiles, and contextual links.',
          'Monitoring: used Search Console indexing, impression, click, and position data for ongoing refinements.',
        ],
      },
      {
        title: 'Thirty-four published pages',
        items: [
          'Core hubs: Phone Repair Ocala, iPhone Repair, iPad Repair, Smartphone Repair, Tablet Repair, and Common Repair Issues.',
          'iPhone pages: Screen Repair, Battery Replacement, Charging Port Repair, Camera Repair, Water Damage Repair, and Back Glass Repair.',
          'iPad pages: Screen Repair, Battery Replacement, Charging Port Repair, Water Damage Repair, and Button Repair.',
          'Android pages: Android Phone Repair, Samsung Phone Repair, Google Pixel Repair, Cracked Screen Repair, Battery Replacement, Charging Port Repair, and Smartphone Water Damage Repair.',
          'Tablet pages: Water Damage Repair, Screen Repair, Battery Replacement, Charging Port Repair, and Diagnostic Service.',
          'Common-issue pages: Cracked Screen Repair, Battery Drain, Phone Not Charging Repair, Water Damage Repair, and Phone Camera Repair.',
        ],
      },
      {
        title: 'Search Console results',
        paragraphs: [
          'The latest three-month comparison recorded 196 clicks and 6,980 impressions, versus 12 clicks and 263 impressions in the prior period. Impressions expanded roughly 26 times, and clicks increased more than sixteen times.',
          'The blended average position moved from 9.5 to 21.1 because Google began surfacing a much wider set of newly published service and blog pages. That wider keyword universe included pages still climbing, so the lower blended position accompanied much stronger total visibility and traffic.',
          'Earlier snapshots showed 108 clicks and 1.33K impressions over 28 days on June 28, 2026; 103 clicks versus 31 over the compared 28-day windows on July 3; and 194 clicks with 4.61K impressions across three months by July 24.',
        ],
      },
      {
        title: 'Why it worked',
        items: [
          'Architecture came before content, giving every page a clear intent and internal-link destination.',
          'Local specificity captured device-and-repair searches one generic services page could not address.',
          'Supporting articles helped Google interpret the website as a repair authority, not a flat service list.',
          'Citations, branded profiles, and contextual links layered off-page trust onto the on-site structure.',
        ],
      },
    ],
    gallery: [
      image('/case-studies/phone-fashion-fix/image-1.png', 'Phone Fashion Fix 28-day Search Console snapshot', 'June 28, 2026: early performance after core pages went live'),
      image('/case-studies/phone-fashion-fix/image-2.png', 'Phone Fashion Fix 28-day Search Console comparison', 'July 3, 2026: 103 clicks versus 31 previously'),
      image('/case-studies/phone-fashion-fix/image-3.png', 'Phone Fashion Fix three-month Search Console snapshot', 'July 24, 2026: 194 clicks and 4.61K impressions'),
      image('/case-studies/phone-fashion-fix/image-4.png', 'Phone Fashion Fix three-month Search Console comparison', 'August 4, 2026: 196 clicks and 6.98K impressions versus 12 clicks and 263 impressions'),
    ],
    tools: ['Google Search Console', 'Semrush', 'Schema markup', 'Local SEO', 'Internal linking'],
    lessons: [
      'Architecture before content gave every page a clear job and a clear internal-link destination.',
      'Local specificity made it possible to compete for exact device-and-repair searches instead of one broad term.',
      'A wider keyword footprint can temporarily lower blended average position while new long-tail pages mature.',
    ],
  },
  {
    slug: 'pixc-retouch-global-seo',
    category: 'SEO',
    client: 'PixC Retouch',
    industry: 'Photo Editing & Retouching',
    title: 'Competing Globally in Photo Editing and Retouching SEO',
    summary: 'A global campaign built service verticals, 40+ supporting articles, geo-layered real-estate content, and diversified authority, producing 203% click growth and 91% top-ten visibility across tracked keywords.',
    timeline: '8 months, August 2025 to March 2026',
    primaryFocus: 'Google Search Console',
    image: image('/case-studies/pixc-retouch/image-1.png', 'PixC Retouch Search Console growth'),
    snapshot: [
      ['Markets', 'Global, with primary commercial focus on the USA and UK'],
      ['Competition', 'Global retouching brands, production agencies, and marketplace freelancers'],
      ['Our role', 'Vertical mapping, keyword strategy, 25+ service-page and 40+ article briefs, oversight, and link acquisition'],
    ],
    metrics: [['91%', 'Tracked keywords in top 10'], ['+203%', 'Six-month clicks'], ['+70%', 'Six-month impressions'], ['+148%', 'GA4 active users YoY']],
    sections: [
      {
        title: 'Problem and research',
        paragraphs: [
          'PixC Retouch competes in a saturated global category where production houses, marketplaces, and established brands already own major clipping-path, retouching, and product-photo terms. More than twenty services across e-commerce, fashion, real estate, and portrait work also carried different buyer language and intent.',
          'We studied the service catalog, competitive results, buyer questions, geo opportunities, and first-party analytics baseline. The evidence showed that one generic photo-editing page would dilute relevance, while vertical-specific pages could create many focused commercial entry points.',
        ],
      },
      {
        title: 'Vertical-first architecture',
        items: [
          'E-commerce and product: clothing, shoes, hats and bags, eyewear, clipping paths, masking, color correction, backgrounds, and shadow services.',
          'Fashion and apparel: ghost mannequin, underwear, undergarments, and apparel-specific clusters.',
          'Real estate: core real-estate editing plus Washington DC and New York geo layers.',
          'Portrait and people: portrait, maternity, newborn, model, wedding, and high-end retouching.',
          'Specialty: jewelry, furniture, restoration, and AI photo re-editing.',
        ],
      },
      {
        title: 'Strategy and execution',
        paragraphs: [
          'The campaign combined dedicated service pages, problem-aware article clusters, geo-layered expansion, recurring on-page and UI/UX refreshes, and diversified off-page authority. More than forty articles answered the questions buyers search before hiring an editor and deliberately linked those readers toward a relevant service.',
        ],
        items: [
          'Aug–Sep 2025: built core service verticals across masking, real estate, furniture, clipping paths, eyewear, portrait, wedding, maternity, and newborn work.',
          'Oct–Nov 2025: expanded e-commerce, footwear, clothing, product, model, jewelry, restoration, and semantic blog coverage.',
          'Dec 2025–Jan 2026: added shadow, color, hat and bag, AI re-editing, plus Washington DC and New York real-estate pages.',
          'Feb–Mar 2026: refreshed the highest-traffic money pages for content quality, usability, rankings, and conversion.',
          'Ongoing: monitored Search Console, GA4, and third-party visibility to focus the next cycle on underperforming terms.',
        ],
      },
      {
        title: 'Performance',
        paragraphs: [
          'Across the six-month comparison, Search Console clicks grew from 413 to 1,250, impressions from 58.7K to 99.8K, CTR from 0.7% to 1.2%, and average position from 55 to 38. GA4 active users reached 3.6K, up 147.9% year over year, with event volume up 104.9%.',
          'Semrush recorded 366 organic keywords, roughly 61.5K backlinks, and 1.2K referring domains. More importantly, 29 of 32 independently tracked targets reached the top ten. Four of six flagship service pages ranked in the top four.',
          'Among 26 tracked long-tail articles, 25 reached the top ten and 15 held the number-one position. Winning topics ranged from photo masking and jewelry shine to apparel editing, real-estate workflows, newborn retouching, furniture, shadows, and product-background decisions.',
        ],
      },
      {
        title: 'Tracked keyword wins',
        items: [
          'Flagship services: Hat and Bag Photo Editing ranked 1st, Maternity Photo Retouching 2nd, Furniture Photo Editing 3rd, and Underwear Photo Editing 4th.',
          'Developing services remained visible: Eyeglass Photo Editing reached 15th and Shoe Photo Editing reached 33rd, defining the next optimization priorities.',
          'Fifteen article targets reached 1st, including photo masking, jewelry shine, product-photo retouching, clothing editing, transparent backgrounds, shoe editing, real-estate color correction, natural shadows, newborn mistakes, sky replacement, property lines, furniture editing, and underwear editing.',
          'Further page-one results included jewelry editing at 2nd, maternity editing at 2nd, newborn presets at 3rd, ghost mannequin at 3rd, real-estate Lightroom settings at 4th, newborn color correction at 4th, apparel services at 5th, undergarment solutions at 7th, and e-commerce background colors at 8th.',
          'The “Mistakes to Avoid in Real Estate Photo Editing” target reached 15th and remained a clear page-two improvement opportunity.',
        ],
      },
      {
        title: 'Why it worked',
        items: [
          'Vertical architecture let more than twenty services compete for distinct commercial terms in parallel.',
          'Buyer-question content built topical depth and created deliberate paths toward the matching service.',
          'Geo-layered real-estate pages captured valuable US metro intent without rebuilding the global model as a local site.',
          'Diversified authority signals helped a young domain compete in a backlink-heavy category.',
          'Transparent tracking included page-two and page-three terms so the next optimization cycle remained clear.',
        ],
      },
    ],
    gallery: [
      image('/case-studies/pixc-retouch/image-1.png', 'PixC Retouch six-month Google Search Console comparison', '1.25K clicks versus 413; average position improved from 55 to 38'),
      image('/case-studies/pixc-retouch/image-2.png', 'PixC Retouch GA4 performance', '3.6K active users, up 147.9% year over year'),
      image('/case-studies/pixc-retouch/image-3.png', 'PixC Retouch Semrush overview', '366 organic keywords, 61.5K backlinks, and 1.2K referring domains'),
    ],
    tools: ['Google Search Console', 'GA4', 'Semrush', 'Content architecture', 'Technical SEO'],
    lessons: [
      'Vertical architecture lets a global brand compete for many commercial terms without forcing one page to represent every service.',
      'Buyer-question content builds long-tail visibility when every article has a deliberate commercial destination.',
      'Transparent keyword reporting is stronger than cherry-picking; page-two terms show where the next cycle belongs.',
    ],
  },
]

export function getGrowthCaseStudyBySlug(slug) {
  return growthCaseStudies.find((study) => study.slug === slug)
}

export function getGrowthCaseStudySlugs() {
  return growthCaseStudies.map((study) => study.slug)
}

