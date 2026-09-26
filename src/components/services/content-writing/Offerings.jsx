import { SectionIntro, PosterButton } from '../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'SEO & Blog Writing',
    body: [
      'SEO blog content built around search intent, useful information, and clear structure.',
      'We research the topic, target queries, competing content, relevant entities, and the questions your audience is trying to answer before drafting. Where relevant, we also consider internal linking, on-page SEO, featured-answer opportunities, and content updates.',
    ],
    cta: 'Explore SEO & Blog Writing',
    note: 'The goal is not to insert keywords into an article. The goal is to create useful content that deserves to be discovered and read.',
  },
  {
    number: '02',
    title: 'Website Content Writing',
    body: [
      'Website copy for homepages, About pages, service pages, product pages, pricing pages, FAQ sections, and other important website content.',
      'We focus on clear messaging, brand positioning, audience needs, benefits, trust signals, objections, and the next action you want visitors to take.',
    ],
    extra: [
      'For new websites, content can be developed alongside design and development. For existing websites, we can rewrite pages that are unclear, outdated, thin, inconsistent, or no longer aligned with the business.',
    ],
    cta: 'Explore Website Content Writing',
  },
  {
    number: '03',
    title: 'Landing Page Copywriting',
    body: [
      'Landing page copy designed around one primary offer and one clear conversion goal.',
      'We develop headlines, subheadings, benefits, supporting proof, objections, FAQs, offer details, and calls to action based on the page\u2019s purpose.',
    ],
    extra: [
      'The copy can also be structured around the traffic source, such as Google Ads, Meta Ads, organic search, email campaigns, or direct traffic.',
    ],
    cta: 'Explore Landing Page Copywriting',
  },
  {
    number: '04',
    title: 'Product Description Writing',
    body: [
      'Product descriptions that help shoppers understand what a product is, why it matters, and whether it fits their needs.',
      'We focus on benefits, use cases, differentiators, specifications that matter, buying questions, and consistent brand voice across the catalog.',
    ],
    extra: [
      'For larger ecommerce catalogs, we can establish a content structure and writing guidelines first, then apply them consistently across products.',
    ],
    cta: 'Explore Product Description Writing',
  },
  {
    number: '05',
    title: 'Sales Copywriting',
    body: [
      'Persuasive copy for sales pages, proposals, comparison pages, promotional material, and other decision-stage content.',
      'We structure the message around the audience\u2019s needs, objections, benefits, proof, offer, and next action rather than simply listing features.',
    ],
    extra: [
      'Sales copy is designed to support the sales process. It does not replace product quality, offer strength, trust, or the rest of the customer journey.',
    ],
    cta: 'Explore Sales Copywriting',
  },
  {
    number: '06',
    title: 'Email Copywriting',
    body: [
      'Email copy for individual campaigns and ongoing sequences.',
      'This can include subject lines, welcome emails, nurture sequences, promotional campaigns, re-engagement emails, product announcements, and follow-up messages.',
    ],
    extra: [
      'The writing is structured for the specific audience, offer, stage of the customer journey, and desired action.',
    ],
    cta: 'Explore Email Copywriting',
  },
  {
    number: '07',
    title: 'Case Study Writing',
    body: [
      'Case studies that turn genuine client work into credible business stories.',
      'We structure the story around the original situation, challenge, approach, implementation, and outcome. Where verified data and client-approved quotes are available, they can be incorporated to make the story more specific and useful.',
    ],
    extra: [
      'A strong case study should show what changed and why the work mattered, not simply say that a client was satisfied.',
    ],
    cta: 'Explore Case Study Writing',
  },
  {
    number: '08',
    title: 'Content Rewriting & Refresh',
    body: [
      'Existing content does not always need to be replaced.',
      'We can review and improve outdated, thin, unclear, repetitive, poorly structured, or underperforming content.',
    ],
    extra: [
      'Depending on the project, this may include restructuring sections, improving search intent alignment, updating information, strengthening clarity, improving internal linking opportunities, refining CTAs, or rewriting the page around a clearer purpose.',
    ],
    cta: 'Request a Content Review',
  },
  {
    number: '09',
    title: 'Content Strategy & Planning',
    body: [
      'Content strategy provides the planning layer behind ongoing writing.',
      'We can help determine what should be written, which topics deserve priority, what audience each piece serves, how content supports business goals, and how individual pieces fit together.',
    ],
    extra: [
      'This can include content audits, topic prioritization, keyword mapping, content calendars, content clusters, and editorial planning.',
    ],
    cta: 'Discuss Your Content Strategy',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Capabilities &amp; scope" title="What Our Content Writing Services Include">
          From search-focused articles to conversion-focused copy, every deliverable is written around the job
          it needs to perform.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {block.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
                {block.extra &&
                  block.extra.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>

              {block.note && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {block.note}
                </p>
              )}

              <div className="mt-6">
                <PosterButton href="/contact">
                  {block.cta} &rarr;
                </PosterButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
