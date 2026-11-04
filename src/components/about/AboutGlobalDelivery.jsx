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
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
              A Follow-The-Sun{' '}
              <span className="italic text-frame-accent">
                Delivery Engine.
              </span>
            </h2>
          </div>
          <div>
            <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              Headquartered in Dhaka with global operational nodes, Frame Cipher powers brands across the globe. Our asynchronous communication protocols, overlapping timezone coverage, and enterprise delivery standards make working with us feel as immediate as having an in-house team down the hall in New York, London, or Dubai.
            </p>
          </div>
        </div>

        {/* Modality 3: Blueprint Matrix for 4 Regional Nodes (Seamless hairline grid) */}
        <div className="mb-14 border-t border-l border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#09090B]">
          {globalNodes.map((node) => (
            <div
              key={node.region}
              className="group border-r border-b border-white/[0.08] p-7 flex flex-col justify-between space-y-6 transition-colors duration-200 hover:bg-[#121214]"
            >
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-frame-accent">
                  {node.region}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  {node.countries}
                </h3>
                <p className="font-mono text-xs text-purple-400">
                  {node.timezones}
                </p>
                <div className="pt-4 border-t border-white/[0.08] space-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    Primary Workloads:
                  </p>
                  <p className="text-xs font-normal leading-relaxed text-zinc-300">
                    {node.focus}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/[0.08]">
                <p className="text-[11px] leading-relaxed text-zinc-400 font-mono">
                  <span className="text-white font-medium">SLA:</span> {node.sla}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Governance Assurances (Structured Blueprint Row) */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-10">
          <div className="mb-8 border-b border-white/[0.08] pb-4">
            <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-[-0.02em] text-white">
              Enterprise Assurances Built for Global Procurement
            </h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {enterpriseAssurances.map((item, idx) => (
              <div key={item.title} className="space-y-2.5">
                <span className="font-mono text-xs text-frame-accent block tabular-nums">
                  0{idx + 1}
                </span>
                <h4 className="font-heading text-base font-medium tracking-tight text-white">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm font-normal leading-relaxed text-zinc-400">
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
