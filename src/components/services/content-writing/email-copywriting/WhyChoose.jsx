import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'Strategy Before Writing',
    text: 'We define the purpose of the email or sequence before drafting individual messages.',
  },
  {
    title: 'We Think in Sequences, Not Single Sends',
    text: 'Welcome, nurture, launch, and win-back campaigns are structured as connected journeys.',
  },
  {
    title: 'Inbox-Aware Writing',
    text: 'Subject lines, preview text, openings, and message length are considered together rather than treating the subject line as an afterthought.',
  },
  {
    title: 'Buyer-Focused Messaging',
    text: 'The copy is built around what the recipient needs to understand, believe, or do next.',
  },
  {
    title: 'Proof Before Hype',
    text: 'We work with real customer evidence, product information, and verified claims rather than invented results.',
  },
  {
    title: 'One In-House Team',
    text: 'When email copy connects with landing pages, website content, paid campaigns, or broader content strategy, our in-house capabilities can help keep the messaging consistent across the project.',
  },
  {
    title: 'Bangladesh & International Experience',
    text: 'We write for businesses in Bangladesh and clients targeting international markets, adapting language, tone, and audience context rather than relying on direct translation.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Why Framecipher" title="Why Choose Framecipher">
          Email copy is easier to trust when the strategy, the evidence, and the inbox context are all handled
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
