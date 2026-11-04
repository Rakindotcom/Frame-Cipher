import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Single Campaign',
    price: '৳6,000',
    for: 'One-time campaigns',
    scope:
      'One promotional or announcement email, subject line, preview text, CTA, and one revision round',
    timeline: 'About 2 to 3 business days',
    cta: 'Request a Campaign Quote',
  },
  {
    name: 'Welcome Sequence',
    price: '৳15,000',
    for: 'New subscriber or customer onboarding',
    scope: '3 to 5 emails, sequence strategy, subject lines, preview text and one revision round',
    timeline: 'About 5 to 7 business days',
    cta: 'Request a Welcome Sequence Quote',
  },
  {
    name: 'Nurture Sequence',
    price: '৳20,000',
    for: 'Lead nurture and lifecycle communication',
    scope: '5 to 8 emails, sequence strategy, subject lines, CTAs and one revision round',
    timeline: 'About 7 to 10 business days',
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
      className="border-b border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Pricing & packages" title="Email Copywriting Pricing">
          Pricing depends on the number of emails, sequence length, research requirements, campaign complexity, and
          revision scope.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => (
            <article
              key={pkg.name}
              className="flex flex-col justify-between bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40"
            >
              <div>
                <div className="mb-3 flex min-h-[22px] items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A855F7]">
                    Tier 0{index + 1}
                  </span>
                  {pkg.tag && (
                    <span className="border border-white/[0.08] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#A1A1AA]">
                      {pkg.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-lg font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-xl">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-[#A1A1AA] md:text-sm wide:text-lg">
                  {pkg.for}
                </p>

                <div className="mt-6 border-y border-white/[0.08]/60 py-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">
                    Starting Price
                  </span>
                  <div className="mt-1 font-heading text-xl font-bold tracking-tight text-[#FAFAFA] md:text-2xl">
                    {pkg.price}
                  </div>
                </div>

                <p className="mt-4 text-xs font-medium leading-relaxed text-[#FAFAFA] md:text-sm">
                  {pkg.scope}
                </p>
              </div>

              <div className="mt-7 border-t border-white/[0.08] pt-4">
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#A1A1AA]">
                  Typical Timeline
                </span>
                <span className="mt-1 block text-xs font-semibold leading-relaxed text-[#FAFAFA] md:text-sm">
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

        <div className="mt-12 grid gap-px border border-white/[0.08] bg-frame-border lg:grid-cols-[1.4fr_0.6fr]">
          <div className="bg-[#09090B] p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
              Included in standard projects
            </span>
            <h3 className="mt-3 font-heading text-lg font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-xl">
              What Every Engagement Starts With
            </h3>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-[#FAFAFA]"
                >
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-[#A855F7]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
              Testing setup, email platform management, automation implementation, design, deliverability
              management, list management, and other operational services are scoped separately unless specifically
              included in the project. Final pricing is confirmed after the scope and required deliverables are
              agreed.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6 bg-[#A855F7]/10 p-7 md:p-8">
            <p className="text-sm font-medium leading-relaxed text-[#FAFAFA]">
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
