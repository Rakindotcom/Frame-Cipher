import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Single Campaign',
    price: '৳6,000',
    for: 'One-time campaigns',
    scope:
      'One promotional or announcement email, subject line, preview text, CTA, and one revision round',
    timeline: 'About 2–3 business days',
    cta: 'Request a Campaign Quote',
  },
  {
    name: 'Welcome Sequence',
    price: '৳15,000',
    for: 'New subscriber or customer onboarding',
    scope: '3–5 emails, sequence strategy, subject lines, preview text and one revision round',
    timeline: 'About 5–7 business days',
    cta: 'Request a Welcome Sequence Quote',
  },
  {
    name: 'Nurture Sequence',
    price: '৳20,000',
    for: 'Lead nurture and lifecycle communication',
    scope: '5–8 emails, sequence strategy, subject lines, CTAs and one revision round',
    timeline: 'About 7–10 business days',
    cta: 'Request a Nurture Quote',
  },
  {
    name: 'Ongoing Email Support',
    price: '৳25,000/month',
    for: 'Businesses running an active email program',
    scope: 'Multiple agreed campaigns or sequences, copy variants and ongoing refinement',
    timeline: 'Ongoing monthly scope',
    tag: 'Monthly',
    cta: 'Discuss Ongoing Support',
  },
]

const included = [
  'Email strategy',
  'Subject lines',
  'Preview text',
  'Body copy',
  'CTA development',
  'Sequence planning where applicable',
  'One agreed revision round',
  'Platform-ready delivery',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Pricing & packages" title="Email Copywriting Pricing">
          Pricing depends on the number of emails, sequence length, research requirements, campaign complexity, and
          revision scope.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => (
            <article
              key={pkg.name}
              className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40"
            >
              <div>
                <div className="mb-3 flex min-h-[22px] items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Tier 0{index + 1}
                  </span>
                  {pkg.tag && (
                    <span className="border-2 border-frame-border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                      {pkg.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg md:text-sm">
                  {pkg.for}
                </p>

                <div className="mt-6 border-y-2 border-frame-border/60 py-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Starting Price
                  </span>
                  <div className="mt-1 font-heading text-xl font-bold tracking-tight text-frame-fg md:text-2xl">
                    {pkg.price}
                  </div>
                </div>

                <p className="mt-4 text-xs font-medium leading-relaxed text-frame-fg md:text-sm">
                  {pkg.scope}
                </p>
              </div>

              <div className="mt-7 border-t-2 border-frame-border pt-4">
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                  Typical Timeline
                </span>
                <span className="mt-1 block text-xs font-semibold leading-relaxed text-frame-fg md:text-sm">
                  {pkg.timeline}
                </span>
                <div className="mt-5">
                  <PosterButton href="/contact" variant="outline" className="w-full">
                    {pkg.cta}
                  </PosterButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-[1.4fr_0.6fr]">
          <div className="bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Included in standard projects
            </span>
            <h3 className="mt-3 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
              What Every Engagement Starts With
            </h3>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-frame-accent">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg">
              Testing setup, email platform management, automation implementation, design, deliverability
              management, list management, and other operational services are scoped separately unless specifically
              included in the project. Final pricing is confirmed after the scope and required deliverables are
              agreed.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6 bg-frame-accent/10 p-7 md:p-8">
            <p className="text-sm font-medium leading-relaxed text-frame-fg">
              Send us the audience, the offer, and the outcome each email needs. We will tell you what the sequence
              requires.
            </p>
            <div>
              <PosterButton href="/contact" className="w-full">
                Request a Custom Quote &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
