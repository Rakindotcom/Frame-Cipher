import { SectionIntro, PosterButton } from '../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Discovery & Requirements',
    body: 'We first understand the business, audience, content purpose, target market, brand voice, publishing environment, references, deadlines, and required deliverables.',
  },
  {
    number: '02',
    title: 'Research & Content Brief',
    body: 'For research-heavy or SEO-focused content, we review the topic, search intent, relevant competitors, available business information, supporting evidence, and content requirements. The result is a clear direction for the writer.',
  },
  {
    number: '03',
    title: 'Drafting',
    body: 'The content is written around the approved direction and the specific job the piece needs to perform. We focus on clarity, usefulness, structure, tone, and natural flow.',
  },
  {
    number: '04',
    title: 'Editing & Quality Review',
    body: 'The draft is reviewed for structure, readability, consistency, factual issues that can be checked, SEO requirements where applicable, and alignment with the brief.',
  },
  {
    number: '05',
    title: 'Client Review & Revisions',
    body: 'You review the draft and provide feedback. We refine the content within the agreed revision scope before final approval.',
  },
  {
    number: '06',
    title: 'Final Delivery & Ongoing Support',
    body: 'The final content is delivered in the agreed format and can be prepared for website publishing, CMS entry, campaign use, or internal implementation depending on the project. Ongoing monthly support is available for businesses with recurring content requirements.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Engagement workflow"
          title="How Our Content Writing Process Works"
        >
          Our process changes slightly by content type, but the core workflow remains consistent.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="bg-frame-bg p-7 md:p-8">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {step.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {step.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Tell us what you want the content to accomplish, and we can help define the right writing scope.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Start Your Content Project &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
