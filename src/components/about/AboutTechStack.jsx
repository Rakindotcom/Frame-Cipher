import Link from 'next/link'

const techLayers = [
  {
    category: 'Full-Stack Web & App Engineering',
    tag: 'CORE ENGINE',
    stack: 'Next.js 15+ · React · TypeScript · Node.js · Python (FastAPI) · Tailwind CSS',
    description: 'High-performance web applications, headless commerce platforms, and SaaS products built for sub-second page loads, Lighthouse 95+ scores, and enterprise scale.',
  },
  {
    category: 'Cloud Infrastructure & DevOps',
    tag: 'DISTRIBUTED SYSTEMS',
    stack: 'Vercel Edge · AWS (Lambda, S3, CloudFront) · Docker · PostgreSQL · Redis · Supabase',
    description: 'Serverless and containerized cloud setups with automated CI/CD pipelines, global CDN edge caching, automated database backups, and 99.99% uptime guarantees.',
  },
  {
    category: 'Proprietary Growth OS & Tools',
    tag: 'INTERNAL INNOVATION',
    stack: 'Frame Growth OS™ · Auction Math Engines · Conversion Rate Simulator · Analytics APIs',
    description: 'Proprietary software suites developed in-house to simulate ad spend ROI, forecast B2B pipeline velocity, and automate reporting directly from ad networks to client dashboards.',
  },
  {
    category: 'AI & Machine Learning Integration',
    tag: 'INTELLIGENT SYSTEMS',
    stack: 'OpenAI API · Anthropic Claude · LangChain · Vector Embeddings · Automated Pipelines',
    description: 'Integrating generative AI and natural language models into customer support, search indexing, content personalization, and real-time operational workflows.',
  },
]

const statsHighlights = [
  { metric: '< 0.8s', label: 'Average Largest Contentful Paint (LCP)', desc: 'Core Web Vitals optimized for top Google ranking' },
  { metric: '99.9%', label: 'Infrastructure Uptime SLA', desc: 'Deployed across geo-redundant global edge networks' },
  { metric: '100%', label: 'Clean Code & Type-Safety', desc: 'Strict TypeScript and automated linting & test suites' },
  { metric: 'Zero', label: 'Vendor Lock-in', desc: 'Portable cloud-native codebases transferred completely to clients' },
]

export default function AboutTechStack() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 space-y-4 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
            Code Meets Math.{' '}
            <span className="italic text-frame-accent">
              Media Meets Architecture.
            </span>
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            We are not just a marketing agency that buys software off the shelf; we are software engineers who build proprietary digital infrastructure. From headless commerce to AI workflow engines, our technology stack is engineered for enterprise performance and sovereign control.
          </p>
        </div>

        {/* Modality 3: Blueprint Matrix (Seamless 2x2 grid, gap-0, zero rounded corners) */}
        <div className="mb-14 border-t border-l border-white/[0.08] grid grid-cols-1 md:grid-cols-2 bg-[#09090B]">
          {techLayers.map((layer, index) => (
            <article
              key={layer.category}
              className="group border-r border-b border-white/[0.08] p-8 md:p-10 flex flex-col justify-between space-y-6 transition-colors duration-200 hover:bg-[#121214]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                  <span className="font-mono text-xs text-frame-accent tabular-nums">
                    0{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  {layer.category}
                </h3>

                <div className="rounded-lg border border-white/[0.08] bg-[#18181B] p-3 font-mono text-xs text-purple-300">
                  {layer.stack}
                </div>

                <p className="text-sm font-normal leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {layer.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <Link
                  href="/services/website-design-development"
                  className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-between rounded-full border border-white/[0.12] bg-[#18181B] px-5 text-xs font-medium text-white transition-all duration-200 hover:border-frame-accent/60 hover:bg-frame-accent hover:text-white"
                >
                  <span>Explore Engineering Services</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Speed & Quality Benchmarks Ledger (Modality 2: Divided Column Band) */}
        <div className="border-t border-b border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] bg-[#09090B]">
          {statsHighlights.map((stat) => (
            <div
              key={stat.label}
              className="p-6 md:p-8 space-y-2 transition-colors duration-200 hover:bg-[#121214]"
            >
              <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium uppercase leading-none tracking-tight text-white">
                {stat.metric}
              </p>
              <p className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent">
                {stat.label}
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
