import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function VoiceOverService({ service }) {
  const customData = {
    h1: 'Voice Over Recording in Dhaka',
    lead: 'A voice over gives a video its narration, whether for an advertisement, explainer, corporate film or documentary. FrameCipher Studio operates an acoustically isolated vocal recording environment at Matikata ECB Chattar, Dhaka. We provide clean audio files or finished synced video tracks in Bangla and English.',
    whatIncluded: [
      'Acoustic vocal isolation booth eliminating exterior Dhaka street horns',
      'Studio condenser and dynamic broadcast microphones (warm, detailed vocal capture)',
      'Real-time headphone monitoring for voice artists and remote client directors',
      'Post-recording vocal processing: de-breathing, de-essing, EQ, and compression',
      'Bilingual voiceover talent across male, female, corporate, and dramatic registers',
      'Delivery of uncompressed 24-bit 48kHz WAV audio files and synced video masters'
    ],
    serviceTypes: [
      { title: 'Commercial & TVC Narration', desc: 'Punchy, emotive vocal delivery for brand advertisements.' },
      { title: 'Corporate & Explainer Voiceovers', desc: 'Authoritative, clear pacing for SaaS demos and corporate overviews.' },
      { title: 'Documentary Story Narration', desc: 'Deep, resonant, empathetic vocal pacing for long-form non-fiction films.' },
      { title: 'E-Learning & Training Modules', desc: 'Clear, steady pronunciation for educational courses and IVR phone systems.' }
    ],
    whyMatters: 'A voice over session goes faster when the script is final, the tone is clear and pronunciation questions are settled before you arrive. Our quiet, controlled vocal booth guarantees pristine signal-to-noise ratio and zero room reverberation.',
    howRuns: [
      'Finalize script, pronunciation guide, and reference tone.',
      'Sound check and mic positioning with the voice talent.',
      'Recording session with guided director feedback and alternate takes.',
      'Audio mastering: noise floor removal, EQ balancing, and de-essing.',
      'Delivery of master WAV files and optional video track synchronization.'
    ],
    costFactors: [
      'Script word count and session duration',
      'Talent booking (using FrameCipher talent roster vs bringing your own artist)',
      'Audio-only delivery vs video sync and mastering',
      'Commercial broadcast usage rights'
    ],
    linksOut: [
      { label: 'Post-Production Suite', href: '/studio/post-production/' },
      { label: 'Documentary Production', href: '/studio/documentary-production/' },
      { label: 'Commercial Video Production', href: '/studio/commercial-video-production/' },
      { label: 'Podcast Recording Studio', href: '/studio/podcast/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
