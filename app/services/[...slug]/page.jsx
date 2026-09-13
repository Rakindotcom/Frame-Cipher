import { notFound } from 'next/navigation'
import ServiceExperience from '../../../src/views/ServiceExperience'
import ServiceDetailPage from '../../../src/views/ServiceDetailPage'
import { getServicePageBySlug, getAllServicePages } from '../../../src/data/servicePages'
import { getServiceBySlug, getServiceRouteSlugs, siteUrl } from '../../../src/data/agency'

export function generateStaticParams() {
  const docRoutes = getAllServicePages().map((page) => ({
    slug: page.slug.split('/'),
  }))

  const legacyRoutes = getServiceRouteSlugs().map((slug) => ({
    slug: [slug],
  }))

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
    return {
      title: docPage.seoTitle,
      description: docPage.metaDescription,
      alternates: {
        canonical: docPage.fullPath,
      },
      openGraph: {
        title: docPage.seoTitle,
        description: docPage.metaDescription,
        url: canonicalUrl,
        images: ['/logo.png'],
      },
      twitter: {
        card: 'summary_large_image',
        title: docPage.seoTitle,
        description: docPage.metaDescription,
        images: ['/logo.png'],
      },
    }
  }

  const legacyService = slugArray.length === 1 ? getServiceBySlug(slugArray[0]) : null
  if (legacyService) {
    return {
      title: legacyService.metadataTitle,
      description: legacyService.metadataDescription,
      alternates: {
        canonical: `/services/${legacyService.slug}`,
      },
      openGraph: {
        title: legacyService.metadataTitle,
        description: legacyService.metadataDescription,
        url: `/services/${legacyService.slug}`,
        images: ['/logo.png'],
      },
      twitter: {
        card: 'summary_large_image',
        title: legacyService.metadataTitle,
        description: legacyService.metadataDescription,
        images: ['/logo.png'],
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
    return <ServiceExperience service={docPage} />
  }

  // Check legacy services
  const legacyService = slugArray.length === 1 ? getServiceBySlug(slugArray[0]) : null
  if (legacyService) {
    return <ServiceDetailPage service={legacyService} />
  }

  notFound()
}
