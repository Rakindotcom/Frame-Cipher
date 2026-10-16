import PrivacyPage from '../../src/views/PrivacyPage'
import { BreadcrumbJsonLd } from '../../src/components/seo/JsonLd'

export const metadata = {
  title: 'Privacy Policy | Frame Cipher',
  description: 'Frame Cipher privacy policy for website visitors and contact form submissions.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Frame Cipher',
    description: 'Frame Cipher privacy policy for website visitors and contact form submissions.',
    url: '/privacy',
    siteName: 'Frame Cipher',
    type: 'website',
    images: ['/og-image.png'],
  },
}

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy' },
        ]}
      />
      <PrivacyPage />
    </>
  )
}
