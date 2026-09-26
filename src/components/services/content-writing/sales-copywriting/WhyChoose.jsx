import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'Strategy Before Writing',
    text: 'We define the argument before trying to make individual sentences persuasive.',
  },
  {
    title: 'One In-House Team',
    text: 'Strategy, content, design, development, and marketing capabilities can work together when the project requires more than copy alone.',
  },
  {
    title: 'Buyer-Focused Messaging',
    text: "The copy is built around the buyer's situation, questions, objections, and decision criteria.",
  },
  {
    title: 'Proof Before Hype',
    text: 'Real evidence is more useful than adjectives. We work with the proof you can actually support.',
  },
  {
    title: 'Format-Specific Execution',
    text: 'A sales page should not read like a proposal. A pitch deck should not read like a blog post. A VSL script should not sound like website copy. We adapt the underlying argument to the format.',
  },
  {
    title: 'Bangladesh & International Experience',
    text: 'We work with businesses in Bangladesh and clients across international markets, adapting language and buying context rather than treating every audience identically.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Why Framecipher" title="Why Choose Framecipher">
          Sales copy is easier to trust when the argument, the evidence, and the format are all handled
          deliberately.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
