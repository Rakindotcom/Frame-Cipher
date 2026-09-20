import { PosterButton } from '../../../Kinetic'

const costDrivers = [
  'Number of pages',
  'CMS Collection complexity',
  'Reference relationships',
  'Custom components',
  'Figma-to-Webflow implementation',
  'Animation and interaction requirements',
  'Custom JavaScript',
  'Third-party integrations',
  'Migration and redirect requirements',
  'Localization',
  'Ecommerce functionality',
  'SEO and performance requirements',
]

const packages = [
  {
    name: 'Marketing Site',
    price: '৳50,000',
    description: 'Page count, standard design, basic CMS',
    timeline: '~2–3 weeks',
    featured: false,
  },
  {
    name: 'Brand / Design-Forward Site',
    price: '৳90,000',
    description: 'Custom animations, expanded CMS collections, component system',
    timeline: '~3–5 weeks',
    featured: true,
  },
  {
    name: 'Webflow Ecommerce',
    price: '৳130,000',
    description: 'Product count, checkout customization, store-specific design',
    timeline: '~4–6 weeks',
    featured: false,
  },
  {
    name: 'Advanced CMS / Custom Interaction Build',
    price: 'Custom Quote',
    description: 'Complex content relationships, custom code, advanced interactions',
    timeline: '~6–8+ weeks',
    featured: false,
  },
]

const inclusions = [
  'Strategy & Consultation',
  'CMS Architecture',
  'Custom Design Within Webflow Designer',
  'On-Page SEO Setup',
  'CMS Handoff & Training',
  'Launch Support',
]

const cmsTrainingTopics = [
  'Adding CMS items',
  'Editing existing content',
  'Managing reference relationships',
  'Publishing blog posts',
  'Updating case studies',
  'Managing team or service entries',
  'Using reusable components',
  'Updating approved content areas',
  'Working with collection templates',
]

const supportItems = [
  'CMS structure updates',
  'New Collection development',
  'Component improvements',
  'Design refinements',
  'Interaction updates',
  'Integration troubleshooting',
  'Custom-code updates',
  'SEO updates',
  'Performance reviews',
  'Accessibility improvements',
  'Ongoing content support',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION 1: PRICING & TIMELINE */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Investment &amp; Scope
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Webflow Development Pricing &amp; Timeline
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Webflow development pricing depends on design complexity, CMS architecture, page count, interactions, integrations, and the amount of custom development required.
          </p>
        </div>

        {/* COST DRIVERS */}
        <div className="mb-12 border-2 border-frame-border bg-frame-muted/20 p-6 sm:p-8">
          <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
            Common Cost Drivers Include:
          </h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {costDrivers.map((driver, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-frame-fg/90">
                <span className="text-frame-accent font-bold">•</span>
                <span>{driver}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm italic text-frame-muted-fg border-t border-frame-border/60 pt-4">
            A straightforward marketing website can move faster than a build involving complex CMS relationships, extensive interactions, migration work, or custom integrations.
          </p>
        </div>

        {/* PACKAGES CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between border-2 p-6 md:p-8 transition-colors ${
                pkg.featured
                  ? 'border-frame-accent bg-frame-accent/5'
                  : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
              }`}
            >
              <div>
                {pkg.featured && (
                  <span className="mb-4 inline-block border border-frame-accent bg-frame-accent/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-frame-accent">
                    Most Requested
                  </span>
                )}
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
                {pkg.description && (
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                    {pkg.description}
                  </p>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60">
                <PosterButton href="/contact" variant={pkg.featured ? 'accent' : 'outline'} className="w-full text-xs">
                  Request Quote
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* INCLUSIONS AT EVERY APPLICABLE TIER */}
        <div className="mt-10 border-2 border-frame-border bg-frame-bg p-6 sm:p-8">
          <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
            Included at Every Applicable Tier:
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-muted/20 p-3 text-xs sm:text-sm font-medium text-frame-fg">
                <span className="text-frame-accent font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm italic text-frame-muted-fg">
            Final pricing and timeline should be confirmed after reviewing the design, content structure, integrations, and technical requirements.
          </p>
        </div>

        {/* SECTION 2: WEBFLOW STORE HANDOVER & CMS TRAINING */}
        <div className="mt-24 pt-16 border-t-2 border-frame-border">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Knowledge Transfer &amp; Independence
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5vw,4.2rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Webflow Store Handover &amp; CMS Training
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
              Your Webflow website should remain manageable after development is complete. We provide the agreed access, CMS guidance, and documentation needed for your team to manage routine content without relying on a developer for every update.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border bg-frame-border">
            <div className="bg-frame-bg p-6 sm:p-8">
              <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                Module 01
              </span>
              <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
                CMS Training
              </h3>
              <p className="mt-3 text-xs text-frame-muted-fg">
                Depending on the project, we can train your team on:
              </p>
              <ul className="mt-4 space-y-2 text-xs font-medium text-frame-fg/90">
                {cmsTrainingTopics.map((topic, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-frame-bg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                  Module 02
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
                  Component &amp; Design-System Handover
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  We explain the reusable components, naming conventions, CMS relationships, and approved editing areas included in the project.
                </p>
              </div>
            </div>

            <div className="bg-frame-bg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                  Module 03
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
                  Custom Code Documentation
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Where custom JavaScript, embeds, or integrations are included, documentation can explain what the code does, what it depends on, and how future developers should work with it.
                </p>
              </div>
            </div>

            <div className="bg-frame-bg p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                  Module 04
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
                  Website Ownership
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  At project close, we provide the agreed access and ownership arrangements defined in the project contract.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: POST-LAUNCH SUPPORT & MAINTENANCE */}
        <div className="mt-20 border-2 border-frame-border bg-frame-muted/20 p-6 sm:p-10">
          <div className="max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Long-Term Reliability
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Post-Launch Webflow Support &amp; Maintenance
            </h2>
            <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Launching the site is only one part of the project. Ongoing support can include:
            </p>
          </div>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {supportItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-bg p-3 text-xs sm:text-sm font-medium text-frame-fg">
                <span className="text-frame-accent font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sm:text-sm italic text-frame-muted-fg border-t border-frame-border/60 pt-4">
            We scope ongoing support separately based on the level of assistance the website requires.
          </p>
        </div>
      </div>
    </section>
  )
}
