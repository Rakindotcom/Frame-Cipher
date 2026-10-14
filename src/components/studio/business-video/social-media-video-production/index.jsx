import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function SocialMediaVideoProductionService({ service }) {
  const customData = {
    h1: 'Social Media Video Production in Dhaka',
    lead: 'Social media video needs to be planned for the platform, not trimmed afterwards. FrameCipher Studio produces short-form and vertical video for Facebook, Instagram, TikTok and YouTube, from planning and shooting to captions and export. We help creators and brands batch-record 10 to 30 high-retention clips in single studio sessions.',
    whatIncluded: [
      'Native vertical 9:16 composition with safe margin framing',
      'Dynamic studio backdrops, lighting gels, and prop styling',
      'High-speed batch shooting workflow with teleprompter support',
      'Kinetic animated captions and subtitles in English and Bangla',
      'Viral sound design, sound effects, risers, and meme overlays',
      'Short-form platform optimization (Reels, TikTok, YouTube Shorts)'
    ],
    serviceTypes: [
      { title: 'Instagram Reels & Stories', desc: 'Aesthetic, high-retention vertical videos styled for brand growth.' },
      { title: 'TikTok Content Series', desc: 'Fast-paced, hook-driven clips built for algorithm virality.' },
      { title: 'YouTube Shorts', desc: 'Punchy educational and behind-the-scenes snippets driving channel subs.' },
      { title: 'Podcast & Interview Cutdowns', desc: 'Extracting the best 45-second insights from longer recordings.' }
    ],
    whyMatters: 'Vertical, square and horizontal videos need different framing. Composing footage natively for vertical 9:16 ensures subjects, captions, and graphic overlays are never obscured by platform buttons or UI elements.',
    howRuns: [
      'Prepare 10–20 talking points or scripts and outfit variations.',
      'Record in a focused 3-to-4 hour studio session with teleprompter.',
      'Rapid editing: pacing cutdowns, kinetic subtitles, and B-roll.',
      'Review drafts via timestamped cloud link.',
      'Deliver platform-ready MP4 exports with thumbnail cover frames.'
    ],
    costFactors: [
      'Batch size (10, 20, or 30 finished short-form clips)',
      'Editing style (simple cut vs layered motion graphics and effects)',
      'Monthly recurring retainer vs one-off session'
    ],
    linksOut: [
      { label: 'Video Editing Services', href: '/studio/video-editing/' },
      { label: 'Podcast Recording Studio', href: '/studio/podcast/' },
      { label: 'Promotional Video Production', href: '/studio/promotional-video-production/' },
      { label: 'Video Marketing Strategy', href: '/studio/video-marketing/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
