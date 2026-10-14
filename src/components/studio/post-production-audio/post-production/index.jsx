import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function PostProductionService({ service }) {
  const customData = {
    h1: 'Video Post-Production Services in Dhaka',
    lead: 'Post-production turns raw footage into a finished video. FrameCipher Studio handles editing, colour, sound and finishing for video shot at our studio or elsewhere, so the final result matches the purpose and platform you planned for. We connect narrative assembly, color timing, speech denoising, sound design, and localized subtitling into a seamless, reliable finishing pipeline.',
    whatIncluded: [
      'Editing and pacing: selecting, ordering, and trimming footage for maximum retention',
      'DaVinci Resolve colour correction and creative grading for natural, balanced imagery',
      'Audio cleanup, dialogue denoising, room de-reverberation, and music placement',
      'Captions, subtitles, lower thirds, and animated brand identity graphics',
      'Export in all required aspect ratios and high-bitrate codecs (ProRes, H.264, H.265)',
      'Timestamped cloud review links with structured revision rounds'
    ],
    serviceTypes: [
      { title: 'Color Correction & Grading', desc: 'Shot-to-shot exposure matching and cinematic mood styling in DaVinci Resolve.' },
      { title: 'Dialogue Restoration & Audio Mixing', desc: 'Isolating vocals, removing ambient hums, and mastering to broadcast standards.' },
      { title: 'Subtitling & Motion Graphics', desc: 'Kinetic typography and bilingual SRT caption files in English and Bangla.' },
      { title: 'Visual Effects & Cleanups', desc: 'Chroma keying, wire removal, and branded motion asset compositing.' }
    ],
    whyMatters: 'Unbalanced color, inconsistent volume, and unpolished pacing distract viewers immediately. Post-production ensures that raw camera files filmed across different cameras, lights, and settings emerge as one coherent, cinematic visual story.',
    howRuns: [
      'Footage ingest, cataloging, and audio synchronization.',
      'Assembly edit and rough cut structuring for story flow.',
      'Audio mixing, dialogue leveling, and licensed music scoring.',
      'DaVinci Resolve color grading and visual asset integration.',
      'Client review round via cloud timeline and final master export.'
    ],
    costFactors: [
      'Total raw footage runtime and number of camera angles',
      'Complexity of color grading and shot-matching requirements',
      'Audio restoration difficulty (heavy background noise vs clean audio)',
      'Number of platform deliverables and revision rounds'
    ],
    linksOut: [
      { label: 'Video Editing Services', href: '/studio/video-editing/' },
      { label: 'Voice Over Recording Studio', href: '/studio/voice-over/' },
      { label: 'Green Screen Studio', href: '/studio/green-screen-video/' },
      { label: 'Social Media Video Production', href: '/studio/social-media-video-production/' },
      { label: 'Corporate Video Production', href: '/studio/corporate-video-production/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
