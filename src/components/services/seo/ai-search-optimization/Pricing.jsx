import { SectionIntro, PosterButton } from '../../../Kinetic'

const plans = [
  {
    name: 'AI Visibility Audit',
    price: '\u09F320,000',
    period: '+',
    type: 'One-time',
    delivery: '~1 week',
    bestFor: 'Businesses wanting a baseline picture of their current AI visibility',
    features: [
      'Visibility baseline',
      'Prompt and query research',
      'Brand and competitor mention analysis',
      'Citation source review',
      'Prioritized recommendations',
      'Actionable next steps',
    ],
    note: 'A defined starting point for understanding where your brand currently stands.',
  },
  {
    name: 'Standard AEO/GEO Package',
    price: '\u09F350,000',
    period: '+',
    type: 'One-time',
    delivery: '~3\u20134 weeks',
    bestFor: 'Businesses ready to optimize priority content and structure for AI visibility',
    features: [
      'Everything in AI Visibility Audit',
      'Content restructuring for priority pages',
      'Answer-ready content structure',
      'Entity strengthening',
      'Prompt-level testing',
      'Implementation guidance',
      'FAQ and direct-answer optimization',
    ],
    note: 'Focuses on getting priority answers and pages into a retrieval-ready state.',
    highlight: true,
  },
  {
    name: 'Comprehensive AI Visibility Build',
    price: '\u09F390,000',
    period: '+',
    type: 'One-time',
    delivery: '~6\u20138 weeks',
    bestFor: 'Businesses needing broad AI visibility across content, entities, sources, and technical foundations',
    features: [
      'Everything in Standard AEO/GEO Package',
      'Topical authority and coverage strategy',
      'Advanced entity and knowledge graph work',
      'Third-party source and authority strategy',
      'Technical SEO for AI accessibility',
      'Source-citation opportunities',
      'Digital PR inputs',
    ],
    note: 'Designed for businesses building a complete AI-search presence.',
  },
  {
    name: 'Ongoing AI Visibility Monitoring',
    price: '\u09F320,000',
    period: '/month',
    type: 'Ongoing',
    delivery: 'Ongoing',
    bestFor: 'Businesses wanting continuous tracking and refinement of AI visibility',
    features: [
      'Everything in AI Visibility Audit',
      'Prompt and prompt-set tracking',
      'Brand and competitor visibility monitoring',
      'Classification tracking',
      'New opportunity identification',
      'Monthly reporting',
      'Ongoing refinement',
    ],
    note: 'Monitors how AI visibility shifts as AI systems, prompts, and competitors change.',
  },
]

const notes = [
  'AI Search Optimization pricing depends on the number of pages, prompt sets, markets, entity work, content restructuring, technical scope, and ongoing monitoring required.',
  'Ongoing AI visibility monitoring runs month to month and builds on an initial research foundation.',
]

export default function Pricing() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment & plans" title="AI Search Optimization Pricing & Timeline">
          AI Search Optimization pricing depends on the number of pages, prompt sets, markets,
          entity work, content restructuring, technical scope, and ongoing monitoring required.
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
            {notes.map((note, nIdx) => (
              <li key={nIdx} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                <span className="mt-0.5 text-frame-accent font-bold">*</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center justify-center gap-4 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl text-center">
              Not sure which package fits? Tell us about your AI search goals, and we will recommend
              the right starting point.
            </p>
            <PosterButton href="/contact" className="w-full whitespace-nowrap">
              Get a Custom AI Search Optimization Quote
            </PosterButton>
          </div>
        </div>

        <p className="mt-8 text-sm font-medium leading-relaxed text-frame-muted-fg">
          Final pricing depends on the website, number of pages, target markets, scope of
          implementation, and monitoring requirements.
        </p>
      </div>
    </section>
  )
}