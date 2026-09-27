import { SectionIntro } from '../Kinetic'

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
    desc: 'Our clients own 100% of their intellectual property from day one—including Git repositories, cloud deployment accounts, raw video files, and ad managers. No vendor lock-in, no hostage code, and zero hidden markups.',
  },
  {
    number: '06',
    title: 'Long-Term Compounding Over Disposable Trends.',
    desc: 'We build digital assets engineered to compound in value over 3 to 5 years: authoritative search equity, proprietary customer data assets, scalable software architectures, and enduring brand affinity that survives algorithmic shifts.',
  },
]

export default function AboutPrinciples() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* Section Header */}
        <div className="mb-16">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Core Philosophy / Operating Tenets
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            No Soft Middle. Zero Mystery Handoffs.
          </h2>
          <p className="mt-6 max-w-4xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            Our operating principles govern every decision we make—from how we structure our React components and database schemas to how we buy media on global ad networks.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <article
              key={item.number}
              className="group flex flex-col justify-between bg-frame-bg p-8 transition-colors duration-300 hover:bg-frame-accent sm:p-10"
            >
              <div>
                <p className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-5xl">
                  {item.number}
                </p>
                <h3 className="mt-6 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/85 sm:text-base">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 border-t border-frame-border/60 pt-4 transition-colors duration-300 group-hover:border-frame-accent-fg/20">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg">
                  Non-Negotiable Standard
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
