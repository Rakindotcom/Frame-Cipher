import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function CorporateVideoProductionService({ service }) {
  const customData = {
    h1: 'Corporate Video Production in Dhaka',
    lead: 'A corporate video explains who your company is, what it does or how it works, in a way people can watch in a few minutes. FrameCipher Studio produces company profiles, founder interviews, team introductions, training videos and internal communication videos for businesses in Dhaka and beyond. We plan the message with you first, shoot in the studio or at your office, and edit the footage into the formats your team needs.',
    whatIncluded: [
      'Pre-production narrative planning and executive messaging structure',
      'Teleprompter setup for confident, natural on-camera delivery',
      'Studio filming at Matikata ECB Chattar or on-location at your office',
      'Cinema 4K camera package with flattering corporate key lighting',
      'Dialogue noise isolation eliminating Dhaka traffic horns',
      'Color grading, branded motion graphics, and bilingual subtitles (English & Bangla)'
    ],
    serviceTypes: [
      { title: 'Company Profile & Brand Intro', desc: 'Authoritative overviews of corporate mission, scale, and customer impact.' },
      { title: 'Founder, CEO & Leadership Talks', desc: 'Visionary leadership interviews and investor presentation reels.' },
      { title: 'Product & Service Explainers', desc: 'Clear walk-throughs of enterprise solutions and SaaS platforms.' },
      { title: 'Training & Onboarding Videos', desc: 'Repeatable internal training modules for HR and team alignment.' },
      { title: 'Event Recap & Announcements', desc: 'AGM highlights, corporate milestone celebrations, and press announcements.' },
      { title: 'Recruitment & Culture Films', desc: 'Attracting top tier talent by showcasing authentic company culture.' }
    ],
    whyMatters: 'Every corporate project begins with three questions: who will watch, what should they understand or do afterwards, and where will the video be shown? The answers decide the length, tone, shooting style and edit. Controlled studio lighting and sound ensure executives look polished without distraction.',
    howRuns: [
      'Initial discussion on message, stakeholders, and distribution platforms.',
      'Script consultation or interview question structuring.',
      'Half-day or full-day shoot with teleprompter and sound management.',
      'Editing, color grading, branded typography, and client review.',
      'Final high-bitrate master delivery with subtitle files.'
    ],
    costFactors: [
      'Video length and number of interviewees',
      'Shoot days: in-studio vs combined on-location office b-roll',
      'Scriptwriting and narrative consultation requirements',
      'Motion graphics, corporate branding, and revision rounds'
    ],
    linksOut: [
      { label: 'Full-Service Video Production', href: '/studio/video-production/' },
      { label: 'Commercial Video & TVCs', href: '/studio/commercial-video-production/' },
      { label: 'Promotional Video Production', href: '/studio/promotional-video-production/' },
      { label: 'Video Editing Services', href: '/studio/video-editing/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
