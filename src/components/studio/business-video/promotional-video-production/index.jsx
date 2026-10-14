import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function PromotionalVideoProductionService({ service }) {
  const customData = {
    h1: 'Promotional Video Production in Dhaka',
    lead: 'A promotional video tells people about a product, service, launch or campaign and gives them a reason to respond. FrameCipher Studio plans, shoots and edits promotional videos for businesses that want clear, usable content for their website, social channels and campaigns. Before we shoot, we agree one main goal: awareness, leads, sales or an announcement.',
    whatIncluded: [
      'Strategic goal alignment (awareness, lead gen, discount promo, or launch)',
      'High-tempo scripting with clear call-to-action hooks',
      'Studio filming with dynamic lighting gels and backdrop options',
      'Kinetic motion graphics, animated lower-third price/offer badges',
      'Sound design with licensed commercial tracks and high-energy sound effects',
      'Platform packages: master landscape plus vertical Reels/TikTok cutdowns'
    ],
    serviceTypes: [
      { title: 'Product Launch Promos', desc: 'Introducing new SKUs or brand lines with maximum visual impact.' },
      { title: 'Seasonal & Flash Sale Videos', desc: 'Urgent, high-converting offer videos for Eid, Black Friday, and seasonal sales.' },
      { title: 'Landing Page & Website Promos', desc: 'Engaging website hero videos that explain benefits and boost conversion.' },
      { title: 'Service Teasers & Announcements', desc: 'Short clips built to generate anticipation before an event or service debut.' }
    ],
    whyMatters: 'A commercial is built around a paid ad placement, while a promotional video often serves a wider purpose such as a launch or website. A video with a single clear goal is easier to script, easier to edit and easier to judge afterwards.',
    howRuns: [
      'Define the primary promotional objective and target audience.',
      'Prepare script hooks, offer details, and visual styling.',
      'Record in our Dhaka studio or on location.',
      'Fast-paced editing with sound design, color grading, and subtitles.',
      'Export in 16:9, 1:1, and 9:16 vertical for immediate publishing.'
    ],
    costFactors: [
      'Video length and number of creative variations',
      'Studio time, lighting complexity, and crew requirements',
      'Animated graphic complexity and voiceover requirements',
      'Turnaround urgency (Express 48-hour delivery available)'
    ],
    linksOut: [
      { label: 'Commercial Video Production', href: '/studio/commercial-video-production/' },
      { label: 'Social Media Video Production', href: '/studio/social-media-video-production/' },
      { label: 'Video Marketing Strategy', href: '/studio/video-marketing/' },
      { label: 'Video Editing Services', href: '/studio/video-editing/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
