import { SectionIntro } from '../../../Kinetic'

const factors = [
  {
    title: 'Relevance',
    body: [
      'Relevance refers to how closely a business matches what someone searches for. Google looks at information about your business, services, website, and Google Business Profile to understand what you offer.',
      'For example, a business offering dental implants should clearly communicate that service across relevant business and website information. We align your local content and business information with the services and search terms that matter to your customers.',
    ],
  },
  {
    title: 'Distance',
    body: [
      'Distance relates to how close a business is to the location associated with a search. The relevant location can come from the searcher\u2019s location, the location included in the query, or other local signals.',
      'This is why a business may appear prominently for searches around one area but have weaker visibility farther away. We account for service areas, branch locations, target locations, and geographic search patterns when developing local SEO strategies.',
    ],
  },
  {
    title: 'Prominence',
    body: [
      'Prominence describes how well-known and established a business appears to be. Google can use signals such as information about the business across the web, links, reviews, and other sources to understand its prominence.',
      'A strong local presence therefore requires more than optimizing one profile. We work on the relevant website, business information, reputation, authority, and local signals that support your overall presence.',
    ],
  },
]

export default function RankingFactors() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="How local search works"
          title="How Google Local Rankings Work"
        >
          Google uses several signals to determine which businesses are relevant for local
          searches. Three core factors are especially important: relevance, distance, and
          prominence. Understanding these factors helps create a local SEO strategy based on how
          local search actually works.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-3">
          {factors.map((factor, index) => (
            <div
              key={factor.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {factor.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {factor.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}