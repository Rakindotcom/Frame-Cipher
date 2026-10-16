export const studioClusters = [
  {
    id: 'business-video',
    name: 'Business & Commercial Video',
    parentSlug: 'video-production',
    description: 'Corporate brand films, TVCs, executive interviews and digital advertising videos.',
  },
  {
    id: 'live-and-event',
    name: 'Live & Event Production',
    parentSlug: 'event-video-production',
    description: 'Multi-camera live streaming, conference coverage, and corporate event videography.',
  },
  {
    id: 'story-and-personal',
    name: 'Story-Led & Personal Media',
    parentSlug: 'documentary-production',
    description: 'Documentaries, real estate architecture tours, and milestone visual storytelling.',
  },
  {
    id: 'post-production-audio',
    name: 'Post-Production & Audio',
    parentSlug: 'post-production',
    description: 'DaVinci color grading, audio cleanup, voice over recording, and visual effects.',
  },
  {
    id: 'studio-access',
    name: 'In-House Studio Access',
    parentSlug: 'rental',
    description: 'Acoustic podcast studio, commercial product photography, and shooting space rental.',
  },
  {
    id: 'trust-and-local',
    name: 'Studio Trust & Operations',
    parentSlug: 'process',
    description: 'Verified equipment specifications, portfolio evidence, pricing frameworks, and location guide.',
  },
]

export const studioServices = [
  // ==========================================
  // CLUSTER A: Business Video
  // ==========================================
  {
    slug: 'video-production',
    clusterId: 'business-video',
    isParent: true,
    name: 'Video Production Company & Studio',
    shortTitle: 'Video Production',
    seoTitle: 'Video Production Company in Dhaka | FrameCipher Studio',
    metaDescription:
      'Full-service video production in Dhaka: concept, 4K studio shoot, DaVinci grade and platform-ready exports. Studio day from ৳35,000. Itemised quote in 48 hours.',
    h1: 'Full-Service Video Production in Dhaka',
    eyebrow: 'In-House Studio & Field Production',
    tagline: 'Planned, structured video content designed to convert viewers into paying customers and brand advocates.',
    intro:
      'FrameCipher Studio operates a dedicated physical video production facility in Dhaka, Bangladesh, delivering commercial, corporate, and brand films under one roof. We combine pre-production concept alignment, cinema-grade camera rigs, calibrated high-CRI lighting grids, and DaVinci Resolve post-production.',
    detailedDescription:
      'Unlike unstructured freelance videography, FrameCipher Studio approaches each video as a commercial business asset. Whether filming corporate profiles, founder interviews, product spotlights, or commercial ads, our in-house production team establishes target audience intent, narrative pacing, and platform distribution requirements before pressing record.',
    highlights: [
      'Multi-Cam 4K Cinema Rigs',
      'Ceiling Lighting Softbox Grid',
      'Acoustically Sound-Isolated',
      'In-House Post-Production',
    ],
    targetAudience: [
      'Enterprises and corporations needing company introduction films',
      'Fast-scaling startups filming founder stories and investor masterclasses',
      'Digital brands producing performance marketing video campaigns',
      'Agencies requiring studio shooting support and equipment in Dhaka',
    ],
    benefits: [
      'Comprehensive pre-production: concept brief, talking points, and shot lists',
      'Controlled studio environment eliminating traffic noise and unpredictable lighting',
      'Multi-camera setup capturing simultaneous wide master and tight reaction angles',
      'Real-time client monitoring screens and teleprompter support',
      'Seamless transition into our post-production grading and sound suite',
      'Experienced directors guiding on-camera presence, posture, and pacing',
    ],
    deliverables: [
      '4K (3840x2160) high-bitrate master exports (16:9 Landscape)',
      'Vertical cutdowns (1080x1920) formatted for Reels, Shorts, and TikTok',
      'Clean broadcast dialogue audio stems with room noise isolation',
      'Cinematic color grading matching corporate visual guidelines',
      'Subtitles and lower third motion graphics in English and Bangla',
    ],
    pricingFactors: [
      'Production crew size (Director, DOP, Gaffer, Audio Engineer)',
      'Shoot duration (Half-day 4 hours vs full-day 8 hours)',
      'Set styling and custom backdrop rigging',
      'Post-production motion graphics and kinetic animation needs',
    ],
    faqs: [
      {
        q: "How much does video production cost in Dhaka?",
        a: "At FrameCipher Studio, a single studio setup with a clean edit is ৳35,000. A multi-camera commercial with a grade and two vertical shorts is ৳78,000, and a multi-day brand film starts from ৳1,85,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "Is studio shooting or location shooting cheaper?",
        a: "A studio day removes venue hire, portable lighting, sound treatment and weather contingency. For a single interview or product spotlight, the studio is usually the simpler and more predictable option. Multi-location stories need field production, which we quote separately.",
      },
      {
        q: "What pushes a quote from ৳78,000 toward ৳1,85,000?",
        a: "More shoot days and locations, a larger crew, casting, scriptwriting, motion graphics, custom sound design, more aspect ratios and a priority delivery lane.",
      },
      {
        q: "What is included in the studio day package?",
        a: "Up to 4 hours of studio time, one cinema 4K camera, a wireless lapel audio kit, a teleprompter, a client monitoring screen, a basic edit, one export (16:9 or 9:16) and one revision round.",
      },
      {
        q: "Do you shoot on location as well as in the studio?",
        a: "Yes. We quote field production separately, itemising crew, equipment and travel days for corporate offices, factories and event venues across Bangladesh.",
      },
      {
        q: "What video formats do I receive?",
        a: "A 4K 16:9 master, vertical 9:16 cutdowns, clean dialogue audio and subtitle files. The Flagship tier adds 1:1 and 4:5 masters.",
      },
      {
        q: "Do you add Bangla subtitles?",
        a: "Yes. We produce English and Bangla subtitles and lower-third graphics. They are included in Signature Commercial and available on other tiers.",
      },
      {
        q: "How many revisions are included?",
        a: "Studio Day Essential includes 1 structured revision round. Signature Commercial includes 2. Flagship terms are set in the written quote.",
      },
      {
        q: "How fast can you deliver?",
        a: "Studio Day Essential delivers in 3 to 5 business days. Express 48-hour turnaround adds 30%. Raw files are available within 24 hours.",
      },
      {
        q: "Do I need a script before booking?",
        a: "For Studio Day Essential, a finished script or talking points works best. Signature Commercial includes concept and script polish, and Flagship includes full scriptwriting.",
      },
      {
        q: "How do I book and pay?",
        a: "Send your date, setup and goal by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'corporate-video-production',
    clusterId: 'business-video',
    name: 'Corporate Video Production',
    shortTitle: 'Corporate Video',
    seoTitle: 'Corporate Video Production in Dhaka | FrameCipher Studio',
    metaDescription:
      'Executive corporate video production in Dhaka. Company profiles, founder talks, investor masterclasses, and case study films produced at ECB Chattar.',
    h1: 'Corporate Video Production in Dhaka',
    eyebrow: 'B2B, Investor & Brand Credibility',
    tagline: 'High-authority corporate videos that establish institutional trust and articulate business vision.',
    intro:
      'FrameCipher Studio produces high-impact corporate videos for enterprises, multinational firms, financial institutions, and tech companies in Dhaka. From company culture overviews and leadership interviews to B2B customer testimonials and annual reports, we craft visual media that speaks to investors, partners, and top talent.',
    detailedDescription:
      'Corporate communication demands clarity, poise, and pristine technical execution. Our studio environment ensures executive leadership can deliver their message in an uninterrupted, sound-isolated setting with professional teleprompter assistance and flattering, corporate-tailored lighting.',
    highlights: [
      'Executive Teleprompter Support',
      'Polished Corporate Lighting',
      'B2B Message Structuring',
      'Confidential Project Protocols',
    ],
    targetAudience: [
      'C-suite executives, Managing Directors, and board members',
      'HR and recruitment heads creating employer brand films',
      'B2B tech companies producing SaaS demo and investor films',
      'Manufacturing and export businesses showcasing capabilities',
    ],
    benefits: [
      'Professional executive teleprompter setup for effortless script delivery',
      'Soundproofing shielding dialogue from Dhaka street and horn noise',
      'Multi-camera setup ensuring smooth cutaways without repeated takes',
      'Script consultation ensuring concise, authoritative phrasing',
      'Corporate brand identity color grading and logo animation',
      'Discrete, professional production crew respecting business confidentiality',
    ],
    deliverables: [
      'Master Corporate Video (2 to 5 minutes duration)',
      'Executive Highlight Reels (60 to 90 seconds for LinkedIn)',
      'Multi-language subtitles (English & Bangla SRT files)',
      'Uncompressed master audio and color-calibrated ProRes files',
    ],
    pricingFactors: [
      'Scriptwriting and narrative development assistance',
      'Number of executive speakers participating',
      'Studio shoot vs combination of studio and office b-roll',
      'Turnaround speed (Standard 5-7 days vs 48-hour board meeting rush)',
    ],
        faqs: [
      {
        q: "How much does a corporate video cost in Dhaka?",
        a: "At FrameCipher Studio, an executive interview with teleprompter and a LinkedIn highlight reel is ৳48,000. A complete company profile film with studio interviews plus office and facility b-roll is ৳95,000, and multi-film enterprise AV suites start from ৳2,60,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "What pushes a quote from ৳95,000 toward ৳2,60,000?",
        a: "More shoot days and locations, multiple executives, casting, scriptwriting depth, motion graphics and data visualisation, bilingual voiceover and subtitle versioning, and a priority delivery lane.",
      },
      {
        q: "Can non-actors or first-time executives look natural on camera?",
        a: "Yes. Our professional teleprompter operator controls reading speed naturally, and our director uses conversational interview techniques to bring out relaxed, authoritative and authentic performances.",
      },
      {
        q: "Do you provide on-site b-roll shooting at our corporate office?",
        a: "Yes. We frequently combine a controlled, quiet studio interview at ECB Chattar with on-location office and facility b-roll to create a cohesive corporate brand story.",
      },
      {
        q: "Do you offer bilingual voiceovers and subtitle translations in Bangla and English?",
        a: "Yes. All corporate video packages can include English and Bangla voiceovers, as well as synchronised SRT subtitle files formatted for stakeholder presentations and LinkedIn.",
      },
      {
        q: "What is included in the company profile film?",
        a: "Script consultation and B2B message structuring, a studio interview day plus one location b-roll day, logo animation and kinetic data graphics, a 2 to 5 minute master plus 60-second and 30-second cuts, and ProRes and high-bitrate MP4 files with SRT subtitles.",
      },
      {
        q: "What is the standard turnaround time for corporate films?",
        a: "Standard delivery is 5 to 7 working days from the final filming date. We also provide express 48-hour turnarounds at a 30% priority fee for urgent board meetings, investor pitches or AGMs. Raw captures are available within 24 hours.",
      },
      {
        q: "How many revisions are included?",
        a: "The executive interview tier includes 2 structured revision rounds. Profile and enterprise revision terms are set in the written quote, and review runs through a timestamped cloud link.",
      },
      {
        q: "Do you shoot at our factory or branch offices outside Dhaka?",
        a: "Yes. We quote field production separately, itemising crew, equipment and travel days for factories, plants and offices across Bangladesh.",
      },
      {
        q: "How do I book and pay?",
        a: "Send your date, setup and goal by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'commercial-video-production',
    clusterId: 'business-video',
    name: 'Commercial Video & TVC Production',
    shortTitle: 'Commercial Video',
    seoTitle: 'Commercial Video Production & TVC in Dhaka | FrameCipher',
    metaDescription:
      'Commercial video and TVC production in Dhaka. High-impact advertising films, television commercials, and digital campaign videos produced at ECB Chattar.',
    h1: 'Commercial Video & TVC Production in Dhaka',
    eyebrow: 'High-Impact Brand Advertising',
    tagline: 'Visually striking commercial campaigns engineered to drive brand recall and direct response sales.',
    intro:
      'FrameCipher Studio produces cinematic commercial videos and TV commercials (TVCs) for consumer brands, fintech companies, fashion labels, and digital products. We engineer high-retention advertising spots built for national television broadcasting and high-budget digital paid media campaigns.',
    detailedDescription:
      'A commercial must capture attention within the first 3 seconds and leave a lasting emotional impression. We plan every commercial around visual hooks, compelling lighting atmospheres, high-speed camera movements, and precision sound design that elevates consumer perception.',
    highlights: [
      'Cinematic Set Design & Props',
      'High-Speed Frame Rates',
      'Paid Ad Creative Strategy',
      'Multi-Platform Aspect Ratios',
    ],
    targetAudience: [
      'FMCG, fashion, and consumer electronic brands launching campaigns',
      'Fintech, e-commerce, and app businesses needing user acquisition ads',
      'Advertising agencies requiring specialized studio execution',
    ],
    benefits: [
      'Storyboarding and visual concept development',
      'Custom color grading matching consumer advertising aesthetics',
      'Studio tabletop and green screen staging for dynamic commercial effects',
      'Audio mixing calibrated for broadcast loudness standards (EBU R128)',
      'Cutdown variations (15s, 30s, and 60s) for TV and digital paid ads',
    ],
    deliverables: [
      'Broadcast-spec TVC master export (1080p / 4K ProRes)',
      'Digital campaign cuts in 16:9, 1:1, and 9:16 vertical',
      'Licensed commercial music and sound design stems',
      'Static high-resolution commercial campaign frame grabs',
    ],
    pricingFactors: [
      'Talent, actors, and styling crew requirements',
      'Specialized lighting and high-speed motion rigs',
      'Number of creative cutdown variations required',
    ],
        faqs: [
      {
        q: "How much does a commercial video cost in Dhaka?",
        a: "At FrameCipher Studio, a performance-built digital OVC with 15s, 30s and 60s cutdowns plus verticals is ৳88,000. A broadcast TVC with casting, styling and art direction starts from ৳3,60,000, and national multi-film campaigns start from ৳12,50,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "What pushes a quote from ৳88,000 toward ৳3,60,000?",
        a: "Casting and talent fees, wardrobe and makeup artistry, art direction and set design, specialty optics, more shoot days and locations, motion graphics, and broadcast compliance mastering.",
      },
      {
        q: "Do you produce television-compliant commercials (TVC)?",
        a: "Yes. We deliver commercials formatted and mastered to the technical and audio loudness specifications required by Bangladesh television broadcast networks and cinema screens.",
      },
      {
        q: "What aspect ratios and formats do you deliver for digital advertising?",
        a: "Custom exports in 16:9 for TV and YouTube, 1:1 square for Facebook feeds, and 9:16 vertical for Reels and TikTok ads, with safe-zone margin calibration on every version.",
      },
      {
        q: "How does FrameCipher handle casting, actors and styling?",
        a: "We manage complete talent casting, wardrobe coordination and professional on-set makeup artistry tailored to your brand persona and target demographic, each line itemised in the quote.",
      },
      {
        q: "What is the standard production timeline for a commercial?",
        a: "Commercial campaigns typically take 7 to 10 working days from storyboard approval to final masters. Express 48 to 72-hour delivery is available at a 30% priority fee, and raw captures are available within 24 hours.",
      },
      {
        q: "Do you add Bangla voiceovers and subtitles?",
        a: "Yes. The broadcast tier includes a Bangla voiceover recording session in our vocal booth, and subtitled versions in Bangla and English are available on every tier.",
      },
      {
        q: "How many revisions are included?",
        a: "Revision rounds are set in your written quote for each tier. Review runs through a timestamped cloud link covering the hero cut and each cutdown before finishing.",
      },
      {
        q: "Can one shoot cover both TV and digital campaigns?",
        a: "Yes. We produce integrated TVC-plus-OVC packages from a single production, with one art direction across the broadcast master and every digital cutdown.",
      },
      {
        q: "How do I book and pay?",
        a: "Send your offer, placements and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'promotional-video-production',
    clusterId: 'business-video',
    name: 'Promotional Video Production',
    shortTitle: 'Promotional Video',
    seoTitle: 'Promotional Video Production in Bangladesh | FrameCipher',
    metaDescription:
      'High-converting promotional video production in Dhaka. Product launches, discount campaigns, and brand promos produced at FrameCipher Studio.',
    h1: 'Promotional Video Production in Bangladesh',
    eyebrow: 'Launches, Offers & Brand Hype',
    tagline: 'High-energy promotional videos that ignite excitement for your product launches, events, and seasonal offers.',
    intro:
      'Whether you are introducing a new product line, promoting a seasonal discount, or building hype for an upcoming event, FrameCipher Studio crafts promotional videos that hook viewers immediately and compel direct action.',
    detailedDescription:
      'Promotional videos require kinetic pacing, dynamic lighting transitions, and clear calls-to-action. We combine studio product staging, talent presentation, and fast-paced editing with animated typography to maximize engagement across social platforms.',
    highlights: ['Fast Pacing & Dynamic Cuts', 'Bold Kinetic Typography', 'Call-to-Action Focus', 'High-Converting Ad Hooks'],
    benefits: [
      'Audience retention structuring that prevents scroll-away',
      'Vibrant studio lighting with colored gels and practicals',
      'High-energy sound effects, risers, and licensed upbeat music',
      'Custom platform exports optimized for Facebook Ads and YouTube Pre-roll',
    ],
    deliverables: [
      'Promotional master video (30 to 60 seconds)',
      'Story and Reel cutdowns (9:16 vertical)',
      'Animated lower-third price and offer tags',
    ],
    pricingFactors: ['Number of promotional hooks tested', 'Voiceover talent in English or Bangla', 'Turnaround urgency'],
        faqs: [
      {
        q: "How much does a promotional video cost in Dhaka?",
        a: "At FrameCipher Studio, a single launch promo of 30 to 60 seconds with a story cut is ৳28,000. A coordinated campaign pack with a hero video, two hook variants and teaser cuts is ৳58,000, and seasonal blitz coverage is ৳1,25,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "How is a promotional video different from a commercial?",
        a: "A commercial is built around a paid ad placement with strict time limits, whereas a promotional video often serves broader objectives such as website launches, seasonal sales, product demonstrations or social campaigns.",
      },
      {
        q: "What pushes a quote from ৳28,000 toward ৳58,000?",
        a: "More hook variants and teaser cuts, presenter or talent direction, animated offer badges in two languages, more aspect ratios, and a showroom field-shoot day add-on.",
      },
      {
        q: "Can you shoot product promotional videos in your studio?",
        a: "Yes. Our Dhaka studio has product staging tables, high-CRI continuous lighting grids, macro lenses and coloured backdrops calibrated for product reveal reels.",
      },
      {
        q: "Do you provide on-screen actors, models or voiceover artists?",
        a: "Yes. Depending on scope, we coordinate bilingual voiceover artists in Bangla and English and on-screen presenters or models suited to your brand category.",
      },
      {
        q: "How long does a promotional video project take?",
        a: "Simple social promos take 3 to 5 working days from brief to delivery. Comprehensive launch campaigns with multi-ratio deliverables take 1 to 2 weeks. Express 48-hour delivery is available for flash sales at a 25% priority fee.",
      },
      {
        q: "What video formats will we receive?",
        a: "High-bitrate masters in 16:9 for YouTube and websites, 1:1 square for social feeds, and 9:16 vertical for Reels, TikTok and Shorts, with burned-in subtitles and SRT files.",
      },
      {
        q: "Do you add Bangla subtitles and offer badges?",
        a: "Yes. We animate offer badges, prices and deadlines in Bangla and English, with burned-in subtitles for sound-off mobile browsing.",
      },
      {
        q: "How many revisions are included?",
        a: "Revision rounds are set in your written quote for each tier. Review runs through a timestamped cloud link covering the hero and each cutdown before finishing.",
      },
      {
        q: "How do I book and pay?",
        a: "Send your offer, launch date and audience by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'video-marketing',
    clusterId: 'business-video',
    name: 'Video Marketing Strategy & Services',
    shortTitle: 'Video Marketing',
    seoTitle: 'Video Marketing Services in Dhaka | FrameCipher Studio',
    metaDescription:
      'Strategic video marketing services in Dhaka. We align video production with paid ads, SEO, and social funnels to drive measurable customer growth.',
    h1: 'Video Marketing Services in Dhaka',
    eyebrow: 'Performance, Strategy & Funnel Video',
    tagline: 'Connecting creative video production directly to customer acquisition funnels and measurable ROI.',
    intro:
      'Filming a beautiful video is meaningless if it fails to reach the right audience or trigger commercial action. At FrameCipher Studio, video production is directly integrated with our 360-degree digital marketing and advertising systems.',
    detailedDescription:
      'We design video content around the customer journey: top-of-funnel brand awareness videos, middle-of-funnel educational explainers, and bottom-of-funnel customer testimonial and direct-response conversion ads.',
    highlights: ['Funnel-Based Creative Architecture', 'Paid Meta & Google Ads Alignment', 'A/B Creative Hook Testing', 'SEO Video Optimization'],
    benefits: [
      'Content roadmaps designed around commercial search queries and buyer pain points',
      'Scripting specifically engineered for click-through rate (CTR) and watch time',
      'Seamless coordination between studio filming and digital ad managers',
      'Comprehensive metadata, thumbnail, and chapter optimization for YouTube SEO',
    ],
    deliverables: [
      'Full-funnel video asset library (Awareness, Consideration, Conversion)',
      'Creative testing variations with alternative first-3-second hooks',
      'Campaign distribution guidelines for Meta Ads and YouTube',
    ],
    pricingFactors: ['Scope of marketing strategy', 'Number of videos in the content roadmap', 'Ad management integration'],
        faqs: [
      {
        q: "How much does video marketing cost in Dhaka?",
        a: "At FrameCipher Studio, a funnel starter with 3 videos and a distribution map is ৳55,000. A 30-day growth sprint with 8 assets and hook testing is ৳1,25,000, and the always-on monthly engine is ৳2,40,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "How does video marketing differ from standard video production?",
        a: "Standard production focuses on filming. Video marketing adds audience research, funnel positioning, search-query targeting, conversion-focused scripting and a distribution map your media team can run.",
      },
      {
        q: "What pushes a quote from ৳55,000 toward ৳1,25,000?",
        a: "More assets and funnel stages, more hook variants, landing-page embeds with CRO notes, retargeting sequences, and the day-30 metrics review with a scaling playbook.",
      },
      {
        q: "Do you create multiple opening hooks for A/B creative testing?",
        a: "Yes. We film 3 to 5 alternative opening hooks for the same core video, so you can test which angle delivers the highest thumb-stop rate and lowest cost per lead.",
      },
      {
        q: "How do you optimise videos for YouTube search?",
        a: "We write keyword-led titles, rich descriptions, search tags and chapter timestamps, and design high-CTR thumbnail artwork for every video.",
      },
      {
        q: "Can you help distribute videos across Meta and Google Ads?",
        a: "We hand your team a distribution and placement guide for Meta, YouTube and TikTok with specs for every asset. Media buying itself stays with your team, supported by our scaling playbook on sprint tiers.",
      },
      {
        q: "What formats will we receive?",
        a: "Masters in 16:9 for YouTube and landing pages, plus 1:1 and 9:16 versions for feeds, Reels, Shorts and TikTok, each with captions and safe-zone calibration.",
      },
      {
        q: "Do you add Bangla subtitles?",
        a: "Yes. We produce English and Bangla captions with SRT files on every asset, plus burned-in versions for sound-off autoplay placements.",
      },
      {
        q: "How fast can you deliver?",
        a: "Asset batches deliver in 5 to 10 working days from the shoot. Sprints run on a fixed 30-day calendar. Express 48 to 72-hour delivery is available at a 30% priority fee, and raw captures are available within 24 hours.",
      },
      {
        q: "How do I book and pay?",
        a: "Send your funnel goal and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'social-media-video-production',
    clusterId: 'business-video',
    name: 'Social Media Video Production',
    shortTitle: 'Social Media Video',
    seoTitle: 'Social Media Video Production in Dhaka | FrameCipher',
    metaDescription:
      'Viral vertical video production in Dhaka. 9:16 Reels, TikTok, and YouTube Shorts filmed in our studio with kinetic subtitles and high-retention pacing.',
    h1: 'Social Media Video Production in Dhaka',
    eyebrow: 'Reels, Shorts & TikTok Viral Formats',
    tagline: 'Studio-grade vertical 9:16 video content engineered for algorithmic reach and high retention.',
    intro:
      'Social media algorithms reward high watch time, early visual hooks, and clean audio. FrameCipher Studio helps brands, influencers, and businesses batch-produce weeks of high-retention vertical short-form content in single, efficient studio sessions.',
    detailedDescription:
      'Stop filming shaky mobile clips in noisy offices. Our studio provides high-definition cameras composed specifically for vertical 9:16 margins, crisp audio, vibrant studio lighting, and post-production editing featuring kinetic captions, sound effects, and B-roll overlays.',
    highlights: ['Native 9:16 Vertical Composition', 'Kinetic Subtitles & Captions', 'Batch Production Workflow', 'Hook Retention Strategy'],
    benefits: [
      'Batch-record 10 to 30 short-form clips in a single half-day studio session',
      'Animated captions in English or Bangla keeping silent scrollers engaged',
      'Sound design with viral audio cues, whooshes, and pop sound effects',
      'Studio background styling tailored to personal brands and e-commerce products',
    ],
    deliverables: [
      'Batch of 10, 20, or 30 edited 9:16 vertical videos (15 to 60 seconds)',
      'Custom cover frames and thumbnail stills for Instagram and YouTube',
      'SRT subtitle files and platform-ready MP4 exports',
    ],
    pricingFactors: ['Number of finished vertical clips in the batch', 'Editing complexity (basic captions vs motion graphics)', 'Recurring monthly retainer vs single session'],
        faqs: [
      {
        q: "How much does social media video cost in Dhaka?",
        a: "At FrameCipher Studio, a Batch-10 pack with 10 finished captioned verticals is ৳32,000. A Batch-20 pack with 20 clips and a posting calendar is ৳62,000, and the monthly engine with 30 or more clips is ৳1,15,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "What pushes a quote from ৳32,000 toward ৳62,000?",
        a: "Doubling the clip count, a mid-session styling and backdrop change, b-roll overlays and product inserts, hook variants on priority topics, and the 30-day posting calendar with caption drafts.",
      },
      {
        q: "Can we batch-record multiple shorts in one studio visit?",
        a: "Yes. Our batch workflow lets creators, brands and executives record 10 scripted verticals in a single 4-hour session, or up to 20 in a full-day session at Matikata ECB Chattar.",
      },
      {
        q: "How many reels or TikToks fit in a single session?",
        a: "A half-day session of 4 hours typically yields 10 finished clips. A full-day session of 8 hours captures up to 20 vertical videos of 15 to 60 seconds each.",
      },
      {
        q: "Are kinetic captions and trending audio included?",
        a: "Yes. Every clip includes dynamic subtitles with highlighted keyword styling in English or Bangla, sound-effect cues, and licensed background music.",
      },
      {
        q: "Do you provide hook scripting and trend guidance?",
        a: "Yes. We review your scripts before recording so every video hooks viewers in the first 2 seconds, and the monthly engine adds trend-jacking scripts written for your niche.",
      },
      {
        q: "What formats will we receive?",
        a: "Platform-ready 9:16 MP4s for Reels, Shorts and TikTok, custom cover frames and thumbnail stills, and SRT caption files with every clip.",
      },
      {
        q: "How many revisions are included?",
        a: "Revision rounds are set in your written quote for each tier. Review runs through a timestamped cloud link covering every clip before caption finishing.",
      },
      {
        q: "How fast can you deliver?",
        a: "Batch-10 packs deliver in 3 to 5 working days; Batch-20 packs in 5 to 7 working days. A 48-hour rush edit lane is available at a 25% priority fee, and raw captures are available within 24 hours.",
      },
      {
        q: "How do I book and pay?",
        a: "Send your platforms, clip count and scripts by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },

  // ==========================================
  // CLUSTER B: Live and Event
  // ==========================================
  {
    slug: 'live-streaming',
    clusterId: 'live-and-event',
    name: 'Multi-Camera Live Streaming Services',
    shortTitle: 'Live Streaming',
    seoTitle: 'Live Streaming Service in Dhaka | FrameCipher Studio',
    metaDescription:
      'Professional multi-camera live streaming in Dhaka. Broadcast-grade streaming for webinars, corporate launches, conferences, and YouTube Live at ECB Chattar.',
    h1: 'Live Streaming Services in Dhaka',
    eyebrow: 'Broadcast-Grade Webcasts & Launches',
    tagline: 'Flawless multi-camera live streaming for webinars, corporate summits, and product launches.',
    intro:
      'FrameCipher Studio delivers professional live streaming services from our studio facility or on-location across Dhaka. Featuring multi-camera switching, dedicated high-speed fiber internet with backup bonding, live audio engineering, and dynamic graphics overlays.',
    detailedDescription:
      'A glitchy stream damages brand reputation. Our live streaming infrastructure utilizes hardware switchers, redundant internet lines, broadcast audio mixers, and customized on-screen graphics (lower thirds, presentations, and viewer Q&A).',
    highlights: ['Multi-Camera Real-Time Switching', 'Redundant Internet Bonding', 'Custom On-Screen Graphics', 'Simultaneous Multi-Platform Stream'],
    benefits: [
      'Simulcast streaming to YouTube, Facebook, LinkedIn, and private corporate portals',
      'Crystal-clear audio with lapel and boundary mics managed by an audio technician',
      'Integration of PowerPoint slides, video roll-ins, and remote Zoom speakers',
      'High-bitrate recording of the full live broadcast for immediate post-event on-demand publishing',
    ],
    deliverables: [
      'Live broadcast execution across up to 3 simultaneous platforms',
      'Full uncompressed 1080p / 4K master recording of the entire live session',
      'Edited highlight recap video of key summit moments',
    ],
    pricingFactors: ['Stream duration (hours)', 'Studio-based stream vs on-location venue setup', 'Number of remote guest feeds integrated'],
        faqs: [
      {
        q: "How much does live streaming cost in Dhaka?",
        a: "At FrameCipher Studio, a single-camera stream with pro audio and graphics is ৳18,000 for up to 2 hours. A three-camera switched broadcast with simulcast is ৳45,000, and full-day summit command is ৳95,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "How do you prevent internet drops during the stream?",
        a: "We bond dedicated fibre with multi-SIM cellular backup hardware and test failover before air, so one line failure never stops the broadcast. Venue Wi-Fi is never trusted as the primary line.",
      },
      {
        q: "Which platforms can you stream to at the same time?",
        a: "YouTube Live, Facebook Live, LinkedIn Live and private portals such as Zoom, Webex or Teams, at 1080p60. Multi-cam tiers include three-platform simulcast as standard.",
      },
      {
        q: "Is it better to stream from your studio or our venue?",
        a: "The studio suits webinars, talks and launches with controlled sound, bonded fibre and backup power already in place. Venue streaming suits conferences and events where the gathering is the content — we recce the hall and coordinate with the AV desk beforehand.",
      },
      {
        q: "What audio setup do you bring?",
        a: "Wireless lapels for speakers, audience mics, and a direct XLR feed from the venue soundboard, all mixed live by an engineer. Audio is monitored continuously because viewers leave over bad sound first.",
      },
      {
        q: "Can you add graphics, slides and remote guests?",
        a: "Yes. Lower thirds, logo bugs, countdowns, polls, PowerPoint slides and remote Zoom or Meet callers are integrated live, and rehearsed during the tech check.",
      },
      {
        q: "Do we get a recording and a highlight video?",
        a: "Yes. Every stream includes a full master recording available within 24 hours. Multi-cam tiers add an edited highlight recap within 72 hours, and summit days include a same-day teaser.",
      },
      {
        q: "How far ahead should we book a stream date?",
        a: "One to two weeks is ideal so the tech check and rehearsal can be scheduled properly. Summit and peak-season dates book earlier; urgent dates are quoted with an express crew lane where possible.",
      },
      {
        q: "How do we book and pay?",
        a: "Send your date, venue and programme rundown by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the date, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'event-video-production',
    clusterId: 'live-and-event',
    isParent: true,
    name: 'Event Videography & Conference Coverage',
    shortTitle: 'Event Videography',
    seoTitle: 'Event Videography & Production in Dhaka | FrameCipher',
    metaDescription:
      'Corporate event videography in Dhaka. Conference coverage, summit recaps, gala dinners, and exhibitions filmed with multi-camera crews.',
    h1: 'Event Videography & Production in Dhaka',
    eyebrow: 'Conferences, Summits & Expos',
    tagline: 'Capturing the energy, keynote insights, and key moments of your corporate events and summits.',
    intro:
      'FrameCipher provides comprehensive event videography services in Dhaka for business conferences, industry expos, product unveilings, award galas, and corporate annual general meetings (AGMs). We capture full keynote speeches and produce high-tempo promotional highlight recap reels.',
    detailedDescription:
      'Events require fast-moving, experienced crews who know how to capture spontaneous energy without disrupting attendees. We coordinate multiple camera operators, dedicated audio feeds from the venue soundboard, and gimbal stabilizers to produce dynamic event coverage.',
    highlights: ['Multi-Camera Roaming Crews', 'Direct Venue Soundboard Audio Capture', 'Same-Day / Next-Day Highlight Teasers', 'Keynote Speech Archive'],
    benefits: [
      'Complete coverage of keynote speeches, panel discussions, and audience interactions',
      'Dedicated soundboard audio recording eliminating echo and crowd noise',
      'Cinematic gimbal footage of exhibition booths, networking, and branding displays',
      'Express turnaround highlight reels for immediate social media PR dissemination',
    ],
    deliverables: [
      'Cinematic Event Highlight Aftermovie (2 to 4 minutes)',
      'Full-length unedited recordings of keynote speeches and panel talks',
      'Short social media recap teasers delivered within 24 hours of event close',
    ],
    pricingFactors: ['Event duration (single-day vs multi-day conference)', 'Number of videographers and photographers on-site', 'Same-day turnaround requests'],
        faqs: [
      {
        q: "How much does event videography cost in Dhaka?",
        a: "At FrameCipher Studio, half-day single-crew coverage is ৳25,000, full-day two-camera coverage with an aftermovie is ৳48,000, and multi-day summit coverage starts from ৳1,25,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "How fast do we get the highlight video after the event?",
        a: "A 60-second social teaser delivers within 24 hours of event close on full-day tiers — standard, not a surcharge. The full cinematic aftermovie follows in 5 to 10 working days.",
      },
      {
        q: "Do you cover multi-day conferences outside Dhaka?",
        a: "Yes. Travel-ready crews cover expos, retreats and summits in Chattogram, Sylhet and Cox’s Bazar, with travel days itemised in the written quote.",
      },
      {
        q: "How do you record clean speech in noisy halls?",
        a: "We take a direct balanced XLR feed from the venue soundboard for master speech, backed by wireless lavaliers on VIPs and shotgun mics for ambience — agreed with the AV desk during the recce.",
      },
      {
        q: "Do we get full session recordings as well as highlights?",
        a: "Yes. Every tier includes full-length recordings of keynotes and panels alongside the teaser and aftermovie, available within 24 hours of wrap.",
      },
      {
        q: "Can you fly a drone at our venue?",
        a: "Where the venue and permissions allow, a licensed drone slot is ৳25,000 and we liaise the permission. Indoor halls and restricted zones use gimbal coverage instead.",
      },
      {
        q: "What is the same-day edit option?",
        a: "An evening-delivery cut for closing ceremonies and press deadlines, at +30%. It is scoped in the coverage plan so an editor is reserved for your night shift.",
      },
      {
        q: "How far ahead should we book event dates?",
        a: "Two to four weeks is ideal for venue recce and AV coordination. Peak conference season and multi-day summits book earlier; tell us the agenda as soon as it firms up.",
      },
      {
        q: "How do we book and pay?",
        a: "Send your date, venue and agenda by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the crew, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },

  // ==========================================
  // CLUSTER C: Story-Led and Personal
  // ==========================================
  {
    slug: 'documentary-production',
    clusterId: 'story-and-personal',
    isParent: true,
    name: 'Documentary Production Services',
    shortTitle: 'Documentary Production',
    seoTitle: 'Documentary Production in Bangladesh | FrameCipher Studio',
    metaDescription:
      'Professional documentary production in Bangladesh. Social impact films, corporate heritage documentaries, and investigative storytelling.',
    h1: 'Documentary Production in Bangladesh',
    eyebrow: 'In-Depth Narrative Storytelling',
    tagline: 'Thoughtful, cinema-grade documentary production that moves audiences and explores complex stories.',
    intro:
      'FrameCipher Studio produces narrative-driven documentary films for development organizations (NGOs), corporate foundations, cultural bodies, and independent storytellers across Bangladesh. We combine in-depth research, empathetic interview directing, and stunning cinematography.',
    detailedDescription:
      'Documentaries demand authentic human emotion balanced with factual rigor. Our production team conducts thorough fieldwork, sensitive interview sessions, and archival research, backed by our Dhaka studio editing and audio mastering suite.',
    highlights: ['Narrative Research & Scripting', 'Empathetic Interview Direction', 'Bilingual English/Bangla Storytelling', 'International Festival Master Exports'],
    benefits: [
      'Complete pre-production research, character identification, and access coordination',
      'High dynamic range (HDR) cinema cameras capturing rich skin tones and landscapes',
      'Studio-based master audio mixing and dialogue restoration',
      'Bilingual subtitling and voiceover localization for international development partners',
    ],
    deliverables: [
      'Full-length documentary film (Short 10-20 min or Feature length)',
      'Teaser and promotional trailer for distribution and festival submissions',
      'Social cutdowns highlighting specific character stories',
    ],
    pricingFactors: ['Fieldwork duration and travel logistics across Bangladesh', 'Archival footage licensing and restoration', 'Original music composition and sound design'],
        faqs: [
      {
        q: "How much does an NGO documentary cost in Bangladesh?",
        a: "At FrameCipher Studio, a 10–12 minute impact short is ৳1,85,000 and a 15–25 minute multi-location standard documentary is ৳3,60,000. Feature and series work is scoped from ৳7,80,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "How long does a short impact documentary take?",
        a: "A 10–12 minute film typically runs 3 to 5 weeks from research sign-off to graded master. Standard multi-location films run 6 to 10 weeks, plus institutional review rounds.",
      },
      {
        q: "Do you handle field shoots in remote districts?",
        a: "Yes. Self-sufficient crews travel with portable cinema cameras, drones, battery banks and weather-sealed audio to riverine, rural and industrial districts across Bangladesh.",
      },
      {
        q: "Do you manage ethical consents and translation?",
        a: "Yes. We secure informed consent from every interviewee and provide accurate translation and subtitling in Bangla, regional dialects and English for donor and broadcast audiences.",
      },
      {
        q: "Can you license and restore archival footage?",
        a: "Yes. Archival research, licensing and restoration are handled as quoted line items, with rights cleared before the edit locks — essential for heritage and compliance stories.",
      },
      {
        q: "What masters and versions do we receive?",
        a: "Festival DCP plus broadcast and web masters, a teaser trailer, social character cutdowns, Bangla and English subtitles and a documented asset register. Additional language versions run ৳25,000–45,000.",
      },
      {
        q: "How do institutional review rounds work?",
        a: "We build a stakeholder review structure for programme, communications and country-director rounds, with timestamped links and structured revision notes so feedback converges instead of cycling.",
      },
      {
        q: "Can you deliver for a donor deadline or summit premiere?",
        a: "Yes. Rush delivery with overtime and parallel-post premiums is quoted upfront. Tell us the premiere date at the brief stage so the schedule is built backwards from it.",
      },
      {
        q: "How do we book and pay?",
        a: "Send your story outline, locations and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance confirms dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'property-videography',
    clusterId: 'story-and-personal',
    name: 'Real Estate & Property Videography',
    shortTitle: 'Property Videography',
    seoTitle: 'Real Estate & Property Videography Dhaka | FrameCipher',
    metaDescription:
      'Real estate videography and luxury property video tours in Dhaka. Showcase residential, commercial, and architectural developments.',
    h1: 'Real Estate & Property Videography in Dhaka',
    eyebrow: 'Architectural & Real Estate Tours',
    tagline: 'Cinematic architectural walk-throughs and luxury property tours that captivate buyers and tenants.',
    intro:
      'FrameCipher Studio produces high-end property videos for real estate developers, interior designers, commercial landlords, and luxury residential projects in Dhaka (Gulshan, Banani, Uttara, Mirpur DOHS, Bashundhara).',
    detailedDescription:
      'Video sells real estate faster than static photos. We utilize ultra-wide cinema lenses, motorized gimbals, calibrated interior lighting, and optional aerial drone footage to highlight spatial flow, luxury finishes, and architectural design.',
    highlights: ['Ultra-Wide Cinema Lenses', 'Smooth Gimbal Walk-Throughs', 'Interior Lighting Balancing', 'Architectural Staging'],
    benefits: [
      'Balanced interior and exterior window exposure without blown-out skies',
      'Smooth, seamless walkthrough flow mimicking an in-person physical tour',
      'Architectural highlight callouts for luxury fittings, smart home features, and materials',
      'Fast turnaround enabling prompt property listings on digital portals',
    ],
    deliverables: [
      'Cinematic Property Tour Video (2 to 3 minutes)',
      'Vertical 9:16 Reels tour for Instagram and Facebook marketplace ads',
      'High-resolution architectural still captures',
    ],
    pricingFactors: ['Property square footage', 'Single residential apartment vs commercial tower', 'Inclusion of host-presented walkthrough'],
        faqs: [
      {
        q: "How much does property videography cost in Dhaka?",
        a: "At FrameCipher Studio, an apartment walkthrough with vertical reels is ৳28,000 per property. A luxury villa film with host and drone is ৳65,000, and commercial tower showcases start from ৳1,30,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "Can our agent present the property on camera?",
        a: "Yes. We mic your agent or developer representative with broadcast wireless audio, direct their delivery on camera, and provide a portable teleprompter on request.",
      },
      {
        q: "Do you fly drones over the property?",
        a: "Yes, with licensed operators where permissions allow — a standalone aerial slot is ৳25,000 and we liaise the permission. Restricted zones use elevated gimbal and rooftop coverage instead.",
      },
      {
        q: "How should we prepare the property before the shoot?",
        a: "Deep-clean, switch on all interior lights, remove personal clutter, draw curtains to shape natural window light, and arrange staging furniture before the crew arrives. You receive our staging checklist at booking.",
      },
      {
        q: "How fast do we get the video for our listing?",
        a: "Tours and reels deliver in 3 to 4 business days after the shoot. An urgent 48-hour listing lane is available at +25% for live portals and campaign launches.",
      },
      {
        q: "Do we get vertical reels and stills as well?",
        a: "Yes. Every tier includes 9:16 vertical reels for Facebook and Instagram ads plus architectural still captures graded to match the film.",
      },
      {
        q: "What suits a developer tower or commercial project?",
        a: "The Commercial Tower tier: multi-day coverage of units, amenities and surroundings with scripted narrative, testimonials, day-dusk-night exteriors, sales-gallery loops and a stills library for brochures.",
      },
      {
        q: "Which areas of Dhaka do you cover?",
        a: "All of Dhaka — Gulshan, Banani, Uttara, Mirpur DOHS, Bashundhara and beyond — plus projects outside the city quoted with travel days. Parking, access and management permissions are confirmed beforehand.",
      },
      {
        q: "How do we book and pay?",
        a: "Send your property address, listing date and goal by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the shoot date, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'wedding-videography',
    clusterId: 'story-and-personal',
    name: 'Wedding Videography & Films',
    shortTitle: 'Wedding Videography',
    seoTitle: 'Wedding Videography in Dhaka | FrameCipher Studio',
    metaDescription:
      'Cinematic wedding videography in Dhaka. Timeless storytelling, multi-camera wedding films, and teaser reels produced with care.',
    h1: 'Wedding Videography in Dhaka',
    eyebrow: 'Cinematic Wedding Films',
    tagline: 'Timeless, emotional wedding storytelling capturing authentic moments and family celebration.',
    intro:
      'FrameCipher Studio offers boutique wedding cinematography in Dhaka. We avoid cliché formulaic recordings in favor of narrative-led wedding films that capture genuine family emotion, cultural traditions, and celebration.',
    detailedDescription:
      'Our team approaches wedding videography with discrete, cinematic observation. We capture intimate vows, candid laughter, emotional family moments, and vibrant celebrations, editing them into heirloom-quality films.',
    highlights: ['Discrete Cinematic Crews', 'Emotional Narrative Pacing', 'Color Graded Like a Feature Film', 'Heirloom Master Delivery'],
    benefits: [
      'Unobtrusive filming ensuring natural, unforced family interactions',
      'High-end low-light cinema cameras excelling in evening banquet lighting',
      'Studio sound mastering and licensing of emotional soundtrack scores',
    ],
    deliverables: ['Wedding Cinema Highlight Film (3 to 7 minutes)', 'Full ceremony documentary edit', 'Social media teaser reel (60 seconds)'],
    pricingFactors: ['Number of event functions (Holud, Mehendi, Wedding, Reception)', 'Number of cinematographers on-site'],
        faqs: [
      {
        q: "How much does wedding videography cost in Dhaka?",
        a: "At FrameCipher Studio, single-event cinema is ৳32,000, a two-event narrative with couple session is ৳68,000, and signature 3–4 event celebrations are ৳1,45,000. Drone adds ৳25,000 and 4K delivery ৳15,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "How far in advance should we book our dates?",
        a: "Book 1 to 3 months ahead, especially for November–February peak weekends. Off-season and weekday dates often confirm faster — message us the moment your venues firm up.",
      },
      {
        q: "What is the difference between cinematic films and traditional coverage?",
        a: "Traditional coverage is a static continuous stage recording. Our cinematic films use narrative structure, candid observation, licensed scoring and feature-grade colour to compress hours of celebration into a story the family replays.",
      },
      {
        q: "When do we receive the teaser and the full film?",
        a: "The 60-second teaser arrives within 7 days of the event. Highlight and ceremony films premiere in 3 to 4 weeks through a private family screening link before any public release.",
      },
      {
        q: "Do you travel for destination weddings?",
        a: "Yes — Sylhet, Chattogram, Cox’s Bazar and international assignments, with travel quoted transparently and the same creative team across all functions for narrative consistency.",
      },
      {
        q: "Can you fly a drone at our venue?",
        a: "Where the venue and permissions allow, drone aerials of the venue and baraat are included on signature tiers or added for ৳25,000. We liaise the permission in advance.",
      },
      {
        q: "Will the crew direct us and our family?",
        a: "Candid first, guided only for portraits. Our contractual discretion keeps filming unobtrusive — natural interactions, never forced performances — with direction limited to couple sessions and group portraits.",
      },
      {
        q: "How many revisions are included?",
        a: "Structured revision rounds are included in every tier and reviewed through timestamped links. Two-event and signature tiers add a priority edit lane so feedback converges before the premiere.",
      },
      {
        q: "Do we get the raw footage?",
        a: "Yes. Raw captures are available within 24 hours on request, and full ceremony documentary edits are standard deliverables on every tier.",
      },
      {
        q: "How do we book and pay?",
        a: "Send your dates, venues and functions by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance secures your dates, the balance is due on final delivery, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'family-video-productions',
    clusterId: 'story-and-personal',
    name: 'Family Video Production & Milestone Films',
    shortTitle: 'Family Video',
    seoTitle: 'Family Video Production in Dhaka | FrameCipher Studio',
    metaDescription:
      'Bespoke family milestone films and legacy video productions in Dhaka. Celebrate anniversaries, family heritage, and generational stories.',
    h1: 'Family Video Production in Dhaka',
    eyebrow: 'Heritage, Milestones & Generational Stories',
    tagline: 'Preserving family legacies and milestone celebrations in beautifully crafted documentary films.',
    intro:
      'FrameCipher Studio crafts bespoke family legacy videos, golden anniversary celebrations, and generational biography documentaries in Dhaka. We help families preserve elders’ voices, historic memories, and family heritage in heirloom videos.',
    detailedDescription:
      'Elders hold stories that risk being forgotten. In our comfortable, quiet studio or at home, we conduct respectful, comfortable interviews with parents and grandparents, weaving family photographs, home videos, and reflections into a lasting legacy.',
    highlights: ['Respectful, Comfortable Environment', 'Historical Photo Scanning & Integration', 'Family Legacy Archival Quality'],
    benefits: [
      'Gentle interview pacing allowing elders to speak at their own comfort',
      'High-resolution digitizing and color restoration of vintage family photos',
      'Private cloud archive and custom engraved USB presentation box',
    ],
    deliverables: ['Generational Legacy Film (15 to 30 minutes)', 'Digital archive of all unedited interview memories'],
    pricingFactors: ['Number of family members interviewed', 'Archival photograph restoration volume'],
        faqs: [
      {
        q: "How much does a family legacy film cost in Dhaka?",
        a: "At FrameCipher Studio, a milestone film is ৳35,000, a multi-session legacy documentary is ৳75,000, and a full heritage archive is ৳1,40,000. Extra restoration batches are ৳8,000 per 50 photographs. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "Can interviews happen at our family home?",
        a: "Yes. We bring portable softbox lighting, acoustic blankets and quiet audio gear to your residence anywhere in Dhaka, so elders stay relaxed in familiar surroundings. Studio sessions at ECB Chattar are available for controlled quiet.",
      },
      {
        q: "Which milestones do family films usually cover?",
        a: "Golden anniversaries, 70th and 80th birthdays, generational business biographies, wedding story chapters and memorial tribute archives celebrating elders’ lives.",
      },
      {
        q: "How do you handle camera-shy elders and children?",
        a: "With conversational interviews, not interrogation. Our director chats casually at the elder’s pace with breaks whenever needed, so stories unfold naturally and with dignity.",
      },
      {
        q: "Can you restore old photos, VHS tapes and documents?",
        a: "Yes. High-resolution scanning with dust cleanup and colour restoration for vintage photographs, plus VHS and document digitisation — woven into the film alongside the interviews.",
      },
      {
        q: "Do you offer Bangla and English versions?",
        a: "Yes. Bilingual narration options are standard on heritage tiers, so grandchildren abroad and elders at home each hear the story in their language.",
      },
      {
        q: "How long does a family film take?",
        a: "Delivery runs 5 to 10 working days after the final session. Legacy and heritage tiers with heavy restoration follow the schedule in your written quote.",
      },
      {
        q: "Can each sibling get a copy?",
        a: "Yes. Heirloom box sets include copies for the family, and additional engraved USB sets are ৳3,500 each — planned at the brief stage so every household receives one.",
      },
      {
        q: "How do we book and pay?",
        a: "Send your milestone, elders and timeline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance confirms sessions, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },

  // ==========================================
  // CLUSTER D: Post-Production and Audio
  // ==========================================
  {
    slug: 'post-production',
    clusterId: 'post-production-audio',
    isParent: true,
    name: 'Post-Production Services & Finishing Suite',
    shortTitle: 'Post-Production',
    seoTitle: 'Post-Production Services in Dhaka | FrameCipher Studio',
    metaDescription:
      'Complete post-production services in Dhaka. Video editing, DaVinci Resolve color grading, audio restoration, subtitles, and visual effects.',
    h1: 'Post-Production Services in Dhaka',
    eyebrow: 'Finishing, Grading & Sound Suite',
    tagline: 'Where raw footage transforms into polished, broadcast-ready visual media through world-class post-production craftsmanship.',
    intro:
      'FrameCipher Studio operates a dedicated post-production facility in Dhaka, providing high-end video editing, DaVinci Resolve color grading, sound engineering, dialogue cleanup, and motion graphics for brands, production houses, and independent directors.',
    detailedDescription:
      'Filming captures the raw elements; post-production creates the movie. Our post-production workflow connects narrative assembly, color timing, speech denoising, sound design, and localized subtitling into a seamless, reliable finishing pipeline.',
    highlights: ['Calibrated Color Grading Monitors', 'DaVinci Resolve Studio Workflow', 'Dialogue Isolation & De-Reverb', 'Multi-Format Export Pipelines'],
    benefits: [
      'Narrative pacing that holds viewer attention and eliminates dead air',
      'Industry-standard DaVinci Resolve color management matching cinema gamuts',
      'Advanced speech audio cleanup removing hum, room echo, and background hiss',
      'Motion graphics, lower thirds, logo reveals, and animated typography',
      'Secure high-speed cloud review links with timestamped revision commenting',
    ],
    deliverables: [
      'Master ProRes 422 HQ / high-bitrate MP4 video files',
      'Multi-channel audio stems (Dialogue, Music, Sound Effects)',
      'SRT / VTT closed caption subtitle files',
    ],
    pricingFactors: ['Total raw footage runtime', 'Complexity of color grading and shot matching', 'Visual effects, rotoscoping, or cleanup requirements'],
        faqs: [
      {
        q: "How much does post-production cost in Dhaka?",
        a: "At FrameCipher Studio, an Essential Finish up to 5 minutes is ৳12,000. A Commercial Grade up to 10 minutes with cinematic colour and sound design is ৳45,000, and feature or series finishing starts from ৳1,25,000 on a scoped quote. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "Can you finish footage filmed outside your studio?",
        a: "Yes. Most post-production work starts from external footage. Deliver camera originals on a portable SSD at ECB Chattar or by Google Drive or Dropbox link, and we verify every file with checksums before the first cut.",
      },
      {
        q: "What file formats and LOG profiles do you grade?",
        a: "We grade all major camera profiles in DaVinci Resolve Studio: Sony S-Log3 and S-Gamut3.Cine, Canon C-Log2 and C-Log3, ARRI LogC, Blackmagic RAW, REDCODE RAW and Apple ProRes, on colour-calibrated monitors.",
      },
      {
        q: "What pushes a quote from ৳12,000 toward ৳45,000?",
        a: "Longer runtime and more raw footage to conform, multi-camera sync, LOG rescue work, motion graphics and VFX cleanup, more aspect ratios and subtitle languages, extra revision rounds and priority turnaround.",
      },
      {
        q: "How do we review cuts and leave feedback?",
        a: "We share secure timestamped cloud review links where your team comments frame-accurately on the player. Full scopes include 2 structured revision rounds; Essential Finish includes 1.",
      },
      {
        q: "What sound work is included?",
        a: "Dialogue cleanup with spectral de-noise, de-reverb and de-click, EQ and compression, plus sound-effect design, music beds and loudness compliance on Commercial Grade and above. Finished stems (dialogue, music, effects) ship with Feature Finish.",
      },
      {
        q: "Do you add Bangla and English subtitles?",
        a: "Yes. Timed SRT and VTT subtitle files in Bangla or English are included in every tier, synced to the locked cut.",
      },
      {
        q: "How fast can you deliver?",
        a: "Standard finishing delivers in 5–10 working days from verified intake. Express 48–72 hour finishing adds 30%, and raw or proxy files are available within 24 hours.",
      },
      {
        q: "What happens to our files after delivery?",
        a: "Finished masters are archived for 60 days with free re-exports to new aspect ratios. Feature Finish adds archive-grade uncompressed preservation copies.",
      },
      {
        q: "How do we book and pay?",
        a: "Send your footage details, goal and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the finishing slot, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'video-editing',
    clusterId: 'post-production-audio',
    name: 'Professional Video Editing Services',
    shortTitle: 'Video Editing',
    seoTitle: 'Video Editing Services in Dhaka | FrameCipher Studio',
    metaDescription:
      'Professional video editing in Dhaka. YouTube editing, commercial cuts, audio cleanup, DaVinci color grading, and vertical social cutdowns.',
    h1: 'Video Editing Services in Dhaka',
    eyebrow: 'Narrative, YouTube & Commercial Cuts',
    tagline: 'High-retention video editing that transforms raw footage into compelling, platform-optimized content.',
    intro:
      'FrameCipher Studio provides professional video editing services in Dhaka for YouTube creators, marketing agencies, B2B enterprises, and brands. We specialize in dynamic pacing, seamless narrative flow, and high-impact visual hooks.',
    detailedDescription:
      'Whether you have a 2-hour podcast interview or multi-angle commercial footage, our editors eliminate fluff, synchronize multiple cameras and audio tracks, insert relevant B-roll, and craft a tight narrative that holds viewer retention from start to finish.',
    highlights: ['Multi-Camera Syncing', 'Retention Pacing & B-Roll Insertion', 'Kinetic Typography & Lower Thirds', '2 Structured Revision Rounds'],
    benefits: [
      'Pacing customized to platform norms (rapid for YouTube/TikTok, measured for corporate)',
      'Audio leveling ensuring dialogue is crisp and background music never overpowers speech',
      'Dynamic zooms, transitions, and graphic callouts that emphasize key points',
      'Export presets optimized for YouTube, Instagram, LinkedIn, and Facebook',
    ],
    deliverables: ['Finished Master Video (16:9 Landscape)', 'Short Social Media Cutdowns (9:16 Vertical)', 'Clean dialogue audio master'],
    pricingFactors: ['Raw footage length', 'Editing style (Simple cut vs complex YouTube jump-cuts and memes)', 'Turnaround schedule'],
        faqs: [
      {
        q: "How much does video editing cost in Dhaka?",
        a: "At FrameCipher Studio, a Shorts Pack of 5 captioned verticals is ৳9,500. A Creator Edit up to 15 minutes with grade and 2 cutdowns is ৳22,000, and a Studio Suite up to 30 minutes with a motion package is ৳48,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "Can you edit footage we filmed ourselves?",
        a: "Yes. Most edits start from external footage. Deliver camera originals on a portable SSD at ECB Chattar or by Google Drive or Dropbox link with full-resolution files, and we verify every clip before cutting.",
      },
      {
        q: "What pushes a quote from ৳9,500 toward ৳48,000?",
        a: "Longer runtime and more raw footage to ingest, multi-camera sync, LOG rescue and audio repair, motion graphics and caption packaging, more cutdowns and aspect ratios, and priority turnaround.",
      },
      {
        q: "Can you cut long videos into vertical shorts?",
        a: "Yes. We ingest 1–2 hour podcasts or webinars and extract hook-first 9:16 cutdowns with kinetic subtitles, zoom cuts and sound effects for Reels, TikTok and YouTube Shorts.",
      },
      {
        q: "Is the background music copyright-safe?",
        a: "Yes. All tracks, risers and sound effects are commercially licensed, so your video carries zero copyright-strike risk on YouTube, Facebook or Instagram.",
      },
      {
        q: "How do revisions work?",
        a: "Every project includes 2 structured revision rounds through timestamped cloud review links, so stakeholders comment frame-accurately instead of over chat screenshots.",
      },
      {
        q: "How fast can you deliver?",
        a: "Standard edits deliver in 3–5 working days from verified intake. Express 48-hour delivery is available at a 30% priority fee, and proxy previews are available within 24 hours.",
      },
      {
        q: "Do you add Bangla and English captions?",
        a: "Yes. Kinetic captions plus SRT caption files in Bangla or English are included in every tier, timed to the locked cut.",
      },
      {
        q: "What happens to our files after delivery?",
        a: "Finished masters are archived for 60 days with free re-exports to new aspect ratios, so later platform versions do not need a re-edit from scratch.",
      },
      {
        q: "How do we book and pay?",
        a: "Send your footage details, target runtime and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the edit slot, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'voice-over',
    clusterId: 'post-production-audio',
    name: 'Voice Over Recording & Sound Studio',
    shortTitle: 'Voice Over Studio',
    seoTitle: 'Voice Over Studio in Dhaka | FrameCipher Studio',
    metaDescription:
      'Voice over studio in Dhaka. Professional Bangla and English voiceover recording, commercial narration, and IVR voice recording at ECB Chattar.',
    h1: 'Voice Over Studio in Dhaka',
    eyebrow: 'Bangla & English Voiceover Recording',
    tagline: 'Crystal-clear voiceover recording in an acoustically isolated vocal booth with broadcast microphones.',
    intro:
      'FrameCipher Studio operates a dedicated vocal recording environment at Matikata ECB Chattar, Dhaka. We provide voiceover recording for commercials, explainer videos, e-learning courses, documentary narration, corporate presentations, and IVR telephone systems.',
    detailedDescription:
      'Professional voiceovers require total room silence, zero reverberation, and high-sensitivity studio condenser microphones. Our vocal recording setup eliminates room reflections and provides real-time headphone monitoring for voice artists and directors.',
    highlights: ['Acoustic Vocal Isolation Booth', 'Broadcast Condenser Microphones', 'Bilingual Bangla & English Talent', 'De-Essed, Leveled Master Audio'],
    benefits: [
      'Pristine acoustic isolation shielding recordings from exterior street horns',
      'Top-tier studio microphones capturing warm, detailed vocal nuances',
      'Real-time remote director monitoring over high-speed internet',
      'Post-recording vocal processing: de-breathing, de-essing, EQ, and compression',
    ],
    deliverables: ['Uncompressed 24-bit 48kHz WAV audio files', 'Fully processed, broadcast-ready voiceover master', 'Raw, unprocessed vocal tracks if requested'],
    pricingFactors: ['Script word count and recording duration', 'Inclusion of voice artist talent vs studio rental with your own artist', 'Commercial usage rights'],
        faqs: [
      {
        q: "How much does voice over recording cost in Dhaka?",
        a: "At FrameCipher Studio, a Short Read up to 2 minutes is ৳4,500. A Commercial VO with direction, timing to picture and usage rights is ৳9,500, and series or course narration runs ৳28,000 per 60 minutes. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "Do you have native Bangla and English voice artists?",
        a: "Yes. The roster covers male and female voices in shuddho Bangla, conversational Bangla, neutral English and British or American accent options, matched to your script before the session.",
      },
      {
        q: "Can we direct the talent live during recording?",
        a: "Yes. Direct in person from our studio lounge or remotely over Zoom or Google Meet, giving inflection and pacing guidance while the talent performs.",
      },
      {
        q: "What pushes a quote from ৳4,500 toward ৳9,500?",
        a: "Longer scripts, higher-profile talent, commercial broadcast usage rights, bilingual delivery, timing and sync to locked picture, and priority turnaround.",
      },
      {
        q: "What should we send before the session?",
        a: "The final script as editable text with pronunciations for brand names and technical terms marked, tone references, and — for sync work — the locked video with timecodes.",
      },
      {
        q: "Are recordings delivered broadcast-ready?",
        a: "Yes. Masters are 24-bit 48kHz WAV files with de-breathing, de-essing, EQ, compression and loudness matching. Raw unprocessed tracks are available on request.",
      },
      {
        q: "Can the narration be synced to our video?",
        a: "Yes. Commercial VO includes timing the performance to your locked picture, and we can deliver a finished synced video track alongside the audio masters.",
      },
      {
        q: "How fast can you deliver?",
        a: "Short reads deliver in 24–48 hours from script confirmation. Commercial VO follows your picture-lock schedule, and series narration runs on agreed multi-session calendars. Priority lanes add 30%.",
      },
      {
        q: "What if a line needs re-recording?",
        a: "Pickup and correction windows are included on full scopes, re-recorded in the same booth setup so replacement lines match seamlessly. Masters are archived for 60 days.",
      },
      {
        q: "How do we book and pay?",
        a: "Send your script, language and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the session, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'green-screen-video',
    clusterId: 'post-production-audio',
    name: 'Green Screen Studio & Chroma Keying',
    shortTitle: 'Green Screen Studio',
    seoTitle: 'Green Screen Studio in Dhaka | FrameCipher Studio',
    metaDescription:
      'Green screen studio rental in Dhaka. Evenly lit chroma key green background, virtual set production, and keying services at Matikata ECB Chattar.',
    h1: 'Green Screen Studio in Dhaka',
    eyebrow: 'Chroma Key & Virtual Set Production',
    tagline: 'Evenly lit chroma green studio space for virtual sets, visual effects, and educational presentations.',
    intro:
      'FrameCipher Studio offers an in-house green screen studio facility in Dhaka. Equipped with continuous overhead diffused lighting that illuminates our seamless chroma green backdrop with zero hot spots or dark shadows, ensuring clean, artifact-free digital keying.',
    detailedDescription:
      'A bad green screen with uneven lighting produces green spill on subjects and ragged edges in post-production. Our studio is pre-lit with calibrated softboxes specifically tuned for green screen extraction, allowing subjects to step in front of any digital background.',
    highlights: ['Evenly Lit Seamless Chroma Green', 'Zero Hot-Spot Diffused Grid', 'In-House Keying & Compositing', 'Virtual News & E-Learning Sets'],
    benefits: [
      'Pre-calibrated lighting eliminating frustrating green fringe on hair and clothing',
      'Sufficient depth allowing subject separation from the green backdrop',
      'High-speed fiber connectivity for live chroma keying during webinars and live streams',
      'Complete post-production compositing into 3D virtual environments or branded graphics',
    ],
    deliverables: ['High-bitrate green screen raw footage with flat color profile', 'Keyed transparent background video files (ProRes 4444)', 'Finished composite video with chosen digital backgrounds'],
    pricingFactors: ['Studio reservation hours', 'Space-only rental vs in-house keying and compositing', 'Camera operator and audio engineer assistance'],
        faqs: [
      {
        q: "How much does green screen studio time cost in Dhaka?",
        a: "At FrameCipher Studio, an operated Chroma Session is ৳3,500 per hour with a 2-hour minimum. A Virtual Half-Day with compositing is ৳19,000, and a full VFX Production Day with 3D environments is ৳39,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "What should presenters avoid wearing on green screen?",
        a: "Avoid green clothing and accessories, reflective jewellery, shiny silk fabrics and thin green-tinted glasses. Bring wardrobe options — we check each outfit against spill risk on the live key monitors before recording.",
      },
      {
        q: "Do you provide virtual backgrounds and 3D sets?",
        a: "Yes. We design and composite newsrooms, classrooms, corporate stages and branded abstract environments in your style, plus slide and screen-capture compositing for training content.",
      },
      {
        q: "What pushes a quote from ৳19,000 toward ৳39,000?",
        a: "More stage hours and presenters, custom 3D set design, multi-subject and moving-camera keys, camera tracking, rotoscoping for difficult edges, and priority turnaround.",
      },
      {
        q: "How do you prevent green spill on hair and shoulders?",
        a: "The wall is lit by a balanced overhead grid while dedicated rim and backlights on the subject cancel green reflections. Correct wall distance is blocked before the first take, and spill suppression finishes the job in post.",
      },
      {
        q: "Can we see the keyed background while recording?",
        a: "Yes. The hardware keyer shows the live composite on floor monitors, so presenters point, frame and perform against the actual background rather than guessing.",
      },
      {
        q: "Do we get the raw footage or only the finished composite?",
        a: "Both. You receive flat-profile 4K raw footage for your own editors, transparent-background ProRes 4444 files, and finished composites with your sets and graphics.",
      },
      {
        q: "How fast can you deliver?",
        a: "Raw keyable footage hands over the same day. Finished composites deliver in 5–7 working days. Express 48–72 hour compositing adds 30%.",
      },
      {
        q: "How many revisions are included?",
        a: "Full scopes include 2 structured revision rounds through timestamped cloud review links. Masters are archived for 60 days with free re-exports to new aspect ratios.",
      },
      {
        q: "How do we book and pay?",
        a: "Send your script, background needs and date by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the stage, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },

  // ==========================================
  // CLUSTER E: Studio Access (From Landing Page)
  // ==========================================
  {
    slug: 'podcast',
    clusterId: 'studio-access',
    isParent: true,
    name: 'Podcast Recording Studio & Production',
    shortTitle: 'Podcast Studio',
    seoTitle: 'Podcast Studio in Dhaka | FrameCipher Studio',
    metaDescription:
      'Book our sound-treated podcast recording studio in Dhaka. Multi-mic broadcast audio, 4K multi-camera video, and social cutdowns at Matikata ECB Chattar.',
    h1: 'Podcast Studio in Dhaka',
    eyebrow: 'Acoustic Audio & 4K Video Podcasts',
    tagline: 'Acoustically soundproofed, multi-camera podcast recording for creators, brands and executives in Dhaka.',
    intro:
      'FrameCipher Studio offers a dedicated, acoustically controlled podcast recording space at Matikata ECB Chattar, Dhaka. Whether you are hosting founder conversations, corporate discussions, or YouTube talk shows, our studio provides broadcast-quality audio isolation, 4K multi-angle video switching, and professional post-production cutdowns.',
    detailedDescription:
      'Great podcasts depend on pristine audio and engaging video framing. Our podcast studio features acoustic wall treatment, broadcast dynamic microphones that reject room reverberation, multi-angle 4K cameras, and a comfortable recording table designed for natural conversations.',
    highlights: ['Broadcast Dynamic Microphones', '4K Multi-Camera Angles', 'Acoustic Wall Soundproofing', 'Short Reels & Shorts Cutdowns'],
    targetAudience: [
      'Podcasters, interviewers, and conversational talk show hosts',
      'Entrepreneurs and founders building industry thought leadership',
      'Corporate communication teams recording executive discussions',
      'Tech creators and educational publishers producing YouTube shows',
    ],
    benefits: [
      'Sound-treated acoustic room eliminating Dhaka street horns and background hum',
      'Multi-microphone setup with broadcast Shure/Rode dynamics',
      'Multi-camera 4K capture composed for YouTube video podcasts',
      'Real-time sound engineering and audio level monitoring throughout the session',
      'Short-form vertical clips (9:16) with kinetic subtitles for Reels, TikTok & Shorts',
      'Flexible hourly sessions or recurring weekly show retainers',
    ],
    deliverables: [
      'Master mixed & mastered audio files (WAV & MP3)',
      'Multi-camera switched 4K master video (16:9)',
      'Isolated raw audio tracks for each individual speaker',
      'Hook-driven vertical short clips with kinetic subtitles',
      'Episode thumbnails and audiogram snippets upon request',
    ],
    pricingFactors: [
      'Number of active speakers (1 to 4 microphones)',
      'Session length (2 hours, half-day, or full-day)',
      'Video requirements (audio-only vs multi-camera 4K)',
      'Editing scope (raw capture vs full multi-cam edit & social reels)',
    ],
        faqs: [
      {
        q: "How much does podcast recording cost in Dhaka?",
        a: "At FrameCipher Studio, an audio session with mastering is ৳8,000. A 3-camera 4K video session is ৳18,000, and a full record-to-published episode with edit, grade, subtitles and 3 vertical clips is ৳35,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "How many people can record at the same time?",
        a: "Up to 4 speakers on discrete broadcast microphones, each tracked to an isolated channel. For larger panels or remote guests over Zoom or Riverside, we configure dedicated remote feeds.",
      },
      {
        q: "What pushes a quote from ৳8,000 toward ৳35,000?",
        a: "More speakers, 4K video instead of audio-only, longer sessions, full editing with grading, subtitle authoring, thumbnail packaging and the number of vertical cutdowns per episode.",
      },
      {
        q: "What is included in the audio session?",
        a: "Up to 2 hours of studio time, 4 broadcast dynamic microphones, engineer-monitored levels, multi-track 24-bit WAV stems, loudness mastering, raw handover same day and mastered files in 48 hours.",
      },
      {
        q: "Do you edit the episode and cut vertical clips?",
        a: "Yes. The Full Production Suite includes a complete multicam edit, colour grade, audio sweetening, Bangla and English subtitles, 3 captioned vertical clips and thumbnail plus metadata packaging.",
      },
      {
        q: "Can I get the raw audio and video files immediately?",
        a: "Yes. At the end of your session we transfer all WAV stems and 4K angles to your drive, or upload them to a secure cloud drive within hours.",
      },
      {
        q: "What audio and video formats do I receive?",
        a: "Isolated 24-bit WAV stems, a loudness-mastered MP3 for RSS feeds, a 4K 16:9 YouTube master and 1080x1920 vertical cutdowns with captions.",
      },
      {
        q: "How many revisions are included?",
        a: "Full Production episodes include 2 structured revision rounds through a timestamped cloud review link. Audio sessions include mastering corrections against the brief.",
      },
      {
        q: "How fast can you deliver?",
        a: "Raw files go the same day and mastered audio in 48 hours. Full Production episodes deliver in 3 to 5 business days. Express 48-hour turnaround adds 30%.",
      },
      {
        q: "Do you offer retainers for weekly shows?",
        a: "Yes. Weekly shows can reserve a monthly retainer from ৳1,20,000 for 4 episodes, with standing studio slots and the same crew learning your show format.",
      },
      {
        q: "How do I book and pay?",
        a: "Send your date, speaker count and format by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'product-photography',
    clusterId: 'studio-access',
    isParent: true,
    name: 'Commercial Product Photography Studio',
    shortTitle: 'Product Photography',
    seoTitle: 'Product Photography Studio in Dhaka | FrameCipher Studio',
    metaDescription:
      'Commercial product photography in Dhaka. White background, creative staging, and lifestyle shoots for Daraz, Shopify, and social commerce at ECB Chattar.',
    h1: 'Product Photography Studio in Dhaka',
    eyebrow: 'E-commerce, Catalogue & Advertising Visuals',
    tagline: 'High-definition studio product photography that highlights texture, form, and brand value.',
    intro:
      'Elevate your digital storefront with crisp, studio-calibrated product photography in Dhaka. FrameCipher Studio provides white-background e-commerce catalog photos, creative lifestyle staging, and macro product spotlights formatted for Daraz, Shopify, Amazon, and social media campaigns.',
    detailedDescription:
      'High-converting product photos require precise reflection control, accurate color fidelity, and texture definition. Our studio features continuous diffuse lighting, specialized tabletop staging, and high-resolution sensors capturing intricate details.',
    highlights: ['Pure White E-Commerce Standards', 'Creative Lifestyle Staging', 'Accurate Color & Reflection Control', 'Macro Texture Detailing'],
    targetAudience: [
      'Daraz, Shopify, and WooCommerce online retail brands',
      'Fashion, footwear, and apparel designers',
      'Cosmetics, skincare, and beauty product manufacturers',
      'Electronics, gadget, and lifestyle hardware importers',
    ],
    benefits: [
      'Controlled studio lighting eliminating unwanted reflections and glare',
      'Clean pure-white and neutral grey backgrounds per marketplace standards',
      'Creative tabletop styling for cosmetics, electronics, apparel, and food',
      'High-resolution macro detail shots capturing product textures and labels',
      'Retouching: color correction, dust cleanup, and background clipping',
      'Fast turnaround for high-volume seasonal inventory batches',
    ],
    deliverables: [
      'High-resolution print and web-ready JPEG / PNG images',
      'Transparent background PNG cuts for design flexibility',
      'Square (1:1) and vertical (4:5) social media ad formats',
      '360-degree multi-angle product coverage sets',
    ],
    pricingFactors: [
      'Total SKU / product quantity to be photographed',
      'Styling complexity (Simple tabletop vs styled lifestyle props)',
      'Product material (Reflective glass/jewelry vs matte textiles)',
      'Advanced retouching or compositing requirements',
    ],
        faqs: [
      {
        q: "How much does product photography cost in Dhaka?",
        a: "At FrameCipher Studio, catalogue stills are ৳1,500 per product with 3 retouched angles (5-product minimum, ৳7,500 set). A half-day bank of around 10 products is ৳14,000, and a lifestyle plus model campaign day is ৳34,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "Are your photos compliant with Daraz and Shopify requirements?",
        a: "Yes. We deliver pure-white RGB 255 backgrounds cropped to exact marketplace ratios, with square and vertical ad formats included on catalogue tiers.",
      },
      {
        q: "How many photos do we receive per product?",
        a: "Three retouched angles per product as standard — front, 45-degree and detail macro — with extra retouched angles at ৳300 each. Custom shot lists are confirmed in writing before the shoot.",
      },
      {
        q: "What pushes a quote from ৳7,500 toward ৳34,000?",
        a: "More products and angles, styled lifestyle scenes instead of white backgrounds, hand and face models, props and art direction, macro and jewellery labour, and product reel add-ons.",
      },
      {
        q: "Can we ship or drop off products at your studio?",
        a: "Yes. Drop off or courier inventory samples to our 6th-floor studio at Eurasia Building, Matikata ECB Chattar. We confirm the shot list against the physical samples on arrival.",
      },
      {
        q: "Can you shoot lifestyle photos with models alongside catalogue shots?",
        a: "Yes. The Lifestyle + Model Day combines white-background catalogue coverage with styled tabletop scenes and hand or face model demonstrations for cosmetics, jewellery and gadgets.",
      },
      {
        q: "Do you provide transparent PNG cutouts?",
        a: "Yes. Transparent-background PNG cuts are included in the Half-Day Bank and available on other tiers, alongside 360-degree multi-angle coverage sets.",
      },
      {
        q: "What is the product reel add-on?",
        a: "A short motion spotlight cut from the same styled setup at ৳2,500 per product — catalogue stills plus a reel formatted for Reels, Shorts and TikTok.",
      },
      {
        q: "How fast can you deliver?",
        a: "Raw captures hand over the same day and retouched sets deliver in 3 to 4 business days. Express 48-hour retouching adds 30%.",
      },
      {
        q: "How many revisions are included?",
        a: "Catalogue tiers include structured revision rounds against the agreed shot list through a cloud gallery, with 60-day archiving and free re-exports to new ratios.",
      },
      {
        q: "How do I book and pay?",
        a: "Send your product count, angles and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'rental',
    clusterId: 'studio-access',
    isParent: true,
    name: 'Studio Space Rental in Dhaka',
    shortTitle: 'Studio Rental',
    seoTitle: 'Studio Rental in Dhaka | FrameCipher Studio',
    metaDescription:
      'Rent an acoustically sound-isolated production studio in Dhaka. Ceiling lighting grid, green screen, multi-color backdrops, and power backup at ECB Chattar.',
    h1: 'Studio Rental in Dhaka',
    eyebrow: 'Hourly & Daily Shooting Space',
    tagline: 'Sound-isolated studio room with lighting grid for independent crews, agencies, and photographers.',
    intro:
      'Need a quiet, controlled production space in Dhaka with your own crew? FrameCipher Studio offers hourly, half-day, and full-day studio rental at Eurasia Building, Matikata ECB Chattar. Features continuous ceiling lighting grids, multi-color seamless paper backdrops, green screen, styling lounge, and full power backups.',
    detailedDescription:
      'Finding a quiet studio in Dhaka with reliable power and overhead lighting is difficult. Our facility provides dedicated elevator access to the 6th floor, heavy acoustic insulation shielding from street traffic, continuous motorized lighting softboxes, and emergency generator power backup.',
    highlights: ['Acoustic Soundproofing', 'Overhead Lighting Grid Installed', 'Seamless Paper Backdrops', 'Generator & IPS Power Backup'],
    targetAudience: [
      'Independent videographers, cinematographers, and photographers with their own gear',
      'Advertising and digital marketing agencies needing a production stage in Dhaka',
      'YouTube creators and remote teams requiring a clean, quiet shooting location',
    ],
    benefits: [
      'Sound-isolated room minimizing exterior Dhaka traffic noise',
      'Overhead ceiling lighting grid with motorized dimming softboxes',
      'Seamless paper backdrops: Pure White, Black, Neutral Grey, Chroma Green',
      'High-speed fiber internet for live streaming and real-time remote monitoring',
      'Client lounge, makeup vanity mirror, and wardrobe changing area',
      'Elevator access to 6th floor with generator & IPS backup power',
    ],
    deliverables: [
      'Reserved private studio space for agreed booking duration',
      'Access to baseline continuous studio lighting infrastructure',
      'Backdrop selection prepared and rigged before arrival',
      'Studio assistant on-site to help with power and facilities',
    ],
    pricingFactors: [
      'Duration (Hourly rate, Half-day 4 hours, or Full-day 8 hours)',
      'Need for additional specialized lighting or camera rentals',
      'Studio assistant vs full camera operator / sound engineer add-on',
      'Peak weekend vs weekday booking schedules',
    ],
        faqs: [
      {
        q: "How much does studio rental cost in Dhaka?",
        a: "At FrameCipher Studio, room-only hire with your own gear is ৳2,000/hour and operated sessions with our camera and operator are ৳2,500/hour, both with a 2-hour minimum. Half-day exclusive blocks are ৳12,000 and full-day lockouts are ৳22,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "What is included in the room-only hire fee?",
        a: "Private stage access, the overhead softbox grid, your choice of pre-rigged backdrop, generator plus IPS power backup, fibre Wi-Fi, makeup vanity, changing area, client lounge, parking access and an on-site assistant.",
      },
      {
        q: "What pushes a booking from ৳2,000/hour toward a full-day lockout?",
        a: "Operated camera and crew instead of room-only, more hours, backdrop and green-screen changes, teleprompter and monitoring needs, streaming encoder use and overtime past wrap.",
      },
      {
        q: "Can we bring our own cameras, lighting and crew?",
        a: "Yes. Room-only hire is built for outside crews — bring cameras, audio and fixtures, and we provide the isolated stage, grid positions, power distribution and assistant support.",
      },
      {
        q: "Does rental include an on-site technician?",
        a: "Yes. A studio assistant is on-site for every booking to position the grid, change backdrops, manage power outlets and keep the facilities running.",
      },
      {
        q: "Do you offer green screen and live streaming setups?",
        a: "Yes. The green screen configuration comes with an even wash for clean keys, and the stage has encoder access with fibre internet for live or simulive broadcasts to YouTube and Facebook.",
      },
      {
        q: "Where can our crew park at ECB Chattar?",
        a: "Dedicated vehicle parking is available beside Eurasia Building near Khan Polli Jame Masjid, with elevator access directly to the 6th-floor stage.",
      },
      {
        q: "Can we visit the stage before booking?",
        a: "Yes. Message us on WhatsApp at +880 1768-146650 to schedule a walkthrough — clap-test the acoustics, inspect the grid and power, and confirm the backdrop before you commit.",
      },
      {
        q: "How do half-day and full-day blocks compare to hourly billing?",
        a: "Four or more hours usually favour the ৳12,000 half-day block, and full shoot days favour the ৳22,000 lockout. We price both against your hour count so you can compare in writing.",
      },
      {
        q: "How do I book and pay?",
        a: "Send your date, hours and backdrop by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },

  // ==========================================
  // TRUST & LOCAL LAYER
  // ==========================================
  {
    slug: 'portfolio',
    clusterId: 'trust-and-local',
    name: 'Studio Production Portfolio',
    shortTitle: 'Portfolio',
    seoTitle: 'Studio Production Portfolio Dhaka | FrameCipher Studio',
    metaDescription:
      'Explore recent podcast sessions, corporate films, product shoots, and commercials produced at FrameCipher Studio in Dhaka.',
    h1: 'Studio Production Portfolio in Dhaka',
    eyebrow: 'Real Work. Real Clients.',
    tagline: 'Evidence of our production craftsmanship across video, podcasting, commercial photography, and editing.',
    intro:
      'Browse our completed studio work. FrameCipher Studio has produced podcasts, corporate films, e-commerce product catalogs, and commercial campaigns for businesses and creators across Bangladesh.',
    detailedDescription:
      'We let our finished deliverables demonstrate the quality of our studio. Explore real projects filmed on our 6th-floor stage at Matikata ECB Chattar, showcasing our lighting, acoustic isolation, and color grading.',
    highlights: ['Commercial Projects', 'Podcast Episodes', 'Product Catalogues', 'Color Grading Reels'],
    benefits: ['Real production examples across diverse industries', 'Verified client deliverables and case studies', 'Direct links from portfolio pieces to relevant services'],
    deliverables: ['Commercial case studies and high-definition video archives'],
    pricingFactors: ['Custom scopes based on demonstrated project tiers'],
        faqs: [
      {
        q: "What did the portfolio pieces actually cost to produce?",
        a: "Starter productions sit at ৳25,000–80,000, signature work at ৳1,00,000–3,00,000, and flagship campaigns above ৳5,00,000. Ask for the band behind any reel and we attach the scope that produced it.",
      },
      {
        q: "Can we see raw versus colour-graded comparisons?",
        a: "Yes. We share DaVinci Resolve before-and-after reels demonstrating captured dynamic range and the applied grade, so you see both halves of image quality.",
      },
      {
        q: "Can you share full films in our industry, not just trailers?",
        a: "Yes. Message us on WhatsApp at +880 1768-146650 with your industry and we send a curated private showreel of complete pieces matched to your format.",
      },
      {
        q: "Do you share performance metrics like retention or ROAS?",
        a: "Where clients permit, we share retention, watch-time and ROAS context alongside the creative. Metrics belong to clients, so we only publish what each brand approves.",
      },
      {
        q: "How do we verify the studio behind the work?",
        a: "Book a free walkthrough at our 6th-floor ECB Chattar stage: clap-test the acoustics, inspect the lighting grid and power backup, and meet the director and engineers.",
      },
      {
        q: "How fast can you replicate a reference project?",
        a: "Starter replications deliver in 3 to 7 days. Signature and flagship timelines are set in the written quote. Express 48-hour delivery adds 30%.",
      },
      {
        q: "How many revisions come with a replication?",
        a: "Two structured revision rounds through a timestamped cloud review link, with 60-day archiving and free re-exports to new aspect ratios.",
      },
      {
        q: "Where is the studio located?",
        a: "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206 — reachable from Mirpur DOHS, Banani and Airport Road, with parking beside the building.",
      },
      {
        q: "How do I book and pay?",
        a: "Send your reference, date and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'process',
    clusterId: 'trust-and-local',
    name: 'Our 5-Step Studio Production Workflow',
    shortTitle: 'Production Process',
    seoTitle: 'Studio Production Workflow & Process | FrameCipher',
    metaDescription:
      'Our structured 5-step studio production process: Briefing, Technical Scoping, Studio Recording, Post-Production, and Platform Delivery in Dhaka.',
    h1: 'Our 5-Step Studio Production Workflow',
    eyebrow: 'Clear Process. No Guesswork.',
    tagline: 'A transparent, project-based workflow connecting planning, studio capture, and post-production finishing.',
    intro:
      'FrameCipher Studio follows a clearly defined 5-stage production process. We establish deliverables, technical setups, revision rounds, and schedules before shooting begins to ensure smooth execution.',
    detailedDescription:
      'A great shoot is 80% preparation. Our 5-step workflow guarantees that camera operators, sound engineers, and editors are aligned with your exact business objectives from day one.',
    highlights: ['01 Brief & Strategy', '02 Technical Scope', '03 Studio Shoot', '04 Post-Production', '05 Final Delivery'],
    benefits: ['Predictable delivery timelines', 'Zero miscommunication on deliverables', 'Structured feedback and revision rounds'],
    deliverables: ['Detailed project production schedule and sign-off milestones'],
    pricingFactors: ['Speed of client feedback and asset provision'],
        faqs: [
      {
        q: "How long does a complete project take from briefing to delivery?",
        a: "Standard projects deliver in 5 to 10 working days. Priority lanes compress to 48 to 72 hours at a 30% fee. Retainer clients hold standing capacity with same-week turnaround as routine.",
      },
      {
        q: "What happens during the initial briefing and scoping stage?",
        a: "We review your audience, commercial goals, core message, visual references and deliverable specs. Once the scope, shot list and schedule are approved in writing, we lock the shoot date.",
      },
      {
        q: "How many revision rounds are included?",
        a: "Two structured revision rounds through a timestamped cloud review link. Consolidated stakeholder notes per round keep the edit moving; unscoped new concepts are quoted separately.",
      },
      {
        q: "What pushes a project into the priority lane?",
        a: "Immovable dates: board meetings, launches, news cycles and event coverage. The priority lane pulls standby crew, overlaps shoot and edit, and guarantees raw captures within 24 hours.",
      },
      {
        q: "How do retainer lanes work for always-on brands?",
        a: "Standing monthly studio and edit slots with the same crew learning your brand grammar, quarterly planning workshops and 10 to 20% effective savings versus spot booking — with pause-or-cancel flexibility.",
      },
      {
        q: "What file formats and archives do we receive?",
        a: "Finished masters with vertical cuts and subtitle files by cloud drive, raw captures within 24 hours, and a 60-day archive with free re-exports to new aspect ratios.",
      },
      {
        q: "What causes delays, and how do you prevent them?",
        a: "Skipped briefing and unscoped feedback. We prevent both structurally: no shoot is scheduled without written scope, and no revision starts without consolidated timestamped notes.",
      },
      {
        q: "Where does production happen?",
        a: "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206 — with field production quoted separately for offices, factories and venues.",
      },
      {
        q: "How do I book and pay?",
        a: "Send your date, format and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'pricing',
    clusterId: 'trust-and-local',
    name: 'Studio Rental & Production Pricing Framework',
    shortTitle: 'Pricing & Rates',
    seoTitle: 'Studio Production Pricing & Rates in Dhaka | FrameCipher',
    metaDescription:
      'Transparent studio rental and video production pricing framework in Dhaka. Understand session rates, crew costs, and editing inclusions at ECB Chattar.',
    h1: 'Studio Production Pricing & Rates in Dhaka',
    eyebrow: 'Transparent Investment Standards',
    tagline: 'Quote-based, transparent pricing with zero artificial starting rates or hidden fees.',
    intro:
      'At FrameCipher Studio, every quote clearly itemizes your reserved studio hours, technical crew roles, equipment inclusions, and post-production deliverables before payment is accepted.',
    detailedDescription:
      'Rather than publishing misleading starting prices that inflate later, we provide transparent, itemized estimates tailored to your exact shoot duration, crew size, and deliverable count.',
    highlights: ['Itemized Quotes', 'No Hidden Fees', 'Structured Payment Terms', 'Scope Transparency'],
    benefits: ['Clear breakdown of space vs crew vs editing costs', 'Predictable budgeting for corporate and agency clients', 'Transparent overtime and revision terms'],
    deliverables: ['Formal written scope of work and itemized commercial quote'],
    pricingFactors: ['Studio duration (Hours/Days)', 'Crew count on-site', 'Post-production deliverable volume'],
        faqs: [
      {
        q: "How much does studio production cost in Dhaka?",
        a: "Hourly hire runs ৳2,000–4,500, sessions start from ৳7,500, signature productions run ৳45,000–1,85,000, and flagship campaigns are scoped from ৳2,60,000 past ৳12,50,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "Why do you quote from scope instead of fixed packages?",
        a: "Fixed packages force you to pay for services you do not need or quietly cut crew and editing you do. Scope quoting means you invest only in the personnel, equipment and finishing your asset demands.",
      },
      {
        q: "What is included in every written quote?",
        a: "Studio hours, crew roles, equipment lines, post-production deliverables, revision rounds, music licensing, subtitle languages, aspect-ratio versions, archiving, timeline and payment terms.",
      },
      {
        q: "Do you require an advance to confirm bookings?",
        a: "Yes. A 50% advance locks your calendar dates with a VAT-compliant invoice, and the balance is due only on final delivery sign-off. Free rescheduling applies with 48-hour notice.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Bank transfers, account payee cheques, bKash Merchant, Nagad and cash — every payment with a formal VAT-compliant invoice for corporate accounting.",
      },
      {
        q: "Are retainers available for recurring content?",
        a: "Yes. Weekly shows, monthly reels and quarterly campaigns can reserve standing studio and edit capacity at 10 to 20% effective savings versus spot booking, with pause-or-cancel flexibility.",
      },
      {
        q: "What pushes a quote toward the top of a band?",
        a: "More shoot days and locations, larger crews, casting, scriptwriting, motion graphics, sound design, more deliverables and ratios, and priority 48-hour delivery at plus 30%.",
      },
      {
        q: "How do your rates compare to other Dhaka studios?",
        a: "We sit at the equipped middle of every band — never the cheapest quote, always itemised so you can see what the cheaper quote omitted: crew roles, backup power, revisions, licensing and archiving.",
      },
      {
        q: "Where is the studio located?",
        a: "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206 — with free walkthroughs by appointment before you commit.",
      },
      {
        q: "How do I get a quote?",
        a: "Send your brief, references and deadline by WhatsApp to +880 1768-146650 or use the form below. Scoping questions arrive the same day and the itemised quote follows within 48 hours.",
      },
    ],
  },
  {
    slug: 'equipment-and-facilities',
    clusterId: 'trust-and-local',
    name: 'Studio Equipment & Physical Facilities',
    shortTitle: 'Equipment & Facilities',
    seoTitle: 'Studio Equipment & Facilities in Dhaka | FrameCipher',
    metaDescription:
      'Explore FrameCipher Studio equipment and facilities at ECB Chattar, Dhaka. Lighting grids, acoustic treatment, backdrops, power backup, and lounge.',
    h1: 'Studio Equipment & Physical Facilities in Dhaka',
    eyebrow: '6th Floor, Eurasia Building, ECB Chattar',
    tagline: 'Acoustically isolated room, continuous ceiling lighting grid, colored backdrops, and dependable power backup.',
    intro:
      'Inspect our technical infrastructure. FrameCipher Studio is built to handle professional audio-visual productions with acoustic sound isolation, high-CRI softboxes, green screen backdrops, and generator power backup in Dhaka.',
    detailedDescription:
      'Our facility features dedicated acoustic paneling that dampens ambient sound, overhead lighting grids that keep the studio floor free of hazardous trip wires, clean power conditioned against voltage spikes, and high-speed fiber internet.',
    highlights: ['Acoustic Isolation Paneling', 'Overhead Softbox Lighting Grid', 'Multi-Color Seamless Backdrops', 'Generator & IPS Backup'],
    benefits: ['Clean studio floor without tangled light stands', 'Consistent room color temperature calibrated to 5600K daylight', 'Client lounge area with viewing monitor for creative stakeholders'],
    deliverables: ['Access to all verified studio facilities during reserved booking sessions'],
    pricingFactors: ['Standard facility access included in all rental bookings'],
        faqs: [
      {
        q: "How much does equipped stage hire cost in Dhaka?",
        a: "At FrameCipher Studio, room-only access is ৳2,000/hour and operated sessions are ৳2,500/hour, both with a 2-hour minimum. Half-day caps are ৳12,000, full-day caps ৳22,000, and a crewed production day is ৳38,000. Every quote is itemised in writing within 48 hours.",
      },
      {
        q: "What is the ceiling height and floor capacity?",
        a: "The stage comfortably holds 4 to 6 on-camera participants with optimal camera-to-subject distances, high ceilings and an overhead lighting grid that keeps the floor free of stands.",
      },
      {
        q: "What cameras, lenses and audio kit are available in-house?",
        a: "Full-frame 4K cinema cameras, prime and zoom lenses, gimbals, teleprompters, broadcast microphones with discrete monitoring, and live client viewing screens.",
      },
      {
        q: "What lighting and acoustic treatment is installed?",
        a: "High-CRI continuous LED softboxes, RGB accent tubes, hair rims, seamless backdrops and acoustic wall panels that dampen echo and exterior street noise.",
      },
      {
        q: "Can we visit and test the stage before booking?",
        a: "Yes. Walkthroughs run same-day or next-day by appointment — clap-test the acoustics, inspect the grid and power, and record test clips on your own media, free of charge.",
      },
      {
        q: "Is there a dressing room, makeup mirror and client lounge?",
        a: "Yes. The 6th-floor facility has a client lounge with viewing monitors, high-speed Wi-Fi, a private changing room and an illuminated makeup vanity mirror.",
      },
      {
        q: "What power backup runs during load-shedding?",
        a: "Conditioned power with building generator plus IPS backup keeps lights, cameras and tethering running and protects files through every outage.",
      },
      {
        q: "What pushes hire from ৳2,000/hour toward a crewed day?",
        a: "Operated cameras and crew instead of room-only, longer hours, green-screen and styling configuration, specialist operators, and after-hours scheduling.",
      },
      {
        q: "Where is the studio and where do crews park?",
        a: "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206 — with dedicated parking beside the building and elevator access to the stage.",
      },
      {
        q: "How do I book and pay?",
        a: "Send your date, hours and kit needs by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice.",
      },
    ],
  },
  {
    slug: 'faq',
    clusterId: 'trust-and-local',
    name: 'Studio Frequently Asked Questions',
    shortTitle: 'Studio FAQ',
    seoTitle: 'Studio Frequently Asked Questions Dhaka | FrameCipher',
    metaDescription:
      'Frequently asked questions about FrameCipher Studio in Dhaka. Booking procedures, cancellation terms, equipment inclusions, and file delivery.',
    h1: 'Studio Frequently Asked Questions',
    eyebrow: 'Everything You Need to Know',
    tagline: 'Comprehensive answers to common questions about booking, production support, and file delivery.',
    intro:
      'Have questions about planning a shoot at FrameCipher Studio? Here is everything you need to know about booking confirmation, equipment specifications, parking access at ECB Chattar, and post-production delivery.',
    detailedDescription:
      'We believe in total transparency. If your question is not answered below, reach out to our studio team on WhatsApp (+880 1768-146650) for immediate assistance.',
    highlights: ['Booking & Cancellation', 'Equipment Inclusions', 'Location & Parking', 'Delivery Timelines'],
    benefits: ['Fast answers to purchasing questions', 'Clear cancellation and reschedule terms', 'Preparation guidelines before arriving at the studio'],
    deliverables: ['Complete operational clarity for clients and creators'],
    pricingFactors: ['No fee for consultations and quote requests'],
        faqs: [
      {
        q: "How do I book a session at FrameCipher Studio?",
        a: "Send your date, format and deadline by WhatsApp to +880 1768-146650 or use the form below. Scoping questions arrive the same day, an itemised quote follows within 48 hours, and a 50% advance locks the dates.",
      },
      {
        q: "Do you charge for quotes, consultations or walkthroughs?",
        a: "No. Answers, itemised quotes and studio walkthroughs with test recordings are all free. You only pay when cameras roll — sessions from ৳2,000/hour with the balance due on final sign-off.",
      },
      {
        q: "Can I reschedule if my team is delayed?",
        a: "Yes. Sessions reschedule free of charge to any available slot with at least 48 hours notice — no penalties, no lost advance.",
      },
      {
        q: "What power backup runs during load-shedding?",
        a: "Conditioned power with building generator plus IPS backup keeps lights, cameras and tethering running through every outage and protects your files from data loss.",
      },
      {
        q: "How do I reach the studio, and where do we park?",
        a: "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206 — off the Mirpur DOHS–Banani access road with dedicated parking beside the building and elevator to the stage.",
      },
      {
        q: "What kit and room specs can we verify on a visit?",
        a: "Acoustic isolation, the overhead softbox grid, 4K cinema cameras, broadcast microphones, seamless backdrops, green screen, monitoring and power backup — with test recordings on your own media.",
      },
      {
        q: "How long does delivery take, and what revisions are included?",
        a: "Standard delivery runs 5 to 10 working days with 2 structured revision rounds through a timestamped cloud link. Raw captures arrive within 24 hours and express 48-hour delivery adds 30%.",
      },
      {
        q: "What formats and archives do we receive?",
        a: "Finished masters with vertical cutdowns and subtitle files by cloud drive, plus a 60-day archive with free re-exports to new aspect ratios.",
      },
      {
        q: "What payment methods and invoices do you provide?",
        a: "Bank transfers, account payee cheques, bKash Merchant, Nagad and cash — every payment with a formal VAT-compliant invoice for corporate accounting.",
      },
      {
        q: "Can we bring catering, and is Wi-Fi provided?",
        a: "Yes. Refreshments are welcome in the client lounge, and complimentary mineral water, tea and high-speed Wi-Fi come with every booked session.",
      },
      {
        q: "What are your operating hours?",
        a: "Open 24 hours — all sessions run by advance reservation, including overnight edits, early call times and international client time zones.",
      },
    ],
  },
  {
    slug: 'contact',
    clusterId: 'trust-and-local',
    name: 'Contact & Studio Directions',
    shortTitle: 'Studio Contact',
    seoTitle: 'Contact FrameCipher Studio Dhaka | Location & Booking',
    metaDescription:
      'Contact FrameCipher Studio in Dhaka. 6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206. Phone: +880 1768-146650.',
    h1: 'Contact FrameCipher Studio in Dhaka',
    eyebrow: 'Location, Directions & Booking',
    tagline: 'Book a studio session, schedule a pre-production visit, or discuss project requirements with our directors.',
    intro:
      'Ready to plan your production session? Contact FrameCipher Studio today. Our physical studio is located at Eurasia Building, Matikata ECB Chattar, Dhaka 1206.',
    detailedDescription:
      'We welcome creators, brands, and agencies to visit our studio in person to test acoustics, inspect lighting grids, and discuss project scopes. Advance appointments recommended.',
    highlights: ['Physical Studio in ECB Chattar', 'Direct Phone & WhatsApp Hotline', 'Open 24 Hours by Appointment', 'Easy Transit from Mirpur, Banani & Gulshan'],
    benefits: ['Immediate response via WhatsApp hotline (+880 1768-146650)', 'Clear driving directions and landmark guidance', 'Elevator access directly to the 6th floor'],
    deliverables: ['Confirmed studio reservation and calendar appointment'],
    pricingFactors: ['Zero cost for initial project consultation'],
        faqs: [
      {
        q: "What is the studio phone number and fastest contact channel?",
        a: "Call or WhatsApp +880 1768-146650 for same-day replies. Email teamframecipher@gmail.com for briefs and vendor documentation. The booking form below routes into the same queue.",
      },
      {
        q: "What are your operating hours?",
        a: "Open 24 hours — every session runs by advance reservation, covering overnight edits, early call times and international client time zones.",
      },
      {
        q: "How quickly can we schedule a walkthrough visit?",
        a: "Same day or next day by WhatsApp appointment. Test the acoustics, inspect the lighting grid and power backup, meet the director and engineers, and record test clips on your media.",
      },
      {
        q: "Can we send reference reels or storyboards before booking?",
        a: "Yes. Share references, moodboards or script outlines over WhatsApp for an immediate technical assessment, budget-band guidance and an itemised quote within 48 hours.",
      },
      {
        q: "What should our first message include?",
        a: "The content type, publishing destination, preferred date and hard deadline. Those four lines let us reply with scoping questions the same day instead of a week of back-and-forth.",
      },
      {
        q: "How do quotes, advances and invoices work?",
        a: "Itemised written quotes within 48 hours, a 50% advance to lock dates, balance only on final sign-off, and VAT-compliant invoices on every payment — bKash, Nagad, bank, cheque or cash.",
      },
      {
        q: "Can we reschedule after confirming?",
        a: "Yes. Rescheduling is free with at least 48 hours notice to any available slot — no penalties and no lost advance.",
      },
      {
        q: "Where is the studio and where do we park?",
        a: "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206 — off the Mirpur DOHS–Banani access road with dedicated parking beside the building and elevator to the stage.",
      },
      {
        q: "How fast is standard delivery once we book?",
        a: "Standard projects deliver in 5 to 10 working days with 2 structured revision rounds. Raw captures arrive within 24 hours and express 48-hour delivery adds 30%.",
      },
      {
        q: "Do you work with agencies and corporate procurement?",
        a: "Yes. Corporate vendor documentation, formal scopes of work and VAT-compliant invoicing are standard, with white-label and co-production options for agencies.",
      },
    ],
  },
]

export function getStudioServiceBySlug(slug) {
  return studioServices.find((s) => s.slug === slug)
}

export function getAllStudioServiceSlugs() {
  return studioServices.map((s) => s.slug)
}

export function getClusterForService(serviceSlug) {
  const service = getStudioServiceBySlug(serviceSlug)
  if (!service) return null
  return studioClusters.find((c) => c.id === service.clusterId) || null
}

export function getServicesInCluster(clusterId) {
  return studioServices.filter((s) => s.clusterId === clusterId)
}
