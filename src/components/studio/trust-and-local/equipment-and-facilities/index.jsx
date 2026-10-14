import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function EquipmentAndFacilitiesService({ service }) {
  const customData = {
    h1: 'Our Studio Space and Equipment',
    lead: 'Inspect our technical infrastructure. FrameCipher Studio is built to handle professional audio-visual productions with acoustic sound isolation, high-CRI softboxes, green screen backdrops, and generator power backup at Matikata ECB Chattar, Dhaka. We maintain verified hardware and space standards so your production runs smoothly without technical hitches.',
    whatIncluded: [
      'Acoustic room paneling dampening ambient Dhaka city reflections and street horns',
      'Continuous overhead softbox lighting grid calibrated to 5600K daylight',
      'Seamless paper roll backdrops: Pure White, Black, Neutral Grey, Chroma Green',
      'High-speed fiber internet for live streaming and real-time remote client monitoring',
      'Dedicated generator & IPS electrical backup protecting against load shedding',
      'Client lounge area with viewing monitor, makeup vanity mirror, and changing room'
    ],
    serviceTypes: [
      { title: 'Acoustic Sound Isolation', desc: 'Sound-treated walls and doors designed for pristine dialogue recording.' },
      { title: 'Overhead Lighting Grid', desc: 'Ceiling-mounted softboxes that keep the studio floor free of trip hazards.' },
      { title: 'Chroma Key Green Screen', desc: 'Evenly illuminated backdrop configured for clean keying without green spill.' },
      { title: 'Power Continuity Infrastructure', desc: 'Automatic generator switchover ensuring zero recording interruptions.' }
    ],
    whyMatters: 'Our facility features dedicated acoustic paneling that dampens ambient sound, overhead lighting grids that keep the studio floor free of hazardous trip wires, clean power conditioned against voltage spikes, and high-speed fiber internet.',
    howRuns: [
      'Schedule a physical studio inspection to test acoustics and lighting.',
      'Specify your required backdrops, power loads, and camera rigs.',
      'Our team rigs your backdrops and sets baseline lighting before arrival.',
      'Production day runs with on-site studio assistant support.',
      'Wrap session with elevator access directly to 6th floor parking.'
    ],
    costFactors: [
      'Standard facility access is included in all studio rental and production bookings'
    ],
    linksOut: [
      { label: 'Studio Space Rental', href: '/studio/rental/' },
      { label: 'Podcast Recording Studio', href: '/studio/podcast/' },
      { label: 'Green Screen Studio', href: '/studio/green-screen-video/' },
      { label: 'Contact & Studio Directions', href: '/studio/contact/' }
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
