import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function EventVideoProductionService({ service }) {
  const customData = {
    h1: 'Event Video Production in Dhaka',
    lead: 'An event is over quickly, but the video can be used for months. FrameCipher Studio produces event video for conferences, launches, seminars, corporate gatherings and celebrations, with editing included when you need highlights, full sessions or social media clips. We capture full keynote speeches and produce high-tempo promotional highlight recap reels.',
    whatIncluded: [
      'Multi-camera roaming videographers with motorized gimbal stabilizers',
      'Direct soundboard audio capture from the venue mixer for clear speeches',
      'Dedicated booth for attendee and VIP speaker micro-interviews',
      'Cinematic event aftermovie (2 to 4 minutes) set to licensed music',
      'Full-length recordings of keynote addresses and panel sessions',
      'Rapid 24-hour teaser cutdowns for same-day/next-day PR publication'
    ],
    serviceTypes: [
      { title: 'Conferences & Business Summits', desc: 'Comprehensive multi-stage coverage for industry conventions.' },
      { title: 'Product Launches & Press Galas', desc: 'Dynamic visual recaps capturing unveiling moments and crowd excitement.' },
      { title: 'Corporate AGMs & Award Ceremonies', desc: 'Formal documentation of leadership speeches and award handovers.' },
      { title: 'Trade Shows & Brand Activations', desc: 'Showcasing exhibition booth engagement and visitor interactions.' }
    ],
    whyMatters: 'Events require fast-moving, experienced crews who know how to capture spontaneous energy without disrupting attendees. We agree the coverage plan before the event, because moments cannot be recreated afterwards.',
    howRuns: [
      'Pre-event briefing to review agenda, VIP attendees, and critical shot priorities.',
      'Venue site inspection to verify acoustics, lighting, and stage positioning.',
      'On-site filming with roving camera operators and direct sound recording.',
      'Fast-turnaround editing, music licensing, sound mastering, and color grading.',
      'Delivery of final highlight aftermovie, keynote archives, and social clips.'
    ],
    costFactors: [
      'Event duration (single-session vs multi-day summit)',
      'Crew size (number of camera operators, audio tech, photographers)',
      'Number of edited deliverables and turnaround speed'
    ],
    linksOut: [
      { label: 'Live Streaming Services', href: '/studio/live-streaming/' },
      { label: 'Corporate Video Production', href: '/studio/corporate-video-production/' },
      { label: 'Video Editing Services', href: '/studio/video-editing/' },
      { label: 'Social Media Video Production', href: '/studio/social-media-video-production/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
