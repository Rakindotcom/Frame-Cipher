import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function ProductPhotographyService({ service }) {
  const customData = {
    h1: 'Product Photography Studio in Dhaka',
    lead: 'Clear product images help customers understand what they are buying. FrameCipher Studio provides white-background e-commerce catalog photos, creative lifestyle staging, and macro product spotlights formatted for Daraz, Shopify, Amazon, and social media campaigns at Matikata ECB Chattar, Dhaka. We capture intricate textures, colors, and design details.',
    whatIncluded: [
      'Pure white background photography (RGB 255,255,255) compliant with Daraz and Amazon',
      'Continuous diffused overhead softboxes eliminating harsh glare and reflections',
      'Tabletop staging props and colored backdrop options for creative styling',
      'Macro close-up detail shots highlighting stitching, ports, buttons, and materials',
      'High-end image retouching: dust cleanup, color balancing, and background clipping',
      'Transparent background PNG cuts and formatted square/vertical social crops'
    ],
    serviceTypes: [
      { title: 'Pure White E-Commerce Catalog', desc: 'Standard 4 to 6 angle product sets for digital marketplaces and web stores.' },
      { title: 'Styled Lifestyle Staging', desc: 'In-context creative staging demonstrating product scale and aesthetic lifestyle use.' },
      { title: 'Macro Texture & Feature Spotlights', desc: 'High-resolution close-ups emphasizing luxury craftsmanship and build quality.' },
      { title: 'Apparel & Footwear Sets', desc: 'Consistent catalog coverage for fashion, accessories, and shoes.' }
    ],
    whyMatters: 'Online shoppers cannot touch or hold your product. High-converting product photos require precise reflection control, accurate color fidelity, and texture definition so customers know exactly what they are receiving.',
    howRuns: [
      'Share your product catalogue size, reference styles, and marketplace specs.',
      'Drop off or courier your inventory samples to our Dhaka studio.',
      'Cleaning, staging, and calibrated studio lighting capture.',
      'Digital retouching, color grading, and transparent cutouts.',
      'Delivery of high-resolution print and web-ready digital assets.'
    ],
    costFactors: [
      'Total SKU / product quantity to be photographed',
      'Product material (matte textiles vs complex reflective glass/jewelry)',
      'Styling complexity (plain white tabletop vs styled props and models)',
      'Advanced clipping path and compositing requirements'
    ],
    linksOut: [
      { label: 'Commercial Video Production', href: '/studio/commercial-video-production/' },
      { label: 'Promotional Video Production', href: '/studio/promotional-video-production/' },
      { label: 'Studio Space Rental', href: '/studio/rental/' },
      { label: 'Studio Portfolio', href: '/studio/portfolio/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
