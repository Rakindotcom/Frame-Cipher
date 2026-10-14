import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function PricingService({ service }) {
  const customData = {
    h1: 'How Studio and Production Pricing Works',
    lead: 'Studio and production costs depend on what you need, so we quote from the scope of each project instead of publishing a single fixed rate. Rather than publishing misleading starting prices that inflate later, every quote clearly itemizes your reserved studio hours, technical crew roles, equipment inclusions, and post-production deliverables before payment is accepted.',
    whatIncluded: [
      'Session duration itemization (hourly, half-day 4h, full-day 8h)',
      'Crew allocation (Director, DOP, sound engineer, gaffer, teleprompter operator)',
      'Equipment & studio facility access (lighting softbox grid, backdrops, power backup)',
      'Post-production inclusions (editing, color grading, audio cleanup, subtitles)',
      'Explicit revision terms and file handover formats',
      'Transparent overtime and rescheduling terms'
    ],
    serviceTypes: [
      { title: 'Studio-Only Session', desc: 'Space rental for teams with their own crew and gear. Includes overhead lighting, backdrops, and power backup.' },
      { title: 'Production-Supported Session', desc: 'Studio session with dedicated camera operator, sound engineer, and studio assistant support.' },
      { title: 'Full Production Package', desc: 'End-to-end planning, shooting, creative direction, and post-production delivery under one roof.' }
    ],
    whyMatters: 'Fixed rate packages often force clients to pay for services they don’t need, or cut corners on crew and editing. Quoting strictly from scope ensures you invest only in the exact personnel, equipment, and finishing your visual asset demands.',
    howRuns: [
      'Share your project type, target deliverables, preferred date, and timeline.',
      'We formulate a transparent, itemized proposal based on exact technical requirements.',
      '50% advance deposit confirms your reserved calendar date in our production schedule.',
      'Shoot and post-production executed to the agreed specifications.',
      'Final deliverable sign-off and balance completion.'
    ],
    costFactors: [
      'Session duration: longer sessions require more studio hours',
      'Crew size: camera operators, gaffers, and sound engineers',
      'Equipment & setup: specialized lighting, multi-cam rigs, and props',
      'Deliverable volume: number of master films and vertical cutdowns',
      'Turnaround urgency: standard delivery vs express rush'
    ],
    linksOut: [
      { label: 'Studio Space Rental', href: '/studio/rental/' },
      { label: 'Full-Service Video Production', href: '/studio/video-production/' },
      { label: 'Frequently Asked Questions', href: '/studio/faq/' },
      { label: 'Contact & Request a Quote', href: '/studio/contact/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
