import { SectionIntro, PosterButton } from '../../../Kinetic'

const items = [
  'Business type',
  'Target market',
  'Initial AI visibility',
  'Prompt set',
  'Competitors analyzed',
  'Citation sources',
  'Content and entity gaps',
  'Optimization work',
  'Visibility changes',
  'Search performance',
  'Leads or revenue where measurable',
]

export default function CaseStudies() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Evidence" title="AI Search Results & Case Studies">
          AI search work should be supported by measurable evidence wherever possible. When verified
          data is available, Framecipher can publish case studies covering:
        </SectionIntro>

        <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm font-medium leading-snug text-frame-fg/90"
              >
                <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-medium leading-relaxed text-frame-muted-fg">
            We do not publish unsupported AI citation, visibility, traffic, or revenue claims.
          </p>
          <div className="mt-8">
            <PosterButton href="/case-studies/ai-search-optimization" variant="outline" className="whitespace-nowrap">
              View AI Search Case Studies →
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
