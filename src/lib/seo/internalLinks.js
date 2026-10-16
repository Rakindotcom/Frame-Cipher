import { getServiceBySlug } from '../../data/agency.js'
import {
  getAllServicePages,
  getPillarServices,
  getServiceDisplayName,
  getServicePageBySlug,
  getServiceSummary,
  getSubServicesForPillar,
} from '../../data/servicePages.js'

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

export const ADS_CALCULATOR_MAP = {
  'paid-advertising/meta-ads': { href: '/calculators/meta-ads', anchor: 'Calculate Meta Ad ROI & Projected ROAS' },
  'paid-advertising/google-ads': { href: '/calculators/google-ads', anchor: 'Estimate Google Ads Search & Shopping ROI' },
  'paid-advertising/lead-generation-ads': { href: '/calculators/lead-generation-ads', anchor: 'Model B2B Cost Per Lead (CPL) & Pipeline' },
  'paid-advertising/linkedin-ads': { href: '/calculators/linkedin-ads', anchor: 'Project B2B LinkedIn Ad Campaign ROI' },
  'paid-advertising/tiktok-ads': { href: '/calculators/tiktok-ads', anchor: 'Estimate TikTok Ad CPM, Views & Conversions' },
  'paid-advertising/amazon-ads': { href: '/calculators/amazon-ads', anchor: 'Calculate Amazon ACOS & Profit Margins' },
  'paid-advertising/remarketing': { href: '/calculators/remarketing', anchor: 'Model Audience Recapture & Remarketing ROAS' },
  'paid-advertising/chatgpt-ads': { href: '/calculators/chatgpt-ads', anchor: 'Project AI Search Advertising Budget & Returns' },
  'paid-advertising/pinterest-ads': { href: '/calculators/pinterest-ads', anchor: 'Model Visual Commerce & Pinterest Shopping ROI' },
  'paid-advertising/microsoft-ads': { href: '/calculators/microsoft-ads', anchor: 'Estimate Microsoft & Bing Search Ad Returns' },
}

export const STUDIO_SERVICE_BRIDGES = {
  'content-creation/video-production': { href: '/studio/video-production', anchor: 'Film at our Dhaka 4K Cinema Studio' },
  'content-creation/product-photography': { href: '/studio/product-photography', anchor: 'Book Commercial Product Photography in Dhaka' },
  'content-creation/short-form-video': { href: '/studio/social-media-video-production', anchor: 'Produce Vertical Reels & TikToks in Our Studio' },
  'content-creation/youtube-videos': { href: '/studio/podcast', anchor: 'Record Video Podcasts & Masterclasses in Dhaka' },
  'content-creation/motion-graphics-animation': { href: '/studio/post-production', anchor: 'DaVinci Color Grading & Post-Production Suite' },
  'website-design-development/ecommerce-website': { href: '/studio/product-photography', anchor: 'Commercial Catalog Product Shoots for E-Commerce' },
  'paid-advertising/meta-ads': { href: '/studio/social-media-video-production', anchor: 'High-Converting Video Creative Production in Dhaka' },
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
    calculator: ADS_CALCULATOR_MAP[page.slug] || null,
    studioBridge: STUDIO_SERVICE_BRIDGES[page.slug] || null,
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

export const CASE_STUDY_CALCULATOR_LINKS = {
  'facebook-instagram-ads-portfolio': { href: '/calculators/meta-ads', anchor: 'Calculate Meta Ad ROAS & Profit Margins' },
  'sumons-aroma-messenger-commerce': { href: '/calculators/meta-ads', anchor: 'Model Messenger Ad ROI & Customer Acquisition' },
  'rihawebtech-meta-ads': { href: '/calculators/lead-generation-ads', anchor: 'Model B2B Cost Per Lead (CPL)' },
  'ipb-edu-happy-tours-meta-ads': { href: '/calculators/lead-generation-ads', anchor: 'Estimate Student Lead Generation ROI' },
  'ruposhi-mart-meta-ads': { href: '/calculators/meta-ads', anchor: 'Calculate E-Commerce Meta Ad ROAS' },
  'luxury-beauty-rwt-meta-ads': { href: '/calculators/meta-ads', anchor: 'Estimate Beauty Brand Advertising ROAS' },
  'rpl-consultancy-meta-ads': { href: '/calculators/lead-generation-ads', anchor: 'Calculate B2B Client Acquisition Cost' },
  'travel-lifestyle-meta-ads': { href: '/calculators/remarketing', anchor: 'Model Tour Remarketing & Recapture ROAS' },
}

export const CASE_STUDY_STUDIO_LINKS = {
  'dr-ferdoush-saleheen': { href: '/studio/podcast', anchor: 'Record in Our 4K Podcast Studio in Dhaka' },
  'luxury-beauty-rwt-meta-ads': { href: '/studio/product-photography', anchor: 'Book Commercial Product Photography at FrameCipher Studio' },
  'sumons-aroma-messenger-commerce': { href: '/studio/social-media-video-production', anchor: 'Produce High-Converting Reels & TikToks in Our Studio' },
}

export function getCaseStudyServiceLinks(study) {
  const slugs = CASE_STUDY_SERVICE_LINKS[study?.slug]
  if (!slugs) return []
  return slugs.map(toLink).filter(Boolean)
}

export function getCaseStudyCalculatorLink(study) {
  return CASE_STUDY_CALCULATOR_LINKS[study?.slug] || null
}

export function getCaseStudyStudioLink(study) {
  return CASE_STUDY_STUDIO_LINKS[study?.slug] || null
}

