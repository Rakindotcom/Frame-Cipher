import ProjectsPage from '../../src/views/ProjectsPage'
import { BreadcrumbJsonLd } from '../../src/components/seo/JsonLd'

export const metadata = {
  title: 'Work | Frame Cipher',
  description:
    'Explore Frame Cipher work across video production, design, websites, software, content writing, paid advertising, SEO, and measurable growth systems.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    type: 'website',
    url: '/projects',
    siteName: 'Frame Cipher',
    title: 'Work | Frame Cipher',
    description:
      'Explore Frame Cipher work across video production, design, websites, software, content writing, paid advertising, SEO, and measurable growth systems.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work | Frame Cipher',
    description:
      'Explore Frame Cipher work across video production, design, websites, software, content writing, paid advertising, SEO, and measurable growth systems.',
    images: ['/og-image.png'],
  },
}

export default async function Page({ searchParams }) {
  const params = await searchParams
  const view = params?.view || params?.category || null

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Work', url: '/projects' },
        ]}
      />
      <ProjectsPage key={view || 'portfolio-all'} initialView={view} />
    </>
  )
}
