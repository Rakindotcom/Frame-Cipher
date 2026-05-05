import ServicesPage from '../../src/views/ServicesPage'

export const metadata = {
  title: 'Services',
  description:
    'Commercial video production, post production, photography, and brand strategy services from Frame Cipher.',
  alternates: {
    canonical: '/services',
  },
}

export default function Page() {
  return <ServicesPage />
}
