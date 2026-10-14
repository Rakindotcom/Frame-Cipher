import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function DocumentaryProductionService({ service }) {
  const customData = {
    h1: 'Documentary Production in Bangladesh',
    lead: 'A documentary tells a real story through interviews, observation and carefully edited footage. FrameCipher Studio supports documentary projects from planning and shooting to editing, sound and final delivery. We produce narrative-driven films for development organizations (NGOs), corporate foundations, cultural bodies, and independent storytellers.',
    whatIncluded: [
      'Pre-production: research, subject scouting, character identification, and access permissions',
      'Cinema camera package with high dynamic range for stunning location landscapes',
      'Empathetic, unhurried interview directing for authentic human narratives',
      'Studio-based post-production: story assembly, pacing, and archival integration',
      'Dialogue restoration, room sound cleanup, and cinematic musical scoring',
      'Bilingual subtitling and voiceover localization in English and Bangla'
    ],
    serviceTypes: [
      { title: 'NGO & Social Impact Films', desc: 'Documenting development initiatives, community empowerment, and humanitarian aid.' },
      { title: 'Corporate Heritage & Founder Stories', desc: 'Chronicling the journey, challenges, and milestones of landmark enterprises.' },
      { title: 'Cultural & Environmental Studies', desc: 'Preserving Bangladesh heritage, crafts, ecology, and generational arts.' },
      { title: 'Short Documentary Films', desc: '10–20 minute festival-caliber non-fiction cinema.' }
    ],
    whyMatters: 'Documentaries demand more flexibility than other video productions. Real subjects and environments rarely follow a strict timeline. We scope shoot days, buffer allowances, and dedicated post-production time to let the authentic story emerge naturally.',
    howRuns: [
      'Define subject, story arc, intended length, and distribution channels.',
      'Research phase: subject interviews, location scouting, and permissions.',
      'Field filming with small, discrete cinema camera crews.',
      'Post-production: paper edit, rough cut assembly, voiceover recording, and scoring.',
      'Master color grading, audio finishing, and festival/broadcast export packages.'
    ],
    costFactors: [
      'Fieldwork duration and travel logistics across Bangladesh',
      'Archival footage licensing, scanning, and restoration volume',
      'Original musical score composition vs licensed soundtrack',
      'Number of localized language subtitle tracks'
    ],
    linksOut: [
      { label: 'Post-Production Suite', href: '/studio/post-production/' },
      { label: 'Video Editing Services', href: '/studio/video-editing/' },
      { label: 'Voice Over Recording', href: '/studio/voice-over/' },
      { label: 'Corporate Video Production', href: '/studio/corporate-video-production/' },
      { label: 'Studio Portfolio', href: '/studio/portfolio/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
