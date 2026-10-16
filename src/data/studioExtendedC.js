// Studio extended content — Cluster D (Post-Production & Audio) + Cluster E (Studio Access)
// Unique BDT pricing + ~900-1100 words per page. Market data: Nexteio editing bands,
// paikaribaba/multimediagen per-minute rates, Bangladhol VO/studio rates, Black Box
// room/podcast/product rates, Studio89/Agdum/Space-Mirpur rental bands.

export const extendedC = {
  'post-production': {
    pricingTitle: 'Post-Production Rates in Dhaka',
    pricingIntro:
      'Finishing-suite craft with calibrated monitoring: essential finishes from ৳12,000, commercial grades at ৳45,000, feature finishing from ৳1,25,000. External footage welcome via SSD or cloud.',
    tiers: [
      {
        name: 'Essential Finish',
        price: '৳12,000',
        priceNote: 'up to 5 min',
        tag: 'Clean & Correct',
        description:
          'Assembly, dialogue cleanup, balanced grade and loudness-safe master for straightforward footage.',
        features: [
          'Narrative assembly with dead-air removal',
          'iZotope dialogue cleanup: hiss, hum, room echo',
          'Balanced DaVinci colour correction (Rec.709)',
          'Lower thirds and basic title cards',
          'SRT subtitles in Bangla or English',
          'ProRes + MP4 masters, 1 revision round',
        ],
      },
      {
        name: 'Commercial Grade',
        price: '৳45,000',
        priceNote: 'up to 10 min',
        tag: 'Most Popular',
        popular: true,
        description:
          'Broadcast-adjacent finishing: cinematic grade, full sound design, motion graphics and multi-ratio versioning.',
        features: [
          'Cinema-gamut colour pipeline with shot matching',
          'Full sound design: SFX, beds, loudness compliance',
          'Logo animation and kinetic typography package',
          'LOG profile handling: S-Log3, C-Log, BRAW, REDCODE',
          'Multi-ratio versioning (16:9, 1:1, 9:16, 4:5)',
          'Timestamped cloud review, 2 revision rounds',
        ],
      },
      {
        name: 'Feature Finish',
        price: '৳1,25,000+',
        priceNote: 'scoped quote',
        tag: 'Long-Form & Series',
        description:
          'Documentary, course and series finishing: conform, VFX cleanup, stems and archival masters.',
        features: [
          'Multi-episode conform and colour continuity',
          'Rotoscoping, object removal and beauty cleanup',
          'Dialogue, music and effects stem delivery',
          'DCP/projection and broadcast compliance masters',
          'Archive-grade uncompressed preservation copies',
          'Dedicated finishing producer and priority lane',
        ],
      },
    ],
    marketNote:
      'Dhaka post-production splits by complexity: corporate profile edits ৳5,000–25,000, heavy-graphics YouTube work ৳5,000–15,000, per-minute editing benchmarks ৳2,000 basic to ৳20,000+ for commercial finishing (Nexteio 2026; MultimediaGen; Bangladhol). The premium reflects calibrated monitoring, LOG colour science and sound restoration that laptop edits cannot replicate. Sending externally shot footage for professional finishing typically costs less than reshooting it.',
    sections: [
      {
        h: 'Editing, grading, sound: what finishing actually changes',
        p1: 'Raw footage is potential, not product. Finishing converts it through four disciplines: narrative assembly that removes dead air and structures retention; colour grading that unifies cameras and sets emotional tone; sound engineering that cleans dialogue and designs impact; and graphics that carry information elegantly. Skip any one and audiences feel the absence without naming it.',
        p2: 'Our suite runs DaVinci Resolve Studio on calibrated monitors — the same pipeline behind cinema releases — with iZotope RX Advanced for dialogue rescue (de-noise, de-reverb, de-click) and loudness compliance for broadcast. Footage from Sony S-Log3, Canon C-Log, ARRI LogC, BRAW and REDCODE all grade from their native gamuts rather than crushed previews.',
      },
      {
        h: 'When to send external footage for finishing',
        p1: 'Roughly a third of our post work originates outside our studio: field shoots from client crews, drone footage, event coverage, even phone footage that matters. If the content is valuable, finishing rescues more than reshooting costs — mismatched white balance, hollow audio and shaky horizons all respond to professional treatment.',
        p2: 'Delivery is simple: physical SSD drop at ECB Chattar or cloud transfer via Drive/Dropbox with a shot log. We conform mixed sources — frame rates, codecs, aspect ratios — into one coherent timeline, and flag any shot beyond rescue before billing a frame of work on it.',
      },
      {
        h: 'The review loop: timestamped approvals without chaos',
        p1: 'Post-production fails on feedback, not talent: vague comments, conflicting stakeholders, eleventh-hour re-briefs. Our cloud review links accept frame-accurate comments, sketches and emoji reactions directly on the player, with two structured revision rounds scoped in every quote. Scope changes mid-project receive transparent variation quotes, never silent quality cuts.',
        p2: 'Corporate and agency clients receive version registers — V1 assembly through final master — so procurement and legal can audit what changed and when. Masters archive for 60 days with free re-exports; extended archival suits series and institutional libraries.',
      },
      {
        h: 'Sound: the half of video audiences actually judge',
        p1: 'Viewers tolerate imperfect images far longer than imperfect audio. Dialogue cleanup removes the Dhaka location signatures — fan hum, generator drone, street bleed — while EQ and compression give voices broadcast presence. Sound design then adds the invisible layer: room tone, effects, music beds mixed under speech at disciplined levels.',
        p2: 'Voice-over recording in our vocal booth pairs naturally with finishing: narration tracked, de-breathed and mastered in the same session chain as the mix. IVR, e-learning and documentary clients get single-vendor consistency from first word to final loudness check.',
      },
      {
        h: 'Budgeting post: footage hours, graphics and VFX',
        p1: 'Three variables set post cost: raw-footage volume (a 2-hour podcast ingests differently from a 20-minute interview), graphics complexity (lower thirds versus full motion packages), and cleanup scope (simple cuts versus rotoscoping and object removal). Our quotes itemise all three so trimming scope is a conscious saving, not a quality ambush.',
        p2: 'The cheapest post-production is planned production: clean audio on set saves hours of restoration; shot lists save days of assembly. Pair finishing with studio rental when capturing new material, or with video editing retainers when output is continuous.',
      },
    ],
    costRows: [
      ['Essential finish, up to 5 minutes', '৳12,000'],
      ['Commercial grade, up to 10 minutes', '৳45,000'],
      ['Feature / series finishing', '৳1,25,000+'],
      ['Subtitling per 10 minutes (Bangla/English)', '৳3,000'],
      ['48-hour priority finishing lane', '+30%'],
    ],
    extraFaqs: [
      {
        q: 'Can you finish footage filmed elsewhere?',
        a: 'Yes — roughly a third of our post work is external footage delivered via SSD or cloud. We conform mixed codecs and frame rates, rescue what is rescuable, and flag anything beyond repair before billing.',
      },
      {
        q: 'Which camera profiles and formats do you grade?',
        a: 'All major LOG and RAW profiles in DaVinci Resolve Studio: Sony S-Log3, Canon C-Log2/3, ARRI LogC, Blackmagic RAW, REDCODE RAW and ProRes — on calibrated monitors.',
      },
      {
        q: 'How do approvals and revisions work?',
        a: 'Secure cloud links with frame-accurate comments; every project includes structured revision rounds (1 essential, 2 commercial). Masters archive 60 days with free re-exports.',
      },
    ],
    related: [
      { label: 'Video editing services', href: '/studio/video-editing/' },
      { label: 'Voice over studio', href: '/studio/voice-over/' },
      { label: 'Green screen studio', href: '/studio/green-screen-video/' },
      { label: 'Documentary production', href: '/studio/documentary-production/' },
    ],
  },

  'video-editing': {
    pricingTitle: 'Video Editing Rates in Dhaka',
    pricingIntro:
      'Retention-first editing for every platform: shorts packs from ৳9,500, creator edits at ৳22,000, full studio suites at ৳48,000 with grade, sound and cutdowns included.',
    tiers: [
      {
        name: 'Shorts Pack ×5',
        price: '৳9,500',
        priceNote: '5 verticals',
        tag: 'Reels & Shorts',
        description:
          'Five high-retention verticals from your footage or our studio captures: captions, SFX and trend pacing.',
        features: [
          'Jump-cut pacing with zoom punches and B-roll',
          'Kinetic captions in Bangla or English + SRT',
          'Sound-effect design and licensed music beds',
          'Hook-first restructuring of weak openings',
          'Cover frames sized per platform',
          '48-hour delivery available on request',
        ],
      },
      {
        name: 'Creator Edit',
        price: '৳22,000',
        priceNote: 'up to 15 min',
        tag: 'Most Popular',
        popular: true,
        description:
          'YouTube and commercial edits with narrative flow: multi-cam sync, graphics, grade and search-ready packaging.',
        features: [
          'Multi-camera and audio-track synchronisation',
          'Retention pacing with graphics and callouts',
          'Cinematic colour grade + dialogue mastering',
          'Intro/outro, lower thirds, animated titles',
          '2 vertical cutdowns extracted per edit',
          'Thumbnail concept + 2 revision rounds',
        ],
      },
      {
        name: 'Studio Suite',
        price: '৳48,000',
        priceNote: 'up to 30 min',
        tag: 'Commercial & Course',
        description:
          'Commercial and course finishing: long-form assembly, chaptering, motion package and full version stack.',
        features: [
          'Long-form assembly with chapter architecture',
          'Full motion-graphics and data-visualisation package',
          'Advanced cleanup: reverb, hiss, exposure rescue',
          'Multi-ratio masters plus audiogram versions',
          'Course-lesson splitting with metadata sheets',
          'Priority lane with dedicated editor',
        ],
      },
    ],
    marketNote:
      'Dhaka editing rates run ৳500–2,000 per captioned short, ৳1,500–5,000 for simple 8–15 minute YouTube edits, ৳5,000–15,000 with heavy graphics, ৳5,000–25,000 for corporate highlights and ৳15,000–60,000 monthly for weekly output (Nexteix 2026; paikaribaba from ৳800/video). Per-minute benchmarks span ৳500 basic to ৳10,000+ commercial. Our tiers bundle the extras — grade, sound, cutdowns — that itemised freelancers add later.',
    sections: [
      {
        h: 'What separates high-retention editing from cutting',
        p1: 'Cutting removes mistakes; retention editing engineers attention. The difference shows in five decisions: openings rebuilt hook-first instead of chronologically, dead air compressed to sub-second gaps, B-roll proving every claim visually, graphics carrying information the voice skips, and pacing matched to platform — rapid for Shorts, breathing room for corporate.',
        p2: 'Our editors cut for curves, not timelines: retention graphs from your analytics feed back into edit choices, so the second video outperforms the first. Multi-cam sync, audio levelling and colour continuity are table stakes — the craft is knowing which three seconds to delete that you loved and the audience would have skipped.',
      },
      {
        h: 'Long-form to short-form: the repurposing multiplier',
        p1: 'One 90-minute podcast or webinar contains 8–15 viral verticals when mined properly. Our repurposing workflow transcribes, scores moments for hook strength, extracts with context intact, reframes to 9:16 with motion, captions kinetically and designs platform-native SFX. The long video earns search; the shorts earn discovery.',
        p2: 'This is the cheapest content multiplier in Dhaka marketing: the shoot is already paid for, so per-asset cost collapses to editing alone. Monthly creators batch this — one long recording monthly becomes thirty days of posting — which is why retainer editing beats per-video panic buying.',
      },
      {
        h: 'Sound and colour: the polish viewers feel',
        p1: 'Dialogue levelling keeps voices forward while music beds sit exactly 12–18dB beneath — audible energy that never fights speech. Noise removal strips fan hum and room hiss; de-reverb tames reflective rooms; compression evens whisper-to-laugh dynamics. The result plays cleanly on phone speakers, where 80% of Dhaka viewing happens.',
        p2: 'Colour grading moves beyond correction into intention: skin tones naturalised across mixed lighting, brand palettes reinforced, day and night sequences balanced. Commercial edits receive cinema-gamut treatment; creator edits get platform-optimised vibrancy that survives compression.',
      },
      {
        h: 'Revision discipline and turnaround realities',
        p1: 'Two structured revision rounds via timestamped links are standard — specific, frame-referenced, consolidated. What breaks timelines is not revisions but re-briefs: new messages, new audiences, new footage mid-edit. Those receive honest variation quotes instead of silent quality dilution.',
        p2: 'Standard delivery runs 3–5 business days; 24–48 hour express lanes exist for campaign launches at priority rates. Course creators and agencies on weekly schedules get reserved edit capacity — the same editor learns your style, cutting briefing time to near zero within a month.',
      },
      {
        h: 'Freelancer, studio or in-house: the honest maths',
        p1: 'Freelancers win on price for occasional simple cuts (৳800–5,000) but carry availability risk around Eid and exam seasons, plus single-point-of-failure delivery. In-house editors make sense past ~15 videos monthly — but add salary, hardware and licence overhead. Studios win the middle: backup editors, review process, steady deadlines and bundled craft.',
        p2: 'Choose studio editing when publishing weekly, when quality variance costs brand equity, or when deliverables span formats needing grade, sound and versioning together. Pair with podcast production for show workflows, or social batch production when the footage itself needs studio capture first.',
      },
    ],
    costRows: [
      ['Shorts pack: 5 captioned verticals', '৳9,500'],
      ['Creator edit: up to 15 min + 2 cutdowns', '৳22,000'],
      ['Studio suite: up to 30 min + motion package', '৳48,000'],
      ['Monthly weekly-output retainer', '৳35,000–60,000'],
      ['24-hour express edit lane', '+30%'],
    ],
    extraFaqs: [
      {
        q: 'How much does video editing cost in Dhaka?',
        a: 'Captioned shorts ৳500–2,000 each; simple YouTube edits ৳1,500–5,000; heavy-graphics edits ৳5,000–15,000; corporate highlights ৳5,000–25,000; monthly retainers ৳15,000–60,000. Studio bundles with grade and sound start at ৳9,500 per pack.',
      },
      {
        q: 'Can you turn our podcast into Shorts?',
        a: 'Yes — 1–2 hour recordings typically yield 5–15 vertical cutdowns with animated subtitles, zoom cuts and SFX, the highest-ROI repurposing in content marketing.',
      },
      {
        q: 'Is background music copyright-safe?',
        a: 'Fully — every track and effect is commercially licensed, so YouTube, Facebook and Instagram stay strike-free. Licence references ship with delivery.',
      },
    ],
    related: [
      { label: 'Post-production & finishing suite', href: '/studio/post-production/' },
      { label: 'Podcast recording studio', href: '/studio/podcast/' },
      { label: 'Social media video production', href: '/studio/social-media-video-production/' },
      { label: 'Green screen studio', href: '/studio/green-screen-video/' },
    ],
  },

  'voice-over': {
    pricingTitle: 'Voice Over Studio Rates in Dhaka',
    pricingIntro:
      'Broadcast voices in Bangla and English from an isolated vocal booth: short reads at ৳4,500, commercial sessions at ৳9,500, series and course narration from ৳28,000 with mastered WAV delivery.',
    tiers: [
      {
        name: 'Short Read',
        price: '৳4,500',
        priceNote: 'up to 2 min',
        tag: 'IVR & Explainers',
        description:
          'IVR prompts, short explainers and social VO: directed session plus de-breathed, levelled broadcast master.',
        features: [
          'Directed session in isolated vocal booth',
          'Male/female Bangla and English talent roster',
          'De-breathing, de-essing, EQ and compression',
          '24-bit 48kHz WAV broadcast master + MP3',
          'Live in-person or Zoom direction included',
          '24–48 hour standard turnaround',
        ],
      },
      {
        name: 'Commercial VO',
        price: '৳9,500',
        priceNote: 'per commercial',
        tag: 'Most Popular',
        popular: true,
        description:
          'TVC and brand-film narration with performance direction, timing to picture and multilingual options.',
        features: [
          'Performance direction for emotional delivery',
          'Timing and sync to locked picture',
          'Shuddho Bangla, conversational or neutral English',
          'British/American accent options on request',
          'Raw + processed stems for post flexibility',
          'Usage-rights documentation for broadcast',
        ],
      },
      {
        name: 'Series & Course',
        price: '৳28,000',
        priceNote: 'per 60 min',
        tag: 'E-Learning & Docs',
        description:
          'Long-form narration at consistent quality: documentary, audiobook and course modules with session continuity.',
        features: [
          'Multi-session scheduling with voice continuity',
          'Pronunciation glossaries for technical terms',
          'Chaptered delivery with metadata sheets',
          'Pickups and corrections window included',
          'Mixing and mastering to course platforms’ specs',
          'Dedicated engineer across all sessions',
        ],
      },
    ],
    marketNote:
      'Dhaka voice-over benchmarks run ৳3,000–5,000 for short reads up to 10 minutes, with studio rental at ৳1,500/hour and mixing/mastering around ৳6,000 (Bangladhol published rates). Talent fees for commercial usage add ৳5,000–20,000 depending on artist profile. Our tiers bundle booth, engineer, talent coordination and mastering — the four line items that fragmented bookings multiply.',
    sections: [
      {
        h: 'Why booth-recorded voice beats everything else',
        p1: 'Voice carries more trust per second than any visual. But home and office recordings embed room reflections, fan noise and street bleed that no plugin fully removes — listeners perceive the result as amateur before processing a single word. Our acoustically isolated booth with broadcast condensers captures only the voice: warm, detailed, intimate.',
        p2: 'The mastering chain completes it: noise gating, surgical EQ, de-essing harsh consonants, gentle compression for consistency and loudness matching to broadcast standards. Delivered as 24-bit 48kHz WAV, the master drops into any edit — commercial, documentary, e-learning — without further treatment.',
      },
      {
        h: 'Bangla and English: casting for the audience, not the mirror',
        p1: 'Language choice is strategy. Formal Shuddho Bangla suits banking, government-adjacent and premium audiences; conversational Bangla converts mass retail and food; neutral English serves corporate and tech; British or American accents position international products. Miscasting — premium English VO on a mass Bangla offer — quietly halves response.',
        p2: 'Our roster spans male, female and neutral voices across these registers, with audition reads before commitment. Directors attend sessions live or via Zoom, shaping inflection line by line, because the third take with direction consistently beats the tenth without it.',
      },
      {
        h: 'Timing to picture: the commercial discipline',
        p1: 'Commercial VO is choreography: 30 seconds means 30 seconds, with brand name, offer and disclaimer all landing on their visual beats. We record against locked picture with visible timecode, adjusting pace and phrasing in real time until copy, music hits and supers align to the frame.',
        p2: 'Documentary and course narration invert the priority — picture follows voice — so sessions optimise for stamina and consistency: pronunciation glossaries, scheduled breaks, matched tone across days. Both disciplines share one standard: no mouth clicks, no breath gasps, no room — just voice.',
      },
      {
        h: 'Usage rights and talent: the paperwork that protects you',
        p1: 'Commercial voices carry usage scope: duration, media, territory. Broadcast and national-campaign usage commands higher talent fees than in-store loops — and airing beyond scope invites disputes. Our commercial tier documents usage in writing, with buyout and renewal options quoted upfront.',
        p2: 'Bring-your-own-artist sessions are equally welcome: booth plus engineer rental with the same mastering chain, ideal for agencies with roster talent. Remote direction over Zoom or Meet keeps Dhaka traffic out of session scheduling entirely.',
      },
      {
        h: 'Turnaround and pairing with finishing',
        p1: 'Short reads deliver in 24–48 hours from script confirmation; commercials sync within the broader post schedule; series work follows a session calendar with pickups windows. Rush same-day reads are possible for news-cycle and crisis communication at priority rates.',
        p2: 'Voice-over pairs naturally with every production tier: commercial production for TVCs, documentary production for narration, post-production for integrated mastering. Booking voice and finish together removes the most common post delay — waiting on external VO.',
      },
    ],
    costRows: [
      ['Short read up to 2 min + mastered WAV', '৳4,500'],
      ['Commercial VO with direction + rights', '৳9,500'],
      ['Series/course narration per 60 min', '৳28,000'],
      ['Booth + engineer rental (own artist)', '৳1,500/hr'],
      ['Mixing and mastering standalone', '৳6,000'],
    ],
    extraFaqs: [
      {
        q: 'Do you have Bangla and English voice artists?',
        a: 'Yes — male, female and neutral voices across Shuddho Bangla, conversational Bangla, neutral English and British/American accents, with audition reads before you commit.',
      },
      {
        q: 'Can we direct the session remotely?',
        a: 'Yes — attend in the studio lounge or via Zoom/Meet with real-time talkback, shaping inflection line by line as the talent performs.',
      },
      {
        q: 'How fast is delivery?',
        a: 'Short reads in 24–48 hours from script confirmation; commercials within the post schedule; series work on a session calendar with pickups windows.',
      },
    ],
    related: [
      { label: 'Commercial video & TVC production', href: '/studio/commercial-video-production/' },
      { label: 'Documentary production', href: '/studio/documentary-production/' },
      { label: 'Post-production services', href: '/studio/post-production/' },
      { label: 'Podcast recording studio', href: '/studio/podcast/' },
    ],
  },

  'green-screen-video': {
    pricingTitle: 'Green Screen Studio Rates in Dhaka',
    pricingIntro:
      'Evenly lit chroma stage with in-house keying: hourly sessions at ৳3,500 (2-hour minimum), half-day virtual production at ৳19,000, full-day with compositing from ৳39,000.',
    tiers: [
      {
        name: 'Chroma Session',
        price: '৳3,500/hr',
        priceNote: 'min 2 hours',
        tag: 'Space + Crew',
        description:
          'Pre-lit green stage with operator: walk in, present, leave with clean keyable footage the same day.',
        features: [
          'Seamless chroma stage with zero-hot-spot grid',
          'Camera operator + correctly distanced framing',
          'Real-time hardware key preview on monitors',
          'Wardrobe check against green-spill risks',
          'Flat-profile high-bitrate footage handover',
          'Teleprompter available for presenters',
        ],
      },
      {
        name: 'Virtual Half-Day',
        price: '৳19,000',
        priceNote: 'up to 4 hours',
        tag: 'Most Popular',
        popular: true,
        description:
          'Presentations with finished backgrounds: shoot plus keying and compositing into newsroom, classroom or brand sets.',
        features: [
          'Everything in Chroma Session, extended time',
          'Custom virtual set design in your brand style',
          'In-house keying with spill suppression',
          'Slide and screen-capture compositing',
          'Lower thirds and chapter graphics',
          'Finished composite master + transparent ProRes',
        ],
      },
      {
        name: 'VFX Production Day',
        price: '৳39,000',
        priceNote: 'up to 8 hours',
        tag: 'Full Compositing',
        description:
          'Effects-heavy production: multi-subject keys, 3D environments, tracking and broadcast-grade compositing.',
        features: [
          'Full-day stage with gaffer and keying artist',
          'Multi-subject and moving-camera keys',
          '3D virtual environments and camera tracking',
          'Rotoscoping for difficult edges (hair, glass)',
          'Colour matching subjects to virtual light',
          'Priority compositing lane, 5–7 day delivery',
        ],
      },
    ],
    marketNote:
      'Dhaka studio rental with green screen runs ৳1,500–3,000/hour room-only (Agdum, Studio89, Space Mirpur), with operated sessions at ৳2,500/hour and keying/compositing billed as post-production (৳5,000–25,000 by complexity). Bad green screens — uneven light, spill, ragged edges — cost more in rescue compositing than a proper stage saves. Our pre-lit grid exists to make keying a non-event.',
    sections: [
      {
        h: 'What makes a green screen key clean or catastrophic',
        p1: 'Keying quality is decided by physics before software: perfectly even green illumination with no hot spots or falloff, correct subject-to-screen distance preventing spill, and rim lighting that cancels green reflections on hair and shoulders. Our stage is pre-lit for exactly this — calibrated softboxes on the backdrop, separate flattering light on talent.',
        p2: 'Wardrobe discipline completes it: no green tones, no reflective jewellery, no translucent fabrics that pick up spill. We check every presenter before recording, because ten minutes of prevention saves ten hours of rotoscoping. Real-time hardware key preview lets directors see the composite live rather than hoping in post.',
      },
      {
        h: 'Virtual sets: newsrooms, classrooms and brand worlds',
        p1: 'The composited background is a creative decision, not a technical one. News presenters need credible desks with animated graphics walls; educators need clean classroom depth with slide integration; brands need abstract environments in identity colours. We design sets to flatter the subject — depth, parallax and light direction that match the studio lighting.',
        p2: 'Camera movement stays honest: locked or tracked moves that the virtual environment can follow convincingly. The result reads as a ৳5,00,000 set build for a fraction of the cost — particularly powerful for course creators and corporate academies producing volume.',
      },
      {
        h: 'E-learning and corporate training at scale',
        p1: 'Training libraries are green screen’s highest-ROI use: one presenter, one stage, dozens of modules with consistent branding and slide compositing. Chapter graphics, quizzes slates and multilingual subtitle tracks turn recording days into quarter-long curricula.',
        p2: 'Batch recording applies — scripted modules filmed back-to-back with teleprompter pacing, then composited in an assembly line. Per-module cost falls 50%+ versus location filming each lesson, and updates re-record on the identical virtual set years later.',
      },
      {
        h: 'Live keying for webinars and broadcasts',
        p1: 'The production switcher keys in real time, placing presenters inside virtual sets during live broadcast — weather-wall style. Combined with our streaming stack (bonded internet, graphics, simulcast), webinars gain televised production value without physical set construction.',
        p2: 'Rehearsal covers the live-specific risks: presenter eyelines to virtual graphics, slide-click timing, backup backgrounds if feeds degrade. Live keying troubleshooting happens before air, never during.',
      },
      {
        h: 'Booking and preparation checklist',
        p1: 'Share scripts or slides 24 hours early so sets and graphics pre-build; arrive in non-green wardrobe with a backup option; confirm background references or brand guidelines for set design. Sessions start on the hour with the stage already lit — your time buys performance, not setup.',
        p2: 'Pair green screen with video editing for volume compositing, live streaming for broadcast virtual sets, or studio rental when your own crew prefers operating our stage. Transparent ProRes 4444 handover keeps every downstream option open.',
      },
    ],
    costRows: [
      ['Chroma session, operated (2h minimum)', '৳7,000'],
      ['Virtual half-day with compositing', '৳19,000'],
      ['VFX production day with 3D environments', '৳39,000'],
      ['Custom virtual set design', 'from ৳8,000'],
      ['Additional compositing minute', '৳2,000'],
    ],
    extraFaqs: [
      {
        q: 'What should presenters avoid wearing?',
        a: 'Any green clothing or accessories, reflective jewellery, shiny silks and thin translucent fabrics. Bring a backup outfit — we check every presenter before recording.',
      },
      {
        q: 'Can we see the background live while presenting?',
        a: 'Yes — hardware key preview shows the composite on monitors in real time, so presenters can point at virtual graphics accurately.',
      },
      {
        q: 'Do you build custom virtual sets?',
        a: 'Yes — 3D newsrooms, classrooms, corporate stages and branded abstract worlds, with lighting matched to the studio rig for believable composites.',
      },
    ],
    related: [
      { label: 'Studio space rental', href: '/studio/rental/' },
      { label: 'Live streaming services', href: '/studio/live-streaming/' },
      { label: 'Video editing services', href: '/studio/video-editing/' },
      { label: 'Post-production services', href: '/studio/post-production/' },
    ],
  },

  podcast: {
    pricingTitle: 'Podcast Studio Rates in Dhaka',
    pricingIntro:
      'Acoustic multi-mic recording with 4K video: audio sessions at ৳8,000, full video podcasts at ৳18,000, turnkey production with editing and clips at ৳35,000 per episode.',
    tiers: [
      {
        name: 'Audio Podcast Session',
        price: '৳8,000',
        priceNote: 'per session',
        tag: 'Audio Only',
        description:
          'Broadcast audio in acoustic isolation: up to 4 mics, engineer monitoring and mastered loudness-normalised delivery.',
        features: [
          'Up to 2 hours studio time, 4 Shure/RØDE dynamics',
          'Acoustic isolation from Dhaka traffic and hum',
          'Engineer-monitored gain and level riding',
          'Multi-track 24-bit 48kHz WAV exports',
          'Levelling and loudness normalisation included',
          'Raw handover same day, mastered in 48 hours',
        ],
      },
      {
        name: '4K Video Podcast Session',
        price: '৳18,000',
        priceNote: 'per session',
        tag: 'Most Popular',
        popular: true,
        description:
          'YouTube-ready video podcast: 3 cinema 4K angles, ceiling grid lighting and live-switched monitoring.',
        features: [
          'Up to 3 hours: host, guest and wide 4K angles',
          'Broadcast mics for up to 4 speakers',
          'Softbox ceiling grid with backdrop styling',
          'Technical director with live switching monitor',
          'Raw 4K angles + synced multi-track audio',
          'Teleprompter and show-format guidance',
        ],
      },
      {
        name: 'Full Production Suite',
        price: '৳35,000',
        priceNote: 'per episode',
        tag: 'Turnkey Hands-Off',
        description:
          'Record to published: multicam edit, cinematic grade, subtitles, vertical clips and YouTube packaging.',
        features: [
          'Complete 4K multi-camera recording session',
          'Full multicam edit with pacing and switching',
          'DaVinci colour grade and audio sweetening',
          'Bangla and English subtitle authoring',
          '3 hook-driven vertical clips for Reels/Shorts',
          'Thumbnail design and RSS-ready metadata',
        ],
      },
    ],
    marketNote:
      'Dhaka podcast studios charge ৳2,500/hour (Gold, 2-person) to ৳4,500/hour (Platinum) with 2-hour minimums at Black Box Aftabnagar; Desh Shamachar lists ৳3,500–8,000 session packages; Genesis Mirpur DOHS offers 2-camera at ৳3,000–5,000/hour with editing at ৳5,000–9,000 per episode. Our ৳8,000 audio and ৳18,000 video sessions align with premium operated tiers — engineer, isolation and 4K multi-cam included rather than added.',
    sections: [
      {
        h: 'Audio quality is the show: why isolation wins',
        p1: 'Podcast audiences forgive video imperfection but abandon bad audio within minutes. Dhaka’s soundscape — horns, construction, mosque loudspeakers, generator hum — penetrates untreated rooms and home setups. Our acoustic treatment plus broadcast dynamics (which reject room sound by design) capture intimate, present voices regardless of the city outside.',
        p2: 'Engineering matters as much as treatment: monitored gain staging prevents clipping on laughter and whisper-loss on asides, while multi-track recording lets post-production rescue crosstalk and balance speakers individually. The mastered result meets podcast loudness standards across Spotify, YouTube and Apple.',
      },
      {
        h: 'Video podcasts: the YouTube multiplier',
        p1: 'Video versions of podcasts earn on two axes: YouTube search and suggested traffic that audio-only never reaches, plus clip-ability — the 30-second moments that travel on Reels, Shorts and TikTok. Shows recording 4K multi-cam from day one build libraries competitors cannot retrofit.',
        p2: 'Our 3-angle grammar (host, guest, wide conversational) cuts like television: reaction shots, emphasis zooms and natural rhythm. Ceiling-grid lighting flatters without on-camera stands cluttering frame, and backdrop styling signals the show’s positioning — founder authority, creator energy or corporate polish.',
      },
      {
        h: 'Batch seasons: recording a month in a day',
        p1: 'Weekly shows die on logistics, not ideas. Batch recording — 3–4 episodes per studio day with wardrobe rotations — banks a month of publishing in one visit. Preparation compounds: researched questions, timed segments and hook-first cold opens, all reviewed before the record light.',
        p2: 'Recurring weekly slots earn retainer rates and standing calendar priority, with the same engineer learning your voices and preferences. Consistency of sound and look across episodes builds the subconscious quality signal subscribers associate with authority shows.',
      },
      {
        h: 'From episode to ecosystem: clips, captions, discovery',
        p1: 'Full Production clients receive the ecosystem, not just the episode: multicam edit with retention pacing, cinematic grade, bilingual subtitles, three hook-driven verticals and thumbnail plus metadata packaging. Each episode becomes five-plus publishing assets across platforms.',
        p2: 'Discovery compounds through YouTube SEO — titles mapped to real queries, chapters for passage-style surfacing, descriptions with keywords — so back-catalogue episodes generate views months after release. Shows pairing this with social batch strategy grow on both long and short axes simultaneously.',
      },
      {
        h: 'First-timers welcome: how guided sessions work',
        p1: 'No experience needed: the engineer handles mic technique coaching, level checks and session flow while you focus on conversation. Pre-session guidance covers guest briefing, question design and the two-minute setup that prevents ninety percent of beginner issues (water, phones silenced, seating distance).',
        p2: 'Nervous guests relax fast in the conversational format — no memorisation, teleprompter available for intros, and editing removes every stumble. Book a single session to test the format; graduate to weekly retainers when the show finds its rhythm.',
      },
    ],
    costRows: [
      ['Audio session: 2h, 4 mics, mastered WAV/MP3', '৳8,000'],
      ['4K video session: 3h, 3 cameras, raw handover', '৳18,000'],
      ['Full production: edit, grade, subs, 3 clips', '৳35,000'],
      ['Extra vertical clip with captions', '৳2,500'],
      ['Weekly show retainer (4 episodes)', 'from ৳1,20,000/mo'],
    ],
    extraFaqs: [
      {
        q: 'How many people can record at once?',
        a: 'One to four speakers simultaneously, each with an individual Shure/RØDE broadcast dynamic mic and isolated track, across 3 cinema 4K angles.',
      },
      {
        q: 'Do we get edited clips for social media?',
        a: 'Full Production includes 3 hook-driven verticals with kinetic subtitles; additional clips are ৳2,500 each. Raw audio/video handover is same-day.',
      },
      {
        q: 'We have never podcasted — can we still book?',
        a: 'Absolutely. The engineer coaches mic technique, monitors everything live, and editing removes every stumble. Most first-timers record publishable episodes in their first visit.',
      },
    ],
    related: [
      { label: 'Video editing services', href: '/studio/video-editing/' },
      { label: 'Social media video production', href: '/studio/social-media-video-production/' },
      { label: 'Voice over studio', href: '/studio/voice-over/' },
      { label: 'Studio space rental', href: '/studio/rental/' },
    ],
  },

  'product-photography': {
    pricingTitle: 'Product Photography Rates in Dhaka',
    pricingIntro:
      'Marketplace-ready stills with honest per-product math: catalogue sets at ৳1,500 per product, half-day studio banks around 10 products at ৳14,000, lifestyle and model days from ৳34,000.',
    tiers: [
      {
        name: 'Catalogue Five',
        price: '৳7,500',
        priceNote: '5 products',
        tag: '৳1,500 / product',
        description:
          'Daraz/Shopify-ready catalogue: pure-white sets, 3 retouched angles per product, marketplace-ratio exports.',
        features: [
          '5 products, 3 retouched photos each (15 images)',
          'Pure-white RGB 255 compliant backgrounds',
          'Reflection and glare control for tricky materials',
          'Dust cleanup, colour correction, background clipping',
          'Square and vertical ad-format exports',
          'Extra products at ৳1,500, extra angles ৳300',
        ],
      },
      {
        name: 'Half-Day Bank',
        price: '৳14,000',
        priceNote: 'approx 10 products',
        tag: 'Most Popular',
        popular: true,
        description:
          'Volume catalogue day: around 10 products with styling, macro detail and transparent PNG cuts.',
        features: [
          '4-hour studio block with crew and tabletop styling',
          'Approx 10 products, 3 retouched photos each',
          'Macro texture and label detail shots',
          'Transparent-background PNG cuts included',
          '360° multi-angle coverage sets',
          'Raw handover same day, retouched in 3–4 days',
        ],
      },
      {
        name: 'Lifestyle + Model Day',
        price: '৳34,000',
        priceNote: 'full day',
        tag: 'Campaign Visuals',
        description:
          'Advertising-grade storytelling: styled scenes, hand/face models, campaign stills plus product reels.',
        features: [
          'Full-day styled tabletop and lifestyle scenes',
          'Hand/face model direction for cosmetics and gadgets',
          'Creative direction matching campaign identity',
          'Campaign hero stills plus social ad formats',
          'Short product reel add-on available',
          'Priority retouching lane for launch deadlines',
        ],
      },
    ],
    marketNote:
      'Dhaka product photography runs ৳1,000–1,500 per product (3 retouched photos, minimum 5) at Black Box, ৳3,000 per-product / ৳6,000 indoor / ৳12,000 outdoor packages at Studio89, and ৳8,000–14,000 half-day room rates — with full days at ৳14,000–25,000. Macro, jewellery and reflective materials command premiums for reflection-control labour. Our ৳1,500/product catalogue tier matches the honest market middle with retouching genuinely included.',
    sections: [
      {
        h: 'Why marketplace photography decides the sale',
        p1: 'Online buyers cannot touch, weigh or inspect — photographs carry the entire burden of trust. Listings with clean white-background sets, accurate colour and texture macros convert measurably better on Daraz, Shopify and Facebook shops, while phone snapshots invite price haggling and returns. Photography is not decoration; it is the salesperson.',
        p2: 'Compliance matters too: marketplaces enforce background, ratio and resolution standards, and non-compliant listings get suppressed. Every catalogue delivery ships in exact marketplace ratios with pure-white compliance, so listings go live without revision cycles.',
      },
      {
        h: 'The craft: reflection control, colour truth and texture',
        p1: 'Product photography is light engineering. Reflective glass, chrome, jewellery and cosmetics packaging mirror everything — softbox edges, camera, photographer — unless flagged and tented correctly. Our continuous diffuse lighting with tabletop control eliminates glare while preserving the specular highlights that signal premium materials.',
        p2: 'Colour fidelity protects margins: a kurti that photographs orange but arrives rust-red generates returns and one-star reviews. Calibrated capture plus retouching keeps screen colour honest to warehouse reality, and macro detail shots — stitching, labels, textures — answer the inspection questions buyers would ask in person.',
      },
      {
        h: 'Catalogue vs lifestyle: different jobs, different shoots',
        p1: 'Catalogue sets answer what is it: clean, comparable, complete — front, angle, back, detail, packaging. Lifestyle scenes answer why want it: cosmetics on marble with water drops, gadgets in hands, apparel in motion. Catalogue converts search traffic; lifestyle converts social scrollers. Serious brands need both, shot consistently.',
        p2: 'Volume strategy applies: half-day banks cover entire seasonal inventory at falling per-product cost, while lifestyle days build campaign libraries quarterly. Brands launching 20+ SKUs should always prefer day rates over per-product billing — the crossover sits near 8–10 products.',
      },
      {
        h: 'Preparing inventory: the seller’s checklist',
        p1: 'Ship or drop samples to Eurasia Building, ECB Chattar with a shot list: SKUs, priority angles, packaging variants and reference images. Steam apparel, polish reflective goods, charge electronics (screens photograph on), and include every accessory that ships in the box — missing-props reshoots are the classic avoidable cost.',
        p2: 'Fragile, perishable and high-value goods are handled with documented intake and secure storage. Cosmetics and food receive same-day scheduling priority; jewellery shoots include macro planning and security handling protocols.',
      },
      {
        h: 'From stills to motion: reels that reuse the styling',
        p1: 'Styled tabletop scenes photograph and film simultaneously: while lighting is perfect, short product reels with macro moves and kinetic price tags capture motion variants at marginal cost. These reels feed the promotional engine — same products, same styling, new format.',
        p2: 'Pair product photography with commercial production for launch campaigns, or with social batch sessions when monthly new arrivals need continuous content. The studio tabletop becomes your always-ready product stage.',
      },
    ],
    costRows: [
      ['Catalogue set: 5 products × 3 retouched photos', '৳7,500'],
      ['Half-day bank: ~10 products, crew + styling', '৳14,000'],
      ['Lifestyle + model campaign day', '৳34,000'],
      ['Extra retouched angle', '৳300'],
      ['Product reel add-on per product', '৳2,500'],
    ],
    extraFaqs: [
      {
        q: 'Are photos compliant with Daraz and Shopify standards?',
        a: 'Yes — pure-white RGB 255 backgrounds cropped to exact marketplace ratios, with square and vertical ad formats included for social campaigns.',
      },
      {
        q: 'How many photos per product?',
        a: 'Three retouched angles standard (front, 45°, detail macro) with packaging shots on request; extra angles are ৳300 each. Day-rate shoots average 30+ finished images.',
      },
      {
        q: 'Can we courier products to the studio?',
        a: 'Yes — drop off or courier to our 6th-floor ECB Chattar studio with a shot list. Intake is documented; fragile and high-value goods get secure handling.',
      },
    ],
    related: [
      { label: 'Commercial video & TVC production', href: '/studio/commercial-video-production/' },
      { label: 'Promotional video production', href: '/studio/promotional-video-production/' },
      { label: 'Studio space rental', href: '/studio/rental/' },
      { label: 'Video editing services', href: '/studio/video-editing/' },
    ],
  },

  rental: {
    pricingTitle: 'Studio Rental Rates in Dhaka',
    pricingIntro:
      'Quiet, powered, ready-to-shoot space at ECB Chattar: room-only from ৳2,000/hour, operated sessions at ৳2,500/hour, half-days at ৳12,000 and full production days at ৳22,000.',
    tiers: [
      {
        name: 'Hourly Flex',
        price: '৳2,500/hr',
        priceNote: 'min 2 hours',
        tag: 'Your Crew, Our Stage',
        description:
          'Bring cameras and crew to a ready stage: lighting grid, backdrops, power backup and assistant included.',
        features: [
          'Sound-isolated stage with overhead softbox grid',
          'Backdrop of choice rigged before arrival',
          'Generator + IPS backup, high-speed fibre Wi-Fi',
          'Room-only option at ৳2,000/hr with own gear',
          'Makeup vanity, changing area, client lounge',
          'On-site assistant for lighting and facilities',
        ],
      },
      {
        name: 'Half-Day Block',
        price: '৳12,000',
        priceNote: 'up to 4 hours',
        tag: 'Most Popular',
        popular: true,
        description:
          'Half-day production block with operator support: interviews, podcasts, catalogues and YouTube sessions.',
        features: [
          '4-hour exclusive stage reservation',
          'Camera + operator available within block',
          'Green screen or seamless paper configurations',
          'Teleprompter and live monitoring setup',
          'Styling lounge and refreshment service',
          'Parking beside Eurasia Building included',
        ],
      },
      {
        name: 'Full Production Day',
        price: '৳22,000',
        priceNote: 'up to 9 hours',
        tag: 'Maximum Output',
        description:
          'Full-day lockout for batch recording, campaign shoots and multi-setup productions with priority support.',
        features: [
          '9-hour exclusive access with setup evening before',
          'Multiple backdrop changes across the day',
          'Crew catering coordination and rest scheduling',
          'Live-streaming encoder access for hybrid events',
          'Priority rebooking for series productions',
          'Weekend availability at standard rates',
        ],
      },
    ],
    marketNote:
      'Dhaka studio rental runs ৳1,000–1,500/hour basic (Space Mirpur, Agdum, minimum 2 hours), ৳2,000/hour room-only and ৳2,500/hour with camera and operator (Black Box, Dhaka Digital), ৳3,000/hour premium (Studio89), half-days ৳6,000–14,000 and full days ৳15,000–25,000. Power backup, acoustic isolation and elevator access separate real studios from rooms with lights — our ECB Chattar facility prices at the equipped middle with backup genuinely included.',
    sections: [
      {
        h: 'What separates a real studio from a room with lights',
        p1: 'Three infrastructure items decide whether rental saves or costs money: acoustic isolation (so traffic never ruins takes), conditioned power with generator backup (so load-shedding never kills sessions), and an overhead lighting grid (so the floor stays clear of stands and cables). Budget rooms offer none; our stage offers all three as standard.',
        p2: 'The supporting layer matters equally: elevator access to the 6th floor for heavy gear, makeup vanity with proper light, changing privacy, client lounge with monitoring, high-speed fibre for live work, and parking beside the building. These convert rental hours into shooting hours instead of problem-solving hours.',
      },
      {
        h: 'Room-only vs operated: choosing the right mode',
        p1: 'Room-only (৳2,000/hr) suits crews with complete kits and operators — YouTubers, agency teams, photographers — who need space, light and quiet. Operated (৳2,500/hr) adds camera, operator and technical setup for lean teams, solo creators and corporate clients who want to arrive with ideas and leave with footage.',
        p2: 'The crossover is gear transport cost: hauling full lighting, audio and grip across Dhaka traffic often exceeds the ৳500/hour operated premium, before counting setup labour. First-time renters should default to operated; regulars graduate to room-only as their kits grow.',
      },
      {
        h: 'Backdrops, green screen and lighting configurations',
        p1: 'Four seamless options rig before arrival: pure white for e-commerce and interviews, black for drama and premium, neutral grey for corporate versatility, chroma green for virtual sets. RGB tube accents wash sets in brand colours, and the overhead softbox grid dims per scene without moving a single stand.',
        p2: 'Green-screen renters get the pre-lit chroma configuration with correct subject distance marked — keyable footage without gaffer guesswork. Product renters get tabletop staging with macro-friendly continuous light. Tell us the setup when booking; the stage is configured before you climb the elevator.',
      },
      {
        h: 'Location and logistics: ECB Chattar advantage',
        p1: 'Matikata ECB Chattar connects Mirpur DOHS, Banani, Gulshan and Airport Road without old-city congestion, and dedicated parking beside Eurasia Building absorbs crew vehicles and talent cars. The Khan Polli Jame Masjid landmark makes directions foolproof for first-time guests and clients.',
        p2: 'Load-in runs via elevator directly to the 6th floor — no stair carries for heavy cases. Building generator plus in-studio IPS covers switchovers seamlessly; sessions continue through outages that paralyse home and office shoots across the neighbourhood.',
      },
      {
        h: 'Booking rules, rescheduling and peak planning',
        p1: 'Reserve by WhatsApp with date, hours and setup; 50% advance confirms the calendar. Reschedule free with 48-hour notice; peak wedding-season weekends (November–February) book 2–4 weeks ahead while weekday mornings often confirm same-week. Overtime bills per started hour at the booked mode’s rate — no surprise multipliers.',
        p2: 'Series producers get standing weekly slots at retainer rates with priority rebooking, and production houses running multi-day campaigns receive full-day lockouts with evening-before setup. Pair rental with video editing when footage needs finishing, or podcast tiers when shows need engineers rather than just space.',
      },
    ],
    costRows: [
      ['Room-only, own gear (2h minimum)', '৳2,000/hr'],
      ['Operated with camera + operator (2h min)', '৳2,500/hr'],
      ['Half-day exclusive block (4h)', '৳12,000'],
      ['Full production day lockout (9h)', '৳22,000'],
      ['Weekend and overnight sessions', 'standard rates'],
    ],
    extraFaqs: [
      {
        q: 'What is included in basic rental?',
        a: 'Private stage, overhead lighting grid, backdrop of choice, fibre Wi-Fi, makeup and lounge areas, IPS plus generator backup, parking and an on-site assistant — from ৳2,000/hr room-only.',
      },
      {
        q: 'Can we bring our own cameras and lights?',
        a: 'Yes — room-only rental welcomes full external kits via direct elevator load-in. Operated rental adds our camera and operator for ৳500/hour more.',
      },
      {
        q: 'How do we reschedule?',
        a: 'Free rescheduling with 48-hour notice to any open slot. Peak-season weekends book weeks ahead; weekday mornings often confirm same-week.',
      },
    ],
    related: [
      { label: 'Podcast recording studio', href: '/studio/podcast/' },
      { label: 'Green screen studio', href: '/studio/green-screen-video/' },
      { label: 'Commercial product photography', href: '/studio/product-photography/' },
      { label: 'Studio equipment & facilities', href: '/studio/equipment-and-facilities/' },
    ],
  },
};

export default extendedC;
