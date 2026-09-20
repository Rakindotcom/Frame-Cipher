import { SectionIntro } from '../../../Kinetic'

const caseStudyPillars = [
  {
    title: 'The Starting Point',
    desc: 'Original website, legacy platform, accumulated technical debt, and existing performance bottlenecks.',
  },
  {
    title: 'The Challenge',
    desc: 'Real UX friction, mobile usability issues, SEO preservation risks, and specific business conversion targets.',
  },
  {
    title: 'What We Changed',
    desc: 'Information architecture restructuring, modern UI design, clean code redevelopment, and 1-to-1 redirect mapping.',
  },
  {
    title: 'Before → After',
    desc: 'Side-by-side visual progression demonstrating improved hierarchy, readability, and modern brand alignment.',
  },
  {
    title: 'Verified Results',
    desc: 'Sub-second Core Web Vitals, 100% organic search equity preserved, and measurable improvements in qualified inquiries.',
  },
]

export default function CaseStudies() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Audit & Case Study Framework" title="What Each Redesign Case Study Demonstrates">
          We document our redesign projects from original diagnostic audit through live cutover, highlighting the concrete technical and commercial outcomes achieved.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {caseStudyPillars.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                  Stage 0{idx + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm text-frame-muted-fg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-bg p-7 md:p-10">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Results Measured
          </span>
          <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
            Core Metrics Tracked Post-Redesign
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {[
              'Core Web Vitals & Speed Scores',
              'Preserved Organic Search Rankings',
              'Form & Checkout Conversion Rates',
              'Mobile Usability & Engagement',
              'Zero 404 Crawl Error Rate',
              'Clean CMS Content Management',
              'Zero-Downtime DNS Cutover',
              'Qualified Leads & Inquiries',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 border border-frame-border/80 bg-frame-muted/20 p-3.5">
                <span className="text-frame-accent font-bold">✓</span>
                <span className="text-xs md:text-sm font-medium text-frame-fg">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs md:text-sm italic text-frame-muted-fg">
            All published results reflect genuine analytics, Search Console verification, and client-approved benchmarks.
          </p>
        </div>
      </div>
    </section>
  )
}