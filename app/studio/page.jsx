import StudioPage from '../../src/views/StudioPage'
import { JsonLd } from '../../src/components/seo/JsonLd'
import { siteUrl, contact } from '../../src/data/agency'

export const metadata = {
  title: 'Podcast & Video Production Studio in Dhaka | FrameCipher',
  description:
    'Book FrameCipher Studio in Dhaka for podcast recording, video production, product photography and professional editing. Located at ECB Chattar. Request a session.',
  alternates: {
    canonical: `${siteUrl}/studio/`,
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/studio/`,
    siteName: 'Frame Cipher Studio',
    title: 'Podcast & Video Production Studio in Dhaka | FrameCipher',
    description:
      'Book FrameCipher Studio in Dhaka for podcast recording, video production, product photography and professional editing. Located at ECB Chattar. Request a session.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Podcast & Video Production Studio in Dhaka | FrameCipher',
    description:
      'Book FrameCipher Studio in Dhaka for podcast recording, video production, product photography and professional editing. Located at ECB Chattar. Request a session.',
    images: ['/logo.png'],
  },
}

export default function Page() {
  const studioSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${siteUrl}/studio/#localbusiness`,
        name: 'Frame Cipher Studio',
        legalName: 'Frame Cipher Studio',
        url: `${siteUrl}/studio/`,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/logo.png`,
        description:
          'In-house podcast recording, video production, commercial product photography, and post-production studio in Matikata ECB Chattar, Dhaka, Bangladesh.',
        telephone: contact.phoneHref || '+8801768146650',
        email: contact.email,
        priceRange: '$$',
        currenciesAccepted: 'BDT, USD',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer, bKash, Nagad',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar',
          addressLocality: 'Dhaka',
          postalCode: '1206',
          addressCountry: 'BD',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 23.8199359,
          longitude: 90.3917881,
        },
        hasMap: 'https://maps.app.goo.gl/Ht7yUXyMw6V1fAcF6',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: 'Dhaka',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Bangladesh',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Studio Production Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Podcast Recording & Video Production',
                description: 'Acoustically sound-treated multi-mic audio and 4K multi-camera video podcast recording in Dhaka.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Corporate & Commercial Video Production',
                description: 'Full studio shooting for corporate overviews, founder talks, commercials, and digital ad clips.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Commercial Product Photography',
                description: 'Controlled studio lighting and framing for ecommerce, catalogues, Daraz, and Shopify product photos.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Video Editing & Post-Production Suite',
                description: 'Professional video editing, DaVinci Resolve color grading, audio denoise, subtitles, and vertical social cutdowns.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Studio Space Rental',
                description: 'Sound-isolated studio room rental with continuous ceiling lighting grid and green screen setup.',
              },
            },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/studio/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Studio',
            item: `${siteUrl}/studio/`,
          },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={studioSchema} />
      <StudioPage />
    </>
  )
}
