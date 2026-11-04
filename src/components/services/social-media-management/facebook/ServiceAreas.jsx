import { PosterButton } from '../../../Kinetic'

const bangladeshFocus = [
  'Bangla communication',
  'English communication',
  'Bangla-English content where appropriate',
  'Local customer behavior',
  'Local offers and campaigns',
  'Local business information',
  'Messenger-led customer inquiries',
  'Community engagement',
  'Local audience considerations',
]

const bdCities = ['Dhaka', 'Chattogram', 'Sylhet', 'Khulna', 'Rajshahi', 'Barishal', 'Rangpur', 'Mymensingh', 'Cumilla']

const globalMarkets = [
  { region: 'United States', cities: 'New York, Los Angeles, Chicago, Houston, Miami' },
  { region: 'United Kingdom', cities: 'London, Manchester, Birmingham, Leeds' },
  { region: 'Australia', cities: 'Sydney, Melbourne, Brisbane, Perth' },
  { region: 'Canada', cities: 'Toronto, Vancouver, Montreal, Calgary' },
  { region: 'United Arab Emirates', cities: 'Dubai, Abu Dhabi, Sharjah' },
]

export default function ServiceAreas() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            Service Areas
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Facebook Management Service Areas
          </h2>
          <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Facebook management adapts to the platform&rsquo;s rules, your audience, and your market. We
            support businesses both locally in Bangladesh and internationally.
          </p>
        </div>

        {/* 2-Column Market Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* Bangladesh Focus */}
          <div className=" rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 lg:col-span-6">
            <span className="font-mono text-xs font-semibold text-frame-accent">
              Local Presence
            </span>
            <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              Facebook Management in Bangladesh
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
              We manage Facebook Pages for businesses across Bangladesh. We adapt the strategy to your
              business rather than assuming every Bangladesh business needs the same content.
            </p>

            <div className="mt-6 border-t border-white/[0.08] pt-5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
                Bangladesh-Focused Approach
              </span>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {bangladeshFocus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                    <svg
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-white/[0.08] pt-5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
                Key Service Locations
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {bdCities.map((city) => (
                  <span
                    key={city}
                    className="rounded-lg rounded-xl border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs text-[#FAFAFA]"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* International Markets */}
          <div className=" rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 lg:col-span-6">
            <span className="font-mono text-xs font-semibold text-frame-accent">
              Global Support
            </span>
            <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              International Facebook Management
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
              We also support businesses targeting customers outside Bangladesh. Content and communication
              can be adapted to the target market while keeping your core brand standards consistent.
            </p>

            <div className="mt-6 space-y-3">
              {globalMarkets.map((market) => (
                <div
                  key={market.region}
                  className=" rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <h4 className="text-sm font-medium text-[#FAFAFA]">{market.region}</h4>
                  <p className="mt-1 text-xs text-[#A1A1AA]">{market.cities}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#09090B]/60 p-4">
              <p className="text-xs leading-relaxed text-[#A1A1AA]">
                We also support clients in other countries. If your business is outside the markets listed
                above, contact us and we will confirm whether we can support your market and timezone
                before any engagement begins.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="mb-14 max-w-3xl space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-frame-accent">
              Market-Specific Strategy
            </span>
            <p className="mt-2 text-base leading-relaxed text-[#FAFAFA] sm:text-lg">
              Whether you are engaging customers in Dhaka or targeting buyers in North America and
              Europe, we tailor voice, timings, and messaging to match.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <PosterButton href="/contact">Discuss Your Target Market</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
