import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'One In-House Team',
    text: 'Strategy and execution can stay connected within one team. That means the strategy is developed with practical production constraints in mind rather than as a document that looks good but is difficult to execute.',
  },
  {
    title: 'Audit Before Planning',
    text: 'We do not start with a random list of blog topics. We first examine what exists, what is working, what is missing, and what deserves attention.',
  },
  {
    title: 'Strategy Connected to Execution',
    text: 'Our content strategy can connect directly with content writing, SEO, website content, landing pages, case studies, email content, and other content services. This helps reduce the gap between strategic planning and actual production.',
  },
  {
    title: 'Bangladesh & International Market Experience',
    text: 'Framecipher is based in Dhaka and works with businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. The strategy can account for different markets, audiences, competitive environments, and available resources.',
  },
  {
    title: 'Strategy Built Around Real Business Constraints',
    text: 'A strategy is only useful when it can be executed. We consider your team capacity, production resources, approval process, business priorities, and publishing requirements when building the plan.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Why Framecipher" title="Why Choose Framecipher for Content Strategy">
          A strategy is only worth building if it can be executed by a real team with real constraints.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40"
            >
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {reason.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
