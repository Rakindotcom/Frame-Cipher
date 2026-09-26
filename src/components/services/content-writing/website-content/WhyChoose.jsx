import { SectionIntro, PosterButton } from '../../../Kinetic'

const reasons = [
  {
    number: '01',
    title: 'One In-House Team',
    body: 'Framecipher brings content, SEO, website design, development, and digital marketing capabilities together within one in-house team. That can make website content projects easier to coordinate when the copy also needs to work with page structure, SEO, design, or development.',
  },
  {
    number: '02',
    title: 'Strategy Before Writing',
    body: 'We do not begin by filling blank pages with paragraphs. We first determine what the business offers, who the page is for, what the page needs to accomplish, what information matters most, and what the visitor should do next.',
  },
  {
    number: '03',
    title: 'Copy, SEO, Design & Development Can Work Together',
    body: 'Website content does not exist separately from the website. Page hierarchy, navigation, design, internal links, CTAs, and implementation can all affect how the copy is experienced. Our wider in-house capabilities allow these areas to be coordinated when required.',
  },
  {
    number: '04',
    title: 'Brand Voice Consistency',
    body: 'We consider the website as a connected system rather than a collection of independent pages. That helps maintain consistent terminology, tone, positioning, and messaging across the site.',
  },
  {
    number: '05',
    title: 'Human Review & Client Collaboration',
    body: 'Your business contains information that may not be available through public research. We use client-provided information, internal documentation, expert input, product details, customer questions, and other relevant materials where available. This helps the final copy become more specific to the actual business.',
  },
  {
    number: '06',
    title: 'Bangladesh & International Market Experience',
    body: 'Framecipher is based in Dhaka and supports businesses across Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. Where relevant, website content can be adapted to local terminology, audience expectations, market context, and language requirements.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Why Framecipher"
          title="Why Choose Framecipher for Website Content Writing"
        >
          Website content works better when the messaging, the copy, and the surrounding web work are handled
          by the same team.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.number} className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {reason.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {reason.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {reason.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            A free content consultation can be requested before a larger engagement so you can evaluate the
            approach and fit.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Talk to Our Content Team &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
