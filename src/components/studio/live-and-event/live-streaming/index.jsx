import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function LiveStreamingService({ service }) {
  const customData = {
    h1: 'Live Streaming Services in Dhaka',
    lead: 'Live streaming lets an audience watch your event, launch, webinar or discussion as it happens. FrameCipher Studio can plan and produce live streams from the studio or from your venue, with camera, audio and stream setup agreed before the day. Featuring multi-camera switching, dedicated high-speed fiber internet with backup bonding, live audio engineering, and dynamic graphics overlays.',
    whatIncluded: [
      'Planning the run of show and stream format',
      'Multi-camera setup with real-time video switching',
      'Dedicated audio engineering with lapel and boundary mics',
      'Custom on-screen graphics: lower thirds, presentation slides, viewer Q&A',
      'Simulcast streaming to YouTube, Facebook, LinkedIn, or private portals',
      'Full uncompressed 4K master recording of the broadcast for post-event use'
    ],
    serviceTypes: [
      { title: 'Webinars & Virtual Summits', desc: 'Interactive remote presentations with speaker video and slides.' },
      { title: 'Product Launches & Press Events', desc: 'Broadcast-quality reveals broadcast to national or global audiences.' },
      { title: 'Panel Discussions & Roundtables', desc: 'Multi-microphone sound balancing and multi-angle camera switching.' },
      { title: 'Corporate Townhalls & AGMs', desc: 'Secure internal live streams for shareholders and enterprise teams.' }
    ],
    whyMatters: 'A glitchy stream damages brand reputation. Audio problems drive viewers away faster than imperfect video. Our live streaming infrastructure utilizes hardware switchers, redundant internet lines, broadcast audio mixers, and pre-event testing to ensure zero transmission drops.',
    howRuns: [
      'Pre-event technical consultation and platform selection.',
      'Run-of-show scheduling and slide/graphic asset preparation.',
      'Comprehensive on-site test run checking audio levels, video feeds, and bitrates.',
      'Live stream execution with active technician monitoring.',
      'Delivery of full session recording and social highlight clips.'
    ],
    costFactors: [
      'Stream duration (hours)',
      'Studio-based broadcast vs on-location venue deployment',
      'Number of camera angles and crew members',
      'Integration of remote speakers over Zoom or Teams'
    ],
    linksOut: [
      { label: 'Event Video Production', href: '/studio/event-video-production/' },
      { label: 'Corporate Video Production', href: '/studio/corporate-video-production/' },
      { label: 'Podcast Recording Studio', href: '/studio/podcast/' },
      { label: 'Studio Space Rental', href: '/studio/rental/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
