import { SectionIntro } from '../../../Kinetic'

const considerations = [
  'Search intent mapping',
  'Question-based content opportunities',
  'Entity and topic relationships',
  'Clear answer structures',
  'Comprehensive topical coverage',
  'First-hand expertise and useful evidence',
  'Content that directly addresses user questions',
  'Strong internal relationships between related topics',
]

export default function SearchLandscape() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="SEO, AEO & AI search"
          title="Content Strategy for SEO, AEO &amp; AI Search"
        >
          Search behavior continues to expand beyond traditional keyword queries. A modern content strategy can
          account for traditional search, answer-focused experiences, and emerging AI-driven discovery.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              Where relevant, we incorporate
            </h3>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {considerations.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border border-frame-border bg-frame-bg p-4 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-frame-accent">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
              The objective is not to chase every new search feature. It is to build useful, well-structured content
              that can serve people across changing discovery environments.
            </p>
            <p className="border-l-2 border-frame-accent bg-frame-bg p-5 text-sm font-medium leading-relaxed text-frame-fg md:text-base">
              Answer-engine and AI-discovery visibility depends on the same fundamentals as traditional search:
              clear answers, genuine expertise, accurate entities, and useful coverage of the topic. Those are
              strategy decisions, not publishing tricks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
