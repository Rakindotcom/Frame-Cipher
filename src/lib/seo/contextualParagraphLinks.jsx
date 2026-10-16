import React from 'react'
import Link from 'next/link'
import { findIndexMatches, isSamePage } from './internalLinkIndex'

/**
 * Enterprise Agentic SEO Contextual In-Paragraph Link Dictionary.
 * Maps high-intent commercial keyword phrases to their canonical target URLs.
 *
 * Rules:
 * 1. Phrased from longest to shortest to ensure specific matches win over generic terms.
 * 2. Case-insensitive with word boundary matching.
 * 3. Never links to current page (anti-looping/anti-cannibalization).
 */
export const CONTEXTUAL_LINK_RULES = [
  // --- Calculators & Interactive Estimation ---
  {
    phrases: [
      'meta ads roas calculator',
      'meta ad budget calculator',
      'facebook ads calculator',
      'roas calculator',
    ],
    href: '/calculators/meta-ads',
    role: 'calculator',
  },
  {
    phrases: [
      'google ads roi calculator',
      'google ads calculator',
      'ad spend roi calculator',
    ],
    href: '/calculators/google-ads',
    role: 'calculator',
  },
  {
    phrases: [
      'b2b lead generation calculator',
      'cost per lead calculator',
      'cpl calculator',
    ],
    href: '/calculators/lead-generation-ads',
    role: 'calculator',
  },

  // --- Studio Hub & Specific Production Facilities ---
  {
    phrases: [
      'podcast recording studio in dhaka',
      'podcast recording studio',
      'podcast studio in dhaka',
      'podcast studio',
    ],
    href: '/studio/podcast',
    role: 'studio',
  },
  {
    phrases: [
      'commercial video production in dhaka',
      'commercial video production company',
      'commercial video production',
      'commercial and tvc production',
    ],
    href: '/studio/commercial-video-production',
    role: 'studio',
  },
  {
    phrases: [
      'corporate video production company',
      'corporate video production in dhaka',
      'corporate video production',
      'corporate brand films',
    ],
    href: '/studio/corporate-video-production',
    role: 'studio',
  },
  {
    phrases: [
      'commercial product photography studio',
      'ecommerce product photography',
      'product photography studio',
    ],
    href: '/studio/product-photography',
    role: 'studio',
  },
  {
    phrases: [
      'davinci resolve color grading suite',
      'davinci resolve post-production',
      'davinci resolve color grading',
      'video editing suite',
      'post-production suite',
    ],
    href: '/studio/video-editing',
    role: 'studio',
  },
  {
    phrases: [
      'soundproof studio space rental',
      'shooting floor rental in dhaka',
      'studio space rental in dhaka',
      'studio space rental',
      'shooting floor rental',
    ],
    href: '/studio/rental',
    role: 'studio',
  },
  {
    phrases: [
      'short-form vertical video production',
      'social media video production',
      'reels and tiktok video production',
    ],
    href: '/studio/social-media-video-production',
    role: 'studio',
  },
  {
    phrases: [
      'video production facility in dhaka',
      'video production company in dhaka',
      'framecipher studio facility',
      'in-house production studio',
      'in-house studio facility',
      'production studio in dhaka',
      'framecipher studio',
    ],
    href: '/studio',
    role: 'studio',
  },
  {
    phrases: [
      'transparent studio packages and hourly rates',
      'studio packages and hourly rates',
      'studio packages and rates',
      'studio pricing packages',
    ],
    href: '/studio/pricing',
    role: 'studio',
  },
  {
    phrases: [
      'soundproof cinema equipment specifications',
      'cinema camera and lighting specifications',
      'equipment and facilities',
    ],
    href: '/studio/equipment-and-facilities',
    role: 'studio',
  },

  // --- Web Design & Development Silo ---
  {
    phrases: [
      'high-converting landing page development',
      'high-converting landing pages',
      'landing page development',
      'landing page design',
      'landing pages',
    ],
    href: '/services/website-design-development/landing-pages',
    role: 'service',
  },
  {
    phrases: [
      'ecommerce website development',
      'ecommerce store development',
      'ecommerce website design',
      'online store development',
    ],
    href: '/services/website-design-development/ecommerce-website',
    role: 'service',
  },
  {
    phrases: [
      'custom wordpress builds and theme development',
      'custom wordpress development',
      'wordpress website development',
      'wordpress development',
    ],
    href: '/services/website-design-development/wordpress-development',
    role: 'service',
  },
  {
    phrases: [
      'custom next.js development',
      'custom web application development',
      'custom next.js web development',
      'custom web development',
    ],
    href: '/services/website-design-development/custom-development',
    role: 'service',
  },
  {
    phrases: [
      'ui/ux interface and experience design',
      'ui/ux design and wireframing',
      'ui/ux design services',
      'ui/ux design',
    ],
    href: '/services/website-design-development/ui-ux-design',
    role: 'service',
  },
  {
    phrases: [
      'website redesign and modernization',
      'website redesign services',
      'rebuilding an existing site',
      'website redesign',
    ],
    href: '/services/website-design-development/redesign',
    role: 'service',
  },
  {
    phrases: [
      'website design and development services in bangladesh',
      'website design and development services',
      'website design & development',
      'custom website design & development',
      'custom website development',
      'high-converting websites',
      'web development',
    ],
    href: '/services/website-design-development',
    role: 'service',
  },

  // --- SEO Silo ---
  {
    phrases: [
      'local seo in bangladesh',
      'google maps local seo',
      'local search visibility',
      'local seo services',
      'local seo',
    ],
    href: '/services/seo/local-seo',
    role: 'service',
  },
  {
    phrases: [
      'technical seo and core web vitals',
      'technical seo architecture',
      'technical seo audit',
      'technical seo',
    ],
    href: '/services/seo/technical-seo',
    role: 'service',
  },
  {
    phrases: [
      'comprehensive seo audit',
      'technical and on-page seo audit',
      'seo audit and competitive analysis',
      'seo audit',
    ],
    href: '/services/seo/seo-audit',
    role: 'service',
  },
  {
    phrases: [
      'topical map seo strategy',
      'topical authority seo',
      'semantic seo strategy',
      'seo strategy',
    ],
    href: '/services/seo/seo-strategy',
    role: 'service',
  },
  {
    phrases: [
      'search engine optimization services in bangladesh',
      'search engine optimization services',
      'search engine optimization',
      'organic search visibility',
      'seo dominance',
      'seo services',
    ],
    href: '/services/seo',
    role: 'service',
  },

  // --- Paid Advertising Silo ---
  {
    phrases: [
      'meta and facebook advertising',
      'meta & facebook ads management',
      'facebook & instagram ads',
      'meta advertising campaigns',
      'meta ads management',
      'meta ad campaigns',
      'facebook ads',
      'meta ads',
    ],
    href: '/services/paid-advertising/meta-ads',
    role: 'service',
  },
  {
    phrases: [
      'google search and display advertising',
      'certified google ads management',
      'google search ads',
      'google ads management',
      'google ads campaigns',
      'google ads',
    ],
    href: '/services/paid-advertising/google-ads',
    role: 'service',
  },
  {
    phrases: [
      'b2b lead generation advertising',
      'high-intent lead generation ads',
      'lead generation ad campaigns',
      'lead generation ads',
    ],
    href: '/services/paid-advertising/lead-generation-ads',
    role: 'service',
  },
  {
    phrases: [
      'linkedin b2b advertising',
      'linkedin ads management',
      'account-based linkedin ads',
      'linkedin ads',
    ],
    href: '/services/paid-advertising/linkedin-ads',
    role: 'service',
  },
  {
    phrases: [
      'multi-channel audience remarketing',
      'retargeting and remarketing campaigns',
      'retargeting campaigns',
      'remarketing campaigns',
    ],
    href: '/services/paid-advertising/remarketing',
    role: 'service',
  },
  {
    phrases: [
      'performance paid advertising campaigns',
      'performance-driven paid advertising',
      'paid advertising services',
      'performance media buying',
      'performance paid media',
      'paid advertising',
      'paid media',
      'paid ads',
    ],
    href: '/services/paid-advertising',
    role: 'service',
  },

  // --- Content Creation & Creative Silo ---
  {
    phrases: [
      'corporate branding and visual identity',
      'brand strategy and visual identity',
      'brand identity design',
      'branding and identity',
    ],
    href: '/services/content-creation/branding',
    role: 'service',
  },
  {
    phrases: [
      'motion graphics and 2d/3d animation',
      'motion graphics and animation',
      'motion graphics animation',
      'motion graphics',
    ],
    href: '/services/content-creation/motion-graphics-animation',
    role: 'service',
  },
  {
    phrases: [
      'high-converting sales copywriting',
      'conversion sales copywriting',
      'sales copywriting',
    ],
    href: '/services/content-writing/sales-copywriting',
    role: 'service',
  },
  {
    phrases: [
      'content writing and editorial strategy',
      'content writing services',
      'content writing',
    ],
    href: '/services/content-writing',
    role: 'service',
  },
  {
    phrases: [
      'social media management services in bangladesh',
      'social media management services',
      'social media management',
      'social media marketing',
    ],
    href: '/services/social-media-management',
    role: 'service',
  },
  {
    phrases: [
      'mobile app development services',
      'custom mobile app development',
      'mobile app development',
      'app development',
    ],
    href: '/services/app-development',
    role: 'service',
  },
  {
    phrases: [
      '360 marketing growth engine',
      '360 full-funnel marketing',
      '360-degree digital marketing',
      '360 marketing services',
      '360 marketing',
    ],
    href: '/services/360-marketing',
    role: 'service',
  },

  // --- Case Studies & Proof Points ---
  {
    phrases: [
      'verified client case studies',
      'client case studies and proof',
      'documented client case studies',
      'client case studies',
      'verified case studies',
    ],
    href: '/case-studies',
    role: 'proof',
  },

  // --- Direct Conversion ---
  {
    phrases: [
      'free growth consultation and audit',
      'request a free project consultation',
      'schedule a discovery call',
      'free website quote',
    ],
    href: '/contact',
    role: 'conversion',
  },
]

// Pre-sort phrases inside each rule by length descending
const SORTED_RULES = CONTEXTUAL_LINK_RULES.map((rule) => ({
  ...rule,
  sortedPhrases: [...rule.phrases].sort((a, b) => b.length - a.length),
}))

/**
 * Escapes regex special characters.
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Checks whether target URL is equivalent to the current page.
 * Avoids self-linking (e.g. meta-ads page linking to meta-ads).
 */
function isCurrentPage(targetHref, currentSlug = '') {
  if (!currentSlug) return false
  const cleanTarget = targetHref.replace(/^\/+|\/+$/g, '').toLowerCase()
  const cleanCurrent = currentSlug.replace(/^\/+|\/+$/g, '').toLowerCase()

  if (cleanTarget === cleanCurrent) return true
  if (`services/${cleanCurrent}` === cleanTarget) return true
  if (`studio/${cleanCurrent}` === cleanTarget) return true
  if (cleanTarget.endsWith(cleanCurrent)) return true

  return false
}

/**
 * Injects contextual internal links into plain paragraph text.
 *
 * Two sources of anchors are merged, longest phrase wins:
 *   1. Index anchors derived from the destination pages themselves
 *      (`internalLinkIndex.js`, tiers 1-2) — the anchor is guaranteed to
 *      describe the page it points at.
 *   2. The curated dictionary below (tier 3) — calculators, studio bridges,
 *      case-study proof and direct conversion links.
 *
 * @param {string} text - The raw paragraph string.
 * @param {object} options
 * @param {string} options.currentSlug - Current page slug (legacy, optional).
 * @param {string} options.currentPath - Current page path, e.g. `/services/seo`.
 * @param {string[]} options.allowed - Optional allow-list of hrefs for this paragraph.
 * @param {number} options.maxLinks - Maximum links to inject (default: 1).
 * @param {'frame'|'violet'|'accent'} options.theme - Styling theme for anchor text.
 * @param {Set<string>} options.usedUrls - Tracks destinations already used on the page.
 * @returns {React.ReactNode} - The rendered paragraph with interactive Next.js <Link> elements.
 */
export function renderContextualParagraph(text, options = {}) {
  if (!text || typeof text !== 'string') return text

  const {
    currentSlug = '',
    currentPath = '',
    allowed = null,
    maxLinks = 1,
    theme = 'frame',
    usedUrls = null,
  } = options

  const selfPath = currentPath || currentSlug
  const allowedSet = Array.isArray(allowed) ? new Set(allowed) : null
  const isSelf = (href) =>
    isSamePage(href, selfPath) || isCurrentPage(href, currentSlug)
  const isBlocked = (href) =>
    (usedUrls && usedUrls.has(href)) || (allowedSet && !allowedSet.has(href))

  // Class names based on theme
  let linkClassName =
    'text-violet-400 underline decoration-violet-400/70 underline-offset-2 hover:text-violet-300 hover:decoration-violet-300 font-semibold transition-colors duration-200'
  if (theme === 'violet') {
    linkClassName =
      'text-violet-400 underline decoration-violet-400/70 underline-offset-2 hover:text-violet-300 hover:decoration-violet-300 font-semibold transition-colors duration-200'
  } else if (theme === 'emerald') {
    linkClassName =
      'text-violet-400 underline decoration-violet-400/70 underline-offset-2 hover:text-violet-300 hover:decoration-violet-300 font-semibold transition-colors duration-200'
  }

  // Filter available rules: exclude current page and optionally already used URLs
  const activeRules = SORTED_RULES.filter((rule) => {
    if (isSelf(rule.href)) return false
    if (isBlocked(rule.href)) return false
    return true
  })

  // Find all matches in the text
  const candidateMatches = []

  // Tier 1-2: anchors derived from the destination pages themselves.
  for (const match of findIndexMatches(text)) {
    if (isSelf(match.href) || isBlocked(match.href)) continue
    candidateMatches.push({
      start: match.start,
      end: match.end,
      matchedText: match.matchedText,
      href: match.href,
      phraseLength: match.length,
      role: 'index',
    })
  }

  // Tier 3: curated functional links.
  for (const rule of activeRules) {
    for (const phrase of rule.sortedPhrases) {
      const regex = new RegExp(`\\b${escapeRegExp(phrase)}\\b`, 'gi')
      let match
      while ((match = regex.exec(text)) !== null) {
        candidateMatches.push({
          start: match.index,
          end: match.index + match[0].length,
          matchedText: match[0],
          href: rule.href,
          phraseLength: phrase.length,
          role: 'curated',
        })
      }
    }
  }

  if (candidateMatches.length === 0) {
    return text
  }

  // Sort matches: longest phrase first, curated before index on a tie, then earliest.
  candidateMatches.sort((a, b) => {
    if (b.phraseLength !== a.phraseLength) {
      return b.phraseLength - a.phraseLength
    }
    if (a.role !== b.role) {
      return a.role === 'curated' ? -1 : 1
    }
    return a.start - b.start
  })

  // Select non-overlapping matches up to maxLinks
  const selectedMatches = []
  for (const candidate of candidateMatches) {
    if (selectedMatches.length >= maxLinks) break

    // Check collision with already selected matches
    const overlaps = selectedMatches.some(
      (m) =>
        (candidate.start >= m.start && candidate.start < m.end) ||
        (candidate.end > m.start && candidate.end <= m.end) ||
        (candidate.start <= m.start && candidate.end >= m.end)
    )

    // Check collision with already used href in this paragraph
    const duplicateHref = selectedMatches.some((m) => m.href === candidate.href)

    if (!overlaps && !duplicateHref) {
      selectedMatches.push(candidate)
      if (usedUrls) {
        usedUrls.add(candidate.href)
      }
    }
  }

  if (selectedMatches.length === 0) {
    return text
  }

  // Re-sort selected matches by start position in ascending order for clean slicing
  selectedMatches.sort((a, b) => a.start - b.start)

  // Construct React node fragments
  const nodes = []
  let lastIndex = 0

  selectedMatches.forEach((match, index) => {
    if (match.start > lastIndex) {
      nodes.push(text.slice(lastIndex, match.start))
    }

    nodes.push(
      <Link
        key={`ctx-link-${match.href}-${match.start}-${index}`}
        href={match.href}
        className={linkClassName}
      >
        {match.matchedText}
      </Link>
    )

    lastIndex = match.end
  })

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return <>{nodes}</>
}
