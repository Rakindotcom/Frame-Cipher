import { SectionIntro, PosterButton } from '../../../Kinetic'
import { CheckIcon } from './ui'

const engagements = [
  {
    name: 'Setup Only',
    price: '৳20,000',
    priceNote: 'one-time',
    covered: [
      'Cross-platform audit',
      'Strategy framework',
      'Content pillars',
      'Master calendar',
      'Campaign structure',
      'Repurposing roadmap',
      'Workflow setup',
    ],
    bestFor: 'Businesses with in-house teams that will manage execution internally',
  },
  {
    name: 'Ongoing Coordination',
    price: '৳18,000',
    priceNote: 'per month',
    covered: [
      'Ongoing calendar maintenance',
      'Campaign coordination',
      'Repurposing planning',
      'Content planning support',
      'Performance-informed adjustments',
    ],
    bestFor: 'Businesses managing multiple platforms that need continued coordination',
  },
  {
    name: 'Bundled With Platform Management',
    price: 'Custom',
    priceNote: 'bundled rate',
    covered: [
      'Content calendar and strategy coordinated with selected Framecipher platform management services',
    ],
    bestFor: 'Businesses using Framecipher for ongoing social media management',
  },
]

const includedScope = [
  'Content strategy framework',
  'Audience and content pillar planning',
  'Master content calendar',
  'Campaign alignment',
  'Platform-specific planning',
  'Repurposing roadmap',
  'CTA direction',
  'Approval workflow',
  'Calendar maintenance',
  'Performance review',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment &amp; plans"
          title="Content Calendar &amp; Strategy Pricing"
        >
          Pricing depends on the number of platforms, planning depth, campaign complexity, content volume,
          and whether you need a one-time framework or ongoing coordination.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {engagements.map((engagement, index) => (
            <div
              key={engagement.name}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-border/80 md:p-7"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">
                  Engagement 0{index + 1}
                </span>

                <h3 className="mt-2 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                  {engagement.name}
                </h3>

                <div className="mt-5 border-y-2 border-frame-border/60 py-4">
                  <div className="font-heading text-2xl font-black tracking-tight text-frame-fg md:text-3xl">
                    {engagement.price}
                  </div>
                  <span className="mt-1 block text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {engagement.priceNote}
                  </span>
                </div>

                <div className="mt-5 border-t-2 border-frame-border/60 pt-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    What&rsquo;s Covered
                  </span>
                  <ul className="mt-3 space-y-2.5 text-xs font-medium text-frame-fg/90 md:text-sm">
                    {engagement.covered.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckIcon />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border border-frame-accent/50 bg-frame-accent/5 p-3">
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                  Best For
                </span>
                <p className="mt-1 text-xs font-semibold leading-snug text-frame-fg">
                  {engagement.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            Included Within the Agreed Scope
          </span>
          <h3 className="mt-3 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
            Depending on the selected engagement, your content planning system may include
          </h3>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {includedScope.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Final pricing depends on platform count, content volume, campaign complexity, responsibilities,
            and delivery requirements. Your proposal confirms the final scope, fee, and delivery schedule
            before work begins.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Custom Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
