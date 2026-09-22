import { SectionIntro } from '../../../Kinetic'

const metrics = [
  'Impressions',
  'Pin clicks',
  'Outbound clicks',
  'CTR',
  'CPC',
  'Spend',
  'Saves',
  'Conversions',
  'Conversion rate',
  'CPA',
  'ROAS',
  'Product performance',
  'Audience performance',
  'Creative performance',
  'Key observations',
  'Optimization actions',
]

const interpretations = [
  {
    title: 'CTR Alone Is Not Profitability',
    body: 'A higher CTR does not automatically mean stronger profitability. It can reflect interesting creative, curiosity, or misalignment. The question is whether the click produces the intended conversion at an acceptable cost.',
  },
  {
    title: 'CPC Alone Is Not Traffic Quality',
    body: 'A lower CPC does not automatically mean better traffic quality. Cheap clicks that do not convert are still wasted spend. The relationship between what the click costs and what it produces matters more than the click price itself.',
  },
  {
    title: 'ROAS Alone Is Not Scale',
    body: 'A higher ROAS does not automatically mean the campaign should scale if the total revenue opportunity is limited. We evaluate results against the objective, the market, and the realistic ceiling before recommending growth.',
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
          Reporting should explain performance, not simply list numbers.
        </SectionIntro>

        <div className="border-l-2 border-frame-accent bg-frame-bg p-6 md:p-7">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Depending on the campaign objective, reports can include the metrics below. Pinterest
            reporting varies according to the campaign objective, bidding strategy, and
            measurement setup. Performance+ campaigns also provide breakdowns across dimensions
            such as ad group, geography, placement, device, and audience lists in supported cases.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
          {interpretations.map((item, index) => (
            <div key={index} className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Context 0{index + 1}
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

        <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            We interpret the numbers in a business context. What changed, what was tested, what
            the data suggests, and what should happen next are the questions every report should
            answer.
          </p>
        </div>
      </div>
    </section>
  )
}