import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function ProcessService({ service }) {
  const customData = {
    h1: 'How a FrameCipher Studio Project Works',
    lead: 'Every project follows five clear steps, so you know what happens, what we need from you and when. We establish deliverables, technical setups, revision rounds, and schedules before shooting begins to ensure smooth execution.',
    whatIncluded: [
      'Comprehensive pre-production brief and technical scoping',
      'Dedicated call sheet and production day schedule',
      'Studio preparation: lighting grids, acoustic calibration, and backdrop rigging',
      'Post-production editing with timestamped cloud feedback links',
      'Structured revision rounds and prompt final file handover'
    ],
    serviceTypes: [
      { title: 'Step 1: Discuss Your Project', desc: 'Tell us your goal, audience, where the content will be published and any references. We ask follow-up questions if the brief needs sharpening.' },
      { title: 'Step 2: Define the Scope', desc: 'We agree session length, participants, crew, equipment, deliverables, editing scope, revisions and timeline. You receive a written quote.' },
      { title: 'Step 3: Confirm the Booking', desc: 'After you approve the scope and price, we confirm the date and share booking terms, including any advance payment and preparation requirements.' },
      { title: 'Step 4: Prepare and Record', desc: 'We prepare the space and equipment for the agreed setup. You bring scripts, talking points, products, participants and brand assets.' },
      { title: 'Step 5: Edit and Deliver', desc: 'We edit to the agreed scope, share a draft for feedback, apply the agreed revisions and deliver files in the requested formats.' }
    ],
    whyMatters: 'A great shoot is 80% preparation. Most problems on shoot day come from gaps in pre-production. Our 5-step workflow guarantees that camera operators, sound engineers, and editors are aligned with your exact business objectives from day one.',
    howRuns: [
      'Discovery & Goal Alignment',
      'Written Technical Scope & Itemized Quote',
      'Booking Confirmation & Calendar Reservation',
      'Studio Filming at Matikata ECB Chattar',
      'Post-Production, Revisions & Final File Delivery'
    ],
    costFactors: [
      'Project scope complexity and deliverable volume',
      'Speed of client feedback and asset provision',
      'Turnaround urgency'
    ],
    linksOut: [
      { label: 'Full-Service Video Production', href: '/studio/video-production/' },
      { label: 'Studio Production Pricing', href: '/studio/pricing/' },
      { label: 'Frequently Asked Questions', href: '/studio/faq/' },
      { label: 'Contact & Book Studio', href: '/studio/contact/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
