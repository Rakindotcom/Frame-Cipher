import Link from 'next/link'
import { PageHero, PosterButton } from '../../Kinetic'

const kineticMetrics = [
  {
    num: '01',
    label: 'Native & Cross-Platform',
    detail: 'Android (Kotlin), iOS (Swift), Flutter & React Native with zero performance compromises',
  },
  {
    num: '02',
    label: 'Architecture & APIs',
    detail: 'Scalable backend infrastructure, database design, REST/GraphQL endpoints, and auth systems',
  },
  {
    num: '03',
    label: 'Store Deployment',
    detail: 'End-to-end release preparation and publishing workflows for Apple App Store & Google Play',
  },
  {
    num: '04',
    label: 'Post-Launch SLA',
    detail: 'OS compatibility maintenance, dependency updates, performance tuning, and technical monitoring',
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || "App Development Services in Bangladesh"
  const subtitle = service?.shortDesc || "Custom mobile and web apps built to actually launch and scale, Android, iOS, cross-platform, and SaaS products, handled by one in-house team from strategy through App Store release. Talk to us about what you're building."

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <span className="text-frame-accent">App Development</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Core Service Pillar / App Development"
        meta="One In-House Team / Built For Scale"
        number="02"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">Get a Free App Consultation &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Packages &amp; Pricing &rarr;
            </PosterButton>
          </>
        }
      >
        {subtitle}
      </PageHero>

      {/* KINETIC BRUTALIST METRICS */}
      <div className="border-b-2 border-frame-border bg-frame-muted/30">
        <div className="mx-auto grid max-w-[95vw] grid-cols-1 divide-y-2 divide-frame-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x-2 lg:grid-cols-4">
          {kineticMetrics.map((item, idx) => (
            <div key={idx} className="p-6 md:p-8">
              <span className="font-heading text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                {item.num}
              </span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                {item.label}
              </h3>
              <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* STRATEGIC OPENING SECTION */}
      <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="border-2 border-frame-border bg-frame-muted/10 p-8 md:p-14">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Reality &amp; Execution
            </span>
            <h2 className="mt-4 font-heading text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-frame-fg leading-tight">
              Your App Idea Needs a Team That&apos;s Shipped Before, Not Just Designed
            </h2>
            <div className="mt-6 max-w-4xl space-y-4 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
              <p>
                Most app projects stall somewhere between &ldquo;great idea&rdquo; and &ldquo;live in the App Store&rdquo;, usually because design, development, and backend infrastructure were never planned as one system. Framecipher builds Android, iOS, cross-platform, and SaaS applications for startups and businesses in Bangladesh, and for international clients across the US, UK, Australia, Canada, and UAE, handled by one in-house team from architecture through launch and post-launch support. Not sure if you need a native app, a cross-platform build, or just an MVP to test the idea first? Talk to us and we&apos;ll tell you honestly what fits your stage and budget.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <PosterButton href="/contact">Talk to Our Team &rarr;</PosterButton>
              <PosterButton href="#offerings" variant="outline">
                Explore App Capabilities &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
