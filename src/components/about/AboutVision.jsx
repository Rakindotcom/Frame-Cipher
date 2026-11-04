import Link from 'next/link'
import { renderContextualParagraph } from '../../lib/seo/contextualParagraphLinks'

const visionMetrics = [
  { value: '20+', label: 'Countries Served', sub: 'USA, UK, Canada, UAE, Germany, Australia, Bangladesh' },
  { value: '50+', label: 'Enterprise & Scaling Brands', sub: 'From high-ticket B2B to global direct-to-consumer' },
  { value: '100%', label: 'In-House Talent Engine', sub: 'Zero outsourcing. Sovereign control over every line of code & asset' },
  { value: '74+', label: 'Specialized Capabilities', sub: 'Covering software, branding, media production, and performance ads' },
]

const pillarManifestos = [
  {
    tag: 'THE CORE VISION',
    title: 'Rewriting Bangladesh’s Tech Narrative',
    text: 'For decades, the global technology sector viewed South Asia as a destination for low-margin, transactional offshore outsourcing. Frame Cipher was created to shatter that ceiling. We are building a global-standard tech, media, and growth powerhouse headquartered in Dhaka, engineered to compete head-to-head with elite consultancies in Silicon Valley, London, and Singapore.',
  },
  {
    tag: 'THE MULTINATIONAL ARBITRAGE',
    title: 'World-Class Craft at High Velocity',
    text: 'We give international enterprises and forward-thinking domestic brands an unmatched advantage: the speed, multidisciplinary integration, and technical rigor of Silicon Valley combined with the relentless work ethic and capital efficiency of Bangladesh’s top software engineers and creative directors.',
  },
  {
    tag: 'THE SOVEREIGN SYSTEM',
    title: 'No Fragmented Vendors. One Operating System.',
    text: 'Modern brands suffer from vendor fragmentation, hiring one agency for web development, another for social media, another for SEO, and another for paid ads. Frame Cipher operates as a single growth engine where custom code, conversion architecture, video production, and auction algorithms talk to each other in real time.',
  },
]

export default function AboutVision() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 space-y-4 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
            Born in Dhaka.{' '}
            <span className="italic text-frame-accent">
              Built for the World.
            </span>
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Bangladesh is home to one of the youngest, most ambitious engineering and creative populations on earth. 
            Frame Cipher harnesses this generational talent pool to deliver sovereign digital infrastructure, 
            enterprise-grade software, and high-ROI acquisition systems for brands across five continents.
          </p>
        </div>

        {/* Global Key Metrics Ledger (Modality 2: Divided Column Band) */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-white/[0.08] divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] bg-[#09090B]">
          {visionMetrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 md:p-8 space-y-2.5 transition-colors duration-200 hover:bg-[#121214]"
            >
              <p className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium uppercase leading-none tracking-tight text-white">
                {metric.value}
              </p>
              <p className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent">
                {metric.label}
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {metric.sub}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Strategic Manifesto Pillars (Modality 2: Architectural Column Band) */}
        <div className="border-t border-b border-white/[0.08] grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] bg-[#09090B]">
          {pillarManifestos.map((pillar, idx) => (
            <article
              key={pillar.title}
              className="group flex flex-col justify-between p-8 sm:p-10 space-y-6 transition-colors duration-200 hover:bg-[#121214]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                  <span className="font-mono text-xs text-frame-accent tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-medium leading-tight text-white group-hover:text-frame-accent transition-colors">
                  {pillar.title}
                </h3>
                <div className="text-sm font-normal leading-relaxed text-zinc-300">
                  {renderContextualParagraph(pillar.text, { maxLinks: 3, theme: 'frame' })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
