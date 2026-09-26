import { SectionIntro, PosterButton } from '../../../Kinetic'

const markets = ['United States', 'United Kingdom', 'Australia', 'Canada', 'United Arab Emirates', 'Other markets']

export default function ServiceAreas() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Coverage" title="Service Areas">
          Framecipher provides case study writing services from Dhaka for businesses across Bangladesh and
          international clients in the US, UK, Australia, Canada, UAE, and other markets.
        </SectionIntro>

        <ul className="mt-10 flex flex-wrap gap-2 border-t-2 border-frame-border pt-8">
          {markets.map((market) => (
            <li
              key={market}
              className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
            >
              {market}
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            Our process can accommodate remote interviews, different time zones, and different communication
            preferences.
          </p>
          <p>
            For Bangladesh-based customers, interviews can also be conducted in the language the participant is most
            comfortable using when appropriate.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Interview scheduling and client communication norms vary by region, and coordination accounts for that
            instead of applying one market&rsquo;s process everywhere.
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
