import { getAllServicePages, getServiceDisplayName } from '../../data/servicePages.js'
import { studioServices } from '../../data/studioServices.js'

/**
 * ============================================================================
 *  Contextual Internal Link Index  ("anchor-from-destination")
 * ============================================================================
 * Why this exists
 * ---------------
 * A hand-written keyword dictionary (as `CONTEXTUAL_LINK_RULES` is) links the
 * first phrase it happens to find, so an anchor can point at a page that is not
 * really about that phrase (e.g. "ongoing support maintenance" -> a business
 * website page). This module inverts the problem: every destination page
 * publishes the vocabulary it is *actually* about, and a link is only created
 * when the phrase found in a paragraph belongs to that destination's own
 * identity. The anchor text is then the exact substring from the paragraph, so
 * the match is correct by construction.
 *
 * Tiers
 * -----
 *  T1  primary identity  - the page's display name (services) / short title +
 *                          name (studio). Always eligible.
 *  T2  sub-topic         - the page's own offerings (services). Eligible only
 *                          when no other destination claims the same phrase.
 *  T3  curated           - calculators, studio bridges, case studies, contact.
 *                          Lives in `contextualParagraphLinks.jsx` and is kept.
 *
 * Guards
 * ------
 *  - Phrases are 2-5 words, normalised, and must not be in the generic
 *    stop-list ("services", "marketing", "digital marketing", ...).
 *  - A phrase claimed by 2+ destinations is dropped from auto-linking
 *    (ambiguity is resolved manually, never guessed).
 *  - `resolveContextualLinks` never links the page it runs on (self-link).
 * ============================================================================
 */

/** Too generic to be a useful in-paragraph anchor (would match half the site). */
const GENERIC_PHRASES = new Set([
  'services',
  'service',
  'marketing',
  'digital marketing',
  'online marketing',
  'business',
  'growth',
  'support',
  'maintenance',
  'development',
  'design',
  'strategy',
  'management',
  'content',
  'ongoing support maintenance',
  'contact us',
  'get started',
  'learn more',
  'in house team',
])

/** Words that carry no topical signal when deciding if a sub-topic belongs to a page. */
const LINK_STOPWORDS = new Set([
  'and', 'for', 'with', 'in', 'the', 'of', 'to', 'a', 'an', 'on', 'at', 'by', 'or', 'plus',
  'your', 'our', 'site', 'website', 'web', 'services', 'service', 'development', 'design',
])

export function normalizePhrase(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function isUsablePhrase(phrase) {
  const words = phrase.split(' ').filter(Boolean)
  if (words.length < 2 || words.length > 6) return false
  if (phrase.length < 10) return false
  if (GENERIC_PHRASES.has(phrase)) return false
  return true
}

/** name / name+s / name services — the natural ways a paragraph refers to a page. */
function nameVariants(base) {
  const out = new Set()
  if (!base) return out
  out.add(base)
  if (!base.endsWith('s')) out.add(`${base}s`)
  if (!/\bservices?\b/.test(base)) out.add(`${base} services`)
  return out
}

/** Geo-qualified variants, only when the page's own H1 carries the geo token. */
function geoVariants(base, h1) {
  const out = new Set()
  if (!base) return out
  const h = normalizePhrase(h1)
  if (/\bin bangladesh\b/.test(h)) out.add(`${base} in bangladesh`)
  if (/\bin dhaka\b/.test(h)) out.add(`${base} in dhaka`)
  return out
}

function slugPhrase(page) {
  const tail = String(page.slug || '').split('/').pop() || ''
  return normalizePhrase(tail.replace(/-/g, ' '))
}

function identityTokens(...values) {
  const tokens = new Set()
  for (const value of values) {
    for (const word of normalizePhrase(value).split(' ')) {
      if (word && !LINK_STOPWORDS.has(word) && word.length > 2) tokens.add(word)
    }
  }
  return tokens
}

function sharesIdentity(phrase, tokens) {
  return normalizePhrase(phrase)
    .split(' ')
    .some((word) => tokens.has(word))
}

function buildServiceTargets() {
  return getAllServicePages().map((page) => {
    const name = normalizePhrase(getServiceDisplayName(page))
    const slug = slugPhrase(page)
    const tier1 = new Set([
      ...nameVariants(name),
      ...nameVariants(slug),
      ...geoVariants(name, page.h1),
    ])

    const tokens = identityTokens(name, slug, page.h1)

    const tier2 = new Set()
    for (const offering of page.offerings || []) {
      const phrase = normalizePhrase(offering?.title)
      // A sub-topic may only claim a page when it shares a distinctive token
      // with that page's own identity (name / slug / H1).
      if (isUsablePhrase(phrase) && sharesIdentity(phrase, tokens)) tier2.add(phrase)
    }

    return {
      href: page.fullPath,
      kind: 'service',
      label: getServiceDisplayName(page),
      tier1: [...tier1].filter(isUsablePhrase),
      tier2: [...tier2],
    }
  })
}

function buildStudioTargets() {
  return studioServices.map((service) => {
    const short = normalizePhrase(service.shortTitle)
    const full = normalizePhrase(service.name)
    const slug = normalizePhrase(String(service.slug || '').replace(/-/g, ' '))
    const tier1 = new Set([...nameVariants(short), ...nameVariants(slug), full])
    if (full.endsWith('and studio')) tier1.add(full.replace(/\s+and studio$/, ''))

    return {
      href: `/studio/${service.slug}`,
      kind: 'studio',
      label: service.shortTitle || service.name,
      tier1: [...tier1].filter(isUsablePhrase),
      tier2: [],
    }
  })
}

let cachedIndex = null

/**
 * Builds the phrase -> destination map once and caches it.
 * @returns {{ entries: Array<{phrase:string, href:string, tier:number, label:string}>,
 *             targetCount: number, droppedAmbiguous: string[] }}
 */
export function buildLinkIndex() {
  if (cachedIndex) return cachedIndex

  const targets = [...buildServiceTargets(), ...buildStudioTargets()]

  // phrase -> { tier1: Set(href), tier2: Set(href) }
  const claims = new Map()
  const claim = (phrase, href, tier) => {
    if (!claims.has(phrase)) claims.set(phrase, { tier1: new Set(), tier2: new Set() })
    claims.get(phrase)[tier === 1 ? 'tier1' : 'tier2'].add(href)
  }

  for (const target of targets) for (const phrase of target.tier1) claim(phrase, target.href, 1)
  for (const target of targets) for (const phrase of target.tier2) claim(phrase, target.href, 2)

  const labelByHref = new Map(targets.map((t) => [t.href, t.label]))
  const tier1Registry = new Map(targets.map((t) => [t.href, new Set(t.tier1)]))
  const tier2Registry = new Map(targets.map((t) => [t.href, new Set(t.tier2)]))

  const entries = []
  const droppedAmbiguous = []

  for (const [phrase, { tier1, tier2 }] of claims) {
    // A phrase that is the primary identity of exactly one page wins over any
    // page that merely lists it as a sub-topic.
    if (tier1.size === 1) {
      const [href] = tier1
      entries.push({ phrase, href, tier: 1, label: labelByHref.get(href) || href })
      continue
    }
    if (tier1.size > 1) {
      // Two pages are equally "about" this phrase — never guess.
      droppedAmbiguous.push(phrase)
      continue
    }
    // No primary owner: allow only when a single page lists it as a sub-topic.
    if (tier2.size === 1) {
      const [href] = tier2
      entries.push({ phrase, href, tier: 2, label: labelByHref.get(href) || href })
      continue
    }
    if (tier2.size > 1) droppedAmbiguous.push(phrase)
  }

  // Longest first so the most specific phrase wins in a paragraph.
  entries.sort((a, b) => b.phrase.length - a.phrase.length)

  cachedIndex = {
    entries,
    targetCount: targets.length,
    droppedAmbiguous: [...new Set(droppedAmbiguous)].sort(),
    tier1: tier1Registry,
    tier2: tier2Registry,
  }
  return cachedIndex
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Finds every index phrase present in `text` (word-boundary, case-insensitive).
 * @returns {Array<{start:number,end:number,matchedText:string,href:string,phrase:string,tier:number,label:string,length:number}>}
 */
export function findIndexMatches(text) {
  if (!text || typeof text !== 'string') return []
  const { entries } = buildLinkIndex()
  const found = []

  for (const entry of entries) {
    const regex = new RegExp(`\\b${escapeRegExp(entry.phrase)}\\b`, 'g')
    let match
    while ((match = regex.exec(text)) !== null) {
      found.push({
        start: match.index,
        end: match.index + match[0].length,
        matchedText: match[0],
        href: entry.href,
        phrase: entry.phrase,
        tier: entry.tier,
        label: entry.label,
        length: entry.phrase.length,
      })
    }
  }
  return found
}

export function isSamePage(href, currentPath) {
  if (!currentPath) return false
  const clean = (value) => String(value).replace(/^\/+|\/+$/g, '').toLowerCase()
  const target = clean(href)
  const current = clean(currentPath)
  if (!current) return false
  if (target === current) return true
  // a sub-page should not link to its own ancestor as if it were a different page
  if (target.length < current.length && current.startsWith(`${target}/`)) return true
  return false
}

/**
 * Resolves the links that should be injected into a single paragraph.
 * Deterministic: longest phrase first, then earliest position, one link per
 * destination, at most `maxLinks` per paragraph.
 */
export function resolveContextualLinks(text, options = {}) {
  const { currentPath = '', maxLinks = 1, excludeHrefs = null } = options
  const candidates = findIndexMatches(text).filter((match) => {
    if (isSamePage(match.href, currentPath)) return false
    if (excludeHrefs && excludeHrefs.has(match.href)) return false
    return true
  })

  candidates.sort((a, b) => {
    if (b.length !== a.length) return b.length - a.length
    return a.start - b.start
  })

  const selected = []
  for (const candidate of candidates) {
    if (selected.length >= maxLinks) break
    const overlaps = selected.some(
      (m) =>
        (candidate.start >= m.start && candidate.start < m.end) ||
        (candidate.end > m.start && candidate.end <= m.end) ||
        (candidate.start <= m.start && candidate.end >= m.end)
    )
    const duplicate = selected.some((m) => m.href === candidate.href)
    if (!overlaps && !duplicate) selected.push(candidate)
  }

  return selected.sort((a, b) => a.start - b.start)
}
