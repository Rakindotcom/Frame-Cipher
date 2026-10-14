import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function CommercialVideoProductionService({ service }) {
  const customData = {
    h1: 'Commercial Video Production for Brands in Dhaka',
    lead: 'A commercial video is made to persuade: it presents a product, service or brand to an audience and asks them to act. FrameCipher Studio produces commercials and product ads, handling the concept, shooting and post-production with one team. We engineer high-retention advertising spots built for national television broadcasting and high-budget digital paid media campaigns.',
    whatIncluded: [
      'Concept and message development with your brand team',
      'Script and storyboard or shot list alignment',
      'Studio or location shooting, with talent and props as needed',
      'Editing, DaVinci Resolve color grading, sound design and kinetic graphics',
      'Final versions calibrated for broadcast TV and digital platforms',
      'Paired product photography in the same session to maximize value'
    ],
    serviceTypes: [
      { title: 'Brand Television Commercials (TVC)', desc: 'Broadcast-compliant commercial spots mastered to Bangladesh TV standards.' },
      { title: 'Digital Paid Ad Videos', desc: 'Direct-response video creative built for Meta Ads, YouTube Pre-roll and TikTok.' },
      { title: 'Product Spotlights & Demos', desc: 'Tabletop macro footage capturing product finishes, textures, and features.' },
      { title: 'Green Screen Commercial Scenes', desc: 'Compositing talent and products into virtual 3D commercial sets.' }
    ],
    whyMatters: 'A commercial for online ads, a longer brand film and a short product spot are different jobs. We plan the aspect ratios, lengths and versions before shooting, so the same footage serves each format without compromising visual composition.',
    howRuns: [
      'Concept development and visual treatment sign-off.',
      'Scriptwriting, storyboarding, and talent/wardrobe coordination.',
      'Dedicated studio production day with cinema rigs and high-CRI lighting.',
      'Post-production assembly, audio mastering, and color timing.',
      'Multi-channel export delivery (TVC broadcast master + 16:9, 1:1, 9:16 cuts).'
    ],
    costFactors: [
      'Concept complexity and set design staging',
      'Number of shooting days and location logistics',
      'Actors, models, and styling crew requirements',
      'Number of platform cutdown versions (15s, 30s, 60s)'
    ],
    linksOut: [
      { label: 'Promotional Video Production', href: '/studio/promotional-video-production/' },
      { label: 'Video Marketing Services', href: '/studio/video-marketing/' },
      { label: 'Post-Production Suite', href: '/studio/post-production/' },
      { label: 'Green Screen Studio', href: '/studio/green-screen-video/' },
      { label: 'Product Photography Studio', href: '/studio/product-photography/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
