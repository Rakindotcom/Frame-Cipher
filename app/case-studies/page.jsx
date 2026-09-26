import CaseStudiesPage from '../../src/views/CaseStudiesPage'
import { JsonLd } from '../../src/components/seo/JsonLd'
import { generatePageSchema } from '../../src/lib/seo/schema'
import { siteUrl } from '../../src/data/agency'

export const metadata = {
  title: 'Case Studies | Frame Cipher',
  description:
    'Explore Frame Cipher case studies across personal branding, Meta Ads, local SEO, technical SEO, content architecture, and global organic growth.',
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    type: 'website',
    url: '/case-studies',
    siteName: 'Frame Cipher',
    title: 'Case Studies | Frame Cipher',
    description:
      'Explore Frame Cipher case studies across personal branding, Meta Ads, local SEO, technical SEO, content architecture, and global organic growth.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Frame Cipher',
    description:
      'Explore Frame Cipher case studies across personal branding, Meta Ads, local SEO, technical SEO, content architecture, and global organic growth.',
    images: ['/logo.png'],
  },
}

export default function Page() {
  const schema = generatePageSchema({
    pageType: 'case-studies',
    data: {
      canonicalUrl: `${siteUrl}/case-studies`,
      title: 'Case Studies | Frame Cipher',
      description:
        'Explore Frame Cipher case studies across personal branding, Meta Ads, local SEO, technical SEO, content architecture, and global organic growth.',
    },
  })

  return (
    <>
      <JsonLd data={schema} />
      <CaseStudiesPage />
    </>
  )
}
