import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const kineticMetrics = [
  {
    num: '01',
    label: 'Core Hypothesis Validation',
    detail: 'Focused strictly on testing the primary value proposition before committing full development capital',
  },
  {
    num: '02',
    label: 'Rapid UI/UX Prototyping',
    detail: 'Clickable wireframes and functional flows to evaluate user experience and gather feedback early',
  },
  {
    num: '03',
    label: 'Lean Full-Stack Engineering',
    detail: 'Essential frontend, backend, database, and third-party integrations built with clean, scalable architecture',
  },
  {
    num: '04',
    label: 'Actionable Telemetry & Analytics',
    detail: 'Measurement of user activation, core workflow completion, conversion signals, and retention patterns',
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || "Best MVP Development Service in Bangladesh"
  const subtitle = "The most expensive mistake in software isn't a bug, it's spending six months building the wrong thing. Framecipher builds MVPs for early-stage founders, product teams inside existing businesses, and organizations validating a new idea before committing real budget, in Dhaka and across the US, UK, Australia, Canada, and UAE. Whether you're launching a startup or testing a new feature within a company that already exists, an MVP answers the same question: does this idea actually have demand before you build the whole thing."

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/app-development" className="transition hover:text-frame-fg">App Development</Link>
          <span>/</span>
          <span className="text-frame-accent">MVP Development</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="App Development / Focused Capability"
        meta="One In-House Team / Scoped To Learn"
        number="07"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Discuss Your MVP &rarr;
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
    </div>
  )
}

