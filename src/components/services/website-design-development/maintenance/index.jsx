import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

const maintenanceKeywords = [
  'Website Maintenance',
  'Security Updates',
  'Tested Backups',
  '24/7 Uptime Monitoring',
  'Core Web Vitals Optimization',
  'Emergency Bug Fixes',
  'Platform-Specific Care',
  'In-House Engineers',
]

const caseStudyPillars = [
  {
    title: 'Website Type & Platform',
    desc: 'Business, ecommerce, content blog, or custom application running across WordPress, WooCommerce, Shopify, Webflow, Magento, or Next.js.',
  },
  {
    title: 'The Challenge',
    desc: 'Technical or operational issues the website was experiencing, such as outdated plugin conflicts, slow checkout latency, or unverified backups.',
  },
  {
    title: 'Maintenance Work',
    desc: 'Safe staging updates, security hardening, backup restoration testing, database optimization, 24/7 monitoring, and custom troubleshooting.',
  },
  {
    title: 'Verified Result',
    desc: 'Restored uptime, faster page load speeds, resolved form/checkout errors, and seamless handover of maintenance responsibility.',
  },
  {
    title: 'Ongoing Care',
    desc: 'Scheduled monthly update cycles, proactive vulnerability scans, database grooming, and rapid incident response.',
  },
]

export default function WebsiteDesignDevelopmentMaintenanceService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={maintenanceKeywords} slow />

      {/* PORTFOLIO PREVIEW */}
      <WebsitePortfolioPreview
        eyebrow="Case Studies & Real Work"
        title="Website Maintenance Case Studies"
        description="Website maintenance is easier to evaluate when you can see what was actually improved. Our maintenance case studies should show the problem, the work performed, and the verified outcome rather than simply displaying a website screenshot."
        buttonText="Explore Maintenance Projects →"
        buttonHref="/projects#website-work"
      />

      {/* CASE STUDY STRUCTURE & AUDIT STANDARDS */}
      <section className="border-b-2 border-frame-border bg-frame-muted/10 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-10 max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Verification Standards
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              What Each Maintenance Case Study Highlights
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg font-medium text-frame-muted-fg leading-relaxed">
              We document our maintenance engagements with real operational evidence, showing how proactive engineering prevents costly downtime and protects revenue.
            </p>
          </div>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {caseStudyPillars.map((item, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                    Stage 0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-frame-muted-fg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-2 border-frame-border bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Operational Safeguards
            </span>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Core Technical Capabilities Demonstrated
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {[
                'Zero-Downtime Safe Patching',
                'Simulated Disaster Recovery',
                '24/7 Endpoint Health Checks',
                'Checkout & Form Integrity',
                'Sub-Second Core Web Vitals',
                'Third-Party API Monitoring',
                'Malware & Vulnerability Scans',
                'Transparent Monthly Logs',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 border border-frame-border/80 bg-frame-muted/20 p-3.5">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-xs md:text-sm font-medium text-frame-fg">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs md:text-sm italic text-frame-muted-fg">
              Only publish project metrics, response times, performance improvements, client counts, or other measurable claims when you have actual evidence for them.
            </p>
          </div>
        </div>
      </section>

      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
