import { SectionIntro } from '../../../Kinetic'

const paragraphs = [
  'Ecommerce SEO does not have a fixed ranking timeline. The time required depends on your catalog size, technical condition, competition, authority, content quality, implementation speed, and search demand. A typical engagement may follow this general timeline:',
  'Technical fixes can be completed relatively quickly. Organic ranking, traffic, and revenue changes usually take longer to develop.',
  'We track progress throughout the engagement rather than promising a specific ranking date.',
]

const drivers = [
  'Initial audit — Usually within the first week',
  'Small-store technical improvements — Often 2\u20134 weeks for initial implementation',
  'Large catalog technical work — Often 6\u201310 weeks or longer',
  'Ongoing SEO — Continuous optimization based on performance data',
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Realistic expectations" title="How Long Does Ecommerce SEO Take?">
          Timelines depend on scope, readiness, and review speed, so we set expectations rather
          than promising a fixed schedule.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Typical timings
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              What this looks like in practice
            </h3>
            <ul className="mt-6 space-y-2.5">
              {drivers.map((factor, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 border-b border-frame-border/60 pb-2.5 text-sm font-semibold text-frame-fg"
                >
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