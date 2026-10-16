// Shared package-type pricing for Studio hub + sub-pages.
// Values match the /studio/ rate card (October 2026 copy).

export const hubPackages = [
  {
    name: 'Studio Session',
    tag: 'Space Only',
    price: 'from ৳2,000',
    priceNote: 'per hour',
    description: 'For crews that bring their own cameras and equipment.',
    features: [
      'Sound-isolated studio room',
      'Continuous ceiling softbox lighting grid',
      'Black, white, grey and green screen backdrops',
      'Fibre internet and IPS power backup',
      'Client lounge, styling mirror and changing area',
      'Hourly, half-day and full-day slots',
    ],
    cta: 'Book Space Only',
    bestFor: 'Production houses, agencies and independent videographers',
    popular: false,
  },
  {
    name: 'Studio + Crew',
    tag: 'Most Popular',
    price: 'from ৳8,000',
    priceNote: 'per session',
    description: 'For podcasters, interviewers and founders who want clean raw captures.',
    features: [
      'Everything in Studio Session',
      'Sound engineer and camera operator on site',
      'Multi-mic broadcast audio, podcast ready',
      '4K multi-camera framing with live monitoring',
      'Teleprompter and director guidance',
      'Raw 4K footage and mastered audio within 24 hours',
    ],
    cta: 'Book Production Session',
    bestFor: 'Podcasters, interviewers and founders',
    popular: true,
  },
  {
    name: 'Full Production',
    tag: 'End-to-End',
    price: 'from ৳35,000',
    priceNote: 'per project',
    description: 'For brands that want finished, ready-to-publish assets.',
    features: [
      'Concept, script and shot list',
      'Multi-camera directed studio shoot',
      'Colour grade and dialogue cleanup in DaVinci Resolve',
      'EN/BN subtitles, titles and motion graphics',
      '16:9 master plus 9:16 shorts pack',
      '2 revision rounds and a 60-day archive',
    ],
    cta: 'Request Full Production',
    bestFor: 'Brands and marketing teams',
    popular: false,
  },
]

export const hubRateCard = [
  ['Studio hire, room only / with operator', '৳2,000 / ৳2,500 per hour'],
  ['Podcast, audio only / 4K video / full production', '৳8,000 / ৳18,000 / ৳35,000'],
  ['Product photography, white-background catalogue', '৳1,500 per product'],
  ['Social batch, 20 captioned vertical clips', '৳62,000'],
  ['Promo campaign pack, master plus cutdowns', '৳58,000'],
  ['Company profile film, studio plus b-roll', '৳95,000'],
  ['Digital OVC with cutdowns', '৳88,000'],
  ['Broadcast TVC', 'From ৳3,60,000'],
  ['Event coverage, half day / full day', '৳25,000 / ৳48,000'],
  ['Live streaming, single camera / multi-camera', '৳18,000 / ৳45,000'],
  ['Wedding cinema, single event / two events', '৳32,000 / ৳68,000'],
  ['Property tour, standard / luxury with drone', '৳28,000 / ৳65,000'],
  ['Documentary, short / standard', '৳1,85,000 / ৳3,60,000'],
  ['Voice-over, short / commercial', '৳4,500 / ৳9,500'],
  ['Video editing packs', 'From ৳9,500'],
]

// Per-service package overrides. Any slug missing here falls back to generic packages.
const servicePackages = {
  podcast: [
    {
      name: 'Audio Essential',
      tag: 'Starter',
      price: '৳8,000',
      priceNote: 'per episode',
      description: 'Clean multi-mic audio podcast in acoustic isolation with mastered stems.',
      features: ['Up to 2 hours studio time', 'Multi-mic broadcast audio kit', 'Mastered WAV + MP3 stems', 'Room-tone + noise cleanup', '1 revision round', 'Raw files within 24h'],
      cta: 'Book Audio Session',
      popular: false,
    },
    {
      name: 'Video Podcast Pro',
      tag: 'Most Popular',
      price: '৳18,000',
      priceNote: 'per episode',
      description: '4K multi-cam video podcast with edit, grade and YouTube master.',
      features: ['4K 2-cam setup + lighting design', 'Full episode edit + pacing cuts', 'Colour correction + audio sweetening', 'Thumbnail frame + chapters', 'EN/BN subtitles', '2 revision rounds'],
      cta: 'Book Video Podcast',
      popular: true,
    },
    {
      name: 'Show Engine',
      tag: 'Growth Pack',
      price: '৳35,000',
      priceNote: 'episode + shorts',
      description: 'Full episode plus 5 vertical shorts engineered for Reels/Shorts/TikTok.',
      features: ['Everything in Video Podcast Pro', '5× 9:16 shorts with kinetic captions', 'Hook-first reframe + sound design', 'Publishing calendar + titles', 'Priority 72h turnaround', 'Monthly batch discount available'],
      cta: 'Scale My Show',
      popular: false,
    },
  ],
  'product-photography': [
    {
      name: 'Catalogue Basic',
      tag: 'E-commerce',
      price: '৳1,500',
      priceNote: 'per product',
      description: 'Clean white-background catalogue shots for Daraz, Shopify & websites.',
      features: ['White background setup', '2–3 angles per product', 'Colour-accurate retouch', 'Web + marketplace sizes', '48h delivery', 'Bulk slab discounts'],
      cta: 'Book Catalogue Shoot',
      popular: false,
    },
    {
      name: 'Brand Staged',
      tag: 'Most Popular',
      price: '৳18,000',
      priceNote: 'per half-day',
      description: 'Creative staged + lifestyle product photography for campaigns.',
      features: ['Art-directed staging & props', 'Model-hand / lifestyle frames', 'Campaign-grade retouch', 'Social + web export set', 'Product spotlight reel (15s)', '2 revision rounds'],
      cta: 'Book Brand Shoot',
      popular: true,
    },
    {
      name: 'Launch Suite',
      tag: 'Full Funnel',
      price: '৳45,000',
      priceNote: 'campaign pack',
      description: 'Photo + video launch suite: stills, reels and ad creatives in one booking.',
      features: ['Full-day studio + crew', 'Stills + 3 vertical ad reels', 'Kinetic price/offer tags', 'Multi-ratio ad exports', 'Priority turnaround lane', 'Dedicated stylist support'],
      cta: 'Plan Launch Suite',
      popular: false,
    },
  ],
  rental: [
    {
      name: 'Hourly Hire',
      tag: 'Flexible',
      price: '৳2,000',
      priceNote: 'per hour',
      description: 'Room-only hire for small crews with own cameras and audio.',
      features: ['Sound-treated room', 'Lighting grid access', 'Backdrop of choice', 'Fibre internet + power backup', 'Lounge + styling area', 'Min. 2-hour booking'],
      cta: 'Check Availability',
      popular: false,
    },
    {
      name: 'Half-Day Operated',
      tag: 'Most Popular',
      price: '৳9,500',
      priceNote: '4 hours',
      description: 'Half-day with on-site technician for lighting and setup reset.',
      features: ['4-hour reservation', 'Technician support', 'Green screen keying setup', 'Monitoring + playback', 'Gear load-in assistance', 'Free reschedule once'],
      cta: 'Book Half-Day',
      popular: true,
    },
    {
      name: 'Full-Day Production',
      tag: 'Crew Ready',
      price: '৳18,000',
      priceNote: '8 hours',
      description: 'Full-day lockout for series, batch shoots and client days.',
      features: ['8-hour exclusive lockout', 'Full lighting + grip package', 'Multi-set styling resets', 'Client lounge + catering space', 'Next-day raw backup', 'Retainer discount available'],
      cta: 'Book Full Day',
      popular: false,
    },
  ],
}

export function getPackagesForService(service) {
  if (!service) return hubPackages
  if (service.packages && Array.isArray(service.packages) && service.packages.length >= 2) {
    return service.packages
  }
  if (servicePackages[service.slug]) return servicePackages[service.slug]
  // Generic fallback derived from pricingFactors so every page is still package-type
  const factors = (service.pricingFactors || []).slice(0, 3)
  return [
    {
      name: `${service.shortTitle || 'Studio'} Essential`,
      tag: 'Starter',
      price: '৳18,000',
      priceNote: 'per project onwards',
      description: `Focused single-setup ${service.shortTitle || 'studio'} session with clean master delivery.`,
      features: [...factors.map((f) => (typeof f === 'string' ? f : f.title || f.desc)), 'Raw files within 24 hours', '1 structured revision round'].slice(0, 6),
      cta: 'Book Essential',
      popular: false,
    },
    {
      name: `${service.shortTitle || 'Studio'} Signature`,
      tag: 'Most Popular',
      price: '৳48,000',
      priceNote: 'per project onwards',
      description: 'Directed multi-setup production with grade, sound finish and platform exports.',
      features: ['Directed multi-setup shoot', 'DaVinci colour + audio finish', 'EN/BN subtitles & graphics', 'Master 16:9 + 9:16 cutdowns', '2 revision rounds', 'Itemised quote in 48h'],
      cta: 'Book Signature',
      popular: true,
    },
    {
      name: `${service.shortTitle || 'Studio'} Campaign`,
      tag: 'Full Scale',
      price: '৳1,25,000+',
      priceNote: 'scoped quote',
      description: 'Multi-day / multi-format campaign suite with priority turnaround lane.',
      features: ['Concept + shot-list planning', 'Multi-day crew & set design', 'Motion graphics & sound design', 'Multi-ratio broadcast masters', 'Dedicated director lane', '60-day archive + re-exports'],
      cta: 'Request Campaign Quote',
      popular: false,
    },
  ]
}
