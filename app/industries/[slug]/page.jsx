import { notFound } from 'next/navigation'
import IndustryLandingPage from '../../../src/views/IndustryLandingPage'
import { getIndustryLandingPageBySlug, getIndustryRouteSlugs } from '../../../src/data/agency'

export function generateStaticParams() {
  return getIndustryRouteSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = getIndustryLandingPageBySlug(slug)

  if (!page) {
    return {}
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/industries/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/industries/${page.slug}`,
    },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  const page = getIndustryLandingPageBySlug(slug)

  if (!page) {
    notFound()
  }

  return <IndustryLandingPage page={page} />
}
