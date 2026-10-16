import { notFound } from 'next/navigation'
import { getStudioServiceBySlug, getAllStudioServiceSlugs, studioServices } from '../../../src/data/studioServices'
import { siteUrl, contact } from '../../../src/data/agency'
import { JsonLd } from '../../../src/components/seo/JsonLd'
import {
  StudioSubHero,
  StudioSubOverview,
  StudioSubDeliverables,
  StudioSubPricingFactors,
  StudioSubProcess,
  StudioSubFaq,
  StudioSubClusterNav,
  StudioBookingForm,
  getStudioComponent,
} from '../../../src/components/studio'

export function generateStaticParams() {
  return getAllStudioServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getStudioServiceBySlug(slug)
  if (!service) return {}

  const canonicalUrl = `${siteUrl}/studio/${service.slug}/`

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: 'Frame Cipher Studio',
      title: service.seoTitle,
      description: service.metaDescription,
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle,
      description: service.metaDescription,
      images: ['/og-image.png'],
    },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  const service = getStudioServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${siteUrl}/studio/#localbusiness`,
        name: 'Frame Cipher Studio',
        url: `${siteUrl}/studio/`,
        telephone: contact.phoneHref || '+8801768146650',
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
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/studio/${service.slug}/#service`,
        name: service.name,
        description: service.metaDescription,
        provider: {
          '@id': `${siteUrl}/studio/#localbusiness`,
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Dhaka, Bangladesh',
        },
        url: `${siteUrl}/studio/${service.slug}/`,
        ...(service.slug === 'video-production'
          ? {
              offers: [
                { '@type': 'Offer', name: 'Studio Day Essential', price: '35000', priceCurrency: 'BDT' },
                { '@type': 'Offer', name: 'Signature Commercial', price: '78000', priceCurrency: 'BDT' },
                {
                  '@type': 'Offer',
                  name: 'Flagship Brand Film',
                  priceSpecification: { '@type': 'PriceSpecification', minPrice: '185000', priceCurrency: 'BDT' },
                },
              ],
            }
          : {}),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/studio/${service.slug}/#breadcrumb`,
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
          {
            '@type': 'ListItem',
            position: 3,
            name: service.shortTitle || service.name,
            item: `${siteUrl}/studio/${service.slug}/`,
          },
        ],
      },
      ...(service.faqs && service.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              '@id': `${siteUrl}/studio/${service.slug}/#faq`,
              mainEntity: service.faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.a,
                },
              })),
            },
          ]
        : []),
    ],
  }

  const SpecificService = getStudioComponent(service.slug)

  return (
    <>
      <JsonLd data={serviceSchema} />

      {SpecificService ? (
        <SpecificService service={service} />
      ) : (
        <main className="bg-frame-bg text-frame-fg">
          {/* 1. Sub-Hero Section with Breadcrumb, H1, Eyebrow & Badges */}
          <StudioSubHero service={service} />

          {/* 2. In-Depth Capabilities, Technical Inclusions & Target Audience */}
          <StudioSubOverview service={service} />

          {/* 3. Confirmed Deliverables, File Formats & Aspect Ratios */}
          <StudioSubDeliverables service={service} />

          {/* 4. Production Process (5-Step Framework) */}
          <StudioSubProcess service={service} />

          {/* 5. Pricing Factors, Turnaround Times & Revision Policy */}
          <StudioSubPricingFactors service={service} />

          {/* 6. Service Specific FAQ Accordion */}
          <StudioSubFaq service={service} />

          {/* 7. Koray Sibling & Complementary Cluster Navigation */}
          <StudioSubClusterNav currentService={service} allServices={studioServices} />

          {/* 8. Interactive Booking & WhatsApp Lead Dispatch Form */}
          <StudioBookingForm />
        </main>
      )}
    </>
  )
}
