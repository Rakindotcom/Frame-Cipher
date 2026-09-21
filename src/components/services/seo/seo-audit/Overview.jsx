import { SectionIntro, PosterButton } from '../../../Kinetic'

const assessedAreas = [
  'Crawlability and indexation',
  'Technical SEO and site architecture',
  'On-page optimization',
  'Content quality and search intent',
  'Keyword targeting and cannibalization',
  'Internal linking',
  'Backlink quality and authority',
  'Competitor and SERP performance',
  'Search Console and analytics data',
  'Conversion tracking',
  'AI search visibility',
  'Ecommerce, local, or international SEO requirements',
]

export default function Overview() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="What this is" title="Find Out What Is Holding Your Website Back">
          An SEO audit should do more than identify problems. It should explain what is wrong, why
          it matters, how it affects search performance, and what should happen next.
        </SectionIntro>

        <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            Framecipher reviews your website from multiple SEO perspectives to separate meaningful
            problems from low-impact technical warnings.
          </p>
          <p className="text-sm font-bold uppercase tracking-tight text-frame-fg md:text-base">
            Depending on the project, we assess:
          </p>
        </div>

        <ul className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {assessedAreas.map((area) => (
            <li key={area} className="flex items-start gap-2 bg-frame-bg p-5">
              <span className="text-frame-accent font-bold">✓</span>
              <span className="text-sm font-semibold leading-snug text-frame-fg">{area}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            Every important finding is documented with a practical recommendation. The result is
            an SEO audit your team can actually use, whether you implement the work internally or
            continue with Framecipher.
          </p>
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              See what needs fixing first
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Request an SEO audit
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review your website and turn the findings into a clear, prioritized action plan.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">Request an SEO Audit &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}