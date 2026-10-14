import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function GreenScreenVideoService({ service }) {
  const customData = {
    h1: 'Green Screen Video Production in Dhaka',
    lead: 'Green screen lets us replace the background behind a person or product with another image, video or graphic. FrameCipher Studio operates an in-house green screen studio at Matikata ECB Chattar, Dhaka, equipped with continuous overhead diffused lighting that illuminates our seamless chroma green backdrop with zero hot spots, ensuring clean, artifact-free digital keying.',
    whatIncluded: [
      'Pre-calibrated overhead softbox lighting grid tuned for chroma key extraction',
      'Seamless non-reflective chroma green backdrop with ample floor depth',
      'Guidance for on-camera talent on wardrobe and lighting separation',
      'High-speed fiber connectivity for live chroma keying during webinars',
      'In-house post-production keying, spill suppression, and 3D set compositing',
      'Delivery of raw high-bitrate footage or finished composite videos'
    ],
    serviceTypes: [
      { title: 'Virtual Sets & News Desks', desc: 'Placing presenters in photorealistic 3D corporate studio environments.' },
      { title: 'Corporate Training & Explainers', desc: 'Displaying software graphics, slides, and animated flowcharts behind speakers.' },
      { title: 'Commercial & Advertising Scenes', desc: 'Placing actors and products into impossible or high-concept backgrounds.' },
      { title: 'Live Streaming Keying', desc: 'Real-time background substitution for live interactive broadcasts.' }
    ],
    whyMatters: 'A bad green screen with uneven lighting produces green spill on subjects and ragged edges in post-production. Our studio is pre-lit with calibrated softboxes specifically tuned for green screen extraction, allowing subjects to step in front of any digital background with crisp edge fidelity.',
    howRuns: [
      'Review wardrobe and background concept in advance to avoid green tones.',
      'Subject positioning with optimal separation distance from the screen.',
      'Filming under calibrated diffused overhead lighting with clean audio capture.',
      'Digital keying, spill removal, and composite color timing in post-production.',
      'Delivery of finished composite video or transparent ProRes 4444 assets.'
    ],
    costFactors: [
      'Studio reservation hours and setup requirements',
      'Space-only rental vs in-house keying, compositing, and motion graphics',
      'Number of custom virtual backgrounds designed'
    ],
    linksOut: [
      { label: 'Commercial Video Production', href: '/studio/commercial-video-production/' },
      { label: 'Post-Production Suite', href: '/studio/post-production/' },
      { label: 'Corporate Video Production', href: '/studio/corporate-video-production/' },
      { label: 'Studio Space Rental', href: '/studio/rental/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
