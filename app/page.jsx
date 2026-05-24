import Home from '../src/views/Home'

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
  },
}

export default function Page() {
  return <Home />
}
