import { services, siteUrl } from '../src/data/agency'
import { getAllServicePages } from '../src/data/servicePages'
import { growthCaseStudies } from '../src/data/growthWork'

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

// 74 Google Doc service pages
const docServicePages = getAllServicePages()
const docServiceRoutes = docServicePages.map((page) => ({
  path: page.fullPath,
  priority: page.pageType === 'Pillar Service' ? 0.9 : 0.8,
  changeFrequency: page.pageType === 'Pillar Service' ? 'weekly' : 'monthly',
}))

const coveredPaths = new Set(docServiceRoutes.map((r) => r.path))

// Legacy service routes (if not already covered)
const legacyServiceRoutes = services
  .map((service) => ({
    path: `/services/${service.slug}`,
    priority: service.slug === '360-marketing' ? 0.8 : 0.7,
    changeFrequency: 'monthly',
  }))
  .filter((route) => !coveredPaths.has(route.path))

const caseStudyRoutes = growthCaseStudies.map((study) => ({
  path: `/case-studies/${study.slug}`,
  priority: 0.7,
  changeFrequency: 'monthly',
}))

export default function sitemap() {
  return [...staticRoutes, ...docServiceRoutes, ...legacyServiceRoutes, ...caseStudyRoutes].map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
