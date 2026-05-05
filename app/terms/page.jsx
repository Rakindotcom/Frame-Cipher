import TermsPage from '../../src/views/TermsPage'

export const metadata = {
  title: 'Terms of Service',
  description: 'Frame Cipher terms of service for website visitors and production inquiries.',
  alternates: {
    canonical: '/terms',
  },
}

export default function Page() {
  return <TermsPage />
}
