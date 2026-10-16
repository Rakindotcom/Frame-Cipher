import { createElement } from 'react'
import { notFound } from 'next/navigation'
import ServiceExperience from '../../../src/views/ServiceExperience'
import ServiceDetailPage from '../../../src/views/ServiceDetailPage'
import { getServiceComponent } from '../../../src/components/services/registry'
import { getServicePageBySlug, getAllServicePages } from '../../../src/data/servicePages'
import { siteUrl, getServiceBySlug } from '../../../src/data/agency'
import { buildLegacyServiceSchema, buildServiceSchema } from '../../../src/lib/seo/schema'
import { withBrandSuffix, clampMetaDescription } from '../../../src/lib/seo/metadata'
import ServiceClusterSection from '../../../src/components/services/ServiceClusterSection'

function schemaScript(schema) {
  if (!schema) return null
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll('<', '\\u003c') }}
    />
  )
}

export function generateStaticParams() {
  const docRoutes = getAllServicePages().map((page) => ({
    slug: page.slug.split('/'),
  }))

  const legacyRoutes = [{ slug: ['360-marketing'] }]

  // Deduplicate routes
  const seen = new Set()
  const combined = []

  for (const item of [...docRoutes, ...legacyRoutes]) {
    const key = item.slug.join('/')
    if (!seen.has(key)) {
      seen.add(key)
      combined.push(item)
    }
  }

  return combined
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const slugArray = Array.isArray(slug) ? slug : [slug]

  const docPage = getServicePageBySlug(slugArray)
  if (docPage) {
    const canonicalUrl = `${siteUrl}${docPage.fullPath}`
    // Service meta descriptions came from the service data set and several ran
    // past the ~160 character SERP limit, so they are clamped here (the visible
    // on-page copy is untouched).
    const title = withBrandSuffix(docPage.seoTitle)
    const description = clampMetaDescription(docPage.metaDescription)
    return {
      title,
      description,
      alternates: {
        canonical: docPage.fullPath,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
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

  const legacyService = slugArray.length === 1 ? getServiceBySlug(slugArray[0]) : null
  if (legacyService) {
    const title = withBrandSuffix(legacyService.metadataTitle)
    const description = clampMetaDescription(legacyService.metadataDescription)
    return {
      title,
      description,
      alternates: {
        canonical: `/services/${legacyService.slug}`,
      },
      openGraph: {
        title,
        description,
        url: `/services/${legacyService.slug}`,
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

  return {}
}

export default async function Page({ params }) {
  const { slug } = await params
  const slugArray = Array.isArray(slug) ? slug : [slug]

  // Check 74 doc service pages first
  const docPage = getServicePageBySlug(slugArray)
  if (docPage) {
    const SpecificService = getServiceComponent(docPage.slug)
    const content = SpecificService
      ? createElement(SpecificService, { service: docPage })
      : <ServiceExperience service={docPage} />
    return (
      <>
        {schemaScript(buildServiceSchema(docPage))}
        {content}
        <ServiceClusterSection service={docPage} />
      </>
    )
  }

  // Check legacy services
  const legacyService = slugArray.length === 1 ? getServiceBySlug(slugArray[0]) : null
  if (legacyService) {
    return (
      <>
        {schemaScript(buildLegacyServiceSchema(legacyService))}
        <ServiceDetailPage service={legacyService} />
      </>
    )
  }

  notFound()
}
