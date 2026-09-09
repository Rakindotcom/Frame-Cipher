import { notFound } from 'next/navigation'
import CaseStudyDetailPage from '../../../src/views/CaseStudyDetailPage'
import { getGrowthCaseStudyBySlug, getGrowthCaseStudySlugs } from '../../../src/data/growthWork'

export function generateStaticParams() {
  return getGrowthCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const study = getGrowthCaseStudyBySlug(slug)

  if (!study) {
    return {}
  }

  const title = `${study.title} | Frame Cipher Case Study`
  const description = study.summary

  return {
    title,
    description,
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/case-studies/${study.slug}`,
      images: [study.image?.src || '/logo.png'],
    },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  const study = getGrowthCaseStudyBySlug(slug)

  if (!study) {
    notFound()
  }

  return <CaseStudyDetailPage study={study} />
}
