import { SectionIntro, PosterButton } from '../../../Kinetic'

const reasons = [
  {
    number: '01',
    title: 'One In-House Team',
    body: 'Content, SEO, website, and digital marketing work can be coordinated through one in-house team. This reduces the need to manage separate providers when a content project also involves SEO strategy, website implementation, or broader digital marketing work.',
  },
  {
    number: '02',
    title: 'SEO and Content Work Together',
    body: 'Our writers do not have to work completely separately from the SEO requirements of the website. Research, content structure, internal linking, search intent, and wider site architecture can be considered together.',
  },
  {
    number: '03',
    title: 'Strategy Before Writing',
    body: 'We do not treat every article as a fixed word-count assignment. We first determine what the content needs to accomplish, who it is for, what search it should address, and where it fits within the wider website.',
  },
  {
    number: '04',
    title: 'Human Review',
    body: 'Content is reviewed for clarity, structure, relevance, brand voice, and alignment with the agreed brief before final delivery. Where specialist knowledge is required, client input and subject-matter expertise can be incorporated rather than relying on unsupported assumptions.',
  },
  {
    number: '05',
    title: 'Content Refresh Support',
    body: 'Publishing is not necessarily the end of the content lifecycle. We can review existing content and recommend updates when information, search intent, competition, or business priorities change.',
  },
  {
    number: '06',
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Dhaka and supports businesses across Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. Where relevant, research can consider local terminology, audience expectations, language, and market-specific search behavior.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Why Framecipher"
          title="Why Choose Framecipher for SEO &amp; Blog Writing"
        >
          SEO content works better when the research, the writing, and the on-page requirements are handled by
          the same team.
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
            A free content sample can be requested before a larger engagement so you can evaluate the writing
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
