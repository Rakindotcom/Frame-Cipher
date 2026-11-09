import Link from 'next/link'
import { ArrowRight, Code2, Cloud, Cpu, Bot, Zap, ShieldCheck, Gauge, CheckCircle2 } from 'lucide-react'

const techLayers = [
  {
    category: 'Full-Stack Web & App Engineering',
    icon: Code2,
    stack: 'Next.js 15+ · React · TypeScript · Node.js · Python (FastAPI) · Tailwind CSS',
    description: 'High-performance web applications, headless commerce platforms, and SaaS products built for sub-second page loads, Lighthouse 95+ scores, and enterprise scale.',
  },
  {
    category: 'Cloud Infrastructure & DevOps',
    icon: Cloud,
    stack: 'Vercel Edge · AWS (Lambda, S3, CloudFront) · Docker · PostgreSQL · Redis · Supabase',
    description: 'Serverless and containerized cloud setups with automated CI/CD pipelines, global CDN edge caching, automated database backups, and 99.99% uptime guarantees.',
  },
  {
    category: 'Proprietary Growth OS & Tools',
    icon: Cpu,
    stack: 'Frame Growth OS™ · Auction Math Engines · Conversion Rate Simulator · Analytics APIs',
    description: 'Proprietary software suites developed in-house to simulate ad spend ROI, forecast B2B pipeline velocity, and automate reporting directly from ad networks to client dashboards.',
  },
  {
    category: 'AI & Machine Learning Integration',
    icon: Bot,
    stack: 'OpenAI API · Anthropic Claude · LangChain · Vector Embeddings · Automated Pipelines',
    description: 'Integrating generative AI and natural language models into customer support, search indexing, content personalization, and real-time operational workflows.',
  },
]

const statsHighlights = [
  { metric: '< 0.8s', label: 'Average Largest Contentful Paint (LCP)', desc: 'Core Web Vitals optimized for top Google ranking', icon: Gauge },
  { metric: '99.9%', label: 'Infrastructure Uptime SLA', desc: 'Deployed across geo-redundant global edge networks', icon: Zap },
  { metric: '100%', label: 'Clean Code & Type-Safety', desc: 'Strict TypeScript and automated linting & test suites', icon: ShieldCheck },
  { metric: 'Zero', label: 'Vendor Lock-in', desc: 'Portable cloud-native codebases transferred completely to clients', icon: CheckCircle2 },
]

export default function AboutTechStack() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 space-y-4 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.96] tracking-tight text-highlighted">
            Code Meets Math. Media Meets Architecture.
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            We are not just a marketing agency that buys software off the shelf; we are software engineers who build proprietary digital infrastructure. From headless commerce to AI workflow engines, our technology stack is engineered for enterprise performance and sovereign control.
          </p>
        </div>

        {/* 2x2 Nuxt Module Card Grid (Clean, Zero Clutter) */}
        <div className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {techLayers.map((layer, index) => {
            const Icon = layer.icon
            return (
              <article
                key={layer.category}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-8 sm:p-9 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-white/[0.18] hover:bg-[#18181B] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent before:opacity-0 hover:before:opacity-100 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <div className="space-y-4">
                  {/* Top Row: Pure Icon + Clean Sequence Number (No clutter text next to icon) */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <Icon className="h-7 w-7 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-highlighted">
                    {layer.category}
                  </h3>

                  <div className="rounded-xl border border-white/[0.08] bg-[#18181B] p-3.5 font-mono text-xs text-zinc-200 font-medium leading-relaxed">
                    {layer.stack}
                  </div>

                  <p className="text-base font-normal leading-relaxed text-zinc-300 group-hover:text-white transition-colors">
                    {layer.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <Link
                    href="/services/website-design-development"
                    className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-between rounded-xl border border-white/[0.12] bg-[#18181B] px-5 text-xs font-medium text-white transition-all duration-200 hover:border-purple-600/50 hover:bg-purple-600/10 hover:text-white group"
                  >
                    <span>Explore Engineering Services</span>
                    <ArrowRight className="h-3.5 w-3.5 text-purple-600 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* Speed & Quality Benchmarks Ledger (Clean 4-Card Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsHighlights.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-7 space-y-3 transition-all duration-300 hover:border-white/[0.18] hover:bg-[#18181B] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between"
              >
                <div>
                  {/* Clean Top: Icon on left, sequence on right */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-3">
                    <Icon className="h-5 w-5 text-purple-600" />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums">0{idx + 1}</span>
                  </div>
                  <p className="font-heading text-3xl sm:text-4xl font-semibold leading-none tracking-tight text-highlighted tabular-nums">
                    {stat.metric}
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-zinc-200 font-medium">
                    {stat.label}
                  </p>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal pt-2 border-t border-white/[0.06]">
                  {stat.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
