import { SectionIntro } from '../Kinetic'
import FAQList from '../FAQList'

export default function ServiceDetailFAQSection({ serviceTitle, faqs }) {
  if (!faqs?.length) return null

  return (
    <section className="relative isolate px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionIntro eyebrow="FAQs" title={`Common questions about ${serviceTitle}.`} />
        <FAQList faqs={faqs} />
      </div>
    </section>
  )
}
