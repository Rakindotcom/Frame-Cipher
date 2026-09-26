import { SectionIntro, PosterButton } from '../../../Kinetic'

const bangladeshPlanning = [
  'Local campaigns',
  'Audience behavior',
  'Seasonal opportunities',
  'Business priorities',
  'Bangla-English communication where relevant to the target audience',
]

const internationalMarkets = [
  'United States',
  'United Kingdom',
  'Australia',
  'Canada',
  'United Arab Emirates',
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Coverage"
          title="Content Calendar &amp; Strategy Service Areas"
        />

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          <div className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Bangladesh
              </span>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                Framecipher is based in Dhaka and provides Content Calendar &amp; Strategy Services for
                businesses across Bangladesh.
              </p>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg/90 md:text-base">
                For Bangladeshi businesses, planning can account for:
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {bangladeshPlanning.map((item) => (
                <li
                  key={item}
                  className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                International Markets
              </span>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                We also work with businesses targeting international markets, including:
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {internationalMarkets.map((item) => (
                <li
                  key={item}
                  className="border border-frame-accent/50 bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t-2 border-frame-accent/30 pt-5 text-sm font-semibold leading-relaxed text-frame-fg/90 md:text-base">
              For international campaigns, content planning can account for different audiences, markets,
              campaigns, communication requirements, and publishing schedules while maintaining consistent
              brand positioning.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Content planning is adapted market by market rather than applying one generic calendar
            everywhere.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="outline">
              Discuss Your Market &amp; Content Goals &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
