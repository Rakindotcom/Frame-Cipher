import ServicesPage from '../../src/views/ServicesPage'

export const metadata = {
  title: 'Services',
  description:
    'Explore Frame Cipher services across 360 marketing, brand strategy, social media, paid ads, SEO, design, video production, websites, software, e-commerce, and automation.',
  alternates: {
    canonical: '/services',
  },
}

export default function Page() {
  return <ServicesPage />
}
