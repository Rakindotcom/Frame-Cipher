import { SectionIntro } from '../../../Kinetic'

const timelineFactors = [
  'Website size and URL count',
  'CMS or development framework',
  'Number and complexity of technical issues',
  'Developer availability',
  'Migration requirements',
  'Server or hosting changes',
  'Approval and implementation speed',
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic expectations"
          title="How Long Does Technical SEO Take?"
        >
          Implementation time depends on the size and complexity of the website rather than one
          fixed schedule.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              A technical SEO audit can typically be completed within about one week once the
              required access and information are available.
            </p>
            <p>
              Implementation time depends on the size and complexity of the website. A standard
              technical project may take around 2–3 weeks, while larger technical cleanups can take
              4–6 weeks or longer.
            </p>
            <p className="border-l-2 border-frame-accent bg-frame-muted/10 p-4 md:p-5">
              Technical fixes can sometimes produce measurable changes within weeks, but there is
              no fixed timeline for ranking improvements.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Timeline drivers
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              The time required can depend on:
            </h3>
            <ul className="mt-6 space-y-2.5">
              {timelineFactors.map((factor, index) => (
                <li key={index} className="flex items-start gap-3 border-b border-frame-border/60 pb-2.5 text-sm font-semibold text-frame-fg">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}