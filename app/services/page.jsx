import ServicesPage from '../../src/views/ServicesPage'
import { JsonLd } from '../../src/components/seo/JsonLd'
import { generatePageSchema } from '../../src/lib/seo/schema'
import { siteUrl } from '../../src/data/agency'

export const metadata = {
  title: 'Digital Marketing, Web & Software Development Services | FrameCipher',
  description:
    'Explore FrameCipher\u2019s marketing, creative, web development and custom software services built to help businesses build, market and grow.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    type: 'website',
    url: '/services',
    siteName: 'Frame Cipher',
    title: 'Digital Marketing, Web & Software Development Services | FrameCipher',
    description:
      'Explore FrameCipher\u2019s marketing, creative, web development and custom software services built to help businesses build, market and grow.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing, Web & Software Development Services | FrameCipher',
    description:
      'Explore FrameCipher\u2019s marketing, creative, web development and custom software services built to help businesses build, market and grow.',
    images: ['/logo.png'],
  },
}

export default function Page() {
  const schema = generatePageSchema({
    pageType: 'services',
    data: {
      canonicalUrl: `${siteUrl}/services`,
      title: 'Digital Marketing, Web & Software Development Services | FrameCipher',
      description:
        'Explore FrameCipher\u2019s marketing, creative, web development and custom software services built to help businesses build, market and grow.',
    },
  })

  return (
    <>
      <JsonLd data={schema} />
      <ServicesPage />
    </>
  )
}
