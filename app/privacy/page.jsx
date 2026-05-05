import PrivacyPage from '../../src/views/PrivacyPage'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Frame Cipher privacy policy for website visitors and contact form submissions.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function Page() {
  return <PrivacyPage />
}
