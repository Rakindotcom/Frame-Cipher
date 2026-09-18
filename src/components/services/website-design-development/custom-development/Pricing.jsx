import { PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    type: 'Custom Marketing Site',
    price: '৳120,000',
    delivery: '4–6 weeks',
    drivers: 'Bespoke design, Next.js static/dynamic rendering, headless CMS, sub-second speed.',
  },
  {
    type: 'Standard Web Application',
    price: '৳300,000',
    delivery: '8–12 weeks',
    drivers: 'User authentication, role access, custom database schemas, third-party API integrations.',
  },
  {
    type: 'Complex Web Application',
    price: '৳500,000+',
    delivery: '12–20 weeks',
    drivers: 'Multi-tenant architecture, payment billing pipelines, complex workflows, custom calculations.',
  },
  {
    type: 'Enterprise / Large-Scale Platform',
    price: 'Custom Quote',
    delivery: '20+ weeks',
    drivers: 'High-availability infrastructure, microservices, multi-region database replication, dedicated SLA.',
  },
]

const includedFeatures = [
  'Comprehensive Technical Discovery',
  'System Architecture & Database Modeling',
  'Custom UI/UX & Responsive Design System',
  'Full-Stack Next.js / TypeScript Engineering',
  'Security Hardening & Input Sanitization',
  'Automated QA & Core Web Vitals Optimization',
  'CI/CD Pipeline Setup & Production Deployment',
  'Full Source Code Repository Ownership',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Investment / Engineering Tiers
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Custom & Next.js Pricing
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Custom development pricing depends heavily on architecture, functionality, integrations, user roles, data requirements, and infrastructure.
          </p>
        </div>

        {/* PRICING TABLE */}
        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[680px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/40">
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

        {/* INCLUDED ACROSS TIERS */}
        <div className="mt-10 border-2 border-frame-border bg-frame-bg p-7 sm:p-9 shadow-sm">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent block mb-4">
            Included Across Custom Engineering Projects
          </span>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            * Custom project pricing is validated against detailed technical specifications and architecture discovery prior to development kickoff.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Technical Quote &rarr;</PosterButton>
          </div>
        </div>

        {/* OWNERSHIP & SUPPORT CARDS */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <article className="border-2 border-frame-border bg-frame-bg p-7 sm:p-9 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent block mb-3">
              Code Ownership
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Source Code Ownership & Documentation
            </h3>
            <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              You receive 100% intellectual property and full access to private GitHub repositories, cloud infrastructure, database credentials, environment variable configurations, and typed API documentation. No vendor lock-in.
            </p>
          </article>

          <article className="border-2 border-frame-border bg-frame-bg p-7 sm:p-9 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent block mb-3">
              Roadmap Retainers
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Post-Launch Support & Roadmap Evolution
            </h3>
            <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              We provide ongoing technical retainers covering dependency upgrades, security audits, database indexing, infrastructure monitoring, and continuous delivery of new features based on product roadmaps.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
