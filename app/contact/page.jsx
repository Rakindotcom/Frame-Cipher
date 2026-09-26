import ContactPage from '../../src/views/ContactPage'
import { JsonLd } from '../../src/components/seo/JsonLd'
import { generatePageSchema } from '../../src/lib/seo/schema'
import { siteUrl } from '../../src/data/agency'

export const metadata = {
  title: 'Contact | Frame Cipher',
  description:
    'Tell Frame Cipher what you are building and get help with campaign planning, content production, websites, software, or a complete 360 growth system.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    url: '/contact',
    siteName: 'Frame Cipher',
    title: 'Contact | Frame Cipher',
    description:
      'Tell Frame Cipher what you are building and get help with campaign planning, content production, websites, software, or a complete 360 growth system.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Frame Cipher',
    description:
      'Tell Frame Cipher what you are building and get help with campaign planning, content production, websites, software, or a complete 360 growth system.',
    images: ['/logo.png'],
  },
}

export default function Page() {
  const schema = generatePageSchema({
    pageType: 'contact',
    data: {
      canonicalUrl: `${siteUrl}/contact`,
      title: 'Contact | Frame Cipher',
      description:
        'Tell Frame Cipher what you are building and get help with campaign planning, content production, websites, software, or a complete 360 growth system.',
    },
  })

  return (
    <>
      <JsonLd data={schema} />
      <ContactPage />
    </>
  )
}
