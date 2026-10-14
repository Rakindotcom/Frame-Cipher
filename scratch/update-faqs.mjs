import fs from 'fs';
import path from 'path';

const studioServicesPath = path.resolve('./src/data/studioServices.js');

const faqsData = {
  'video-production': [
    {
      q: 'What is included in a full video production package?',
      a: 'Full production includes pre-production planning, script development, studio or location filming, lighting direction, broadcast audio recording, editing, DaVinci Resolve color grading, sound design, and platform-specific master exports.',
    },
    {
      q: 'Where is your video production studio located in Dhaka?',
      a: 'Our physical studio is located on the 6th Floor of Eurasia Building, next to Khan Polli Jame Masjid, at Matikata ECB Chattar, Dhaka 1206. Centrally connected to Mirpur DOHS, Banani, and Airport Road.',
    },
    {
      q: 'Can you shoot on-location outside your studio?',
      a: 'Yes. In addition to our in-house studio stage, our production crews conduct multi-camera on-location filming at corporate headquarters, manufacturing plants, hospitals, and event venues across Bangladesh.',
    },
    {
      q: 'Can we review recorded takes live on a client monitor during the shoot?',
      a: 'Yes. Our studio and field setups feature calibrated wireless director monitors in the client lounge, allowing your marketing team and stakeholders to review takes in real time.',
    },
  ],
  'corporate-video-production': [
    {
      q: 'Can non-actors or first-time executives look natural on camera?',
      a: 'Yes. Our professional teleprompter operator controls reading speed naturally, and our director conducts conversational interview techniques to bring out relaxed, authoritative, and authentic performances.',
    },
    {
      q: 'Do you provide on-site b-roll shooting at our corporate office?',
      a: 'Yes. We frequently combine a controlled, quiet studio interview at ECB Chattar with on-location office and facility b-roll to create a cohesive corporate brand story.',
    },
    {
      q: 'Do you offer bilingual voiceovers and subtitle translations in Bangla and English?',
      a: 'Yes. All corporate video packages can include native Bangla and English voiceovers, as well as synchronized SRT subtitle files formatted for international stakeholder presentations and LinkedIn.',
    },
    {
      q: 'What is the standard turnaround time for corporate overview films?',
      a: 'Standard delivery is 5 to 7 business days from the final filming date. We also provide express 48-hour turnarounds for urgent board meetings, investor pitches, or annual general meetings (AGMs).',
    },
  ],
  'commercial-video-production': [
    {
      q: 'Do you produce television-compliant commercials (TVC)?',
      a: 'Yes. We deliver commercials formatted and mastered to the exact technical and audio loudness specifications (EBU R128) required by Bangladesh television broadcast networks and cinema screens.',
    },
    {
      q: 'What aspect ratios and video formats do you deliver for digital advertising?',
      a: 'We deliver custom exports in 16:9 widescreen for TV and YouTube, 1:1 square for Facebook feeds, and 9:16 vertical for Instagram Reels and TikTok ads with safe-zone margin calibrations.',
    },
    {
      q: 'How does FrameCipher handle casting, actors, and styling for commercial shoots?',
      a: 'We manage complete talent casting, wardrobe coordination, and professional on-set makeup artists tailored to your brand persona and target demographic.',
    },
    {
      q: 'What is your standard production timeline for a commercial campaign?',
      a: 'Commercial campaigns typically take 10 to 14 business days from storyboard approval to final master exports, encompassing set preparation, filming, visual effects, and color timing.',
    },
  ],
  'promotional-video-production': [
    {
      q: 'How fast can a promotional campaign video be delivered?',
      a: 'For urgent product launches, flash sales, or seasonal holiday campaigns, we offer an express 48-hour delivery timeline upon script sign-off.',
    },
    {
      q: 'Can you create product launch videos that drive direct conversions for ecommerce?',
      a: 'Yes. Our promotional videos are structured around direct-response frameworks: strong opening visual hooks, clear value demonstrations, kinetic pricing badges, and compelling calls-to-action.',
    },
    {
      q: 'Do promotional packages include multiple cut-down variations?',
      a: 'Yes. Every promotional package includes the full master video plus shorter cut-down teasers (15s, 30s, and 60s) optimized for Instagram Stories, TikTok, and YouTube Pre-roll ads.',
    },
    {
      q: 'Can promotional videos be filmed inside our retail outlet or showroom in Dhaka?',
      a: 'Yes. Our mobile production team can bring portable softbox lighting and gimbal stabilizers directly to your retail outlet, flagship store, or showroom anywhere in Dhaka.',
    },
  ],
  'video-marketing': [
    {
      q: 'How does video marketing differ from standard video production?',
      a: 'Standard video production focuses strictly on filming. Video marketing includes in-depth audience research, full-funnel positioning, search query targeting, conversion-focused scriptwriting, and post-launch media distribution.',
    },
    {
      q: 'How do you optimize videos for YouTube search and Google video ranking?',
      a: 'We optimize video titles, write rich keyword-dense descriptions, research high-volume search tags, structure semantic chapter timestamps, and design high-CTR custom thumbnail artwork.',
    },
    {
      q: 'Can you help distribute and run paid video campaigns across Meta and Google Ads?',
      a: 'Yes. FrameCipher is a full-service growth agency. Our paid media specialists can directly deploy, test, and scale your videos across Meta Ads, Google Ads, and TikTok with strict ROAS discipline.',
    },
    {
      q: 'Do you create multiple opening hooks for A/B creative testing?',
      a: 'Yes. We film 3 to 5 alternative opening hooks (first 3 seconds) for the same core video, allowing you to test which visual angle delivers the highest thumb-stop rate and lowest cost per lead.',
    },
  ],
  'social-media-video-production': [
    {
      q: 'Can we batch-record multiple shorts in one studio visit?',
      a: 'Yes. Our batch-production workflow allows creators, brands, and executives to record 10 to 20 scripted vertical shorts in a single 4-hour studio session at Matikata ECB Chattar.',
    },
    {
      q: 'How many vertical reels or TikToks can be produced in a single session?',
      a: 'In a half-day session (4 hours), clients typically record 10 to 15 finished short-form clips. For full-day sessions (8 hours), we can capture up to 25 to 30 vertical videos.',
    },
    {
      q: 'Are animated kinetic captions and trending background audio included?',
      a: 'Yes. All social clips include modern dynamic subtitles (with highlighted keyword styling in English or Bangla), sound effect cues (whooshes, pops), and commercial-licensed background music.',
    },
    {
      q: 'Do you provide hook scripting and trend guidance before recording?',
      a: 'Yes. We provide pre-shoot creative consulting to refine your scripts, ensuring every video hooks viewers in the first 2 seconds and complies with TikTok and Instagram algorithmic retention models.',
    },
  ],
  'live-streaming': [
    {
      q: 'How do you prevent internet drops during live streaming?',
      a: 'We deploy dedicated commercial optical fiber internet lines combined with multi-SIM cellular bonding hardware to guarantee failover redundancy and uninterrupted broadcast stability.',
    },
    {
      q: 'Can you live-stream simultaneously to multiple platforms (Simulcast)?',
      a: 'Yes. We can broadcast your live stream concurrently to YouTube Live, Facebook Live, LinkedIn Live, and private corporate web portals (Zoom, Webex, Microsoft Teams) at 1080p 60fps.',
    },
    {
      q: 'What audio and multi-camera setup is provided for studio live broadcasts?',
      a: 'We provide up to 4 broadcast cameras switched live via hardware production switchers, wireless digital lapel microphones, and an on-site audio technician managing dynamic loudness.',
    },
    {
      q: 'Can you incorporate live graphics, lower thirds, and remote guest feeds?',
      a: 'Yes. We integrate animated speaker lower thirds, corporate logos, countdown timers, PowerPoint presentation slides, live audience polls, and remote Zoom/Skype caller feeds in real time.',
    },
  ],
  'event-video-production': [
    {
      q: 'How quickly can we get a recap video for our social media PR?',
      a: 'We can deliver a 60-second social media highlight teaser within 24 hours of event completion, allowing your PR team to capitalize on immediate post-event media buzz.',
    },
    {
      q: 'Do you cover multi-day corporate conferences and exhibitions outside Dhaka?',
      a: 'Yes. Our event cinematography crews frequently travel across Bangladesh (Chattogram, Cox’s Bazar, Sylhet) to cover multi-day trade expos, corporate retreats, and industry conferences.',
    },
    {
      q: 'How do you ensure clean audio recording in noisy conference halls?',
      a: 'We connect directly to the venue soundboard using balanced XLR lines to record master speaker audio, backed up with dedicated wireless lavaliers and shotgun ambient microphones.',
    },
    {
      q: 'Can we get full unedited recordings of keynote speeches along with the highlights?',
      a: 'Yes. All event coverage packages include both the edited cinematic highlight aftermovie (2 to 4 minutes) and full-length multi-camera recordings of keynote presentations and panel discussions.',
    },
  ],
  'documentary-production': [
    {
      q: 'Do you work with NGOs and international development agencies?',
      a: 'Yes. We have extensive experience producing impact documentaries for international development organizations, NGOs, corporate CSR initiatives, and cultural institutions across Bangladesh.',
    },
    {
      q: 'How do you manage field shoots and rural interviews across remote areas?',
      a: 'Our field production crews travel self-sufficiently with portable cinema cameras, drone equipment, battery power banks, and weather-sealed audio gear capable of filming in remote riverine and rural districts.',
    },
    {
      q: 'Do you handle ethical consents, localized dialect translation, and multilingual subtitling?',
      a: 'Yes. We adhere to international ethical filming standards, securing informed consent from interviewees and providing accurate translation and subtitling in both formal Bangla, regional dialects, and English.',
    },
    {
      q: 'What is the typical production timeline for a short impact documentary?',
      a: 'A 10 to 20-minute documentary typically takes 3 to 5 weeks from initial research and field shooting to final DaVinci Resolve color grading and master sound design.',
    },
  ],
  'property-videography': [
    {
      q: 'Can you include a host or real estate agent presenting the property?',
      a: 'Yes. We can mic up your real estate agent or developer representative with broadcast wireless audio, guide their delivery on camera, and provide an optional portable teleprompter.',
    },
    {
      q: 'Do you provide 4K cinematic walkthroughs, drone aerial shots, and vertical reels?',
      a: 'Yes. We deliver complete real estate media packages: smooth motorized gimbal interior walkthroughs, certified drone aerial neighborhood captures, and high-energy 9:16 vertical reels for social ads.',
    },
    {
      q: 'How should we prepare an apartment, penthouse, or commercial building before the shoot?',
      a: 'The property should be deep-cleaned, all interior lights turned on, personal clutter removed, curtains neatly drawn to maximize natural window light, and staging furniture arranged prior to our crew arrival.',
    },
    {
      q: 'What is the delivery timeframe for property marketing videos?',
      a: 'Edited property walkthrough videos and social media reels are typically delivered within 3 to 4 business days following the on-site shoot.',
    },
  ],
  'wedding-videography': [
    {
      q: 'How far in advance should we book wedding dates?',
      a: 'We recommend booking 1 to 3 months in advance to secure your dates in our production calendar, especially during peak wedding seasons in Dhaka (November through February).',
    },
    {
      q: 'What is the difference between a cinematic wedding film and traditional coverage?',
      a: 'Traditional coverage is a static, continuous recording of the stage. Our cinematic wedding films use narrative storytelling, emotive music scoring, color grading, and candid b-roll to create an emotional movie of your celebration.',
    },
    {
      q: 'How quickly do we receive the 1-minute Instagram teaser and the full ceremony video?',
      a: 'We deliver your 60-second social media teaser reel within 5 to 7 days after the event. The full cinematic highlight film and ceremony documentary edit are completed within 3 to 4 weeks.',
    },
    {
      q: 'Do you travel across Bangladesh or internationally for destination weddings?',
      a: 'Yes. Our wedding cinematography team is available for destination weddings across Bangladesh (Sylhet, Chattogram, Cox’s Bazar) as well as international destination shoots upon request.',
    },
  ],
  'family-video-productions': [
    {
      q: 'Can the interview be conducted in our family residence?',
      a: 'Yes. Our team can bring portable softbox lighting, acoustic sound blankets, and quiet audio gear directly to your family residence in Dhaka to ensure elders feel relaxed in familiar surroundings.',
    },
    {
      q: 'What themes or milestones do family documentary films usually commemorate?',
      a: 'We produce films for golden wedding anniversaries, 70th/80th milestone birthdays, generational family business biographies, and memorial tribute archives celebrating the life stories of elders.',
    },
    {
      q: 'How do you help camera-shy elders and children feel comfortable during filming?',
      a: 'Our director uses an empathetic, conversational interview format rather than a formal camera interrogation. We chat casually, allowing stories to unfold naturally with patience and respect.',
    },
    {
      q: 'Can we integrate old analog photographs, VHS tapes, and archival family documents?',
      a: 'Yes. We provide high-resolution digital scanning, dust cleanup, and color restoration for vintage family photos, seamlessly editing them into the video alongside the spoken reflections.',
    },
  ],
  'post-production': [
    {
      q: 'Can we send external footage filmed elsewhere for post-production?',
      a: 'Yes. We regularly handle post-production for footage filmed outside our studio across Bangladesh and internationally. You can deliver files via physical SSD or high-speed cloud transfer (Dropbox/Google Drive).',
    },
    {
      q: 'What file formats and color log profiles (Sony S-Log3, Canon C-Log, ProRes) do you grade?',
      a: 'We grade all major camera profiles in DaVinci Resolve Studio: Sony S-Log3/S-Gamut3.Cine, Canon C-Log2/3, ARRI LogC, Blackmagic RAW, REDCODE RAW, and Apple ProRes on color-calibrated monitors.',
    },
    {
      q: 'What tools and audio suites does FrameCipher Studio use for sound mastering?',
      a: 'We utilize iZotope RX Advanced for dialogue cleanup (spectral de-noise, de-reverb, de-click) and professional DAWs for EQ, compression, and loudness compliance conforming to broadcast standards.',
    },
    {
      q: 'How do clients review cuts and leave frame-accurate timestamped feedback?',
      a: 'We share secure cloud review links where your creative directors and stakeholders can leave frame-accurate comments, visual sketches, and revision notes directly on the video player.',
    },
  ],
  'video-editing': [
    {
      q: 'How do you handle revisions on editing projects?',
      a: 'Every editing project includes 2 structured revision rounds via timestamped cloud review links to ensure complete satisfaction without scope confusion.',
    },
    {
      q: 'Can you edit long-form videos into high-retention short vertical clips for social media?',
      a: 'Yes. We can ingest 1 to 2-hour podcasts or webinars and extract 5 to 15 viral vertical cutdowns (9:16) with animated subtitles, zoom cuts, and sound effects for Reels, TikTok, and YouTube Shorts.',
    },
    {
      q: 'What is the typical delivery timeline for an edited video project?',
      a: 'Standard video edits are delivered within 3 to 5 business days. Express 24-hour and 48-hour turnarounds are available for time-sensitive social media campaigns.',
    },
    {
      q: 'Do you license royalty-free commercial background music and sound effects?',
      a: 'Yes. All background tracks, risers, whooshes, and sound effects used in our edits are 100% commercially licensed with zero copyright strikes on YouTube, Facebook, or Instagram.',
    },
  ],
  'voice-over': [
    {
      q: 'Do you have native Bangla and English voiceover artists?',
      a: 'Yes. We have a roster of verified voice artists across male, female, neutral English, British/American accent, formal standard Bangla (shuddho bhasha), and conversational styles.',
    },
    {
      q: 'Can clients listen in and direct the voiceover talent live during recording?',
      a: 'Yes. You can participate in the recording session either in person at our studio lounge or remotely via Zoom/Google Meet, providing real-time direction and inflection guidance to the talent.',
    },
    {
      q: 'What turnaround time can we expect for commercials and explainer voiceovers?',
      a: 'Standard commercial scripts under 2 minutes are recorded, edited, de-breathed, and delivered within 24 to 48 hours from script confirmation.',
    },
    {
      q: 'Are voice recordings fully mastered and delivered broadcast-ready?',
      a: 'Yes. We deliver 24-bit 48kHz WAV masters that have undergone acoustic vocal processing: noise gate, de-essing, surgical EQ, subtle compression, and loudness matching.',
    },
  ],
  'green-screen-video': [
    {
      q: 'What should on-camera subjects avoid wearing on green screen?',
      a: 'Subjects must strictly avoid wearing green clothing or accessories, as well as highly reflective jewelry, shiny silk fabrics, or thin translucent green-tinted glasses.',
    },
    {
      q: 'Do you provide custom virtual backgrounds, newsrooms, and 3D studio sets?',
      a: 'Yes. We can design and composite 3D virtual newsrooms, corporate stages, modern lofts, or branded abstract backgrounds that match your company’s aesthetic.',
    },
    {
      q: 'How do your gaffers eliminate green color spill on subjects’ hair and shoulders?',
      a: 'Our studio is pre-lit with balanced overhead softboxes for the green backdrop and dedicated magenta/warm rim backlights on the subject to cancel out and neutralize green reflections.',
    },
    {
      q: 'Can green screen sessions be monitored in real time with live background keying?',
      a: 'Yes. Our production switcher supports real-time hardware chroma keying, allowing presenters and directors to see the keyed composite on live monitors during recording.',
    },
  ],
  'podcast': [
    {
      q: 'Can we record both audio and multi-camera video podcasts?',
      a: 'Yes. Our studio setup is configured with multi-angle 4K cameras and broadcast dynamic microphones to produce simultaneous high-fidelity audio and video.',
    },
    {
      q: 'Do you provide editing and vertical clips from our session?',
      a: 'Yes. In our production packages, we handle full multi-cam switching, speech audio leveling, color grading, and extract high-engagement vertical reels with subtitles.',
    },
    {
      q: 'Can beginners with no podcasting experience book?',
      a: 'Absolutely. Our in-house sound engineer tests microphone technique and monitors audio levels throughout your entire session.',
    },
    {
      q: 'How many studio cameras and broadcast microphones are provided for podcast recordings?',
      a: 'We support 1 to 4 in-person speakers simultaneously with individual Shure/Rode broadcast dynamic microphones and up to 3 cinema 4K camera angles (host, guest, and wide table shot).',
    },
  ],
  'product-photography': [
    {
      q: 'Are your photos compliant with Daraz and Shopify requirements?',
      a: 'Yes. We provide pure white background (RGB 255,255,255) images cropped to exact e-commerce marketplace ratios.',
    },
    {
      q: 'How many photos do we receive per product?',
      a: 'A standard shoot covers 4 to 6 angles per product (front, back, 45-degree angle, detail macro, packaging). Custom shot lists are confirmed in advance.',
    },
    {
      q: 'Can we ship or drop off products at your ECB Chattar studio?',
      a: 'Yes. You can drop off or courier your inventory samples directly to our 6th-floor studio at Eurasia Building, Matikata ECB Chattar.',
    },
    {
      q: 'Can you shoot lifestyle product photos with human models alongside white background shots?',
      a: 'Yes. We offer combined packages featuring pure white e-commerce catalog cutouts alongside styled lifestyle tabletop scenes and hand/face model demonstrations for cosmetics, jewelry, and gadgets.',
    },
  ],
  'rental': [
    {
      q: 'What is included in the basic studio rental fee?',
      a: 'Rental includes private studio access, baseline continuous overhead lighting, your choice of backdrop, high-speed Wi-Fi, makeup area, and IPS power backup.',
    },
    {
      q: 'Can we bring our own lighting and cameras?',
      a: 'Yes. You are welcome to bring your own cameras, audio gear, and lighting fixtures.',
    },
    {
      q: 'Where can our crew park at ECB Chattar?',
      a: 'Dedicated vehicle parking is available adjacent to Eurasia Building and Khan Polli Jame Masjid.',
    },
    {
      q: 'Does studio rental include an on-site technician for assistance?',
      a: 'Yes. A studio assistant is always on-site to help position lighting grids, change seamless paper backdrops, manage power outlets, and ensure your team has a seamless shooting experience.',
    },
  ],
  'portfolio': [
    {
      q: 'Can we see raw versus color-graded comparisons?',
      a: 'Yes. Contact our team and we will share before-and-after grading reels from DaVinci Resolve demonstrating our dynamic range and color craft.',
    },
    {
      q: 'Which brands, corporate leaders, and creators have produced videos at FrameCipher Studio?',
      a: 'We have produced video campaigns, podcasts, and commercial visual media for leading corporate enterprises, fintech startups, fashion apparel brands, and top YouTube creators in Bangladesh.',
    },
    {
      q: 'Can you share case studies with verified audience retention and conversion metrics?',
      a: 'Yes. Beyond visuals, we can share documented case studies highlighting how our video creative boosted ROAS, click-through rates, and YouTube watch-time for commercial clients.',
    },
    {
      q: 'How do we request a private screening or review relevant industry-specific samples?',
      a: 'Message our team on WhatsApp (+880 1768-146650) with your industry niche, and we will send a curated private showreel link matching your exact aesthetic requirements.',
    },
  ],
  'process': [
    {
      q: 'How long does a complete project take from briefing to delivery?',
      a: 'Standard projects take between 5 to 10 working days, with express turnarounds available on request.',
    },
    {
      q: 'What happens during the initial creative briefing and scriptwriting stage?',
      a: 'We review your target audience, commercial goals, core message, visual moodboard, and deliverable specs. Once the script, storyboard, and shot list are approved, we schedule studio filming.',
    },
    {
      q: 'How many rounds of revisions are included in our standard production agreement?',
      a: 'Every project includes 2 comprehensive revision rounds. You receive a secure cloud review link where stakeholders can leave frame-by-frame timestamped comments.',
    },
    {
      q: 'What file transfer methods and storage archives do you provide for final masters?',
      a: 'Final masters are delivered via private cloud download links (ProRes 422 HQ and high-bitrate MP4). We also maintain a secure 60-day project archive should you require future revisions or re-exports.',
    },
  ],
  'pricing': [
    {
      q: 'Do you require an advance deposit to confirm bookings?',
      a: 'Yes. A standard 50% advance secures your reserved studio calendar date, with the balance due upon final deliverable sign-off.',
    },
    {
      q: 'What payment methods do you accept in Dhaka?',
      a: 'We accept corporate bank wire transfers, account payee cheques, bKash Merchant, Nagad, and cash payment with formal VAT-compliant invoices for corporate accounting.',
    },
    {
      q: 'Are discounts available for recurring monthly content retainers or bulk podcast shoots?',
      a: 'Yes. We offer retainer packages for brands and creators committing to monthly batch shoots (e.g., weekly podcasts or 20 monthly reels), offering significant savings over single-session bookings.',
    },
    {
      q: 'What costs could cause a quote to increase beyond the baseline package?',
      a: 'Additional costs only apply if you request extra shooting hours, specialized cast actors/models, complex 3D visual effects, or expedited same-day/24-hour turnaround rushes.',
    },
  ],
  'equipment-and-facilities': [
    {
      q: 'What is the ceiling height and studio floor dimension?',
      a: 'Our studio comfortably accommodates 4 to 6 on-camera participants with optimal camera-to-subject focal distances, high ceilings, and an overhead lighting grid.',
    },
    {
      q: 'What primary camera bodies and cinema lenses are available in-house?',
      a: 'Our in-house inventory includes full-frame 4K cinema cameras, ultra-sharp prime lenses, fast zoom lenses, motorized gimbals, and teleprompter systems.',
    },
    {
      q: 'What lighting fixtures, softboxes, and acoustic treatments are installed at the studio?',
      a: 'We feature high-CRI continuous LED softboxes, RGB accent tube lights, hair rims, seamless backdrops, and acoustic wall panels that dampen room echo and exterior street noise.',
    },
    {
      q: 'Is there a private dressing room, makeup mirror, and client lounge at the ECB Chattar facility?',
      a: 'Yes. Our 6th-floor facility features a dedicated client lounge with viewing monitors, high-speed Wi-Fi, private changing room, and an illuminated makeup vanity mirror.',
    },
  ],
  'faq': [
    {
      q: 'How do I reach the studio by public transport or car?',
      a: 'The studio is at Matikata ECB Chattar, directly off the Mirpur DOHS - Banani flyover access road. Dedicated car parking is available adjacent to the building.',
    },
    {
      q: 'Can I reschedule my booking if my team is delayed?',
      a: 'Yes. With at least 48 hours notice, sessions can be rescheduled to any available calendar slot without penalty.',
    },
    {
      q: 'What power backup (generator/IPS) is in place during load shedding in Dhaka?',
      a: 'Our facility has uninterrupted power systems (UPS/IPS) and building generator backup, ensuring your shoot and recordings never suffer power interruption or data loss.',
    },
    {
      q: 'Can clients bring outside catering, snacks, or coffee into the studio space?',
      a: 'Yes. Clients are welcome to bring refreshments into our client lounge area. Complimentary mineral water, tea, and high-speed Wi-Fi are provided for all booked sessions.',
    },
  ],
  'contact': [
    {
      q: 'What is the exact studio phone number?',
      a: 'You can call or WhatsApp our studio team directly at +880 1768-146650.',
    },
    {
      q: 'What are your operational hours?',
      a: 'We operate 24 hours a day, 7 days a week, with all shoots scheduled by advance appointment.',
    },
    {
      q: 'How quickly can we schedule a walkthrough visit to inspect the studio facilities?',
      a: 'You can schedule a studio walkthrough same-day or next-day by messaging us on WhatsApp (+880 1768-146650) to verify acoustic isolation and lighting before booking.',
    },
    {
      q: 'Can we send project reference reels or storyboards via WhatsApp before booking?',
      a: 'Yes. You can share your reference videos, moodboards, or script outlines directly with our directors on WhatsApp for an immediate technical assessment and itemized quote.',
    },
  ],
};

let content = fs.readFileSync(studioServicesPath, 'utf8');

// For each slug, find the service block and replace its faqs: [ ... ]
for (const [slug, faqs] of Object.entries(faqsData)) {
  const slugRegex = new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?faqs:\\s*\\[)[\\s\\S]*?(\\n\\s*\\],)`, 'm');
  const match = content.match(slugRegex);
  if (!match) {
    console.error(`Could not find faqs for slug: ${slug}`);
    continue;
  }

  const formattedFaqs = faqs.map(f => {
    return `      {\n        q: ${JSON.stringify(f.q)},\n        a: ${JSON.stringify(f.a)},\n      },`;
  }).join('\n');

  const replacement = `${match[1]}\n${formattedFaqs}\n    ],`;
  content = content.replace(slugRegex, replacement);
  console.log(`Updated ${slug} with ${faqs.length} FAQs`);
}

fs.writeFileSync(studioServicesPath, content, 'utf8');
console.log('Successfully updated studioServices.js!');
