import AboutPage from '../../src/views/AboutPage'
import { JsonLd } from '../../src/components/seo/JsonLd'
import { generatePageSchema } from '../../src/lib/seo/schema'
import { siteUrl } from '../../src/data/agency'

export const metadata = {
  title: 'About Frame Cipher',
  description:
    'Learn about Frame Cipher, a modern 360 agency built for brands that need strategy, content, technology, marketing, and execution under one roof.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    url: '/about',
    siteName: 'Frame Cipher',
    title: 'About Frame Cipher',
    description:
      'Learn about Frame Cipher, a modern 360 agency built for brands that need strategy, content, technology, marketing, and execution under one roof.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Frame Cipher',
    description:
      'Learn about Frame Cipher, a modern 360 agency built for brands that need strategy, content, technology, marketing, and execution under one roof.',
    images: ['/logo.png'],
  },
}

export default function Page() {
  const schema = generatePageSchema({
    pageType: 'about',
    data: {
      canonicalUrl: `${siteUrl}/about`,
      title: 'About Frame Cipher',
      description:
        'Learn about Frame Cipher, a modern 360 agency built for brands that need strategy, content, technology, marketing, and execution under one roof.',
    },
  })

  return (
    <>
      <JsonLd data={schema} />
      <AboutPage />
    </>
  )
}
