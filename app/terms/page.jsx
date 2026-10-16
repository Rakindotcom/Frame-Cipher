import TermsPage from '../../src/views/TermsPage'
import { BreadcrumbJsonLd } from '../../src/components/seo/JsonLd'

export const metadata = {
  title: 'Terms of Service | Frame Cipher',
  description: 'Frame Cipher terms of service for website visitors and production inquiries.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | Frame Cipher',
    description: 'Frame Cipher terms of service for website visitors and production inquiries.',
    url: '/terms',
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
          { name: 'Terms of Service', url: '/terms' },
        ]}
      />
      <TermsPage />
    </>
  )
}
