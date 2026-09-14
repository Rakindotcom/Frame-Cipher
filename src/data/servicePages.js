import sourceServicePages from './servicePagesData.json'
import { normalizeServicePage } from './serviceContent'

const servicePagesData = sourceServicePages.map(normalizeServicePage)

export function getAllServicePages() {
  return servicePagesData
}

export function getPillarServices() {
  return servicePagesData.filter((page) => page.pageType === 'Pillar Service')
}

export function getSubServicesForPillar(pillarSlug) {
  return servicePagesData.filter(
    (page) => page.pageType === 'Sub Service' && page.pillarSlug === pillarSlug
  )
}

export function getServicePageBySlug(slugParam) {
  if (!slugParam) return null

  let normalizedSlug = Array.isArray(slugParam) ? slugParam.join('/') : slugParam
  normalizedSlug = normalizedSlug.replace(/^\/+|\/+$/g, '')

  return servicePagesData.find((page) => page.slug === normalizedSlug) || null
}

export function getServiceDisplayName(page) {
  return page.sheetTitle
    .replace(/^Best\s+/i, '')
    .replace(/\s+Service Page$/i, '')
    .replace(/\s+Services? in Bangladesh$/i, '')
    .replace(/\s+Services?$/i, '')
}

export function getServiceSummary(page) {
  if (page.shortDesc?.trim()) return page.shortDesc.trim()

  const heroParagraphs = (page.heroHook || '')
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  const titleCandidates = new Set([
    page.h1?.trim().toLowerCase(),
    page.sheetTitle?.trim().toLowerCase(),
  ])

  const summary = heroParagraphs.find((paragraph) => {
    const normalized = paragraph.toLowerCase()
    return (
      paragraph.length >= 40 &&
      !titleCandidates.has(normalized) &&
      !/^(get|book|request|talk|see)\b.*(?:quote|consultation|audit|team|portfolio)/i.test(paragraph)
    )
  })

  return summary || page.metaDescription
}

export function getServiceAdvantages(page) {
  const advantages = page.whyChooseUs || []
  if (advantages.length <= 8) return advantages

  const boundaryIndex = advantages.findIndex((item) =>
    /why (?:we(?:'|’)re|choose|framecipher)/i.test(item.text || '')
  )

  if (boundaryIndex >= 0) {
    return advantages.slice(boundaryIndex + 1, boundaryIndex + 3)
  }

  return advantages.slice(0, 2)
}

export function getServicePricingTable(page) {
  return page.pricing?.table || null
}

export function getRelatedSubServices(page, limit = 4) {
  if (!page) return []

  const targetPillar = page.pillarSlug || page.slug
  const siblings = servicePagesData.filter(
    (item) =>
      item.slug !== page.slug &&
      item.pageType === 'Sub Service' &&
      item.pillarSlug === targetPillar
  )

  if (siblings.length > 0) {
    return siblings.slice(0, limit)
  }

  // Fallback to other pillars
  return getPillarServices()
    .filter((pillar) => pillar.slug !== page.slug)
    .slice(0, limit)
}

export function getAllServiceRouteSlugs() {
  return servicePagesData.map((page) => {
    const segments = page.slug.split('/')
    return segments
  })
}

export default servicePagesData
