import { notFound } from 'next/navigation'
import {
  ALL_ADS_CALCULATORS,
  getCalculatorBySlug,
} from '@/data/calculators/allAdsCalculatorsConfig'
import DedicatedServiceCalculatorView from '@/components/calculators/DedicatedServiceCalculatorView'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { withBrandSuffix, clampMetaDescription } from '@/lib/seo/metadata'
import { siteUrl } from '@/data/agency'

export function generateStaticParams() {
  return ALL_ADS_CALCULATORS.map((calc) => ({
    service: calc.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { service } = await params
  const config = getCalculatorBySlug(service)

  if (!config) {
    return {
      title: 'Calculator Not Found | Frame Cipher',
    }
  }

  const canonicalUrl = `${siteUrl}/calculators/${config.slug}`
  // Calculator titles/descriptions come from the shared calculator config; the
  // brand suffix is dropped when it would overflow the SERP title limit.
  const title = withBrandSuffix(config.metaTitle)
  const description = clampMetaDescription(config.metaDescription)

  return {
    title,
    description,
    alternates: {
      canonical: `/calculators/${config.slug}`,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Frame Cipher',
      type: 'website',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  }
}

export default async function DedicatedCalculatorPage({ params }) {
  const { service } = await params
  const config = getCalculatorBySlug(service)

  if (!config) {
    notFound()
  }

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: config.title,
    url: `${siteUrl}/calculators/${config.slug}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: config.metaDescription,
    featureList: config.equations.map((eq) => eq.name),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Calculators', url: '/calculators' },
          { name: config.title, url: `/calculators/${config.slug}` },
        ]}
      />
      <DedicatedServiceCalculatorView config={config} />
    </>
  )
}
