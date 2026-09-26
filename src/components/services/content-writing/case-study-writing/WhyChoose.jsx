import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'Research Before Writing',
    text: 'We do not start by filling a template. We start by understanding the customer, the problem, the engagement, and the available evidence.',
  },
  {
    title: 'One In-House Team',
    text: 'Research, interviews, writing, editing, and coordination stay within one team. That keeps the story consistent from the first interview through final delivery.',
  },
  {
    title: 'Data-First Storytelling',
    text: 'Good storytelling does not require exaggeration. We use real metrics, customer language, project details, and relevant context to make the story compelling.',
  },
  {
    title: 'Bangladesh & International Experience',
    text: 'Framecipher is based in Dhaka and works with businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. We also account for communication preferences and interview coordination across different markets. For Bangladesh-based projects, interviews can be conducted in the language the customer is most comfortable using when appropriate.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Why Framecipher" title="Why Choose Framecipher for Case Study Writing">
          A case study’s entire job is credibility, and credibility comes from detail a marketing team could not
          simply invent.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
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
