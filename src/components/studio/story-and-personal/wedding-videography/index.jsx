import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function WeddingVideographyService({ service }) {
  const customData = {
    h1: 'Wedding Videography in Dhaka',
    lead: 'A wedding video keeps the moments, faces and sounds of the day. FrameCipher Studio offers boutique wedding cinematography in Dhaka, focusing on authentic family emotion, cultural traditions, and celebration with coverage and editing agreed beforehand.',
    whatIncluded: [
      'Discrete, unobtrusive filming ensuring natural family moments',
      'Cinema low-light cameras excelling in banquet hall conditions',
      'Highlight film (3 to 7 minutes) and full-ceremony edit as requested',
      'Crystal-clear audio recording of vows, speeches, and ambient celebration',
      'Feature-film color grading and emotional music licensing',
      'Delivered via private cloud archive and custom heirloom storage'
    ],
    serviceTypes: [
      { title: 'Cinematic Wedding Highlight Films', desc: 'Narrative-driven short films capturing the emotional heartbeat of the day.' },
      { title: 'Full-Ceremony Documentary Edits', desc: 'Comprehensive uncut documentation of all rituals and family speeches.' },
      { title: 'Social Media Teaser Reels', desc: '60-second teaser cuts delivered rapidly for Instagram and Facebook.' },
      { title: 'Multi-Day Event Coverage', desc: 'Coordinated coverage across Holud, Mehendi, Wedding, and Reception.' }
    ],
    whyMatters: 'Wedding dates fill early and moments happen once. We work closely with families beforehand to map the schedule, priority rituals, and key family members so no precious memory is missed.',
    howRuns: [
      'Initial discussion on event schedule, venues, and ceremonies to cover.',
      'Confirm date availability and package inclusions in writing.',
      'On-site filming with discrete multi-camera cinema crews.',
      'Careful editing, sound mixing, and color grading in our Dhaka studio.',
      'Delivery of final master films and short social teasers.'
    ],
    costFactors: [
      'Number of event functions (Holud, Wedding, Reception)',
      'Number of cinematographers and camera angles deployed',
      'Full-ceremony archive vs highlight film only'
    ],
    linksOut: [
      { label: 'Family Video Productions', href: '/studio/family-video-productions/' },
      { label: 'Video Editing Services', href: '/studio/video-editing/' },
      { label: 'Event Video Production', href: '/studio/event-video-production/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
