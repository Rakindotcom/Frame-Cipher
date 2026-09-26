import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'Strategy Before Writing',
    text: 'We do not start with random headlines. We first understand the offer, audience, traffic source, and desired action.',
  },
  {
    title: 'One In-House Team',
    text: 'Content can work alongside paid advertising, SEO, design, development, and other digital services within the same team.',
  },
  {
    title: 'Copy and Paid Media Can Work Together',
    text: 'When the same campaign strategy informs both the ad and the landing page, message consistency becomes easier to maintain.',
  },
  {
    title: 'Copy, SEO, Design &amp; Development Can Work Together',
    text: 'Your copy can be prepared with the final page experience in mind rather than being delivered as disconnected text.',
  },
  {
    title: 'Human Review &amp; Collaboration',
    text: 'Every project goes through review for clarity, accuracy, consistency, structure, and alignment with the agreed brief.',
  },
  {
    title: 'Bangladesh &amp; International Market Experience',
    text: 'We write for businesses targeting Bangladesh as well as international markets such as the US, UK, Australia, Canada, and UAE.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Why Framecipher" title="Why Choose Framecipher">
          Landing page copy is a marketing investment, not a writing task. It should be connected to the
          campaign, the offer, and the design.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <h3
                className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg"
                dangerouslySetInnerHTML={{ __html: reason.title }}
              />
              <p
                className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg"
                dangerouslySetInnerHTML={{ __html: reason.text }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
