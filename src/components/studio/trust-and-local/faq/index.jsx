import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function FaqService({ service }) {
  const customData = {
    h1: 'Frequently Asked Questions',
    lead: 'Have questions about planning a shoot at FrameCipher Studio? Here is everything you need to know about booking confirmation, equipment specifications, parking access at ECB Chattar, and post-production delivery. We believe in total operational transparency.',
    whatIncluded: [
      'Comprehensive answers across all video, podcast, photography, and rental services',
      'Clear breakdown of studio-only sessions versus full production packages',
      'Step-by-step guidance on what to prepare before arriving for your shoot',
      'Transparent revision guidelines, payment terms, and rescheduling policies',
      'Direct WhatsApp and hotline contact for customized inquiries'
    ],
    serviceTypes: [
      { title: 'Booking & Reservations', desc: 'Advance deposit requirements, rescheduling rules, and 24/7 appointment scheduling.' },
      { title: 'Production & Crew Scopes', desc: 'Director guidance, teleprompter assistance, audio technicians, and gaffers.' },
      { title: 'Post-Production & File Delivery', desc: 'Revision rounds, cloud delivery timelines, codecs, and aspect ratios.' },
      { title: 'Studio Facility & Logistics', desc: 'Parking at ECB Chattar, elevator access to 6th floor, and generator backup.' }
    ],
    whyMatters: 'We believe in total transparency. Knowing exactly what is and isn’t included in your booking avoids misunderstandings, keeps budgets predictable, and ensures your team arrives fully prepared on shoot day.',
    howRuns: [
      'Browse common questions by category.',
      'Check specific service details on dedicated cluster pages.',
      'Reach out directly on WhatsApp (+880 1768-146650) for immediate answers.',
      'Confirm written scope and secure your studio calendar date.'
    ],
    costFactors: [
      'Zero cost for consultations and scope inquiries'
    ],
    linksOut: [
      { label: 'Full-Service Video Production', href: '/studio/video-production/' },
      { label: 'Studio Production Pricing', href: '/studio/pricing/' },
      { label: 'Our 5-Step Process', href: '/studio/process/' },
      { label: 'Studio Space Rental', href: '/studio/rental/' },
      { label: 'Contact FrameCipher Studio', href: '/studio/contact/' }
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
