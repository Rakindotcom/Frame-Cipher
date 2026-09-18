import { PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    type: 'Basic Informational Site',
    price: '৳20,000',
    drivers: 'Page count, template customization',
    delivery: '~3–5 days',
  },
  {
    type: 'Custom Business Site',
    price: '৳35,000',
    drivers: 'Custom design, booking/form setup, app integrations',
    delivery: '~1–2 weeks',
  },
  {
    type: 'Wix Stores (Small Catalog)',
    price: '৳55,000',
    drivers: 'Product count, payment setup, store-specific design',
    delivery: '~2–3 weeks',
  },
  {
    type: 'Wix Studio / Velo Custom Build',
    price: 'Custom Quote',
    drivers: 'Custom code requirements, advanced functionality',
    delivery: '~3–5 weeks',
  },
]

const includedAtEveryTier = [
  'Strategy & Consultation',
  'Custom Design Within Wix Editor',
  'Mobile Optimization',
  'On-Page SEO Setup',
  'Editor Handoff & Basic Training',
  'Launch Support',
]

const ownershipAccessItems = [
  'Wix website and editor access',
  'Domain access or connection details',
  'Relevant business and app accounts',
  'Analytics and tracking access',
  'Agreed project assets and content',
]

const editorHandoverItems = [
  'Editing page content',
  'Updating images and media',
  'Managing services or products',
  'Updating forms and contact information',
  'Managing blog or CMS content',
  'Making basic layout changes',
  'Reviewing website submissions and inquiries',
]

const maintenanceItems = [
  'Content and page updates',
  'Layout and responsive fixes',
  'App and integration checks',
  'Performance reviews',
  'SEO updates',
  'Troubleshooting',
  'Minor functionality improvements',
  'Wix Studio refinements',
  'Ongoing website enhancements',
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-frame-bg text-frame-fg scroll-mt-20">
      {/* 1. WIX DEVELOPMENT PRICING AND TIMELINE */}
      <section className="border-t-2 border-frame-border px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Investment &amp; Schedules
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Wix Development Pricing and Timeline
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Wix development pricing depends primarily on site complexity; a simple informational site costs less than one needing custom design work, bookings, or a small store setup. Pricing typically depends on page count, design customization, and app/integration needs.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full min-w-[680px] text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/40">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Site Type</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Starting Price</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">What Drives the Cost</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {pricingTiers.map((tier, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">{tier.type}</td>
                    <td className="p-4 md:p-6 text-base md:text-lg font-bold text-frame-accent">{tier.price}</td>
                    <td className="p-4 md:p-6 text-sm md:text-base text-frame-muted-fg leading-relaxed">{tier.drivers}</td>
                    <td className="p-4 md:p-6 text-sm md:text-base font-bold text-frame-fg">{tier.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* INCLUDED AT EVERY TIER */}
          <div className="mt-10 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
              Included at Every Tier
            </p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {includedAtEveryTier.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-sm md:text-base font-medium text-frame-fg">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-frame-border/60 pt-6">
              <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WEBSITE OWNERSHIP, EDITOR HANDOVER & TRAINING */}
      <section className="border-t-2 border-frame-border px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Assets &amp; Independence
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Website Ownership, Editor Handover &amp; Training
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Your Wix website should remain manageable after development is complete. We make sure you receive the agreed access, assets, and guidance needed to take control of the website.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* OWNERSHIP & ACCESS */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Deliverable 01
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Website Ownership &amp; Access
                </h3>
                <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  At project handover, we provide the agreed access and credentials required to manage your website, subject to the ownership and account structure established for the project. This can include:
                </p>
                <ul className="mt-4 space-y-2 text-sm md:text-base font-medium text-frame-fg/90">
                  {ownershipAccessItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* EDITOR HANDOVER */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Deliverable 02
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Wix Editor Handover
                </h3>
                <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  We walk you through the parts of the Wix editor your team will need for routine website management. Depending on the project, this can include:
                </p>
                <ul className="mt-4 space-y-2 text-sm md:text-base font-medium text-frame-fg/90">
                  {editorHandoverItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* BASIC TRAINING & GUIDANCE */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Deliverable 03
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Basic Training &amp; Guidance
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                We provide basic guidance so you understand how to manage the website after launch. The training focuses on the actual features included in your project rather than overwhelming you with unnecessary technical details.
              </p>
            </div>

            {/* HANDOVER DOCUMENTATION */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Deliverable 04
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Handover Documentation
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                Where included in the project scope, we provide basic instructions or documentation covering important website management tasks, access details, and agreed post-launch procedures.
              </p>
              <p className="mt-4 text-xs italic text-frame-muted-fg">
                The exact ownership, account access, source materials, licenses, and documentation provided depend on the project scope and agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POST-LAUNCH WIX SUPPORT & MAINTENANCE */}
      <section className="border-t-2 border-frame-border px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Ongoing Care &amp; Support
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Post-Launch Wix Support &amp; Maintenance
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Launching the website is only the beginning. Businesses often need updates, fixes, improvements, and occasional technical support after launch.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
            <p className="text-sm md:text-base font-medium text-frame-fg/90 mb-6">
              Our ongoing Wix support can include:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {maintenanceItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 border border-frame-border/80 bg-frame-muted/20 p-4">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-xs md:text-sm font-medium text-frame-fg">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 border-t border-frame-border/80 pt-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              <p>
                Ongoing support is scoped separately based on the level of assistance your website requires.
              </p>
              <p>
                For businesses that prefer to manage the website independently, we provide the agreed editor handover and basic guidance during launch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
