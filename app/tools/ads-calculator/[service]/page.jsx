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
      url: `${siteUrl}/tools/ads-calculator/${config.slug}`,
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

export default async function ToolCalculatorPage({ params }) {
  const { service } = await params
  const config = getCalculatorBySlug(service)

  if (!config) {
    notFound()
  }

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: config.title,
    url: `${siteUrl}/tools/ads-calculator/${config.slug}`,
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
          { name: 'Ads Budget & ROAS Calculator', url: '/tools/ads-calculator' },
          { name: config.title, url: `/tools/ads-calculator/${config.slug}` },
        ]}
      />
      <DedicatedServiceCalculatorView config={config} />
    </>
  )
}
