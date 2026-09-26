import { SectionIntro, PosterButton } from '../../../Kinetic'

const plans = [
  {
    name: 'Single Page',
    price: 'From ৳6,000/page',
    covered: 'One homepage, About, service, or other agreed website page',
    bestFor: 'Individual page projects',
  },
  {
    name: 'Core Site Package',
    price: 'From ৳25,000',
    covered: 'Homepage, About, and up to 3 service pages',
    bestFor: 'New or smaller business websites',
  },
  {
    name: 'Full Site Package',
    price: 'From ৳45,000',
    covered: 'Homepage, About, and up to 8 service pages, including voice guidance',
    bestFor: 'Larger websites with multiple services',
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    covered: 'Larger multi-page, multi-brand, specialist, or complex content projects',
    bestFor: 'Enterprise and complex websites',
  },
]

const standard = [
  'Business and audience discovery',
  'Messaging strategy',
  'Page-by-page content',
  'Brand voice alignment',
  'Cross-page consistency review',
  'SEO-aware structure',
  'CTA recommendations',
  'Revision based on feedback',
  'Final delivery in the agreed format',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment" title="Website Content Writing Pricing">
          Pricing depends on the number of pages, research requirements, messaging strategy, complexity,
          revision scope, and whether you need individual pages or a complete website content project.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article key={plan.name} className="flex flex-col bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                {plan.name}
              </span>
              <p className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-frame-fg md:text-3xl">
                {plan.price}
              </p>

              <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  What&rsquo;s Covered
                </span>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-fg">{plan.covered}</p>
              </div>

              <div className="mt-auto border-t-2 border-frame-border/60 pt-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  Suitable For
                </span>
                <p className="mt-3 text-xs font-semibold leading-relaxed text-frame-muted-fg">
                  {plan.bestFor}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
            Included With Standard Website Content Projects
          </span>
          <ul className="mt-4 flex flex-wrap gap-2">
            {standard.map((entry) => (
              <li
                key={entry}
                className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
              >
                {entry}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Pricing note: These are starting reference prices. Final pricing depends on the actual page count,
              research depth, content complexity, specialist requirements, revision scope, CMS publishing,
              interviews, and delivery schedule.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Website Content Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
