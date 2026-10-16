import StudioPage from '../../src/views/StudioPage'
import { JsonLd } from '../../src/components/seo/JsonLd'
import { siteUrl, contact } from '../../src/data/agency'

export const metadata = {
  title: 'Podcast & Video Production Studio in Dhaka | FrameCipher Studio',
  description:
    'Book an acoustic podcast and 4K video studio at Matikata ECB Chattar, Dhaka. Studio hire from ৳2,000/hour, crew sessions from ৳8,000. Itemised quote in 48 hours.',
  alternates: {
    canonical: `${siteUrl}/studio/`,
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/studio/`,
    siteName: 'Frame Cipher Studio',
    title: 'Podcast & Video Production Studio in Dhaka | FrameCipher Studio',
    description:
      'Book an acoustic podcast and 4K video studio at Matikata ECB Chattar, Dhaka. Studio hire from ৳2,000/hour, crew sessions from ৳8,000. Itemised quote in 48 hours.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Podcast & Video Production Studio in Dhaka | FrameCipher Studio',
    description:
      'Book an acoustic podcast and 4K video studio at Matikata ECB Chattar, Dhaka. Studio hire from ৳2,000/hour, crew sessions from ৳8,000. Itemised quote in 48 hours.',
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
              price: '2000',
              priceCurrency: 'BDT',
              itemOffered: {
                '@type': 'Service',
                name: 'Studio Session — Room Only Hire',
                description: 'Sound-isolated studio room hire from ৳2,000 per hour for crews with their own equipment.',
              },
            },
            {
              '@type': 'Offer',
              price: '8000',
              priceCurrency: 'BDT',
              itemOffered: {
                '@type': 'Service',
                name: 'Studio + Crew Session',
                description: 'Studio with sound engineer and camera operator from ৳8,000 per session. Raw 4K and mastered audio within 24 hours.',
              },
            },
            {
              '@type': 'Offer',
              price: '35000',
              priceCurrency: 'BDT',
              itemOffered: {
                '@type': 'Service',
                name: 'Full Production Package',
                description: 'Concept to publish-ready assets from ৳35,000 per project, including grade, subtitles, shorts pack, 2 revisions and 60-day archive.',
              },
            },
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
                description: 'Controlled studio lighting and framing for ecommerce, catalogues, Daraz, and Shopify product photos from ৳1,500 per product.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Video Editing & Post-Production Suite',
                description: 'Professional video editing, DaVinci Resolve color grading, audio denoise, subtitles, and vertical social cutdowns from ৳9,500.',
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
        '@type': 'FAQPage',
        '@id': `${siteUrl}/studio/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does it cost to rent a podcast studio in Dhaka?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Studio hire at FrameCipher Studio starts from ৳2,000 per hour for the room only. A session with a sound engineer and camera operator starts from ৳8,000 per session. Podcast production with 4K video is ৳18,000 and full production is ৳35,000 on the rate card.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does studio hire include a camera operator or editing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The Studio Session package is the space only. A camera operator and sound engineer come with the Studio + Crew package, and editing is part of Full Production or can be added as a separate scope.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I book the studio and how does payment work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Send your date, setup and goal on WhatsApp to +880 1768-146650, or use the booking form. You receive an itemised quote within 48 hours. A 50% advance locks the dates, and the balance is due on final sign-off. All payments get VAT-compliant invoices.',
            },
          },
        ],
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
