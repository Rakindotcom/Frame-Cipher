import Link from 'next/link'
import { SectionIntro } from '../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* Section Header */}
        <div className="mb-16">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Manifesto / The Multinational Blueprint
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            Born in Dhaka. Built for the World.
          </h2>
          <p className="mt-6 max-w-4xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            Bangladesh is home to one of the youngest, most ambitious engineering and creative populations on earth. 
            Frame Cipher harnesses this generational talent pool to deliver sovereign digital infrastructure, 
            enterprise-grade software, and high-ROI acquisition systems for brands across five continents.
          </p>
        </div>

        {/* Global Key Metrics Grid */}
        <div className="mb-16 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
          {visionMetrics.map((metric) => (
            <div key={metric.label} className="bg-frame-bg p-6 sm:p-8">
              <p className="font-heading text-5xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-6xl">
                {metric.value}
              </p>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.22em] text-frame-accent">
                {metric.label}
              </p>
              <p className="mt-2 text-xs font-medium text-frame-muted-fg">
                {metric.sub}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Strategic Manifesto Pillars */}
        <div className="grid bg-frame-border gap-px lg:grid-cols-3">
          {pillarManifestos.map((pillar, idx) => (
            <article
              key={pillar.title}
              className="group relative flex flex-col justify-between bg-frame-bg p-8 transition-colors duration-300 hover:bg-frame-accent sm:p-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.28em] text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg/80 sm:text-xs">
                    {pillar.tag}
                  </span>
                  <span className="font-mono text-xs font-bold text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/70">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/85 sm:text-base">
                  {pillar.text}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-frame-border/60 transition-colors duration-300 group-hover:border-frame-accent-fg/20">
                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                  <span>Explore Ecosystem</span>
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
