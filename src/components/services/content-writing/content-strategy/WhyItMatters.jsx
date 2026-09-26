import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'Stop Publishing Without a Clear Purpose',
    text: 'When every topic is chosen independently, content can become a collection of disconnected pieces. A strategy gives each piece a defined role.',
  },
  {
    title: 'Build Topic Authority Instead of Random Coverage',
    text: 'Related content can be organized around meaningful pillars and supporting topics. This creates a more coherent body of knowledge than publishing unrelated articles whenever a new idea appears.',
  },
  {
    title: 'Reduce Content Overlap and Wasted Effort',
    text: 'Multiple pages targeting similar subjects can create unnecessary competition and dilute your production effort. An audit and topic architecture can identify those overlaps before you continue producing more of them.',
  },
  {
    title: 'Connect Content to the Buyer Journey',
    text: 'Not every visitor needs the same information. Some need education. Some are comparing solutions. Others are ready to evaluate a provider. A strategic content plan accounts for those different needs.',
  },
  {
    title: 'Make Existing Content Work Harder',
    text: 'New content is not always the first answer. Refreshing, expanding, consolidating, or repositioning existing content can sometimes make better use of the assets you already have.',
  },
]

export default function WhyItMatters() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The case for strategy" title="Why Your Business Needs a Content Strategy">
          Most content problems are not writing problems. They are prioritization problems.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="flex flex-col bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40"
            >
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{reason.text}</p>
            </article>
          ))}

          <article className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Net effect
              </span>
              <h3 className="mt-4 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                One System Instead of Many Decisions
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-fg">
                Every topic, format, and publishing slot gets evaluated against the same goals, which is what stops
                a content program from drifting into disconnected publishing.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
