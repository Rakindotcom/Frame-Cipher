import { PosterButton } from '../../../Kinetic'

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
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Clear Investment / Transparent Estimates
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Business Website Development Pricing
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Business website development is custom-quoted based on engagement level, from a foundational Launch Kit for new businesses to a comprehensive Enterprise Tech Build for established SMEs and corporate brands.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`border-2 p-7 md:p-10 flex flex-col justify-between ${
                pkg.featured
                  ? 'border-frame-accent bg-frame-accent/10 shadow-lg'
                  : 'border-frame-border bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 min-h-[22px]">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Package Tier 0{idx + 1}
                  </span>
                  {pkg.featured && (
                    <span className="border-2 border-frame-accent bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                      Most Popular
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg leading-relaxed">
                  {pkg.for}
                </p>

                <div className="mt-6 border-y-2 border-frame-border/60 py-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Starting Price</span>
                  <div className="mt-1 font-heading text-2xl md:text-3xl font-bold tracking-tight text-frame-fg">
                    {pkg.price}
                  </div>
                  <div className="mt-3 text-xs font-semibold text-frame-muted-fg flex justify-between border-t border-frame-border/40 pt-2">
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

        {/* SERVICE AREAS & DIGITAL OWNERSHIP */}
        <div className="mt-20 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Full Authority</span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              100% Asset Ownership & Handover
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              You receive complete administrator access, domain DNS control, source code repositories, and editorial documentation. No monthly lock-in fees or proprietary restrictions.
            </p>
          </div>

          <div className="bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Lifecycle Support</span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Post-Launch Maintenance & Scaling
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Keep your site fast, secure, and current with routine backups, dependency audits, uptime alerts, and priority feature enhancements under our dedicated support packages.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
