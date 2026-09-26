import { SectionIntro, PosterButton } from '../../../Kinetic'

const bangladesh = [
  'Dhaka',
  'Chattogram',
  'Sylhet',
  'Gazipur',
  'Narayanganj',
  'Rajshahi',
  'Khulna',
  'Other locations across Bangladesh',
]

const international = [
  'United States',
  'United Kingdom',
  'Australia',
  'Canada',
  'United Arab Emirates',
  'Other locations across the world',
]

const capabilities = [
  'Market-specific audience research',
  'Content planning',
  'Search optimization',
  'Positioning',
  'Conversion strategy',
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Coverage" title="YouTube Management Service Areas">
          Framecipher provides YouTube management for businesses in Bangladesh and international markets.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              YouTube Management in Bangladesh
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
              Local Market Context, Applied Properly
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {bangladesh.map((city) => (
                <li
                  key={city}
                  className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg">
              Our Bangladesh-focused strategies can account for local audiences, customer behavior,
              language, market conditions, and business objectives.
            </p>
          </div>

          <div className="bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              International YouTube Management
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
              Channels Built For Other Markets
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {international.map((market) => (
                <li
                  key={market}
                  className="border border-frame-accent/50 bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {market}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-medium leading-relaxed text-frame-fg/90">
              International YouTube management can include market-specific audience research, content
              planning, search optimization, positioning, and conversion strategy.
            </p>
          </div>
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-bg p-7 md:p-8">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            What international scope can include
          </span>
          <ul className="mt-4 flex flex-wrap gap-2">
            {capabilities.map((item) => (
              <li
                key={item}
                className="border border-frame-accent/50 bg-frame-accent/5 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-6 border-t-2 border-frame-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              If your market is not listed, ask. International channel strategies can be adapted around
              the target audience rather than reusing a Bangladesh-focused approach.
            </p>
            <div className="shrink-0">
              <PosterButton href="/contact" variant="outline">
                Get a Free Consultation &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
