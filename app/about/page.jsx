import AboutPage from '../../src/views/AboutPage'
import { JsonLd } from '../../src/components/seo/JsonLd'
import { generatePageSchema } from '../../src/lib/seo/schema'
import { contact, siteUrl } from '../../src/data/agency'

export const metadata = {
  title: 'About Frame Cipher | Multinational Tech, Media & Growth Powerhouse',
  description:
    'Frame Cipher is a multinational technology, media, and performance growth company headquartered in Dhaka, Bangladesh. We build enterprise software, headless eCommerce, brand systems, and algorithmic ad campaigns for global brands across 20+ countries.',
  alternates: {
    canonical: '/about',
  },
  keywords: [
    'multinational tech company Bangladesh',
    'tech company in Dhaka',
    'software development company Bangladesh',
    '360 marketing agency Bangladesh',
    'global digital agency Dhaka',
    'top IT company in Bangladesh',
    'Next.js web development company Dhaka',
    'performance marketing agency Bangladesh',
    'Frame Cipher about',
    'Rakin Al Shahriar',
    'Mahedi Hasan Frame Cipher',
    'Nahid Bin Zaman',
  ],
  openGraph: {
    type: 'website',
    url: '/about',
    siteName: 'Frame Cipher',
    title: 'About Frame Cipher | Multinational Tech, Media & Growth Powerhouse',
    description:
      'Discover Frame Cipher: A global technology, media, and growth engineering institution born in Bangladesh, serving enterprise and high-growth brands across 20+ countries.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Frame Cipher - Multinational Tech & Growth Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Frame Cipher | Multinational Tech, Media & Growth Powerhouse',
    description:
      'Frame Cipher is a multinational technology, media, and growth company based in Dhaka, Bangladesh, building custom software and high-ROI acquisition systems for 20+ countries.',
    images: ['/logo.png'],
  },
}

export default function Page() {
  const baseSchema = generatePageSchema({
    pageType: 'about',
    data: {
      canonicalUrl: `${siteUrl}/about`,
      title: 'About Frame Cipher | Multinational Tech, Media & Growth Powerhouse',
      description:
        'Frame Cipher is a multinational technology, media, and performance growth company headquartered in Dhaka, Bangladesh. We build enterprise software, brand systems, and algorithmic ad campaigns for brands across 20+ countries.',
    },
  })

  // Deep Organization / Corporation Schema for Google Knowledge Graph & E-E-A-T
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': `${siteUrl}/#corporation`,
    name: 'Frame Cipher',
    alternateName: ['Frame Cipher Technologies', 'FrameCipher'],
    legalName: 'Frame Cipher',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/logo.png`,
    foundingDate: '2022',
    description:
      'A multinational technology, media, and growth engineering company headquartered in Dhaka, Bangladesh, building enterprise software, headless commerce, brand systems, and performance marketing infrastructure for clients across 20+ countries.',
    slogan: 'Brand. Content. Tech. Growth.',
    email: contact.email,
    telephone: contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ecb Chattar, Matikata, Khan Polli Mosque',
      addressLocality: 'Dhaka',
      postalCode: '1206',
      addressCountry: 'BD',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.8184',
      longitude: '90.3957',
    },
    areaServed: [
      { '@type': 'Country', name: 'Bangladesh' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Singapore' },
    ],
    founders: [
      {
        '@type': 'Person',
        name: 'Rakin Al Shahriar',
        jobTitle: 'Co-Founder & CEO',
        sameAs: [
          'https://rakin.framecipher.info/',
          'https://www.linkedin.com/in/rakinalshahriar/',
          'https://www.facebook.com/rakinalshahriar',
        ],
      },
      {
        '@type': 'Person',
        name: 'Mahedi Hasan',
        jobTitle: 'Co-Founder & COO',
        sameAs: [
          'https://mahedi.framecipher.info/',
          'https://www.linkedin.com/in/mahedi-hasan003/',
          'https://www.facebook.com/mahedihasan.perves',
        ],
      },
      {
        '@type': 'Person',
        name: 'Nahid Bin Zaman',
        jobTitle: 'Co-Founder & Head of Operations',
        sameAs: [
          'https://www.linkedin.com/in/nahid-bin-zaman-680386339/',
          'https://www.facebook.com/nahid.bin.zaman.2025',
        ],
      },
    ],
    knowsAbout: [
      'Multinational Tech Operations',
      'Full-Stack Software Engineering',
      'Next.js & React Web Application Architecture',
      'Technical Search Engine Optimization (SEO)',
      'Algorithmic Paid Advertising & Media Planning',
      'Proprietary Growth Operating Systems',
      'Cinematic Commercial Video Production',
      'Brand Identity Systems & Design Systems',
      'Headless eCommerce Engineering',
      'Cloud Infrastructure & Vercel Edge Deployment',
    ],
    sameAs: [
      'https://www.facebook.com/framecipher',
      'https://www.linkedin.com/company/framecipher',
      'https://www.instagram.com/framecipher',
    ],
  }

  return (
    <>
      <JsonLd data={baseSchema} />
      <JsonLd data={organizationSchema} />
      <AboutPage />
    </>
  )
}
