import Home from '../src/views/Home'
import { JsonLd } from '../src/components/seo/JsonLd'
import { generatePageSchema } from '../src/lib/seo/schema'
import { siteUrl } from '../src/data/agency'

export const metadata = {
  title: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
  description:
    'Frame Cipher is a Dhaka-based marketing, media, branding, website, software, and growth agency helping brands plan, build, launch, and optimize campaigns.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
    description:
      'Frame Cipher is a Dhaka-based marketing, media, branding, website, software, and growth agency helping brands plan, build, launch, and optimize campaigns.',
    url: '/',
    images: ['/logo.png'],
  },
}

export default function Page() {
  const schema = generatePageSchema({
    pageType: 'homepage',
    data: {
      canonicalUrl: `${siteUrl}/`,
      title: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
      description:
        'Frame Cipher is a Dhaka-based marketing, media, branding, website, software, and growth agency helping brands plan, build, launch, and optimize campaigns.',
    },
  })

  return (
    <>
      <JsonLd data={schema} />
      <Home />
    </>
  )
}
