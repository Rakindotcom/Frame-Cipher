import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Single Flow / Landing Page Design',
    price: '৳20,000',
    scope: 'One key flow, up to 5 screens',
    timeline: '~1 week',
    featured: false,
    features: [
      'Strategy & flow mapping',
      'Wireframes',
      'UI design',
      'Interactive prototype',
      'Responsive design',
      'Design file handoff',
    ],
  },
  {
    name: 'Website UI/UX Package',
    price: '৳50,000',
    scope: 'Full site design, up to 15 screens',
    timeline: '~2–3 weeks',
    featured: true,
    features: [
      'Site UX & user flow mapping',
      'Wireframing',
      'Full UI design',
      'Interactive prototyping',
      'Responsive & accessibility-aware design',
      'Design system foundations',
      'Design file handoff',
    ],
  },
  {
    name: 'Application / Product Design',
    price: '৳120,000',
    scope: 'Multiple flows, design system, usability testing',
    timeline: '~4–6 weeks',
    featured: false,
    features: [
      'UX research & flow mapping',
      'Wireframing',
      'Full UI design',
      'Design system development',
      'Usability testing',
      'Interactive prototyping',
      'Developer handoff support',
    ],
  },
  {
    name: 'Complex / Multi-Role Product Design',
    price: 'Custom Quote',
    scope: 'Multiple user types, extensive flows, complex design system',
    timeline: '~6–10+ weeks',
    featured: false,
    features: [
      'Multi-role UX research & flows',
      'Extensive wireframing',
      'Full UI design',
      'Complex design system',
      'Usability testing',
      'Accessibility review',
      'Ongoing developer support',
    ],
  },
]

const projectCoverageList = [
  'User research and flow mapping',
  'Wireframing',
  'UI design',
  'Interactive prototyping',
  'Responsive and accessibility-aware design',
  'Design system development',
  'Design file handoff',
  'Development support where scoped',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment & Packages" title="UI/UX Design Pricing and Timeline">
          UI/UX design pricing depends on project scope, the number of screens or flows, product complexity, research requirements, usability testing, and the amount of design-system work involved.
        </SectionIntro>

        {/* DETAILED PACKAGE CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between border-2 p-6 md:p-8 transition-colors ${
                pkg.featured
                  ? 'border-frame-accent bg-frame-accent/5'
                  : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
              }`}
            >
              <div>
                {pkg.featured && (
                  <span className="mb-4 inline-block border border-frame-accent bg-frame-accent/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-frame-accent">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                  {pkg.price}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                  Delivery: {pkg.timeline}
                </p>
                <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                  {pkg.scope}
                </p>
                {pkg.features && (
                  <ul className="mt-4 space-y-2 text-xs font-medium text-frame-fg/90">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60">
                <PosterButton
                  href="/contact"
                  variant={pkg.featured ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  Select Plan &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* TYPICAL PROJECT COVERAGE */}
        <div className="mt-12 border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
          <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-4">
            Typical project coverage can include:
          </h3>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 text-xs sm:text-sm font-medium text-frame-fg">
            {projectCoverageList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border bg-frame-bg p-3">
                <span className="text-frame-accent font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-frame-border">
            <p className="text-xs sm:text-sm font-medium text-frame-muted-fg italic">
              Pricing is finalized after reviewing your actual project requirements.
            </p>
            <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}