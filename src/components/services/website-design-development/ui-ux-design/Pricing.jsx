import { PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    type: 'Single Flow / Landing Page',
    price: '৳20,000',
    delivery: '~1 week',
    drivers: 'One key user conversion flow, up to 5 screens, mobile and desktop wireframes to high-fidelity UI.',
  },
  {
    type: 'Website UI/UX Package',
    price: '৳50,000',
    delivery: '~2–3 weeks',
    drivers: 'Full site design, up to 15 screens, information architecture, component system, and review checkpoints.',
  },
  {
    type: 'Application / Product Design',
    price: '৳120,000',
    delivery: '~4–6 weeks',
    drivers: 'Multiple user flows, design system library, prototype usability testing, and dev-ready component tokens.',
  },
  {
    type: 'Complex / Multi-Role Product',
    price: 'Custom Quote',
    delivery: '~6–10+ weeks',
    drivers: 'Multiple user permission types, extensive dashboards, interactive prototypes, and ongoing design sprints.',
  },
]

const includedFeatures = [
  'User Journey & Task Flow Mapping',
  'Low & High-Fidelity Wireframes',
  'Interactive Clickable Figma Prototype',
  'Component Design System & Tokens',
  'WCAG AA Accessibility Audit',
  'Multi-Breakpoint Responsive Layouts',
  'Developer Handoff Specs & Assets',
  'Post-Handoff Design Implementation Support',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Pricing & Tiers
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            UI/UX Design Pricing & Packages
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            UI/UX design pricing depends on the number of screens and flows, user research depth, prototype interactivity, and usability testing scope.
          </p>
        </div>

        {/* PRICING TABLE */}
        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[640px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/20">
              <tr>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Scope</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Starting Price</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Delivery</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">What Drives the Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {pricingTiers.map((tier, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-5 md:p-7 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {tier.type}
                  </td>
                  <td className="p-5 md:p-7 text-lg md:text-xl font-bold text-frame-accent">
                    {tier.price}
                  </td>
                  <td className="p-5 md:p-7 text-sm md:text-base font-bold text-frame-fg">
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
        <div className="mt-12 border-2 border-frame-border bg-frame-muted/20 p-7 sm:p-10">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
            Included Across Every Design Package
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {includedFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm font-medium text-frame-fg">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent font-black text-xs text-frame-accent">✓</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TABLE FOOTER / ACTION */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t-2 border-frame-border pt-8">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl">
            * Final pricing and delivery schedules are confirmed after reviewing feature lists, screen flows, and design system requirements.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request Design Quote &rarr;</PosterButton>
          </div>
        </div>

        {/* OWNERSHIP & POST LAUNCH DETAILS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent">
            <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent">Handoff</span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              100% Design Ownership & Source Files
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Upon final approval, we transfer full administrative ownership of your Figma project, interactive prototypes, component systems, and design tokens directly to your team account.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent">
            <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent">Build Support</span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Ongoing Design Support & Dev Collaboration
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Our design team stays available during your frontend development phase to inspect implementations, clarify component states, review staging builds, and ensure pixel-accurate execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
