import Link from 'next/link'
import { renderContextualParagraph } from '../../lib/seo/contextualParagraphLinks'
import AnimatedCounter from '../home/AnimatedCounter'
import { Globe, Users, ShieldCheck, Layers } from 'lucide-react'

const visionMetrics = [
  { value: 20, suffix: '+', label: 'Countries Served', sub: 'USA, UK, Canada, UAE, Germany, Australia, Bangladesh', icon: Globe },
  { value: 50, suffix: '+', label: 'Enterprise & Scaling Brands', sub: 'From high-ticket B2B to global direct-to-consumer', icon: Users },
  { value: 100, suffix: '%', label: 'In-House Talent Engine', sub: 'Zero outsourcing. Sovereign control over every line of code & asset', icon: ShieldCheck },
  { value: 74, suffix: '+', label: 'Specialized Capabilities', sub: 'Covering software, branding, media production, and performance ads', icon: Layers },
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
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.96] tracking-tight text-highlighted">
            Born in Dhaka. Built for the World.
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Bangladesh is home to one of the youngest, most ambitious engineering and creative populations on earth. 
            Frame Cipher harnesses this generational talent pool to deliver sovereign digital infrastructure, 
            enterprise-grade software, and high-ROI acquisition systems for brands across five continents.
          </p>
        </div>

        {/* Global Key Metrics Grid (Modality B: Nuxt Card Grid with Gap-6) */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionMetrics.map((metric, idx) => {
            const Icon = metric.icon
            return (
              <div
                key={metric.label}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 space-y-4 transition-all duration-300 hover:border-white/[0.18] hover:bg-[#18181B] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent before:opacity-0 hover:before:opacity-100 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                    <Icon className="h-6 w-6 text-purple-600" />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums">0{idx + 1}</span>
                  </div>

                  <p className="font-heading text-4xl sm:text-5xl font-semibold leading-none tracking-tight text-highlighted tabular-nums">
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      duration={1400}
                      delay={idx * 60}
                      suffixClassName="text-purple-600"
                      replay={true}
                    />
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[1.1px] text-purple-600 font-semibold">
                    {metric.label}
                  </p>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal pt-2 border-t border-white/[0.04]">
                  {metric.sub}
                </p>
              </div>
            )
          })}
        </div>

        {/* 3 Strategic Manifesto Pillars (Modality B: Nuxt 3-Card Grid with Gap-6) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillarManifestos.map((pillar, idx) => (
            <article
              key={pillar.title}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-8 sm:p-9 space-y-6 transition-all duration-300 hover:border-white/[0.18] hover:bg-[#18181B] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent before:opacity-0 hover:before:opacity-100 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span className="font-mono text-xs text-purple-600 tabular-nums font-semibold tracking-wider">
                    {pillar.tag}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">0{idx + 1}</span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold leading-tight text-highlighted tracking-tight">
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
