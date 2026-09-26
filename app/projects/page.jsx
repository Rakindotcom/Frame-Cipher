import ProjectsPage from '../../src/views/ProjectsPage'

export const metadata = {
  title: 'Work | Frame Cipher',
  description:
    'Explore Frame Cipher work across video production, design, websites, software, paid advertising, SEO, and measurable growth systems.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    type: 'website',
    url: '/projects',
    siteName: 'Frame Cipher',
    title: 'Work | Frame Cipher',
    description:
      'Explore Frame Cipher work across video production, design, websites, software, paid advertising, SEO, and measurable growth systems.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work | Frame Cipher',
    description:
      'Explore Frame Cipher work across video production, design, websites, software, paid advertising, SEO, and measurable growth systems.',
    images: ['/logo.png'],
  },
}

export default async function Page({ searchParams }) {
  const params = await searchParams
  const view = params?.view || params?.category || null

  return <ProjectsPage key={view || 'portfolio-all'} initialView={view} />
}
