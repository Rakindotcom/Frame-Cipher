import { SectionIntro, PosterButton } from '../../../Kinetic'

const plans = [
  {
    name: 'Per-Article',
    price: 'From ৳3,500/article',
    covered: 'Individual SEO article within the agreed scope, including keyword/topic research',
    bestFor: 'Occasional content needs',
  },
  {
    name: 'Growth',
    price: 'From ৳20,000/month',
    covered: '4–5 agreed articles per month, with research and SEO structure',
    bestFor: 'Consistent blog publishing',
  },
  {
    name: 'Comprehensive',
    price: 'From ৳35,000/month',
    covered: '8–10 agreed articles per month, plus selected content refresh support',
    bestFor: 'Active content programs',
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    covered: 'High-volume, multi-market, specialist, or technically complex content',
    bestFor: 'Larger content operations',
  },
]

const standard = [
  'Keyword and topic research',
  'Search-intent analysis',
  'SEO-oriented content structure',
  'Brand voice alignment',
  'Editing and review',
  'Publish-ready formatting',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment" title="SEO &amp; Blog Writing Pricing">
          Pricing depends on research depth, topic complexity, article requirements, content volume, revision
          scope, and whether you need individual articles or ongoing support.
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
                  Best For
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
            Included With Every Standard Engagement
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
              Pricing note: These are starting reference prices. Final pricing depends on the actual topic,
              scope, research requirements, article complexity, volume, revision requirements, and delivery
              schedule. Specialist subjects, extensive original research, CMS publishing, images, expert
              interviews, or other additional requirements may require separate scoping.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom SEO Content Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
