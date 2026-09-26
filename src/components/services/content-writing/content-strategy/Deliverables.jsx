import { SectionIntro } from '../../../Kinetic'

const deliverables = [
  {
    title: 'Content Audit & Opportunity Map',
    text: 'A structured assessment of your existing content, performance, gaps, overlaps, and improvement opportunities.',
  },
  {
    title: 'Audience & Intent Framework',
    text: 'Audience segments, buyer needs, search intent, questions, objections, and journey-stage requirements.',
  },
  {
    title: 'Competitive Content Gap Analysis',
    text: 'A view of important topics, formats, and opportunities across your competitive content environment.',
  },
  {
    title: 'Topic Cluster & Internal Linking Map',
    text: 'Pillar topics, supporting clusters, page relationships, and internal-linking opportunities.',
  },
  {
    title: 'Priority Content Roadmap',
    text: 'A ranked production and optimization plan showing what should happen first.',
  },
  {
    title: 'Production-Ready Content Briefs',
    text: 'Clear instructions for priority content so writers and subject-matter experts can execute the strategy consistently.',
  },
  {
    title: 'Editorial Calendar',
    text: 'A realistic publishing schedule based on priorities, capacity, campaigns, and content requirements.',
  },
  {
    title: 'Measurement Framework',
    text: 'Relevant KPIs and review points that help determine whether the strategy is working and where it should change.',
  },
]

export default function Deliverables() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Deliverables" title="What You Receive From Framecipher">
          The exact deliverables depend on your business, content library, market, and strategy scope. A typical
          engagement can include:
        </SectionIntro>

        <ul className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {deliverables.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3 bg-frame-bg p-7 transition-colors duration-200 hover:bg-frame-muted/40 md:p-8"
            >
              <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-frame-accent">
                ✓
              </span>
              <div>
                <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
