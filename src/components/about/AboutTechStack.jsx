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
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* Section Header */}
        <div className="mb-16">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Engineering & Technology / Infrastructure
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            Code Meets Math. Media Meets Architecture.
          </h2>
          <p className="mt-6 max-w-4xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            We are not just a marketing agency that buys software off the shelf; we are software engineers who build proprietary digital infrastructure. From headless commerce to AI workflow engines, our technology stack is engineered for enterprise performance and sovereign control.
          </p>
        </div>

        {/* 4 Pillars of Tech Architecture */}
        <div className="mb-16 grid bg-frame-border gap-px md:grid-cols-2">
          {techLayers.map((layer, index) => (
            <article
              key={layer.category}
              className="group flex flex-col justify-between bg-frame-bg p-8 transition-colors duration-300 hover:bg-frame-accent sm:p-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg">
                    0{index + 1} / {layer.tag}
                  </span>
                  <span className="rounded border border-frame-border/80 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-frame-muted-fg transition-colors duration-300 group-hover:border-frame-accent-fg/40 group-hover:text-frame-accent-fg/80">
                    Engineered In-House
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-3xl">
                  {layer.category}
                </h3>
                <div className="my-4 rounded bg-frame-card p-3 font-mono text-xs font-bold text-frame-accent transition-colors duration-300 group-hover:bg-frame-bg/25 group-hover:text-frame-accent-fg">
                  {layer.stack}
                </div>
                <p className="text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/85 sm:text-base">
                  {layer.description}
                </p>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/services/website-design-development"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg"
                >
                  <span>Explore Engineering Services</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Speed & Quality Benchmarks */}
        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
          {statsHighlights.map((stat) => (
            <div key={stat.label} className="bg-frame-card p-6 sm:p-8">
              <p className="font-heading text-4xl font-bold uppercase tracking-tighter text-frame-accent md:text-5xl">
                {stat.metric}
              </p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-frame-fg">
                {stat.label}
              </p>
              <p className="mt-2 text-xs font-medium text-frame-muted-fg">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
