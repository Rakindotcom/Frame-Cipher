import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function RentalService({ service }) {
  const customData = {
    h1: 'Studio Rental in Dhaka',
    lead: 'If you have your own team and need a dedicated space, you can book the FrameCipher studio by the session. If you need support, ask for a production-supported booking instead. Located on the 6th floor of Eurasia Building, Matikata ECB Chattar, our space features acoustic insulation, overhead ceiling lighting softboxes, multi-color seamless paper backdrops, styling area, and full power backup.',
    whatIncluded: [
      'Private studio room with heavy acoustic treatment shielding street noise',
      'Overhead ceiling lighting grid with motorized dimming softboxes (5600K daylight calibrated)',
      'Multi-color seamless paper backdrops: Pure White, Black, Neutral Grey, Chroma Green',
      'High-speed fiber Wi-Fi connectivity for streaming and remote client monitoring',
      'Client lounge, makeup vanity mirror, wardrobe changing space',
      'Generator & IPS power backup ensuring zero shoot downtime during outages',
      'On-site studio assistant to assist with power and backdrop rigging'
    ],
    serviceTypes: [
      { title: 'Studio-Only Session', desc: 'Best for independent creators, photographers, and agencies with their own equipment.' },
      { title: 'Production-Supported Session', desc: 'Space rental bundled with camera operators, sound engineers, or lighting technicians.' },
      { title: 'Full Production Package', desc: 'Complete end-to-end planning, shooting, and editing handled by our in-house team.' }
    ],
    whyMatters: 'Finding a quiet production studio in Dhaka with reliable electrical backup and overhead lighting grids is difficult. Floor trip hazards from tangled light stands and sudden load-shedding waste expensive production hours. Our facility provides dependable, professional studio infrastructure.',
    howRuns: [
      'Send your preferred date, session length (hourly/half-day/full-day), and content type.',
      'We confirm availability and prepare your requested backdrop.',
      'Arrive with your team, talent, and production gear.',
      'Shoot in a quiet, climate-controlled, well-lit environment.',
      'Wrap session with studio assistant support.'
    ],
    costFactors: [
      'Duration (Hourly rate, Half-day 4 hours, or Full-day 8 hours)',
      'Need for additional specialized lighting or cinema camera rentals',
      'Studio assistant only vs professional camera operator/sound engineer add-ons',
      'Overtime and off-hours arrangements'
    ],
    linksOut: [
      { label: 'Podcast Studio in Dhaka', href: '/studio/podcast/' },
      { label: 'Product Photography Studio', href: '/studio/product-photography/' },
      { label: 'Green Screen Studio', href: '/studio/green-screen-video/' },
      { label: 'Full-Service Video Production', href: '/studio/video-production/' },
      { label: 'Contact & Studio Directions', href: '/studio/contact/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
