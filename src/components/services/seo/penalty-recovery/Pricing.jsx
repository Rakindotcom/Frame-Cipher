import { SectionIntro, PosterButton } from '../../../Kinetic'

const plans = [
  {
    name: 'Diagnostic Review',
    price: '\u09F325,000',
    period: '+',
    type: 'One-time',
    delivery: '~1 week',
    bestFor: 'Websites that lost traffic or rankings but where the exact cause is not yet clear',
    features: [
      'Manual Action and Security Issues report check',
      'Search Console and analytics evidence review',
      'Timing correlation with relevant Google updates',
      'Affected pages and queries assessment',
      'Basic technical and migration signal checks',
      'Written root cause diagnosis',
      'Prioritized recovery plan',
    ],
    note: 'A defined diagnostic base: you understand the actual cause and the exact work needed before committing to remediation.',
  },
  {
    name: 'Manual Action Recovery',
    price: '\u09F360,000',
    period: '+',
    type: 'One-time',
    delivery: '~2\u20134 weeks',
    bestFor: 'Websites with a confirmed manual action in Google Search Console',
    features: [
      'Everything in Diagnostic Review',
      'Violation-specific remediation planning',
      'Content, technical, or link-related fixes as required',
      'Remediation implementation where included in scope',
      'Unnatural link investigation and disavow guidance where appropriate',
      'Reconsideration request documentation',
      'Recovery monitoring of affected pages and queries',
    ],
    note: 'Structured around addressing the specific violation Google identified instead of a generic cleanup.',
    highlight: true,
  },
  {
    name: 'Google Update / Algorithmic Recovery',
    price: '\u09F380,000',
    period: '+',
    type: 'One-time',
    delivery: '~6\u201312+ weeks',
    bestFor: 'Websites facing update-related ranking and traffic declines rather than a manual action',
    features: [
      'Everything in Diagnostic Review',
      'Content quality and people-first assessment',
      'Page and query-level improvement plan',
      'SERP and competitor reassessment',
      'Technical and UX validation',
      'Recovery monitoring over multiple weeks',
      'Reassessment as new data becomes available',
    ],
    note: 'Algorithmic recovery is measured through sustained trends, so this scope includes ongoing reassessment.',
  },
  {
    name: 'Complex / Multi-Issue Recovery',
    price: 'Custom Quote',
    period: '',
    type: 'Scope dependent',
    delivery: 'Varies by issue set',
    bestFor: 'Websites with multiple problems at once, such as security issues plus manual actions plus technical problems',
    features: [
      'Combined diagnosis across all suspected causes',
      'Security and hacked-page cleanup support',
      'Coordinated manual action and technical remediation',
      'Content and must-be-fixed priority sequencing',
      'Documentation for every remediation step',
      'Ongoing monitoring and prevention controls',
    ],
    note: 'Scoped after diagnosis so you only pay for the investigation and work your situation actually requires.',
  },
]

const includedAcross = [
  'Evidence-based diagnosis',
  'Google Search Console analysis',
  'Documentation of findings',
  'Prioritized recovery roadmap',
  'Monitoring of affected pages and queries',
  'Progress updates throughout the engagement',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment & timeline" title="Google Penalty Recovery Pricing & Packages">
          Pricing depends on the cause, the scope of the investigation, and the amount of
          remediation required. Every engagement starts with understanding the real problem before
          any recovery work.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`flex flex-col p-7 md:p-8 ${
                plan.highlight
                  ? 'border-2 border-frame-accent bg-frame-accent/10'
                  : 'border-2 border-frame-border bg-frame-bg'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Package 0{index + 1}
                </span>
                {plan.highlight && (
                  <span className="bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                    Most Popular
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {plan.name}
              </h3>

              <div className="mt-5 border-y-2 border-frame-border/60 py-4">
                <div className="flex items-end gap-1.5">
                  <span className="font-heading text-3xl font-bold leading-none tracking-tight text-frame-fg">
                    {plan.price}
                  </span>
                  <span className="pb-0.5 text-xs font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                    {plan.period}
                  </span>
                </div>
              </div>

              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Engagement
                  </dt>
                  <dd className="mt-0.5 font-semibold text-frame-fg">{plan.type}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Typical Delivery
                  </dt>
                  <dd className="mt-0.5 font-semibold text-frame-fg">{plan.delivery}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Best For
                  </dt>
                  <dd className="mt-0.5 font-semibold text-frame-fg">{plan.bestFor}</dd>
                </div>
              </dl>

              <p className="mt-5 text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                Included
              </p>
              <ul className="mt-3 space-y-2.5 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs font-medium leading-relaxed text-frame-muted-fg">
                {plan.note}
              </p>

              <div className="mt-auto pt-8">
                <PosterButton href="/contact" className="w-full whitespace-nowrap">
                  Request This Package
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ul className="space-y-3.5 border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            {includedAcross.map((item, iIdx) => (
              <li key={iIdx} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center justify-center gap-4 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl text-center">
              Not sure whether your situation needs a manual action recovery, an algorithmic
              recovery, or a different type of diagnosis? Tell us what happened, and we will
              recommend the right starting package.
            </p>
            <PosterButton href="/contact" className="w-full whitespace-nowrap">
              Get a Custom Quote
            </PosterButton>
          </div>
        </div>

        <p className="mt-8 text-sm font-medium leading-relaxed text-frame-muted-fg">
          Final pricing depends on the website, the scope of the investigation, and the amount of
          remediation required. Some recovery paths cannot be meaningfully priced until the root
          cause is known.
        </p>
      </div>
    </section>
  )
}