import { notFound } from 'next/navigation'
import {
  ALL_ADS_CALCULATORS,
  getCalculatorBySlug,
} from '@/data/calculators/allAdsCalculatorsConfig'
import DedicatedServiceCalculatorView from '@/components/calculators/DedicatedServiceCalculatorView'
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

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: {
      canonical: `/calculators/${config.slug}`,
    },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: canonicalUrl,
      siteName: 'Frame Cipher',
      type: 'website',
      images: ['/logo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.metaTitle,
      description: config.metaDescription,
      images: ['/logo.png'],
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
      <DedicatedServiceCalculatorView config={config} />
    </>
  )
}
