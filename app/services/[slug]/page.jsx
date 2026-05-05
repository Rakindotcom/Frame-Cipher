import { notFound } from 'next/navigation'
import ServiceDetailPage from '../../../src/views/ServiceDetailPage'
import { getServiceBySlug, services } from '../../../src/data/agency'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug)

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

export default function Page({ params }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailPage service={service} />
}
