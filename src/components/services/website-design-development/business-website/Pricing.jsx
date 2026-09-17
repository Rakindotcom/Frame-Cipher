import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Launch Kit',
    for: 'New businesses needing a focused, conversion-ready foundational site',
    price: '৳45,000 ($499)',
    pages: 'Up to 5 pages',
    timeline: '~1 week',
    features: [
      'Strategy & Consultation',
      'Core Site Architecture',
      'UI/UX Design',
      'Responsive Development & Hosting Setup',
      'Basic Lead Capture Forms',
      'Speed & SEO Optimization',
      '3 Revision Cycles',
    ],
  },
  {
    name: 'Growth Build',
    for: 'Established SMEs needing CRM integration and deeper architecture',
    price: '৳90,000 ($999)',
    pages: 'Up to 15 pages',
    timeline: '~2 weeks',
    featured: true,
    features: [
      'Strategy & Consultation',
      'Advanced Site Architecture',
      'UI/UX Design',
      'Responsive Development & Hosting Setup',
      'Lead Capture & Routing',
      'Speed & SEO Optimization',
      '5 Revision Cycles',
      'CRM Integration',
      'Analytics & Conversion Tracking Setup',
      'Custom Functionality (as scoped)',
    ],
  },
  {
    name: 'Enterprise Tech Build',
    for: 'Corporate brands with complex stack integrations and custom requirements',
    price: '৳180,000+ ($1,999+) / Custom Quote',
    pages: 'Up to 40+ pages',
    timeline: '~4–8 weeks',
    features: [
      'Strategy & Consultation',
      'Enterprise Site Architecture',
      'UI/UX Design',
      'Responsive Development & Hosting Setup',
      'Advanced Lead Capture Forms',
      'Speed & SEO Optimization',
      '10 Revision Cycles',
      'CRM Integration (multi-system)',
      'Full Analytics & Event Tracking',
      'Full Custom Functionality & APIs',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Clear Investment"
          title="Business Website Development Pricing"
        >
          Business website development is custom-quoted based on engagement level, from a foundational Launch Kit for new businesses to a comprehensive Enterprise Tech Build for established SMEs and corporate brands.
        </SectionIntro>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`border-2 p-7 md:p-9 flex flex-col justify-between ${
                pkg.featured
                  ? 'border-frame-accent bg-frame-accent/10'
                  : 'border-frame-border bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 min-h-[22px]">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Package Tier
                  </span>
                  {pkg.featured && (
                    <span className="border-2 border-frame-accent bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                      Most Popular
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed">
                  {pkg.for}
                </p>

                <div className="mt-6 border-y-2 border-frame-border/60 py-4">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Starting Price</span>
                  <div className="mt-1 font-heading text-2xl md:text-3xl font-bold tracking-tight text-frame-fg">
                    {pkg.price}
                  </div>
                  <div className="mt-2 text-xs font-semibold text-frame-muted-fg flex justify-between">
                    <span>Scope: {pkg.pages}</span>
                    <span>Timeline: {pkg.timeline}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <PosterButton
                  href="/contact"
                  variant={pkg.featured ? 'accent' : 'outline'}
                  className="w-full"
                >
                  Choose {pkg.name}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* TIMELINE & OWNERSHIP DETAILS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Timeline & Delivery Speed
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Business website development typically takes 4 to 8 weeks, depending on tech stack complexity and CRM connections. Projects move fastest when brand assets and content are ready upfront; our in-house team maintains rigorous milestone signoffs to avoid mid-build delays.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Website Ownership & Handover
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              You receive full administrator access, CMS access, hosting/domain credentials, source code deliverables, and basic editorial training so your team can manage routine updates without dependency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
