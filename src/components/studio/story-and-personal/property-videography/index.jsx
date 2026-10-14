import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function PropertyVideographyService({ service }) {
  const customData = {
    h1: 'Property Videography in Dhaka',
    lead: 'Property video shows space, light and layout in a way photographs cannot. FrameCipher Studio produces videos for apartments, houses, commercial spaces and development projects for agents, developers and owners across Dhaka (Gulshan, Banani, Uttara, Mirpur DOHS, Bashundhara).',
    whatIncluded: [
      'Ultra-wide cinema lens coverage revealing natural spatial proportions without distortion',
      'Motorized 3-axis gimbal stabilizers creating seamless physical walk-throughs',
      'Calibrated interior lighting balancing interior room tones with window views',
      'Microphone setup for host-presented real estate tours if desired',
      'Post-production: kinetic pacing, developer branding, contact details, and music licensing',
      'Multi-format delivery: 16:9 master video plus vertical 9:16 cuts for Reels and TikTok'
    ],
    serviceTypes: [
      { title: 'Apartment & Penthouse Walkthroughs', desc: 'Detailed spatial walk-throughs highlighting layout, fittings, and views.' },
      { title: 'Commercial Real Estate Showcases', desc: 'Showcasing corporate office towers, retail complexes, and co-working hubs.' },
      { title: 'Real Estate Development Promos', desc: 'High-concept promo films marketing upcoming luxury residential projects.' },
      { title: 'Short Social Media Property Listings', desc: 'Fast-paced vertical tours tailored for Instagram and Facebook ads.' }
    ],
    whyMatters: 'Photos present details quickly and suit listing pages. Video shows flow, space and light and suits promotion. For most properties, the strongest approach uses both. Staged, well-lit spaces film significantly better and attract qualified buyers faster.',
    howRuns: [
      'Consultation on property size, location, and key architectural highlights.',
      'Staging and prep guidance before the camera crew arrives on-site.',
      'Half-day or full-day shoot covering interior flow and exterior architecture.',
      'Color grading to ensure authentic daylight and rich interior textures.',
      'Delivery of high-definition listing video and vertical marketing reels.'
    ],
    costFactors: [
      'Total square footage of the property',
      'Residential apartment vs multi-story commercial complex',
      'Inclusion of host/agent presentation on camera',
      'Turnaround urgency for active property sales'
    ],
    linksOut: [
      { label: 'Promotional Video Production', href: '/studio/promotional-video-production/' },
      { label: 'Social Media Video Production', href: '/studio/social-media-video-production/' },
      { label: 'Video Editing Services', href: '/studio/video-editing/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
