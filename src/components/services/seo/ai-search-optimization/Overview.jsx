import { SectionIntro } from '../../../Kinetic'

const pillars = [
  'Clear answers to real user questions',
  'Strong search intent alignment',
  'Structured and easy-to-understand content',
  'Entity and brand clarity',
  'Topical depth and supporting coverage',
  'Reliable and consistent source information',
  'Strong technical SEO foundations',
  'Competitor and prompt-level visibility analysis',
  'Ongoing measurement and refinement',
]

export default function Overview() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The approach" title="Improve Your Visibility Across AI Search & Answer Experiences">
          AI Search Optimization is not about writing content for one specific AI platform.
        </SectionIntro>

        <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            AI Search Optimization is not about writing content for one specific AI platform.
            It is about making your website, brand, expertise, and supporting sources easier for
            modern search systems to understand, evaluate, and reference.
          </p>
          <p>Framecipher builds AI search strategies around:</p>
        </div>

        <ul className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <li key={pillar} className="flex gap-4 bg-frame-bg p-6 md:p-7">
              <span className="font-heading text-2xl font-bold leading-none tracking-tighter text-frame-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-semibold uppercase leading-snug tracking-tight text-frame-fg md:text-base">
                {pillar}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-4 border-l-2 border-frame-accent bg-frame-muted/10 p-7 md:p-8">
          <p className="text-base md:text-lg font-medium leading-relaxed text-frame-fg">
            We look at both your website and the broader information ecosystem around your brand.
          </p>
          <p className="text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
            The goal is to improve your visibility across AI-driven search experiences while
            strengthening the same content, technical, and authority foundations that support
            traditional organic search.
          </p>
        </div>
      </div>
    </section>
  )
}