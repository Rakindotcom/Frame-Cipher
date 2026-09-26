import { SectionIntro, PosterButton } from '../../../Kinetic'

const globalMarkets = [
  { region: 'United States', cities: 'New York, Los Angeles, Chicago, Houston, Miami' },
  { region: 'United Kingdom', cities: 'London, Manchester, Birmingham, Leeds' },
  { region: 'Australia', cities: 'Sydney, Melbourne, Brisbane, Perth' },
  { region: 'United Arab Emirates', cities: 'Dubai, Abu Dhabi, Sharjah' },
  { region: 'Canada', cities: 'Toronto, Vancouver, Montreal, Calgary' },
  { region: 'Europe', cities: 'Germany, France, Netherlands, Spain' },
]

const worldwideNote =
  'We also support clients in other countries. If your business is outside the markets listed above, contact us and we will confirm whether we can support your market and timezone before any engagement begins.'

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service areas"
          title="Local Facebook Management &amp; Global Support"
        >
          Facebook management adapts to the platform&rsquo;s rules, your audience, and your market. We
          support businesses both locally in Bangladesh and internationally.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <div className="border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Bangladesh
            </span>
            <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Dhaka &amp; Nationwide
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              We work with businesses across Bangladesh, including:
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {['Dhaka', 'Chattogram', 'Sylhet', 'Khulna', 'Rajshahi', 'Barishal', 'Rangpur', 'Mymensingh', 'Cumilla'].map(
                (city) => (
                  <li
                    key={city}
                    className="flex items-center gap-2 border-2 border-frame-border bg-frame-bg px-3 py-2 text-xs font-semibold text-frame-fg md:text-sm"
                  >
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    {city}
                  </li>
                )
              )}
            </ul>
            <p className="mt-5 border-t-2 border-frame-border/60 pt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              Content can be developed in Bangla or English depending on your audience and business
              needs.
            </p>
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              International
            </span>
            <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Global Support
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              We manage Facebook Pages for clients targeting international audiences across multiple
              regions.
            </p>

            <div className="mt-6 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2">
              {globalMarkets.map((market) => (
                <div key={market.region} className="bg-frame-bg p-5">
                  <h4 className="font-heading text-sm font-bold uppercase tracking-tight text-frame-fg md:text-base">
                    {market.region}
                  </h4>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg md:text-sm">
                    {market.cities}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              {worldwideNote}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Multi-location and multi-market businesses are supported through the Enterprise plan, where
            location-specific requirements are handled as part of one coordinated workflow.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Confirm Your Market &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
