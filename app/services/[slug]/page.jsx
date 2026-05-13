import { notFound } from 'next/navigation'
import ServiceDetailPage from '../../../src/views/ServiceDetailPage'
import { getServiceBySlug, getServiceRouteSlugs } from '../../../src/data/agency'

export function generateStaticParams() {
  return getServiceRouteSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  return {
    title: service.metadataTitle,
    description: service.metadataDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metadataTitle,
      description: service.metadataDescription,
      url: `/services/${service.slug}`,
    },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailPage service={service} />
}
