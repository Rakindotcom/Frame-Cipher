import Link from 'next/link'
import { PosterButton } from '../../../Kinetic'

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

      {/* HERO SECTION */}
      <section className="px-4 py-16 sm:py-20 md:px-8 md:py-28 lg:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Focused Service / Website Maintenance
            </span>
            <span className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-frame-muted">
              12
            </span>
          </div>

          <h1 className="font-heading text-[clamp(2.4rem,6.5vw,5.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg max-w-5xl">
            Website Maintenance Service in Bangladesh
          </h1>

          <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight text-frame-accent">
            Keep Your Website Secure, Updated &amp; Ready for Business
          </p>

          <div className="mt-6 max-w-3xl space-y-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            <p>
              We keep your website running smoothly with security updates, backups, monitoring, performance checks, bug fixes, and ongoing technical support.
            </p>
            <p>
              From WordPress and Shopify to custom Next.js websites, we provide reliable maintenance for businesses in Bangladesh and worldwide.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              Request a Website Health Assessment &rarr;
            </PosterButton>
          </div>

          {/* KINETIC METRIC CARDS */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-frame-border border-2 border-frame-border">
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-widest text-frame-accent">Updates</span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg uppercase">Safe Deploy</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">Staging-tested patching</p>
            </div>
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-widest text-frame-accent">Backups</span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg uppercase">Tested Recovery</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">Off-site, verified restoration</p>
            </div>
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-widest text-frame-accent">Uptime</span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg uppercase">24/7 Monitoring</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">Proactive outage alerts</p>
            </div>
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-widest text-frame-accent">Engineering</span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg uppercase">In-House Team</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">Direct senior dev support</p>
            </div>
          </div>
        </div>
      </section>

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
