import { SectionIntro } from '../../../Kinetic'

const metrics = [
  'Impressions',
  'Clicks',
  'CTR',
  'CPM',
  'CPC',
  'Spend',
  'Conversions',
  'Conversion rate',
  'Cost per conversion',
]

const expectations = [
  {
    title: 'Ads Manager Metrics vs. Third-Party Analytics',
    body: 'OpenAI Ads Manager reports can differ from third-party analytics. Attribution windows, timestamps, consent settings, browser conditions, deduplication, campaign configuration, and modeled conversions can all affect reported totals. We report on the platform data and explain the differences instead of pretending the numbers are always identical.',
  },
  {
    title: 'A Channel That Can Still Change',
    body: 'ChatGPT Ads has changed quickly and still can. Features, eligibility, availability, and reporting can evolve with the platform as it matures. We track changes that affect your campaigns and tell you when a platform update changes how your setup should be structured.',
  },
  {
    title: 'Data Establishes Maturity',
    body: 'ChatGPT Ads is a young channel, and the starting dataset is often small. A controlled pilot test is the right way to begin, and scale follows evidence. We plan for measurement before we expect results, so the campaign learns from reliable data rather than guesses.',
  },
]

export default function Reporting() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Transparent tracking"
          title="Reporting & Performance Expectations"
        >
          Sharing the numbers is easy. Giving you numbers you can actually use to make decisions
          is a different kind of work. The ChatGPT Ads channel is still evolving. Reports should
          show what happened, what we changed, why, and what the next test should be.
        </SectionIntro>

        <div className="border-l-2 border-frame-accent bg-frame-bg p-6 md:p-7">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            You receive a monthly report covering campaign-level metrics including impressions,
            clicks, CTR, CPM, CPC, spend, conversions, and cost per conversion, plus ad-group
            analysis, creative testing results, and optimization notes. If you need more frequent
            reporting, dashboards, or additional analysis, we can discuss that as an optional
            add-on.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((item, index) => (
            <div key={index} className="flex items-center gap-3 border-2 border-frame-border bg-frame-bg p-4">
              <span className="font-mono text-xs font-black text-frame-accent">
                {String(index + 1).padStart(2, '0')}.
              </span>
              <span className="text-sm font-semibold text-frame-fg">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {expectations.map((item, index) => (
            <div key={index} className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Expectation 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}