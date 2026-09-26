import { SectionIntro, PosterButton } from '../../../Kinetic'

const areas = [
  'Brand awareness',
  'Audience growth',
  'Engagement',
  'Content performance',
  'Website traffic',
  'Lead generation',
  'Ecommerce activity',
  'Campaign performance',
  'Community response',
  'Customer feedback',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Reporting philosophy"
          title="Social Media Reporting Built Around Business Goals, Not Vanity Metrics"
        >
          Every platform gives you numbers.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              The harder part is understanding which numbers actually matter.
            </p>

            <div className="mt-8 border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
              <p className="text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
                A useful social media report should connect performance data to your business goals.
              </p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
                It should identify meaningful trends, explain significant changes, and give you a clear
                direction for the next reporting period.
              </p>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Depending on your objectives, we can evaluate areas such as
            </span>
            <ul className="mt-5 flex flex-wrap gap-2">
              {areas.map((area) => (
                <li
                  key={area}
                  className="border border-frame-border bg-frame-bg px-2.5 py-1.5 text-[11px] font-semibold text-frame-fg"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              The exact KPI set depends on your business, platforms, campaign objectives, tracking setup,
              and available data.
            </p>
            <p className="mt-3 font-heading text-base font-bold uppercase leading-snug tracking-tight text-frame-fg md:text-lg">
              Context comes before conclusions.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Discuss Your Reporting Needs &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
