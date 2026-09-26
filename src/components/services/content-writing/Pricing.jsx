import { SectionIntro, PosterButton } from '../../Kinetic'

const plans = [
  {
    name: 'Per-Piece',
    price: 'From ৳3,000/piece',
    bestFor: 'One-off or occasional needs',
    covered: 'Standard individual content such as selected blog or product-content projects',
  },
  {
    name: 'Growth',
    price: 'From ৳25,000/month',
    bestFor: 'Businesses building a consistent content pipeline',
    covered: '4–6 pieces per month across agreed content types',
  },
  {
    name: 'Full Content Program',
    price: 'From ৳45,000/month',
    bestFor: 'Businesses with ongoing content requirements',
    covered: '8–12 pieces per month, mixed content types, strategy support',
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    bestFor: 'Larger content operations',
    covered: 'High-volume, multi-market, complex, or specialized requirements',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment" title="Content Writing Pricing">
          Content writing pricing depends on the format, research depth, content volume, industry
          complexity, revision requirements, and whether you need one-time or ongoing support.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article key={plan.name} className="flex flex-col bg-frame-bg p-7 md:p-8">
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
                <p className="mt-3 text-xs font-medium leading-relaxed text-frame-fg">{plan.covered}</p>
              </div>

              <p className="mt-5 text-xs font-semibold leading-relaxed text-frame-muted-fg">{plan.bestFor}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Pricing note: These are starting reference prices. Final pricing depends on the actual content
              type, scope, research requirements, volume, industry, and delivery schedule. Website projects,
              landing pages, specialist subjects, and large product catalogs may require separate scoping.
            </p>
            <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed text-frame-fg md:text-base">
              A free content sample can be requested before a larger engagement so you can evaluate the
              writing approach and fit.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Content Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
