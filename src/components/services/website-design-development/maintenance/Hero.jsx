import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const whyChoosePillars = [
  {
    title: 'Security Stays Current',
    description: 'Regular updates and security checks help reduce exposure to known vulnerabilities and compatibility problems.',
  },
  {
    title: 'Backups Stay Recoverable',
    description: 'Backups are more useful when they are stored separately and periodically tested for restoration.',
  },
  {
    title: 'Problems Are Caught Earlier',
    description: 'Uptime, performance, forms, integrations, and other important website functions can be monitored before customers report an issue.',
  },
  {
    title: 'Routine Changes Stay Simple',
    description: 'Small content changes, product updates, image replacements, and minor fixes should not always require a new development project.',
  },
  {
    title: 'Maintenance Matches the Website',
    description: 'A WordPress blog, WooCommerce store, Shopify site, and custom Next.js application have different technical needs. Your maintenance plan should reflect those differences.',
  },
]

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b-2 border-frame-border bg-frame-bg/90 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/website-design-development" className="transition hover:text-frame-fg">Website Design & Development</Link>
          <span>/</span>
          <span className="text-frame-accent">Website Maintenance</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Focused Service / Website Maintenance"
        meta="Security & Updates / 99.9% Uptime SLA"
        number="12"
        title="Website Maintenance Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              Request a Health Assessment &rarr;
            </PosterButton>
          </>
        }
      >
        We keep your website running smoothly with security updates, backups, monitoring, performance checks, bug fixes, and ongoing technical support. From WordPress and Shopify to custom Next.js websites, we provide reliable maintenance for businesses in Bangladesh and worldwide.
      </PageHero>

      {/* KINETIC METRIC CARDS */}
      <div className="border-b-2 border-frame-border bg-frame-bg px-4 py-8 md:px-8">
        <div className="mx-auto max-w-5xl border-2 border-frame-border bg-frame-muted/20 p-5 md:p-8 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-frame-border pb-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-frame-fg">MAINTENANCE_SLA // PROACTIVE SITE MONITORING</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-frame-muted-fg font-semibold uppercase">
              <span>STATUS: 24/7 ACTIVE</span>
              <span>SLA: 99.9% UPTIME</span>
              <span className="text-frame-accent font-black">SUPPORT: IN-HOUSE SENIOR DEVS</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Updates</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Safe Deploy</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Staging-Tested Patching</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Backups</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Tested Recovery</p>
              <p className="mt-1 text-[11px] text-frame-accent font-bold">Off-Site Verified Backups</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Uptime</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">24/7 Monitoring</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Proactive Outage Alerts</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Engineering</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">In-House Team</p>
              <p className="mt-1 text-[11px] text-frame-accent font-bold">Direct Senior Dev Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* STRATEGIC ASSESSMENT: WHY CHOOSE WEBSITE MAINTENANCE? */}
      <section className="bg-frame-bg px-4 py-16 md:px-8 md:py-24 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Continuous Protection
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Website Maintenance?
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                A website is not finished when it goes live. It continues to depend on software updates, security patches, backups, integrations, content changes, and ongoing monitoring.
              </p>
              <p>
                Without regular maintenance, small problems can become larger ones. An outdated plugin can create compatibility issues. A failed integration can stop leads or orders. An untested backup may not help when recovery is actually needed.
              </p>
              <p>
                Professional website maintenance keeps those risks visible and manageable.
              </p>
              <p className="font-bold text-frame-fg">
                The right maintenance plan should protect the website, monitor its health, handle routine changes, and provide a clear response when something goes wrong.
              </p>
            </div>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {whyChoosePillars.map((pillar, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
