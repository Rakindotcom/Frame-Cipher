import { SectionIntro } from '../../Kinetic'

const jobs = [
  {
    number: '01',
    title: 'Writing to Be Found',
    body: 'SEO and blog content needs to address the searcher\u2019s actual intent while providing useful, well-structured information. The objective is to create content that can compete for relevant search visibility while remaining valuable to the person who lands on the page.',
  },
  {
    number: '02',
    title: 'Writing to Explain',
    body: 'Website and product content needs to make important information easy to understand. Visitors should be able to identify what you offer, who it is for, why it matters, and what they can do next without working through unnecessary complexity.',
  },
  {
    number: '03',
    title: 'Writing to Persuade',
    body: 'Landing pages, sales pages, and email campaigns are designed around action. The copy needs to connect the offer with the audience\u2019s needs, address relevant objections, establish trust, and make the next step clear.',
  },
  {
    number: '04',
    title: 'Writing to Prove',
    body: 'Case studies and customer-focused content need evidence. Specific problems, real processes, verified outcomes, and approved customer statements are more useful than vague claims about being the best.',
  },
  {
    number: '05',
    title: 'Writing to Support Action',
    body: 'Some content exists to move the reader into the next stage of the customer journey. That could mean reading another article, viewing a product, requesting a quote, booking a consultation, downloading a resource, or contacting your team. The CTA should match the reader\u2019s context rather than being added as an afterthought.',
  },
]

export default function ContentJobs() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Different content, different jobs"
          title="Different Content Has Different Jobs"
        >
          Treating every piece of writing the same way creates predictable problems. A blog should not read
          like a sales page. A product description should not become a long editorial. A landing page should
          not bury its offer under unnecessary information.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <article key={job.number} className="bg-frame-bg p-7 md:p-8">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {job.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {job.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {job.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
