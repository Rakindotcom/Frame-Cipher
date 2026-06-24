import { services, siteUrl } from '../src/data/agency'

const lastModified = new Date('2026-05-05')

const staticRoutes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/projects', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/case-studies', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
]

const serviceRoutes = services.map((service) => ({
  path: `/services/${service.slug}`,
  priority: service.slug === '360-marketing' ? 0.8 : 0.7,
  changeFrequency: 'monthly',
}))

export default function sitemap() {
  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
