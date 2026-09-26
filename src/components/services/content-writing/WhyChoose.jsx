import { SectionIntro, PosterButton } from '../../Kinetic'

const reasons = [
  {
    number: '01',
    title: 'One In-House Team',
    body: 'Content is handled by an in-house team rather than being passed between an unknown chain of external writers. This makes coordination easier when a project also involves SEO, website design, development, paid advertising, or other marketing work.',
  },
  {
    number: '02',
    title: 'Content Connected to SEO, Design & Development',
    body: 'A service page should make sense with its design. An SEO article should fit the site\u2019s information architecture. A landing page should work with the campaign sending traffic to it. Because Framecipher also works across SEO, websites, advertising, and digital marketing, content can be developed with those surrounding requirements in mind.',
  },
  {
    number: '03',
    title: 'Strategy Before Writing',
    body: 'We do not start every project by asking, \u201cHow many words do you need?\u201d We first ask what the content needs to accomplish, who it needs to reach, and where it fits within the wider customer journey.',
  },
  {
    number: '04',
    title: 'Brand Voice Consistency',
    body: 'Your website should not sound like five different writers produced five different pages. We review existing content, references, brand guidelines, terminology, and feedback to keep the writing consistent across an engagement.',
  },
  {
    number: '05',
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Dhaka and supports businesses in Bangladesh as well as international markets, including the US, UK, Australia, Canada, and UAE. Content is adapted to the intended audience rather than treating every market as identical.',
  },
  {
    number: '06',
    title: 'Human Review & Client Approval',
    body: 'Content goes through review before final delivery, and client feedback is incorporated within the agreed project scope. Where the subject requires specialist expertise or factual verification, we also rely on information and approvals provided by the client rather than inventing expertise or claims.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Why Framecipher"
          title="Why Choose Framecipher for Content Writing"
        >
          Content writing works better when the strategy, the writing, and the surrounding marketing work are
          handled by the same team.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.number} className="bg-frame-bg p-7 md:p-8">
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
            A free content sample can be requested before a larger engagement so you can evaluate the
            writing approach and fit.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Talk to Our Content Team &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
