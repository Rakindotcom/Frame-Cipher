import { PosterButton } from '../../../Kinetic'

const defaultOfferings = [
  {
    title: 'Security & Update Management',
    tag: 'Care 01',
    description: 'Keeping core CMS software, themes, plugins, and dependencies patched against active zero-day vulnerabilities and exploits.',
    bullets: [
      'Core & Plugin Updates: Safe deployment of updates without breaking live site logic or theme templates.',
      'Vulnerability Patching: Immediate security patching for high-risk exploits across WordPress, Shopify, and Magento.',
      'Malware & Threat Scans: Scheduled deep scans to isolate injected scripts before they impact visitors.',
      'SSL & Access Audits: Validation of SSL certificates, administrative credentials, and brute-force shields.',
    ],
  },
  {
    title: 'Backup & Disaster Recovery',
    tag: 'Care 02',
    description: 'Ensuring an immutable, independently tested copy of your database and media files exists at all times.',
    bullets: [
      'Automated Off-Site Backups: Stored in isolated cloud infrastructure separate from your hosting server.',
      'Recovery Simulation Testing: Regular restoration tests to verify database integrity under disaster conditions.',
      'Zero-Loss Rollbacks: Instant rollbacks if third-party plugin updates conflict with existing workflows.',
      'Emergency Restoration SLA: Rapid intervention if accidental deletions or server crashes occur.',
    ],
  },
  {
    title: 'Performance & 24/7 Uptime Monitoring',
    tag: 'Care 03',
    description: 'Continuous endpoint monitoring to detect latency spikes, hosting downtime, and database bottlenecks instantly.',
    bullets: [
      '24/7 Endpoint Health Checks: Automated pings every 60 seconds with instant escalation alerts.',
      'Core Web Vitals Benchmarking: Tracking LCP, CLS, and INP metrics across mobile and desktop.',
      'Traffic Spike Readiness: Server configuration tuning ahead of planned marketing promotions.',
      'Broken Link & Error Resolution: Real-time logging of 404s, payment gateway errors, and API timeouts.',
    ],
  },
  {
    title: 'Content & Functionality Support',
    tag: 'Care 04',
    description: 'Dedicated developer hours each month to handle routine copy updates, banner swaps, and minor feature additions.',
    bullets: [
      'Copy & Asset Updates: Quick turnaround for promotional banners, new testimonials, and team bio edits.',
      'Form & CRM Audits: Verifying lead submissions route to your email and CRM without dropped messages.',
      'Plugin Stack Pruning: Deactivating orphaned plugins that bloat memory and drag down page speed.',
      'Third-Party API Sync: Monitoring courier, checkout, and live chat webhooks for seamless uptime.',
    ],
  },
  {
    title: 'Monthly Audits & Advisory',
    tag: 'Care 05',
    description: 'Transparent monthly reporting showing every update made, threats blocked, and strategic recommendations.',
    bullets: [
      'Transparent Work Logs: Detailed breakdown of patched software, uptime stats, and backup archives.',
      'Speed Progression Reports: Before-and-after Core Web Vitals comparisons month-over-month.',
      'Proactive Tech Advisory: Guidance on upgrading hosting plans or replacing sluggish plugins.',
      'Direct Senior Engineer Contact: Direct communication with an engineer who knows your codebase.',
    ],
  },
]

const whyMattersPoints = [
  {
    title: "Skipping Maintenance Doesn't Save Money",
    desc: "A small plugin conflict caught early takes 15 minutes to fix. Left unaddressed for months, it turns into an emergency rebuild costing ten times more."
  },
  {
    title: "Security Threats Grow Silently",
    desc: "Unpatched vulnerabilities do not announce themselves; automated bots scan the web constantly looking for outdated WordPress and Magento files to exploit."
  },
  {
    title: "Downtime Has a Real Financial Cost",
    desc: "Every minute your site is down or checkout fails directly bleeds ad budget, sales revenue, and buyer trust. Continuous monitoring catches outages before customers notice."
  },
  {
    title: "Platform-Specific Risk Scoping",
    desc: "A WooCommerce store needs payment gateway and inventory monitoring, while a custom Next.js site needs API health checks. We scope care to your exact architecture."
  }
]

const whyChooseUsAdvantages = [
  {
    title: 'Platform-Specific Engineering',
    desc: 'We tailor maintenance checklists specifically to your engine—whether Shopify, WooCommerce, Magento, or custom Next.js.'
  },
  {
    title: 'Tested Backups, Not Just Stored',
    desc: 'A backup you have never tested restoring is a backup you cannot trust. We periodically run simulated restorations.'
  },
  {
    title: 'Proactive Alerting & Fast Response',
    desc: 'Automated monitoring catches server downtime in minutes, allowing us to intervene before your customers notice.'
  },
  {
    title: 'One In-House Support Team',
    desc: 'Direct access to senior developers who know your site inside and out—never an outsourced ticket queue.'
  },
  {
    title: 'Transparent Monthly Reporting',
    desc: 'Clear, concise summaries of all security updates, uptime percentages, and proactive improvement recommendations.'
  },
  {
    title: 'Zero Long-Term Lock-In',
    desc: 'Flexible month-to-month service agreements with full asset ownership and zero proprietary lock-in.'
  }
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* CORE DELIVERABLES */}
      <section className="px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Capabilities & Scope / Proactive Care
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Website Maintenance Services
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Ongoing technical care designed to keep your website fast, secure, and operational every day of the year.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {defaultOfferings.map((item, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {item.description}
                  </p>
                </div>
                <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS & WHY CHOOSE US */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Strategic Impact / The Proactive Standard
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Maintenance Matters for Business Growth
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Treating a website as a one-time launch instead of live infrastructure is one of the most expensive assumptions businesses make.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* LEFT COLUMN: WHY IT MATTERS */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                The Reality of Deferred Care
              </span>
              <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                The Cost of Unmonitored Systems
              </h3>
              <div className="mt-6 space-y-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {whyMattersPoints.map((point, idx) => (
                  <div key={idx} className="border-b border-frame-border/50 pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                      {point.title}
                    </h4>
                    <p className="mt-1.5 text-sm text-frame-muted-fg">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <PosterButton href="/contact">Book a Maintenance Discovery Call</PosterButton>
              </div>
            </div>

            {/* RIGHT COLUMN: WHY CHOOSE US */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  The Frame Cipher Standard
                </span>
                <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                  Why Choose Frame Cipher for Maintenance
                </h3>
              </div>

              <div className="grid bg-frame-border gap-px border-2 border-frame-border">
                {whyChooseUsAdvantages.map((item, index) => (
                  <div key={index} className="bg-frame-bg p-6">
                    <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
