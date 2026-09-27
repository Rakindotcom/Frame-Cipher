import { getServiceBySlug } from '../../data/agency'
import {
  getAllServicePages,
  getPillarServices,
  getServiceDisplayName,
  getServicePageBySlug,
  getServiceSummary,
  getSubServicesForPillar,
} from '../../data/servicePages'

export const HUB_ANCHORS = {
  'website-design-development': 'our Website Design & Development services',
  'app-development': 'our App Development services',
  seo: 'our Search Engine Optimization services',
  'paid-advertising': 'our Paid Advertising services',
  'social-media-management': 'our Social Media Management services',
  'content-writing': 'our Content Writing services',
  'content-creation': 'our Content Creation services',
}

export const CROSS_CLUSTER_LINKS = {
  'website-design-development': ['seo/seo-audit', 'content-writing/website-content'],
  'app-development': ['website-design-development/custom-development', 'seo/technical-seo'],
  seo: ['content-writing/seo-blog-writing', 'website-design-development/redesign'],
  'paid-advertising': ['website-design-development/landing-pages', 'content-writing/sales-copywriting'],
  'social-media-management': ['content-creation/social-media-graphics', 'paid-advertising/meta-ads'],
  'content-writing': ['seo/keyword-research', 'social-media-management/content-calendar-strategy'],
  'content-creation': ['social-media-management/facebook', 'paid-advertising/meta-ads'],
}

const PLATFORM_COMPARISON_SLUGS = [
  'website-design-development/wordpress',
  'website-design-development/shopify',
  'website-design-development/magento',
  'website-design-development/webflow',
  'website-design-development/wix',
]

export const COMPARISON_SETS = PLATFORM_COMPARISON_SLUGS.reduce((sets, slug) => {
  sets[slug] = PLATFORM_COMPARISON_SLUGS.filter((candidate) => candidate !== slug)
  return sets
}, {})

export const COMPARISON_ANCHOR_PREFIX = 'compare with'

export const ADS_PLATFORM_SLUGS = [
  'paid-advertising/google-ads',
  'paid-advertising/meta-ads',
  'paid-advertising/linkedin-ads',
  'paid-advertising/chatgpt-ads',
  'paid-advertising/pinterest-ads',
  'paid-advertising/tiktok-ads',
  'paid-advertising/microsoft-ads',
  'paid-advertising/amazon-ads',
  'paid-advertising/remarketing',
  'paid-advertising/lead-generation-ads',
]

export const ADS_COMPARISON_SETS = ADS_PLATFORM_SLUGS.reduce((sets, slug) => {
  sets[slug] = ADS_PLATFORM_SLUGS.filter((candidate) => candidate !== slug)
  return sets
}, {})

export const GEO_CONTEXT_LINKS = {
  seo: { href: '/services/seo/local-seo', anchor: 'Local SEO in Dhaka' },
  'website-design-development': {
    href: '/services/website-design-development/landing-pages',
    anchor: 'landing page design for the Bangladesh market',
  },
  'paid-advertising/meta-ads': {
    href: '/services/facebook-ads-bangladesh',
    anchor: 'Facebook Ads management for Bangladesh brands',
  },
}

const REDIRECTED_LEGACY_SLUGS = new Set([
  'local-seo-dhaka',
  'landing-page-design-bangladesh',
  'video',
  'videography',
  'video-production',
])

export const LEGACY_SERVICE_CANONICAL = {
  '360-marketing': '/services/360-marketing',
  'brand-strategy': '/services/content-creation/branding',
  'branding-design': '/services/content-creation/branding',
  'social-media-marketing': '/services/social-media-management',
  'paid-ads': '/services/paid-advertising',
  seo: '/services/seo',
  'video-production': '/services/content-creation/video-production',
  photography: '/services/content-creation/product-photography',
  'web-development': '/services/website-design-development',
  'software-solutions': '/services/app-development',
  ecommerce: '/services/website-design-development/ecommerce-website',
  'landing-pages': '/services/website-design-development/landing-pages',
  'landing-page-design-bangladesh': '/services/website-design-development/landing-pages',
  'local-seo-dhaka': '/services/seo/local-seo',
  'automation-crm': '/services/app-development/saas-apps',
}

export function resolveServiceHref(slug) {
  if (!slug) return null
  if (LEGACY_SERVICE_CANONICAL[slug]) return LEGACY_SERVICE_CANONICAL[slug]

  const page = getServicePageBySlug(slug)
  if (page) return page.fullPath

  return getServiceBySlug(slug) ? `/services/${slug}` : null
}

export const CASE_STUDY_SERVICE_LINKS = {
  'dr-ferdoush-saleheen': [
    'content-creation/branding',
    'content-creation/video-production',
  ],
  'facebook-instagram-ads-portfolio': [
    'paid-advertising/meta-ads',
    'paid-advertising/lead-generation-ads',
  ],
  'sumons-aroma-messenger-commerce': [
    'paid-advertising/meta-ads',
    'website-design-development/landing-pages',
  ],
  'rihawebtech-meta-ads': [
    'paid-advertising/meta-ads',
    'website-design-development/business-website',
  ],
  'ipb-edu-happy-tours-meta-ads': [
    'paid-advertising/lead-generation-ads',
    'paid-advertising/meta-ads',
  ],
  'ruposhi-mart-meta-ads': [
    'paid-advertising/meta-ads',
    'website-design-development/ecommerce-website',
  ],
  'luxury-beauty-rwt-meta-ads': [
    'paid-advertising/meta-ads',
    'content-creation/social-media-graphics',
  ],
  'rpl-consultancy-meta-ads': [
    'paid-advertising/lead-generation-ads',
    'paid-advertising/google-ads',
  ],
  'travel-lifestyle-meta-ads': [
    'paid-advertising/google-ads',
    'paid-advertising/meta-ads',
  ],
  'border-locksmiths-local-seo': ['seo/local-seo', 'seo/seo-audit'],
  'jarixo-topical-map-seo-visibility': ['seo/technical-seo', 'seo/seo-strategy'],
  'phone-fashion-fix-local-seo': ['seo/local-seo', 'seo/on-page-seo'],
  'pixc-retouch-global-seo': ['seo/international-seo', 'seo/link-building'],
}

function isLinkableServicePath(href) {
  if (!href?.startsWith('/services/')) return true

  const knownDocPaths = new Set(getAllServicePages().map((page) => page.fullPath))
  if (knownDocPaths.has(href)) return true

  const slug = href.replace('/services/', '')
  if (REDIRECTED_LEGACY_SLUGS.has(slug)) return false

  return Boolean(getServiceBySlug(slug))
}

function toLink(entry) {
  if (!entry) return null

  if (typeof entry === 'string') {
    const target = getServicePageBySlug(entry)
    if (!target) return null
    return { slug: target.slug, href: target.fullPath, anchor: getServiceDisplayName(target) }
  }

  if (entry.slug) {
    const target = getServicePageBySlug(entry.slug)
    if (!target) return null
    return {
      slug: target.slug,
      href: target.fullPath,
      anchor: entry.anchor || getServiceDisplayName(target),
    }
  }

  if (entry.href && isLinkableServicePath(entry.href)) {
    return { slug: null, href: entry.href, anchor: entry.anchor }
  }

  return null
}

function byIndex(a, b) {
  return (a.index ?? 0) - (b.index ?? 0)
}

function toSummaryLink(page) {
  return {
    slug: page.slug,
    href: page.fullPath,
    anchor: getServiceDisplayName(page),
    summary: getServiceSummary(page),
  }
}

function withoutSelf(links, page) {
  return links.filter((link) => link && link.href !== page.fullPath)
}

export function getIndexAdjacentSiblings(page, limit = 3) {
  if (!page || page.pageType !== 'Sub Service') return []

  const ordered = getSubServicesForPillar(page.pillarSlug).slice().sort(byIndex)
  if (ordered.length <= 1) return []

  const selfIndex = ordered.findIndex((item) => item.slug === page.slug)
  if (selfIndex === -1) return ordered.slice(0, limit)

  const siblings = []
  const max = Math.min(limit, ordered.length - 1)
  for (let offset = 1; offset <= max; offset += 1) {
    siblings.push(ordered[(selfIndex + offset) % ordered.length])
  }
  return siblings
}

export function getComparisonLinks(page) {
  const set = COMPARISON_SETS[page?.slug]
  if (!set) return []
  return set
    .map(toLink)
    .filter(Boolean)
    .map((link) => ({
      ...link,
      anchor: `${COMPARISON_ANCHOR_PREFIX} ${link.anchor.toLowerCase()}`,
    }))
}

export function getGeoContextLink(page) {
  const entry = GEO_CONTEXT_LINKS[page?.slug]
  if (!entry) return null
  const link = toLink(entry)
  if (!link || link.href === page.fullPath) return null
  return link
}

/**
 * Every ads platform page links to the other nine with a "compare with X
 * management" anchor, so any two platform pages are one click apart in both
 * directions. Ordered so the first links stay the index-adjacent siblings the
 * link map already prioritises.
 */
export function getAdsComparisonLinks(page, limit) {
  const set = ADS_COMPARISON_SETS[page?.slug]
  if (!set) return []

  const siblingFirst = new Set(getIndexAdjacentSiblings(page, 3).map((item) => item.slug))

  const links = [
    ...set.filter((slug) => siblingFirst.has(slug)),
    ...set.filter((slug) => !siblingFirst.has(slug)),
  ]
    .map((slug) => toLink(slug))
    .filter(Boolean)
    .map((link) => ({
      ...link,
      anchor: `compare with ${link.anchor.replace(/\s+management$/i, '')}`,
    }))

  return typeof limit === 'number' ? links.slice(0, limit) : links
}

export function getServiceLinkPlan(page, options = {}) {
  if (!page) return null

  const siblingLimit = options.siblingLimit ?? 3
  const isPillar = page.pageType === 'Pillar Service'
  const pillarSlug = isPillar ? page.slug : page.pillarSlug
  const pillar = pillarSlug ? getServicePageBySlug(pillarSlug) : null

  return {
    hub:
      isPillar || !pillar
        ? null
        : {
            slug: pillar.slug,
            href: pillar.fullPath,
            anchor: HUB_ANCHORS[pillarSlug] || `our ${getServiceDisplayName(pillar)} services`,
          },
    siblings: getIndexAdjacentSiblings(page, siblingLimit).map(toSummaryLink),
    crossCluster: withoutSelf((CROSS_CLUSTER_LINKS[pillarSlug] || []).map(toLink).filter(Boolean), page),
    comparison: getComparisonLinks(page),
    geoContext: getGeoContextLink(page),
  }
}

export function getHubOfHubsLinks() {
  return getPillarServices()
    .slice()
    .sort(byIndex)
    .map((pillar) => ({
      slug: pillar.slug,
      href: pillar.fullPath,
      anchor: getServiceDisplayName(pillar),
      summary: pillar.metaDescription || pillar.shortDesc || '',
    }))
}

export function getCaseStudyServiceLinks(study) {
  const slugs = CASE_STUDY_SERVICE_LINKS[study?.slug]
  if (!slugs) return []
  return slugs.map(toLink).filter(Boolean)
}
