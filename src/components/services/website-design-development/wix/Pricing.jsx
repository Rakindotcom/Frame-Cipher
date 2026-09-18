import { PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    type: 'Basic Informational Site',
    price: '৳20,000',
    delivery: '~3–5 days',
    drivers: 'Page count, layout customization, clear company info & contact setup.',
  },
  {
    type: 'Custom Business Site',
    price: '৳35,000',
    delivery: '~1–2 weeks',
    drivers: 'Bespoke design, booking & lead forms, app integrations, mobile tuning.',
  },
  {
    type: 'Wix Stores (Small Catalog)',
    price: '৳55,000',
    delivery: '~2–3 weeks',
    drivers: 'Product catalog setup, payment gateways, inventory, store SEO.',
  },
  {
    type: 'Wix Studio / Velo Custom Build',
    price: 'Custom Quote',
    delivery: '~3–5 weeks',
    drivers: 'Fluid responsive breakpoints, custom code, dynamic CMS collections & APIs.',
  },
]

const includedFeatures = [
  'Discovery & Platform Consultation',
  'Custom Design Within Wix Editor / Studio',
  'Mobile & Handheld Optimization',
  'On-Page SEO & Metadata Setup',
  'Live Editor Handoff & Walkthrough',
  'Domain Connection & Launch Support',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Investment / Transparent Plans
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Wix Development Pricing
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Wix development pricing depends primarily on site complexity; a simple informational site costs less than one needing custom design work, bookings, or a small store setup.
          </p>
        </div>

        {/* PRICING TABLE */}
        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[680px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/40">
              <tr>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Site Type</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Starting Price</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Delivery</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">What Drives the Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {pricingTiers.map((tier, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-5 md:p-7 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {tier.type}
                  </td>
                  <td className="p-5 md:p-7 text-xl font-bold text-frame-accent font-heading">
                    {tier.price}
                  </td>
                  <td className="p-5 md:p-7 text-sm sm:text-base font-bold text-frame-fg">
                    {tier.delivery}
                  </td>
                  <td className="p-5 md:p-7 text-xs sm:text-sm md:text-base text-frame-muted-fg leading-relaxed">
                    {tier.drivers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* INCLUDED AT EVERY TIER */}
        <div className="mt-10 border-2 border-frame-border bg-frame-bg p-7 sm:p-9 shadow-sm">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent block mb-4">
            Included at Every Tier
          </span>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-frame-fg">
                <span className="text-frame-accent font-black">✓</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TABLE FOOTER / ACTION */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t-2 border-frame-border pt-8">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl">
            * Pricing is indicative rather than fixed. Final investment is confirmed after assessing your exact page count, content readiness, and feature requirements.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
          </div>
        </div>

        {/* OWNERSHIP & MAINTENANCE CARDS */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <article className="border-2 border-frame-border bg-frame-bg p-7 sm:p-9 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent block mb-3">
              Client Ownership
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Website Ownership & Editor Handover
            </h3>
            <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              At handover, we provide complete administrative access to your Wix account and custom domain. We walk your team through updating text, images, blog posts, forms, and bookings so you can manage routine changes with complete confidence.
            </p>
          </article>

          <article className="border-2 border-frame-border bg-frame-bg p-7 sm:p-9 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent block mb-3">
              Post-Launch Support
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Ongoing Wix Maintenance & Assistance
            </h3>
            <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              Need ongoing assistance? We provide dedicated monthly maintenance for layout adjustments, app compatibility checks, SEO reviews, and new page additions, allowing your business to stay focused on operations.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
