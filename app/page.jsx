import Home from '../src/views/Home'
import { JsonLd } from '../src/components/seo/JsonLd'
import { generatePageSchema } from '../src/lib/seo/schema'
import { siteUrl } from '../src/data/agency'
import { getPublicBlogPosts } from '../src/lib/blog/serverBlogStorage'

export const metadata = {
  title: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
  description:
    'Frame Cipher is a Dhaka-based marketing, media, branding, website, software, and growth agency helping brands plan, build, launch, and optimize campaigns.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Frame Cipher',
    locale: 'en_US',
    title: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
    description:
      'Frame Cipher is a Dhaka-based marketing, media, branding, website, software, and growth agency helping brands plan, build, launch, and optimize campaigns.',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@framecipher',
    creator: '@framecipher',
    title: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
    description:
      'Frame Cipher is a Dhaka-based marketing, media, branding, website, software, and growth agency helping brands plan, build, launch, and optimize campaigns.',
    images: [`${siteUrl}/logo.png`],
  },
}


export default async function Page() {
  const latestPosts = await getPublicBlogPosts().catch(() => [])

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
      <Home latestPosts={latestPosts} />
    </>
  )
}
