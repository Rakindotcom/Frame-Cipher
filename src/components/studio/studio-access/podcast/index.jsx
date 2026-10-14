import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function PodcastService({ service }) {
  const customData = {
    h1: 'Podcast Recording Studio in Dhaka',
    lead: 'A podcast studio gives you a controlled space to record clear audio or video conversations. FrameCipher Studio offers an acoustically soundproofed, multi-camera podcast recording facility at Matikata ECB Chattar, Dhaka. Whether you are hosting founder conversations, corporate discussions, or YouTube talk shows, our studio provides broadcast-quality audio isolation, 4K multi-angle video switching, and professional post-production cutdowns.',
    whatIncluded: [
      'Acoustic soundproofing eliminating Dhaka traffic noise and ambient echo',
      'Multi-microphone setup with broadcast dynamic mics (Shure/Rode)',
      'Multi-angle 4K cameras composed specifically for YouTube video podcasts',
      'In-house audio technician monitoring levels throughout your session',
      'Comfortable podcast lounge table with customized lighting and branding options',
      'Optional post-production: multi-cam editing, audio leveling, and vertical Reels with captions'
    ],
    serviceTypes: [
      { title: 'Audio-Only Podcast Sessions', desc: 'Pristine isolated vocal recordings for Spotify, Apple Podcasts, and radio.' },
      { title: 'Video Podcasts for YouTube', desc: 'Dynamic multi-camera 4K switching capturing host, guest, and wide reaction angles.' },
      { title: 'Executive & Founder Conversations', desc: 'Thought leadership masterclasses and B2B interview series.' },
      { title: 'Short-Form Viral Podcast Clips', desc: 'High-hook 9:16 vertical cuts formatted with kinetic captions for social reach.' }
    ],
    whyMatters: 'Great podcasts depend on pristine audio and engaging video framing. Background street noise and uneven audio levels ruin listener retention. Our controlled acoustic room guarantees broadcast warmth and zero reverberation from the first sentence.',
    howRuns: [
      'Reserve your session duration and confirm speaker count (1 to 4 mics).',
      'Arrive with your episode outline, talking points, and guest.',
      'Sound check, mic technique guidance, and camera framing test.',
      'Record your conversation with live audio engineering support.',
      'Receive master audio and video files or pass directly to our editing team.'
    ],
    costFactors: [
      'Session duration (hourly, half-day 4 hours, or full-day 8 hours)',
      'Number of active speakers on microphones (1 to 4 participants)',
      'Audio-only recording vs multi-camera 4K video recording',
      'Editing inclusions (raw capture vs full multi-cam edit and social reels)'
    ],
    linksOut: [
      { label: 'Video Editing Services', href: '/studio/video-editing/' },
      { label: 'Social Media Video Production', href: '/studio/social-media-video-production/' },
      { label: 'Studio Space Rental', href: '/studio/rental/' },
      { label: 'Live Streaming Services', href: '/studio/live-streaming/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
