import Link from 'next/link'
import { Globe, Compass, MapPin, Building2, ShieldCheck, Lock, GitPullRequest, Headphones } from 'lucide-react'

const globalNodes = [
  {
    region: 'North America',
    countries: 'United States · Canada',
    timezones: 'EST (UTC-5) · CST (UTC-6) · PST (UTC-8)',
    icon: Globe,
    focus: 'SaaS Platforms · eCommerce Stores · High-Ticket Lead Gen & Paid Media',
    sla: 'Same-day overlapping sprint cycles & real-time Slack/Teams sync',
  },
  {
    region: 'Europe & UK',
    countries: 'United Kingdom · Germany · Netherlands · Sweden',
    timezones: 'GMT (UTC+0) · CET (UTC+1)',
    icon: Compass,
    focus: 'GDPR-Compliant Web Engineering · Performance Marketing · Brand Identity',
    sla: '4 to 6 hours direct operational overlap with London and Berlin',
  },
  {
    region: 'Middle East & GCC',
    countries: 'United Arab Emirates (Dubai) · Saudi Arabia · Qatar',
    timezones: 'GST (UTC+4)',
    icon: MapPin,
    focus: 'Luxury Retail · Enterprise Web Portals · Video & 360 Media Campaigns',
    sla: 'Near-zero latency; 2-hour timezone delta for effortless real-time collaboration',
  },
  {
    region: 'Asia-Pacific & Domestic',
    countries: 'Bangladesh (HQ) · Singapore · Australia',
    timezones: 'BST (UTC+6) · SGT (UTC+8) · AEST (UTC+10)',
    icon: Building2,
    focus: 'Full In-House Engineering Campus · 360 Marketing Systems · Media Production',
    sla: '24/7 dedicated engineering shifts & local market immersion',
  },
]

const enterpriseAssurances = [
  {
    title: '100% Intellectual Property Ownership',
    icon: ShieldCheck,
    desc: 'All source code, design systems, raw video footage, and advertising accounts are 100% owned by the client from day one. We sign comprehensive international NDAs and IP assignment agreements.',
  },
  {
    title: 'Enterprise Code & Data Security',
    icon: Lock,
    desc: 'Adherence to SOC2 principles, OWASP Top 10 web security standards, GDPR data compliance, and role-based access management across all production environments.',
  },
  {
    title: 'Git-Driven CI/CD Pipelines',
    icon: GitPullRequest,
    desc: 'Automated testing, staged preview environments (Vercel/AWS), zero-downtime database migrations, and clean trunk-based development practices.',
  },
  {
    title: 'Direct Accountability',
    icon: Headphones,
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
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.96] tracking-tight text-highlighted">
              A Follow-The-Sun Delivery Engine.
            </h2>
          </div>
          <div>
            <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              Headquartered in Dhaka with global operational nodes, Frame Cipher powers brands across the globe. Our asynchronous communication protocols, overlapping timezone coverage, and enterprise delivery standards make working with us feel as immediate as having an in-house team down the hall in New York, London, or Dubai.
            </p>
          </div>
        </div>

        {/* 4 Regional Nodes Grid (Clean, Zero Clutter) */}
        <div className="mb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {globalNodes.map((node, index) => {
            const Icon = node.icon
            return (
              <div
                key={node.region}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-white/[0.18] hover:bg-[#18181B] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent before:opacity-0 hover:before:opacity-100 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <div className="space-y-3">
                  {/* Top: Icon on left, sequence on right */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <Icon className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-purple-600 font-semibold block">
                    {node.region}
                  </span>

                  <h3 className="font-heading text-lg sm:text-xl font-semibold tracking-tight text-highlighted">
                    {node.countries}
                  </h3>
                  <div className="inline-block rounded border border-purple-600/30 bg-purple-950/30 px-2.5 py-1 font-mono text-xs text-purple-300">
                    {node.timezones}
                  </div>
                  <div className="pt-4 border-t border-white/[0.06] space-y-1">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      Primary Workloads:
                    </p>
                    <p className="text-xs font-normal leading-relaxed text-zinc-300">
                      {node.focus}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-[11px] leading-relaxed text-zinc-400 font-mono">
                    <span className="text-white font-medium">SLA:</span> {node.sla}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Enterprise Governance Assurances (Structured Blueprint Container) */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.16] sm:p-10 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <div className="mb-8 border-b border-white/[0.08] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-highlighted">
              Enterprise Assurances Built for Global Procurement
            </h3>
            <span className="font-mono text-xs text-zinc-500 uppercase">Sovereign Compliance</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {enterpriseAssurances.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/[0.06] bg-[#18181B] p-6 space-y-3 transition-colors hover:border-purple-600/30 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    {/* Top: Icon on left, sequence on right */}
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                      <Icon className="h-5 w-5 text-purple-600" />
                      <span className="font-mono text-xs text-purple-600 tabular-nums font-semibold">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="font-heading text-base font-semibold tracking-tight text-highlighted">
                      {item.title}
                    </h4>
                    <p className="text-xs font-normal leading-relaxed text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
