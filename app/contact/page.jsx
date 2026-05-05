import ContactPage from '../../src/views/ContactPage'

export const metadata = {
  title: 'Contact',
  description:
    'Tell Frame Cipher what you are building and get help with campaign planning, content production, websites, software, or a complete 360 growth system.',
  alternates: {
    canonical: '/contact',
  },
}

export default function Page() {
  return <ContactPage />
}
