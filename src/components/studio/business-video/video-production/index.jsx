import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function VideoProductionService({ service }) {
  const customData = {
    h1: 'Full-Service Video Production in Dhaka',
    lead: 'FrameCipher Studio is a video production studio in Dhaka that plans, shoots and edits video for businesses, brands and creators. You can book the studio for a single shoot or work with us from the first brief to the final export, so one team stays responsible for how the video turns out. Before production starts, we agree the purpose, audience, format and deliverables in writing, so the shoot and the edit are planned around how the video will actually be used.',
    whatIncluded: [
      'Pre-production: brief, concept, script or talking points, shot list and schedule',
      'Production: a studio or on-location shoot with the agreed crew and equipment',
      'Post-production: editing, colour correction, audio cleanup, captions and branded elements',
      'Delivery: files exported for the platforms you named',
      'Structured revision rounds as set out in your quote',
      'Controlled acoustics and calibrated overhead softbox lighting grid in our Dhaka studio'
    ],
    serviceTypes: [
      { title: 'Corporate Videos', desc: 'Company profiles, leadership interviews, investor masterclasses, and culture films.' },
      { title: 'Commercials & TVCs', desc: 'Brand commercial spots, product ads, and high-retention digital campaign video.' },
      { title: 'Promotional Videos', desc: 'Product launches, service explainers, seasonal offers, and event teasers.' },
      { title: 'Social Media Video', desc: 'Batch-produced vertical 9:16 videos for TikTok, Reels, and YouTube Shorts.' },
      { title: 'Event Coverage', desc: 'Conference keynotes, summit recaps, and corporate gathering aftermovies.' },
      { title: 'Documentaries', desc: 'Story-led social impact films, organizational histories, and founder profiles.' }
    ],
    whyMatters: 'Unplanned video usually shows its problems on screen: uneven audio, inconsistent lighting, unclear messaging and footage that cannot be cut into the formats you need. A planned shoot in a controlled studio reduces these risks and makes the edit faster to review.',
    howRuns: [
      'Tell us your goal, audience and where the video will be published.',
      'We define the scope, deliverables, schedule and responsibilities.',
      'You confirm the quote and booking terms.',
      'We prepare and shoot in our studio or on location.',
      'We edit, share the draft for feedback and deliver the final files.'
    ],
    costFactors: [
      'Length and number of finished videos',
      'Studio hours and crew size (Director, DOP, Gaffer, Audio Engineer)',
      'Talent, props, locations and set requirements',
      'Editing complexity, captions, graphics and audio work',
      'Delivery deadline urgency'
    ],
    linksOut: [
      { label: 'Corporate Video Production', href: '/studio/corporate-video-production/' },
      { label: 'Commercial Video Production', href: '/studio/commercial-video-production/' },
      { label: 'Promotional Video Production', href: '/studio/promotional-video-production/' },
      { label: 'Social Media Video Production', href: '/studio/social-media-video-production/' },
      { label: 'Post-Production Services', href: '/studio/post-production/' },
      { label: 'Studio Production Pricing', href: '/studio/pricing/' },
      { label: 'Studio Portfolio', href: '/studio/portfolio/' },
      { label: 'Contact & Booking', href: '/studio/contact/' }
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
