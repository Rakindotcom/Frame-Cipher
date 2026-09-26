import { SectionIntro } from '../../../Kinetic'

const principles = [
  {
    title: 'Specific Problems and Context',
    text: '"Business growth was difficult" is too broad. A stronger case study explains what the customer was actually experiencing, what was limiting progress, and why a change was needed.',
  },
  {
    title: 'Real Process, Not Just a Result',
    text: 'A case study that jumps from problem to result leaves an important question unanswered: what actually happened in between? We explain the relevant work, decisions, implementation, and process without turning the case study into an unnecessary technical report.',
  },
  {
    title: 'Verified Metrics and Evidence',
    text: 'A number needs context. We identify what was measured, what period the result covers, and how the result relates to the work whenever that information is available. We do not manufacture statistics to make a story appear stronger.',
  },
  {
    title: 'Direct Customer Quotes',
    text: 'Real customer language can reveal details that polished marketing copy often removes. We preserve useful customer perspective while editing for clarity and readability.',
  },
  {
    title: 'Honest Scope and Attribution',
    text: 'A case study should document what the engagement contributed. It should not imply that one project caused every positive change a company experienced. We keep the story specific to the available evidence and the agreed scope.',
  },
]

export default function Credibility() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Credibility standard" title="What Makes a Case Study Credible">
          Good case studies are not credible because they use polished language. They are credible because the
          story contains enough specific evidence for the reader to understand what happened.
        </SectionIntro>

        <ul className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {principles.map((item) => (
            <li key={item.title} className="flex flex-col bg-frame-bg p-7 md:p-8">
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
