import { SectionIntro, PosterButton } from '../../../Kinetic'

const plans = [
  {
    name: 'AdSense Readiness Audit',
    price: '\u09F38,000',
    period: '+',
    type: 'One-time',
    delivery: '~3\u20135 business days',
    bestFor: 'Publishers and business sites that want an honest readiness assessment before applying or reapplying',
    features: [
      'Website assessment against relevant AdSense requirements',
      'Content quality and originality review',
      'Policy and restricted-content check',
      'Site structure and navigation review',
      'Trust and transparency page review',
      'Technical access and eligibility check',
      'Written findings with prioritized recommendations',
    ],
    note: 'A defined preparation base: you understand exactly where the site stands and what will matter before you submit.',
  },
  {
    name: 'Standard Preparation',
    price: '\u09F320,000',
    period: '+',
    type: 'One-time',
    delivery: '~1\u20132 weeks',
    bestFor: 'Websites that pass the audit but need core content, page, and structural fixes before submission',
    features: [
      'Everything in AdSense Readiness Audit',
      'Core content quality improvements',
      'Trust and transparency page fixes where needed',
      'Navigation and internal linking corrections',
      'Broken link and unfinished section cleanup',
      'Policy compliance fixes',
      'Pre-application check before you submit',
    ],
    note: 'Covers the assessment plus the day-to-day fixes that most commonly block a first application.',
    highlight: true,
  },
  {
    name: 'Comprehensive Preparation',
    price: '\u09F335,000',
    period: '+',
    type: 'One-time',
    delivery: '~2\u20133 weeks',
    bestFor: 'Websites needing deeper content, policy, structure, technical, and readiness work before submission',
    features: [
      'Everything in Standard Preparation',
      'Deeper content rewriting and topical strengthening',
      'Full policy and restricted-content remediation',
      'Advanced site structure and URL improvements',
      'Technical setup and AdSense connection readiness',
      'Policy-readiness re-review after remediation',
      'Pre-submission review',
    ],
    note: 'Built for sites with several problem areas that need coordinated content, structural, and technical work.',
  },
  {
    name: 'Re-Application Support',
    price: '\u09F315,000',
    period: '+',
    type: 'One-time',
    delivery: '~1\u20132 weeks',
    bestFor: 'Publishers who have already been rejected and need targeted fixes before trying again',
    features: [
      'Rejection notice and account review',
      'Site condition diagnosis against the rejection',
      'Targeted remediation of the most relevant issues',
      'Prioritized fix plan',
      'Pre-submission review before reapplying',
      'Re-application guidance',
    ],
    note: 'Focused on reapplying with genuine fixes instead of resending the same application.',
  },
]

const includedAcross = [
  'Website assessment',
  'Written findings',
  'Priority recommendations',
  'Readiness guidance',
  'Pre-application review',
  'Re-application support where included in the selected package',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment & timeline" title="Google AdSense Approval Pricing & Timeline">
          Pricing depends on your website&apos;s current condition, the amount of remediation
          required, and whether this is a first application or a re-application after rejection.
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
                  Plan 0{index + 1}
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
              Not sure which package fits? Tell us about your website and current AdSense status,
              and we will recommend the right preparation scope.
            </p>
            <PosterButton href="/contact" className="w-full whitespace-nowrap">
              Get a Custom Quote
            </PosterButton>
          </div>
        </div>

        <p className="mt-8 text-sm font-medium leading-relaxed text-frame-muted-fg">
          Final pricing depends on the website, amount of remediation required, and whether this is
          a first application or a re-application.
        </p>
      </div>
    </section>
  )
}