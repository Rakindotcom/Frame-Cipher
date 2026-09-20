import { SectionIntro, PosterButton } from '../../Kinetic'

const packages = [
  {
    name: 'Landing Page',
    price: '৳20,000 – ৳40,000',
    description: 'Single-offer campaign page with focused copy and core lead capture.',
    timeline: '1–2 weeks',
    features: [
      'Campaign strategy & goal definition',
      'Conversion-focused copy & design',
      'Mobile-first responsive build',
      'Lead capture form setup',
      'Analytics & conversion tracking',
      'Launch support',
    ],
  },
  {
    name: 'Business Website',
    price: '৳50,000 – ৳100,000',
    description: 'Multi-page conversion website with CMS, lead forms, and buyer journey mapping.',
    timeline: '3–5 weeks',
    features: [
      'Buyer-journey site architecture',
      'Custom UI/UX design',
      'CMS-backed page structure',
      'Lead capture & routing forms',
      'On-page SEO foundation',
      'Analytics setup',
      'Revision cycles',
    ],
  },
  {
    name: 'eCommerce Website',
    price: '৳80,000 – ৳180,000+',
    description: 'Online store with bKash/Nagad/Cards checkout, inventory, and logistics.',
    timeline: '6–10 weeks',
    features: [
      'Store architecture & catalog setup',
      'Product & UI/UX design',
      'bKash / Nagad checkout integration',
      'International payment gateway',
      'Inventory & order management',
      'Shipping & logistics integration',
      'SEO & product schema setup',
      'Launch support',
    ],
  },
  {
    name: 'Website Redesign',
    price: '৳45,000 – ৳100,000+',
    description: 'Rebuilding underperforming sites while preserving valuable SEO rankings.',
    timeline: '4–8 weeks',
    features: [
      'Technical & UX audit',
      'SEO-preserving URL / redirect plan',
      'Visual redesign & responsive rebuild',
      'Content migration',
      'Performance optimization',
      'Testing & launch support',
    ],
  },
]

const timelines = [
  {
    type: 'Landing Page',
    time: '1–2 weeks',
    scope: 'Single-offer campaign page, focused messaging, and analytics setup.',
  },
  {
    type: 'Business Website',
    time: '3–5 weeks',
    scope: 'Multi-page corporate site with custom CMS, lead capture, and service structures.',
  },
  {
    type: 'eCommerce Website',
    time: '6–10 weeks',
    scope: 'Catalog architecture, product filtering, bKash/Nagad/Cards payment, and courier dispatch.',
  },
  {
    type: 'Website Redesign',
    time: '4–8 weeks',
    scope: 'Technical audit, UX overhaul, performance boost, and SEO rankings preservation.',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <SectionIntro
          eyebrow="Investment & Scope"
          title="Website Development Pricing"
        >
          Website design and development pricing depends on the platform, page count, custom functionality required, and whether you need ongoing maintenance included.
        </SectionIntro>

        {/* PACKAGE CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 transition-colors hover:border-frame-border/80"
            >
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                  {pkg.price}
                </p>
                {pkg.timeline && (
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                    Typical Delivery: {pkg.timeline}
                  </p>
                )}
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                  {pkg.description}
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
                <PosterButton href="/contact" variant="outline" className="w-full text-xs">
                  Request Quote
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* TABLE FOOTER / NOTE */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b-2 border-frame-border pb-8">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl">
            These are indicative ranges, not fixed packages. We provide a custom quotation after reviewing your project requirements.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Custom Quote &rarr;</PosterButton>
          </div>
        </div>

        {/* TIMELINE SECTION (H2) */}
        <div className="mt-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-2">
              Execution Cadence
            </p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Website Development Timeline
            </h2>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg leading-relaxed">
              Typical project timelines depend on scope, content readiness, revisions, and client approvals. Complex integrations, custom applications, and large product catalogs may require additional time.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full min-w-[640px] text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Estimated Timeline</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Scope Context</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {timelines.map((item, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-6 font-bold text-frame-fg">{item.type}</td>
                    <td className="p-4 md:p-6 font-bold text-frame-accent">{item.time}</td>
                    <td className="p-4 md:p-6 text-frame-muted-fg">{item.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BANGLADESH & WORLDWIDE + WARRANTY & ONGOING SUPPORT */}
        <div className="mt-20 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Local & International Reach
              </span>
              <h2 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Website Development for Bangladesh and Worldwide
              </h2>
              <div className="mt-5 grid gap-px border border-frame-border bg-frame-border sm:grid-cols-2">
                <div className="bg-frame-bg p-5">
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">Bangladesh-Focused</span>
                  <ul className="mt-3 space-y-2 text-xs md:text-sm font-medium text-frame-fg/90">
                    {[
                      'Local payment options (bKash / Nagad)',
                      'Bangla-English content requirements',
                      'Mobile-first experiences',
                      'Local business workflows & communication',
                    ].map((pt, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-frame-bg p-5">
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">International Reach</span>
                  <ul className="mt-3 space-y-2 text-xs md:text-sm font-medium text-frame-fg/90">
                    {[
                      'Target-market and platform requirements',
                      'Audience-first content and structure',
                      'Global standards and expectations',
                      'Results across the UAE, US, UK, Australia & Canada',
                    ].map((pt, gIdx) => (
                      <li key={gIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-5 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                Frame Cipher works with businesses in Dhaka and across Bangladesh, as well as clients worldwide. We build websites for startups, small businesses, eCommerce brands, and established companies.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-frame-border/60">
              <span className="text-xs font-bold uppercase tracking-wider text-frame-fg">
                Active Markets: Bangladesh · USA · UK · Australia · Canada · UAE
              </span>
            </div>
          </div>

          <div className="bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Quality & Accountability
              </span>
              <h2 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Website Warranty and Ongoing Support
              </h2>
              <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                We review design and development milestones with you before moving to the next stage. This helps keep the project aligned with your expectations and reduces surprises at launch.
              </p>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                After launch, we can provide guidance on maintenance, updates, and future improvements. Ongoing maintenance may include technical updates, security monitoring, backups, and fixes based on the agreed scope.
              </p>
              <p className="mt-3 text-xs md:text-sm font-semibold text-frame-muted-fg italic border-t border-frame-border/40 pt-3">
                * Website performance and business results depend on content, marketing, technical implementation, and market conditions. We do not promise specific traffic or conversion outcomes from development alone.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-frame-border/60">
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">
                Milestone Reviews · Full Asset Handover · Retainer Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
