import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function VideoEditingService({ service }) {
  const customData = {
    h1: 'Video Editing Services in Dhaka',
    lead: 'Good editing makes a video easier to watch. FrameCipher Studio edits video for YouTube, social media, corporate use, podcasts and events, working from footage we record or footage you send. We specialize in dynamic pacing, seamless narrative flow, and high-impact visual hooks that maximize retention.',
    whatIncluded: [
      'Multi-camera angle synchronization and external audio alignment',
      'Jump cut elimination, pause trimming, and narrative restructuring',
      'Dynamic B-roll insertion, zooms, transitions, and sound effect accents',
      'Audio leveling ensuring background music never drowns out dialogue',
      'Animated subtitles with keyword highlights for silent mobile viewers',
      '2 structured revision rounds managed via timestamped review links'
    ],
    serviceTypes: [
      { title: 'YouTube Long-Form Editing', desc: 'Retention-optimized editing for tutorials, documentaries, and creator vlogs.' },
      { title: 'Short-Form Reels, TikTok & Shorts', desc: 'Fast-paced, hook-driven vertical edits with animated captions.' },
      { title: 'Corporate & Product Video Editing', desc: 'Polished, authoritative cuts for brand profiles and customer case studies.' },
      { title: 'Podcast Video Multicam Cuts', desc: 'Dynamic speaker switching and chaptered episode mastering.' }
    ],
    whyMatters: 'Whether you have a 2-hour podcast interview or multi-angle commercial footage, our editors eliminate fluff, synchronize multiple cameras and audio tracks, insert relevant B-roll, and craft a tight narrative that holds viewer retention from start to finish.',
    howRuns: [
      'You share footage via high-speed cloud drive, references, and your goal.',
      'We confirm scope, deliverable formats, and turnaround timeline.',
      'We edit a first version and generate a timestamped review link.',
      'You review and send consolidated feedback.',
      'We apply revisions and deliver final high-resolution files.'
    ],
    costFactors: [
      'Raw footage volume and number of source files',
      'Editing style (simple cuts vs fast-paced meme/motion graphics heavy)',
      'Number of deliverables (master landscape + vertical cutdowns)',
      'Turnaround urgency (standard 5-7 days vs express 48-hour delivery)'
    ],
    linksOut: [
      { label: 'Post-Production Services', href: '/studio/post-production/' },
      { label: 'Social Media Video Production', href: '/studio/social-media-video-production/' },
      { label: 'Podcast Studio in Dhaka', href: '/studio/podcast/' },
      { label: 'Corporate Video Production', href: '/studio/corporate-video-production/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
