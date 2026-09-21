import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'One In-House Team',
    body: 'Your international SEO strategy, technical SEO, content, and reporting are handled by one in-house team. Nothing is outsourced.',
    points: [
      'No middlemen',
      'No fragmented output',
      'Direct communication',
      'One accountable team',
    ],
  },
  {
    title: 'Technical + Market Strategy',
    body: 'Effective international SEO combines technical execution with market-level strategy. We do not treat simpler tasks as separate deliverables.',
    points: [
      'Real market research',
      'Country-specific search demand',
      'Hreflang and architecture',
      'Localization strategy',
    ],
  },
  {
    title: 'Structure Before Localization',
    body: 'We recommend a scalable international structure before adding large amounts of content for new countries and languages.',
    points: [
      'URL architecture',
      'Regional UX',
      'SEO-friendly structure',
      'Scalable framework',
    ],
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'Framecipher supports businesses expanding from Bangladesh while serving clients targeting multiple international markets.',
    points: [
      'Local experience',
      'Global marketing perspective',
      'International SEO design',
      'Practical expansion strategies',
    ],
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The Framecipher difference" title="Why Choose Framecipher for International SEO">
          International SEO works best when technical understanding and market awareness sit in the
          same team.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Reason 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {reason.body}
                </p>
                <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {reason.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}