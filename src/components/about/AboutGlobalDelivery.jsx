import Link from 'next/link'

const globalNodes = [
  {
    region: 'North America',
    countries: 'United States · Canada',
    timezones: 'EST (UTC-5) · CST (UTC-6) · PST (UTC-8)',
    focus: 'SaaS Platforms · eCommerce Stores · High-Ticket Lead Gen & Paid Media',
    sla: 'Same-day overlapping sprint cycles & real-time Slack/Teams sync',
  },
  {
    region: 'Europe & UK',
    countries: 'United Kingdom · Germany · Netherlands · Sweden',
    timezones: 'GMT (UTC+0) · CET (UTC+1)',
    focus: 'GDPR-Compliant Web Engineering · Performance Marketing · Brand Identity',
    sla: '4 to 6 hours direct operational overlap with London and Berlin',
  },
  {
    region: 'Middle East & GCC',
    countries: 'United Arab Emirates (Dubai) · Saudi Arabia · Qatar',
    timezones: 'GST (UTC+4)',
    focus: 'Luxury Retail · Enterprise Web Portals · Video & 360 Media Campaigns',
    sla: 'Near-zero latency; 2-hour timezone delta for effortless real-time collaboration',
  },
  {
    region: 'Asia-Pacific & Domestic',
    countries: 'Bangladesh (HQ) · Singapore · Australia',
    timezones: 'BST (UTC+6) · SGT (UTC+8) · AEST (UTC+10)',
    focus: 'Full In-House Engineering Campus · 360 Marketing Systems · Media Production',
    sla: '24/7 dedicated engineering shifts & local market immersion',
  },
]

const enterpriseAssurances = [
  {
    badge: 'LEGAL & IP PROTECTION',
    title: '100% Intellectual Property Ownership',
    desc: 'All source code, design systems, raw video footage, and advertising accounts are 100% owned by the client from day one. We sign comprehensive international NDAs and IP assignment agreements.',
  },
  {
    badge: 'SECURITY & GOVERNANCE',
    title: 'Enterprise Code & Data Security',
    desc: 'Adherence to SOC2 principles, OWASP Top 10 web security standards, GDPR data compliance, and role-based access management across all production environments.',
  },
  {
    badge: 'CONTINUOUS DELIVERY',
    title: 'Git-Driven CI/CD Pipelines',
    desc: 'Automated testing, staged preview environments (Vercel/AWS), zero-downtime database migrations, and clean trunk-based development practices.',
  },
  {
    badge: 'DIRECT ACCOUNTABILITY',
    title: 'Zero Account Manager Fluff',
    desc: 'Clients communicate directly with the lead software architects, media buyers, and creative directors running their accounts. No layers of non-technical middlemen.',
  },
]

export default function AboutGlobalDelivery() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-card px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* Section Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
              Global Operations / Delivery Architecture
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              A Follow-The-Sun Multinational Delivery Engine.
            </h2>
          </div>
          <div>
            <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
              Headquartered in Dhaka with global operational nodes, Frame Cipher powers brands across the globe. Our asynchronous communication protocols, overlapping timezone coverage, and enterprise delivery standards make working with us feel as immediate as having an in-house team down the hall in New York, London, or Dubai.
            </p>
          </div>
        </div>

        {/* Global Regional Nodes Grid */}
        <div className="mb-16 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
          {globalNodes.map((node) => (
            <div
              key={node.region}
              className="flex flex-col justify-between bg-frame-bg p-6 sm:p-8"
            >
              <div>
                <span className="rounded bg-frame-accent/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-frame-accent">
                  {node.region}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase text-frame-fg">
                  {node.countries}
                </h3>
                <p className="mt-2 font-mono text-xs text-frame-accent">
                  {node.timezones}
                </p>
                <div className="mt-5 border-t border-frame-border/80 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-frame-muted-fg">
                    Primary Workloads:
                  </p>
                  <p className="mt-1 text-xs font-medium text-frame-fg">
                    {node.focus}
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-frame-border/60 pt-4">
                <p className="text-[11px] leading-relaxed text-frame-muted-fg">
                  <span className="font-bold text-frame-fg">SLA:</span> {node.sla}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Governance Assurances */}
        <div className="border-2 border-frame-border bg-frame-bg p-8 sm:p-12">
          <div className="mb-8">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-frame-accent">
              TRUST, GOVERNANCE & COMPLIANCE
            </span>
            <h3 className="mt-1 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg sm:text-3xl">
              Enterprise Assurances Built for Global Procurement
            </h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {enterpriseAssurances.map((item) => (
              <div key={item.title} className="space-y-3">
                <span className="border-b border-frame-accent/60 pb-1 text-[10px] font-mono font-bold uppercase tracking-widest text-frame-accent">
                  {item.badge}
                </span>
                <h4 className="font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
