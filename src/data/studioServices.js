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
      'Leading video production company in Dhaka. In-house studio, cinema 4K multi-cam crews, calibrated lighting grids, and post-production at Matikata ECB Chattar.',
    h1: 'Video Production Company in Dhaka',
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
        q: "What is included in a full video production package?",
        a: "Full production includes pre-production planning, script development, studio or location filming, lighting direction, broadcast audio recording, editing, DaVinci Resolve color grading, sound design, and platform-specific master exports.",
      },
      {
        q: "Where is your video production studio located in Dhaka?",
        a: "Our physical studio is located on the 6th Floor of Eurasia Building, next to Khan Polli Jame Masjid, at Matikata ECB Chattar, Dhaka 1206. Centrally connected to Mirpur DOHS, Banani, and Airport Road.",
      },
      {
        q: "Can you shoot on-location outside your studio?",
        a: "Yes. In addition to our in-house studio stage, our production crews conduct multi-camera on-location filming at corporate headquarters, manufacturing plants, hospitals, and event venues across Bangladesh.",
      },
      {
        q: "Can we review recorded takes live on a client monitor during the shoot?",
        a: "Yes. Our studio and field setups feature calibrated wireless director monitors in the client lounge, allowing your marketing team and stakeholders to review takes in real time.",
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
        q: "Can non-actors or first-time executives look natural on camera?",
        a: "Yes. Our professional teleprompter operator controls reading speed naturally, and our director conducts conversational interview techniques to bring out relaxed, authoritative, and authentic performances.",
      },
      {
        q: "Do you provide on-site b-roll shooting at our corporate office?",
        a: "Yes. We frequently combine a controlled, quiet studio interview at ECB Chattar with on-location office and facility b-roll to create a cohesive corporate brand story.",
      },
      {
        q: "Do you offer bilingual voiceovers and subtitle translations in Bangla and English?",
        a: "Yes. All corporate video packages can include native Bangla and English voiceovers, as well as synchronized SRT subtitle files formatted for international stakeholder presentations and LinkedIn.",
      },
      {
        q: "What is the standard turnaround time for corporate overview films?",
        a: "Standard delivery is 5 to 7 business days from the final filming date. We also provide express 48-hour turnarounds for urgent board meetings, investor pitches, or annual general meetings (AGMs).",
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
        q: "Do you produce television-compliant commercials (TVC)?",
        a: "Yes. We deliver commercials formatted and mastered to the exact technical and audio loudness specifications (EBU R128) required by Bangladesh television broadcast networks and cinema screens.",
      },
      {
        q: "What aspect ratios and video formats do you deliver for digital advertising?",
        a: "We deliver custom exports in 16:9 widescreen for TV and YouTube, 1:1 square for Facebook feeds, and 9:16 vertical for Instagram Reels and TikTok ads with safe-zone margin calibrations.",
      },
      {
        q: "How does FrameCipher handle casting, actors, and styling for commercial shoots?",
        a: "We manage complete talent casting, wardrobe coordination, and professional on-set makeup artists tailored to your brand persona and target demographic.",
      },
      {
        q: "What is your standard production timeline for a commercial campaign?",
        a: "Commercial campaigns typically take 10 to 14 business days from storyboard approval to final master exports, encompassing set preparation, filming, visual effects, and color timing.",
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
        q: "How fast can a promotional campaign video be delivered?",
        a: "For urgent product launches, flash sales, or seasonal holiday campaigns, we offer an express 48-hour delivery timeline upon script sign-off.",
      },
      {
        q: "Can you create product launch videos that drive direct conversions for ecommerce?",
        a: "Yes. Our promotional videos are structured around direct-response frameworks: strong opening visual hooks, clear value demonstrations, kinetic pricing badges, and compelling calls-to-action.",
      },
      {
        q: "Do promotional packages include multiple cut-down variations?",
        a: "Yes. Every promotional package includes the full master video plus shorter cut-down teasers (15s, 30s, and 60s) optimized for Instagram Stories, TikTok, and YouTube Pre-roll ads.",
      },
      {
        q: "Can promotional videos be filmed inside our retail outlet or showroom in Dhaka?",
        a: "Yes. Our mobile production team can bring portable softbox lighting and gimbal stabilizers directly to your retail outlet, flagship store, or showroom anywhere in Dhaka.",
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
        q: "How does video marketing differ from standard video production?",
        a: "Standard video production focuses strictly on filming. Video marketing includes in-depth audience research, full-funnel positioning, search query targeting, conversion-focused scriptwriting, and post-launch media distribution.",
      },
      {
        q: "How do you optimize videos for YouTube search and Google video ranking?",
        a: "We optimize video titles, write rich keyword-dense descriptions, research high-volume search tags, structure semantic chapter timestamps, and design high-CTR custom thumbnail artwork.",
      },
      {
        q: "Can you help distribute and run paid video campaigns across Meta and Google Ads?",
        a: "Yes. FrameCipher is a full-service growth agency. Our paid media specialists can directly deploy, test, and scale your videos across Meta Ads, Google Ads, and TikTok with strict ROAS discipline.",
      },
      {
        q: "Do you create multiple opening hooks for A/B creative testing?",
        a: "Yes. We film 3 to 5 alternative opening hooks (first 3 seconds) for the same core video, allowing you to test which visual angle delivers the highest thumb-stop rate and lowest cost per lead.",
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
        q: "Can we batch-record multiple shorts in one studio visit?",
        a: "Yes. Our batch-production workflow allows creators, brands, and executives to record 10 to 20 scripted vertical shorts in a single 4-hour studio session at Matikata ECB Chattar.",
      },
      {
        q: "How many vertical reels or TikToks can be produced in a single session?",
        a: "In a half-day session (4 hours), clients typically record 10 to 15 finished short-form clips. For full-day sessions (8 hours), we can capture up to 25 to 30 vertical videos.",
      },
      {
        q: "Are animated kinetic captions and trending background audio included?",
        a: "Yes. All social clips include modern dynamic subtitles (with highlighted keyword styling in English or Bangla), sound effect cues (whooshes, pops), and commercial-licensed background music.",
      },
      {
        q: "Do you provide hook scripting and trend guidance before recording?",
        a: "Yes. We provide pre-shoot creative consulting to refine your scripts, ensuring every video hooks viewers in the first 2 seconds and complies with TikTok and Instagram algorithmic retention models.",
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
        q: "How do you prevent internet drops during live streaming?",
        a: "We deploy dedicated commercial optical fiber internet lines combined with multi-SIM cellular bonding hardware to guarantee failover redundancy and uninterrupted broadcast stability.",
      },
      {
        q: "Can you live-stream simultaneously to multiple platforms (Simulcast)?",
        a: "Yes. We can broadcast your live stream concurrently to YouTube Live, Facebook Live, LinkedIn Live, and private corporate web portals (Zoom, Webex, Microsoft Teams) at 1080p 60fps.",
      },
      {
        q: "What audio and multi-camera setup is provided for studio live broadcasts?",
        a: "We provide up to 4 broadcast cameras switched live via hardware production switchers, wireless digital lapel microphones, and an on-site audio technician managing dynamic loudness.",
      },
      {
        q: "Can you incorporate live graphics, lower thirds, and remote guest feeds?",
        a: "Yes. We integrate animated speaker lower thirds, corporate logos, countdown timers, PowerPoint presentation slides, live audience polls, and remote Zoom/Skype caller feeds in real time.",
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
        q: "How quickly can we get a recap video for our social media PR?",
        a: "We can deliver a 60-second social media highlight teaser within 24 hours of event completion, allowing your PR team to capitalize on immediate post-event media buzz.",
      },
      {
        q: "Do you cover multi-day corporate conferences and exhibitions outside Dhaka?",
        a: "Yes. Our event cinematography crews frequently travel across Bangladesh (Chattogram, Cox’s Bazar, Sylhet) to cover multi-day trade expos, corporate retreats, and industry conferences.",
      },
      {
        q: "How do you ensure clean audio recording in noisy conference halls?",
        a: "We connect directly to the venue soundboard using balanced XLR lines to record master speaker audio, backed up with dedicated wireless lavaliers and shotgun ambient microphones.",
      },
      {
        q: "Can we get full unedited recordings of keynote speeches along with the highlights?",
        a: "Yes. All event coverage packages include both the edited cinematic highlight aftermovie (2 to 4 minutes) and full-length multi-camera recordings of keynote presentations and panel discussions.",
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
        q: "Do you work with NGOs and international development agencies?",
        a: "Yes. We have extensive experience producing impact documentaries for international development organizations, NGOs, corporate CSR initiatives, and cultural institutions across Bangladesh.",
      },
      {
        q: "How do you manage field shoots and rural interviews across remote areas?",
        a: "Our field production crews travel self-sufficiently with portable cinema cameras, drone equipment, battery power banks, and weather-sealed audio gear capable of filming in remote riverine and rural districts.",
      },
      {
        q: "Do you handle ethical consents, localized dialect translation, and multilingual subtitling?",
        a: "Yes. We adhere to international ethical filming standards, securing informed consent from interviewees and providing accurate translation and subtitling in both formal Bangla, regional dialects, and English.",
      },
      {
        q: "What is the typical production timeline for a short impact documentary?",
        a: "A 10 to 20-minute documentary typically takes 3 to 5 weeks from initial research and field shooting to final DaVinci Resolve color grading and master sound design.",
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
        q: "Can you include a host or real estate agent presenting the property?",
        a: "Yes. We can mic up your real estate agent or developer representative with broadcast wireless audio, guide their delivery on camera, and provide an optional portable teleprompter.",
      },
      {
        q: "Do you provide 4K cinematic walkthroughs, drone aerial shots, and vertical reels?",
        a: "Yes. We deliver complete real estate media packages: smooth motorized gimbal interior walkthroughs, certified drone aerial neighborhood captures, and high-energy 9:16 vertical reels for social ads.",
      },
      {
        q: "How should we prepare an apartment, penthouse, or commercial building before the shoot?",
        a: "The property should be deep-cleaned, all interior lights turned on, personal clutter removed, curtains neatly drawn to maximize natural window light, and staging furniture arranged prior to our crew arrival.",
      },
      {
        q: "What is the delivery timeframe for property marketing videos?",
        a: "Edited property walkthrough videos and social media reels are typically delivered within 3 to 4 business days following the on-site shoot.",
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
        q: "How far in advance should we book wedding dates?",
        a: "We recommend booking 1 to 3 months in advance to secure your dates in our production calendar, especially during peak wedding seasons in Dhaka (November through February).",
      },
      {
        q: "What is the difference between a cinematic wedding film and traditional coverage?",
        a: "Traditional coverage is a static, continuous recording of the stage. Our cinematic wedding films use narrative storytelling, emotive music scoring, color grading, and candid b-roll to create an emotional movie of your celebration.",
      },
      {
        q: "How quickly do we receive the 1-minute Instagram teaser and the full ceremony video?",
        a: "We deliver your 60-second social media teaser reel within 5 to 7 days after the event. The full cinematic highlight film and ceremony documentary edit are completed within 3 to 4 weeks.",
      },
      {
        q: "Do you travel across Bangladesh or internationally for destination weddings?",
        a: "Yes. Our wedding cinematography team is available for destination weddings across Bangladesh (Sylhet, Chattogram, Cox’s Bazar) as well as international destination shoots upon request.",
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
        q: "Can the interview be conducted in our family residence?",
        a: "Yes. Our team can bring portable softbox lighting, acoustic sound blankets, and quiet audio gear directly to your family residence in Dhaka to ensure elders feel relaxed in familiar surroundings.",
      },
      {
        q: "What themes or milestones do family documentary films usually commemorate?",
        a: "We produce films for golden wedding anniversaries, 70th/80th milestone birthdays, generational family business biographies, and memorial tribute archives celebrating the life stories of elders.",
      },
      {
        q: "How do you help camera-shy elders and children feel comfortable during filming?",
        a: "Our director uses an empathetic, conversational interview format rather than a formal camera interrogation. We chat casually, allowing stories to unfold naturally with patience and respect.",
      },
      {
        q: "Can we integrate old analog photographs, VHS tapes, and archival family documents?",
        a: "Yes. We provide high-resolution digital scanning, dust cleanup, and color restoration for vintage family photos, seamlessly editing them into the video alongside the spoken reflections.",
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
        q: "Can we send external footage filmed elsewhere for post-production?",
        a: "Yes. We regularly handle post-production for footage filmed outside our studio across Bangladesh and internationally. You can deliver files via physical SSD or high-speed cloud transfer (Dropbox/Google Drive).",
      },
      {
        q: "What file formats and color log profiles (Sony S-Log3, Canon C-Log, ProRes) do you grade?",
        a: "We grade all major camera profiles in DaVinci Resolve Studio: Sony S-Log3/S-Gamut3.Cine, Canon C-Log2/3, ARRI LogC, Blackmagic RAW, REDCODE RAW, and Apple ProRes on color-calibrated monitors.",
      },
      {
        q: "What tools and audio suites does FrameCipher Studio use for sound mastering?",
        a: "We utilize iZotope RX Advanced for dialogue cleanup (spectral de-noise, de-reverb, de-click) and professional DAWs for EQ, compression, and loudness compliance conforming to broadcast standards.",
      },
      {
        q: "How do clients review cuts and leave frame-accurate timestamped feedback?",
        a: "We share secure cloud review links where your creative directors and stakeholders can leave frame-accurate comments, visual sketches, and revision notes directly on the video player.",
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
        q: "How do you handle revisions on editing projects?",
        a: "Every editing project includes 2 structured revision rounds via timestamped cloud review links to ensure complete satisfaction without scope confusion.",
      },
      {
        q: "Can you edit long-form videos into high-retention short vertical clips for social media?",
        a: "Yes. We can ingest 1 to 2-hour podcasts or webinars and extract 5 to 15 viral vertical cutdowns (9:16) with animated subtitles, zoom cuts, and sound effects for Reels, TikTok, and YouTube Shorts.",
      },
      {
        q: "What is the typical delivery timeline for an edited video project?",
        a: "Standard video edits are delivered within 3 to 5 business days. Express 24-hour and 48-hour turnarounds are available for time-sensitive social media campaigns.",
      },
      {
        q: "Do you license royalty-free commercial background music and sound effects?",
        a: "Yes. All background tracks, risers, whooshes, and sound effects used in our edits are 100% commercially licensed with zero copyright strikes on YouTube, Facebook, or Instagram.",
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
        q: "Do you have native Bangla and English voiceover artists?",
        a: "Yes. We have a roster of verified voice artists across male, female, neutral English, British/American accent, formal standard Bangla (shuddho bhasha), and conversational styles.",
      },
      {
        q: "Can clients listen in and direct the voiceover talent live during recording?",
        a: "Yes. You can participate in the recording session either in person at our studio lounge or remotely via Zoom/Google Meet, providing real-time direction and inflection guidance to the talent.",
      },
      {
        q: "What turnaround time can we expect for commercials and explainer voiceovers?",
        a: "Standard commercial scripts under 2 minutes are recorded, edited, de-breathed, and delivered within 24 to 48 hours from script confirmation.",
      },
      {
        q: "Are voice recordings fully mastered and delivered broadcast-ready?",
        a: "Yes. We deliver 24-bit 48kHz WAV masters that have undergone acoustic vocal processing: noise gate, de-essing, surgical EQ, subtle compression, and loudness matching.",
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
        q: "What should on-camera subjects avoid wearing on green screen?",
        a: "Subjects must strictly avoid wearing green clothing or accessories, as well as highly reflective jewelry, shiny silk fabrics, or thin translucent green-tinted glasses.",
      },
      {
        q: "Do you provide custom virtual backgrounds, newsrooms, and 3D studio sets?",
        a: "Yes. We can design and composite 3D virtual newsrooms, corporate stages, modern lofts, or branded abstract backgrounds that match your company’s aesthetic.",
      },
      {
        q: "How do your gaffers eliminate green color spill on subjects’ hair and shoulders?",
        a: "Our studio is pre-lit with balanced overhead softboxes for the green backdrop and dedicated magenta/warm rim backlights on the subject to cancel out and neutralize green reflections.",
      },
      {
        q: "Can green screen sessions be monitored in real time with live background keying?",
        a: "Yes. Our production switcher supports real-time hardware chroma keying, allowing presenters and directors to see the keyed composite on live monitors during recording.",
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
        q: "Can we record both audio and multi-camera video podcasts?",
        a: "Yes. Our studio setup is configured with multi-angle 4K cameras and broadcast dynamic microphones to produce simultaneous high-fidelity audio and video.",
      },
      {
        q: "Do you provide editing and vertical clips from our session?",
        a: "Yes. In our production packages, we handle full multi-cam switching, speech audio leveling, color grading, and extract high-engagement vertical reels with subtitles.",
      },
      {
        q: "Can beginners with no podcasting experience book?",
        a: "Absolutely. Our in-house sound engineer tests microphone technique and monitors audio levels throughout your entire session.",
      },
      {
        q: "How many studio cameras and broadcast microphones are provided for podcast recordings?",
        a: "We support 1 to 4 in-person speakers simultaneously with individual Shure/Rode broadcast dynamic microphones and up to 3 cinema 4K camera angles (host, guest, and wide table shot).",
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
        q: "Are your photos compliant with Daraz and Shopify requirements?",
        a: "Yes. We provide pure white background (RGB 255,255,255) images cropped to exact e-commerce marketplace ratios.",
      },
      {
        q: "How many photos do we receive per product?",
        a: "A standard shoot covers 4 to 6 angles per product (front, back, 45-degree angle, detail macro, packaging). Custom shot lists are confirmed in advance.",
      },
      {
        q: "Can we ship or drop off products at your ECB Chattar studio?",
        a: "Yes. You can drop off or courier your inventory samples directly to our 6th-floor studio at Eurasia Building, Matikata ECB Chattar.",
      },
      {
        q: "Can you shoot lifestyle product photos with human models alongside white background shots?",
        a: "Yes. We offer combined packages featuring pure white e-commerce catalog cutouts alongside styled lifestyle tabletop scenes and hand/face model demonstrations for cosmetics, jewelry, and gadgets.",
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
        q: "What is included in the basic studio rental fee?",
        a: "Rental includes private studio access, baseline continuous overhead lighting, your choice of backdrop, high-speed Wi-Fi, makeup area, and IPS power backup.",
      },
      {
        q: "Can we bring our own lighting and cameras?",
        a: "Yes. You are welcome to bring your own cameras, audio gear, and lighting fixtures.",
      },
      {
        q: "Where can our crew park at ECB Chattar?",
        a: "Dedicated vehicle parking is available adjacent to Eurasia Building and Khan Polli Jame Masjid.",
      },
      {
        q: "Does studio rental include an on-site technician for assistance?",
        a: "Yes. A studio assistant is always on-site to help position lighting grids, change seamless paper backdrops, manage power outlets, and ensure your team has a seamless shooting experience.",
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
        q: "Can we see raw versus color-graded comparisons?",
        a: "Yes. Contact our team and we will share before-and-after grading reels from DaVinci Resolve demonstrating our dynamic range and color craft.",
      },
      {
        q: "Which brands, corporate leaders, and creators have produced videos at FrameCipher Studio?",
        a: "We have produced video campaigns, podcasts, and commercial visual media for leading corporate enterprises, fintech startups, fashion apparel brands, and top YouTube creators in Bangladesh.",
      },
      {
        q: "Can you share case studies with verified audience retention and conversion metrics?",
        a: "Yes. Beyond visuals, we can share documented case studies highlighting how our video creative boosted ROAS, click-through rates, and YouTube watch-time for commercial clients.",
      },
      {
        q: "How do we request a private screening or review relevant industry-specific samples?",
        a: "Message our team on WhatsApp (+880 1768-146650) with your industry niche, and we will send a curated private showreel link matching your exact aesthetic requirements.",
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
        a: "Standard projects take between 5 to 10 working days, with express turnarounds available on request.",
      },
      {
        q: "What happens during the initial creative briefing and scriptwriting stage?",
        a: "We review your target audience, commercial goals, core message, visual moodboard, and deliverable specs. Once the script, storyboard, and shot list are approved, we schedule studio filming.",
      },
      {
        q: "How many rounds of revisions are included in our standard production agreement?",
        a: "Every project includes 2 comprehensive revision rounds. You receive a secure cloud review link where stakeholders can leave frame-by-frame timestamped comments.",
      },
      {
        q: "What file transfer methods and storage archives do you provide for final masters?",
        a: "Final masters are delivered via private cloud download links (ProRes 422 HQ and high-bitrate MP4). We also maintain a secure 60-day project archive should you require future revisions or re-exports.",
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
        q: "Do you require an advance deposit to confirm bookings?",
        a: "Yes. A standard 50% advance secures your reserved studio calendar date, with the balance due upon final deliverable sign-off.",
      },
      {
        q: "What payment methods do you accept in Dhaka?",
        a: "We accept corporate bank wire transfers, account payee cheques, bKash Merchant, Nagad, and cash payment with formal VAT-compliant invoices for corporate accounting.",
      },
      {
        q: "Are discounts available for recurring monthly content retainers or bulk podcast shoots?",
        a: "Yes. We offer retainer packages for brands and creators committing to monthly batch shoots (e.g., weekly podcasts or 20 monthly reels), offering significant savings over single-session bookings.",
      },
      {
        q: "What costs could cause a quote to increase beyond the baseline package?",
        a: "Additional costs only apply if you request extra shooting hours, specialized cast actors/models, complex 3D visual effects, or expedited same-day/24-hour turnaround rushes.",
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
        q: "What is the ceiling height and studio floor dimension?",
        a: "Our studio comfortably accommodates 4 to 6 on-camera participants with optimal camera-to-subject focal distances, high ceilings, and an overhead lighting grid.",
      },
      {
        q: "What primary camera bodies and cinema lenses are available in-house?",
        a: "Our in-house inventory includes full-frame 4K cinema cameras, ultra-sharp prime lenses, fast zoom lenses, motorized gimbals, and teleprompter systems.",
      },
      {
        q: "What lighting fixtures, softboxes, and acoustic treatments are installed at the studio?",
        a: "We feature high-CRI continuous LED softboxes, RGB accent tube lights, hair rims, seamless backdrops, and acoustic wall panels that dampen room echo and exterior street noise.",
      },
      {
        q: "Is there a private dressing room, makeup mirror, and client lounge at the ECB Chattar facility?",
        a: "Yes. Our 6th-floor facility features a dedicated client lounge with viewing monitors, high-speed Wi-Fi, private changing room, and an illuminated makeup vanity mirror.",
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
        q: "How do I reach the studio by public transport or car?",
        a: "The studio is at Matikata ECB Chattar, directly off the Mirpur DOHS - Banani flyover access road. Dedicated car parking is available adjacent to the building.",
      },
      {
        q: "Can I reschedule my booking if my team is delayed?",
        a: "Yes. With at least 48 hours notice, sessions can be rescheduled to any available calendar slot without penalty.",
      },
      {
        q: "What power backup (generator/IPS) is in place during load shedding in Dhaka?",
        a: "Our facility has uninterrupted power systems (UPS/IPS) and building generator backup, ensuring your shoot and recordings never suffer power interruption or data loss.",
      },
      {
        q: "Can clients bring outside catering, snacks, or coffee into the studio space?",
        a: "Yes. Clients are welcome to bring refreshments into our client lounge area. Complimentary mineral water, tea, and high-speed Wi-Fi are provided for all booked sessions.",
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
        q: "What is the exact studio phone number?",
        a: "You can call or WhatsApp our studio team directly at +880 1768-146650.",
      },
      {
        q: "What are your operational hours?",
        a: "We operate 24 hours a day, 7 days a week, with all shoots scheduled by advance appointment.",
      },
      {
        q: "How quickly can we schedule a walkthrough visit to inspect the studio facilities?",
        a: "You can schedule a studio walkthrough same-day or next-day by messaging us on WhatsApp (+880 1768-146650) to verify acoustic isolation and lighting before booking.",
      },
      {
        q: "Can we send project reference reels or storyboards via WhatsApp before booking?",
        a: "Yes. You can share your reference videos, moodboards, or script outlines directly with our directors on WhatsApp for an immediate technical assessment and itemized quote.",
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
