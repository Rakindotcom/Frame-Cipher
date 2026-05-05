import Home from '../src/views/Home'

export const metadata = {
  title: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
  description:
    'Frame Cipher is a 360 marketing, media and technology agency offering branding, digital marketing, video production, photography, websites, software solutions and growth systems.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
    description:
      'Frame Cipher helps brands plan, build, produce, launch, advertise, automate, and scale through strategy, creative, software, content production, and performance marketing.',
    url: '/',
  },
}

export default function Page() {
  return <Home />
}
