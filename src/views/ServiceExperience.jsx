import { getRelatedSubServices, getSubServicesForPillar } from '../data/servicePages'
import { cleanServiceText as cleanText } from '../data/serviceContent'
import {
  ServiceExperienceHero,
  ServiceExperiencePillarServices,
  ServiceExperienceOfferings,
  ServiceExperienceBusinessCase,
  ServiceExperienceProcess,
  ServiceExperiencePricing,
  ServiceExperienceDetails,
  ServiceExperienceFAQ,
  ServiceExperienceRelated,
  ServiceExperienceCTA,
} from '../components/services'

function cleanName(value = '') {
  return String(value || '')
    .replace(/ Service Page$/i, '')
    .replace(/ Services? in Bangladesh$/i, '')
    .trim()
}

function getHeroCopy(service) {
  if (service.shortDesc?.trim()) return cleanText(service.shortDesc)

  const blocks = (service.heroHook || '')
    .split(/\n\s*\n/)
    .map(cleanText)
    .filter(Boolean)

  return (
    blocks.find(
      (block) =>
        block.toLowerCase() !== service.h1?.trim().toLowerCase() &&
        block.length > 55 &&
        !/^(get|book|request|talk|start)\b/i.test(block)
    ) || cleanText(service.metaDescription)
  )
}

function getReasonCards(items = []) {
  const cards = []
  for (let index = 0; index < items.length; index += 1) {
    const item = cleanText(items[index])
    const next = cleanText(items[index + 1] || '')
    const looksLikeHeading = item.length < 75 && !/[.!?]$/.test(item)
    if (looksLikeHeading && next) {
      cards.push({ title: item, text: next })
      index += 1
    } else if (item) {
      cards.push({ title: '', text: item })
    }
  }
  return cards
}

function getPresentableAdvantages(items = []) {
  const conciseItems = items.filter(
    (item) => cleanText(item.title).length <= 110 && cleanText(item.text).length <= 650
  )

  if (conciseItems.length) return conciseItems.slice(-6)

  return items.slice(0, 2).map((item, index) => ({
    title: index === 0 ? 'One accountable in-house team' : `Delivery advantage ${String(index + 1).padStart(2, '0')}`,
    text: cleanText(item.text),
  }))
}

export default function ServiceExperience({ service }) {
  const isPillar = service.pageType === 'Pillar Service'
  const subServices = isPillar ? getSubServicesForPillar(service.slug) : []
  const relatedServices = getRelatedSubServices(service, 4)
  const advantages = getPresentableAdvantages(service.whyChooseUs)
  const pricing = service.pricing?.table
  const impactCards = getReasonCards(service.whyMatters)
  const serviceName = cleanName(service.sheetTitle)
  const pillarName = cleanName(service.pillarParent)
  const processCount = service.processSteps?.length || 0
  const heroCopy = getHeroCopy(service)

  const faqSchema = service.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: cleanText(faq.answer) },
        })),
      }
    : null

  return (
    <main className="service-experience bg-[#09090b] text-zinc-100">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replaceAll('<', '\\u003c') }}
        />
      )}

      <ServiceExperienceHero
        service={service}
        serviceName={serviceName}
        pillarName={pillarName}
        isPillar={isPillar}
        subServices={subServices}
        heroCopy={heroCopy}
        processCount={processCount}
      />

      {service.quote && (
        <section className="border-b border-white/10 px-5 py-12 sm:px-8 md:py-16">
          <blockquote className="mx-auto max-w-5xl text-center font-quote text-2xl font-medium italic leading-relaxed text-zinc-200 md:text-4xl">
            “{cleanText(service.quote)}”
          </blockquote>
        </section>
      )}

      <ServiceExperiencePillarServices
        isPillar={isPillar}
        subServices={subServices}
        serviceName={serviceName}
        getHeroCopy={getHeroCopy}
      />

      <ServiceExperienceOfferings isPillar={isPillar} service={service} />

      <ServiceExperienceBusinessCase impactCards={impactCards} advantages={advantages} />

      <ServiceExperienceProcess processSteps={service.processSteps} />

      <ServiceExperiencePricing service={service} pricing={pricing} />

      <ServiceExperienceDetails service={service} />

      <ServiceExperienceFAQ faqs={service.faqs} />

      <ServiceExperienceRelated relatedServices={relatedServices} />

      <ServiceExperienceCTA serviceName={serviceName} primaryCta={service.primaryCta} />
    </main>
  )
}
