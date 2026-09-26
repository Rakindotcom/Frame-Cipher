import { SectionIntro, PosterButton } from '../../../Kinetic'

const markets = ['United States', 'United Kingdom', 'Australia', 'Canada', 'United Arab Emirates']

export default function ServiceAreas() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Coverage" title="Content Strategy Service Areas">
          Framecipher provides content strategy services for businesses in Bangladesh and international markets.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <article className="flex flex-col bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Bangladesh</span>
            <h3 className="mt-4 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              Dhaka &amp; Across Bangladesh
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              We build strategies for businesses operating in Dhaka and across Bangladesh, with planning that
              considers local audiences, available resources, competitive conditions, and realistic production
              capacity.
            </p>
          </article>

          <article className="flex flex-col bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              International Markets
            </span>
            <h3 className="mt-4 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              Multi-Market Strategy Support
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              We also support businesses targeting markets such as:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {markets.map((market) => (
                <li
                  key={market}
                  className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {market}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <p className="mt-8 max-w-4xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          For multi-market businesses, the strategy can account for market-specific audiences, search behavior,
          content requirements, and competitive differences.
        </p>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            A single plan applied to every market usually fails, so market differences are planned for explicitly
            rather than assumed away.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="outline">
              Discuss Your Market &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
