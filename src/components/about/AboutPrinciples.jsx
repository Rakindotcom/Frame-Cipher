const principles = [
  {
    number: '01',
    title: 'Zero Outsourcing. Absolute Craft Ownership.',
    desc: 'We never farm out client work to third-party freelancers or unknown offshore vendors. Every line of code, design system, cinematic video frame, and ad campaign is conceived, engineered, and executed by our in-house team in Dhaka with full accountability.',
  },
  {
    number: '02',
    title: 'Mathematical Precision Over Subjective Fluff.',
    desc: 'We do not rely on vanity impressions or subjective opinions. Every marketing strategy, search engine optimization sprint, and ad budget allocation is grounded in verifiable unit economics, second-price auction mechanics, and conversion math.',
  },
  {
    number: '03',
    title: 'Full-Funnel Convergence.',
    desc: 'Silos kill growth. At Frame Cipher, software developers sit with media buyers, and art directors brainstorm with conversion copywriters. This convergence ensures creative assets are built specifically to lower ad CPAs, and web code is built specifically to maximize SEO crawlability and conversion velocity.',
  },
  {
    number: '04',
    title: 'Multinational Quality at Sovereign Velocity.',
    desc: 'We deliver enterprise-grade digital products and global campaigns in weeks, not the months or quarters demanded by slow-moving legacy consulting conglomerates. Agility, clean communication, and rapid iteration are encoded into our DNA.',
  },
  {
    number: '05',
    title: 'Transparent Attribution & Direct Code Ownership.',
    desc: 'Our clients own 100% of their intellectual property from day one, including Git repositories, cloud deployment accounts, raw video files, and ad managers. No vendor lock-in, no hostage code, and zero hidden markups.',
  },
  {
    number: '06',
    title: 'Long-Term Compounding Over Disposable Trends.',
    desc: 'We build digital assets engineered to compound in value over 3 to 5 years: authoritative search equity, proprietary customer data assets, scalable software architectures, and enduring brand affinity that survives algorithmic shifts.',
  },
]

export default function AboutPrinciples() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 space-y-4 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
            No Soft Middle.{' '}
            <span className="italic text-frame-accent">
              Zero Mystery Handoffs.
            </span>
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Our operating principles govern every decision we make, from how we structure our React components and database schemas to how we buy media on global ad networks.
          </p>
        </div>

        {/* Modality 3: Blueprint Matrix (Seamless hairline grid, gap-0, zero floating card borders) */}
        <div className="border-t border-l border-white/[0.08] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <article
              key={item.number}
              className="group border-r border-b border-white/[0.08] bg-[#09090B] p-8 md:p-10 flex flex-col justify-between space-y-6 transition-colors duration-200 hover:bg-[#121214]"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                  <span className="font-mono text-xs text-frame-accent tabular-nums">
                    {item.number}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-medium leading-snug text-white group-hover:text-frame-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-normal leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
