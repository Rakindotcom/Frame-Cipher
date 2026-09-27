import { SectionIntro } from '../../Kinetic'
import { resolveFaqs } from '../../../lib/seo/faq'

const fallbackFaqs = [
  {
    q: 'What are content writing services?',
    a: 'Content writing services involve researching, planning, writing, editing, and delivering written content for business and marketing purposes.\n\nDepending on the project, this can include SEO blogs, website pages, landing pages, product descriptions, sales copy, emails, case studies, and content strategy.',
  },
  {
    q: 'What types of content does Framecipher write?',
    a: 'We provide SEO and blog writing, website content writing, landing page copywriting, product description writing, sales copywriting, email copywriting, case study writing, content rewriting, and content strategy support.',
  },
  {
    q: 'What is SEO content writing?',
    a: 'SEO content writing is content created around relevant search intent and topics, with appropriate structure, useful information, natural keyword usage, internal linking opportunities, and other on-page considerations where included in the scope.\n\nThe goal is to make the content useful for readers while supporting relevant search visibility.',
  },
  {
    q: 'Is content writing the same as copywriting?',
    a: 'No.\n\nContent writing is often focused on informing, educating, and building useful information. Copywriting is generally more focused on persuasion and action.\n\nMany businesses need both.',
  },
  {
    q: 'Can you match our existing brand voice?',
    a: 'Yes.\n\nWe can review your existing website, content examples, brand guidelines, terminology, and feedback to develop content that fits your established voice.',
  },
  {
    q: 'Can you rewrite our existing website content?',
    a: 'Yes. We can review and rewrite outdated, unclear, thin, repetitive, or poorly structured content based on the agreed project scope.',
  },
  {
    q: 'Can you write product descriptions for a large ecommerce catalog?',
    a: 'Yes.\n\nFor larger catalogs, we can establish a consistent structure and writing direction before producing descriptions at scale.\n\nThe final scope depends on product volume, available product information, research requirements, and catalog complexity.',
  },
  {
    q: 'Do you provide Bangla content?',
    a: 'Yes, where included in the project scope.\n\nWe can support Bangla, English, or bilingual content depending on the intended audience and communication requirements.',
  },
  {
    q: 'How much does content writing cost in Bangladesh?',
    a: 'There is no single price for every type of content.\n\nCost depends on content format, length, research depth, subject complexity, SEO requirements, number of pieces, revision scope, and turnaround time.\n\nOur starting packages provide a reference point, while the final quote is based on the actual project.',
  },
  {
    q: 'Can you handle one-time content projects?',
    a: 'Yes.\n\nWe work with businesses that need individual pieces as well as businesses that require ongoing monthly content support.',
  },
  {
    q: 'Can you provide ongoing monthly content writing?',
    a: 'Yes. Monthly engagements can cover an agreed mix of blog posts, website content, product content, landing pages, case studies, or other approved formats.',
  },
  {
    q: 'Do you provide content strategy as well?',
    a: 'Yes. Content strategy can be included when the project requires topic prioritization, content planning, content audits, keyword mapping, editorial calendars, or a broader content roadmap.',
  },
  {
    q: 'Do you provide SEO keyword research?',
    a: 'Yes, when SEO research is included in the agreed scope.\n\nFor SEO-focused projects, keyword and topic research can inform search intent, content structure, and topic prioritization.',
  },
  {
    q: 'Do you guarantee Google rankings?',
    a: 'No.\n\nNo responsible content provider can guarantee a specific Google ranking from writing alone.\n\nWe focus on creating useful, well-structured content aligned with the agreed search and business objectives.',
  },
  {
    q: 'Do you serve businesses outside Bangladesh?',
    a: 'Yes. Framecipher supports businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
  {
    q: 'How do I get started?',
    a: 'Tell us what type of content you need, your business and audience, the approximate volume, target market, and deadline.\n\nWe can then recommend the appropriate scope and provide a project estimate.',
  },
]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, fallbackFaqs)
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct answers"
          title="Frequently Asked Questions About Content Writing Services"
        >
          Straight answers about content types, SEO writing, brand voice, Bangla content, pricing, keyword
          research, and what writing alone can and cannot deliver.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-2 border-frame-border bg-frame-bg transition-colors open:border-frame-accent"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-heading text-base font-bold uppercase leading-snug tracking-tight text-frame-fg marker:content-none md:text-lg">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6">
                {faq.a.split('\n\n').map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className={`text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base ${
                      pIdx > 0 ? 'mt-4' : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
