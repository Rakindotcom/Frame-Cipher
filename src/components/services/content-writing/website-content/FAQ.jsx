import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    q: 'What is website content writing?',
    a: 'Website content writing is the process of creating the written content used across a business website, including homepage, About, service, product, landing, location, and other important pages.\n\nThe content is written to explain the business, communicate value, build appropriate trust, support the visitor\u2019s decision-making process, and guide them toward relevant actions.',
  },
  {
    q: 'What pages do you write?',
    a: 'Our core website content services include:\n\nHomepage\nAbout page\nService pages\nProduct and category pages\nLanding pages\nPricing pages\nLocation pages\nFAQ pages\nPortfolio and case study pages\nTeam and founder bios\nOther supporting website pages\n\nThe exact scope depends on the project.',
  },
  {
    q: 'How is website content writing different from SEO blog writing?',
    a: 'Website content focuses primarily on the core pages that explain your business, services, products, positioning, and customer journey. SEO blog content is generally designed around search-driven informational or commercial topics and can support broader organic visibility and topical coverage. Both can be search-aware, but their page purposes are different.',
  },
  {
    q: 'Can you rewrite only our homepage?',
    a: 'Yes. You do not need to order a complete website rewrite if only one page needs improvement. We can work on individual pages such as your homepage, About page, service page, pricing page, or another agreed page.',
  },
  {
    q: 'Can you rewrite our entire website?',
    a: 'Yes. For larger projects, we can plan the website page by page and establish a consistent messaging and voice framework before drafting the full set of content.',
  },
  {
    q: 'Can you write website content for a new business?',
    a: 'Yes. For a new website, we can help establish the core messaging, value proposition, page hierarchy, brand voice, and website copy from the beginning.',
  },
  {
    q: 'Can you match our existing brand voice?',
    a: 'Yes. We review existing brand materials and communication where available, then use those references to develop or refine the voice for the website. Client feedback during revision also helps ensure the final copy feels appropriate to the business.',
  },
  {
    q: 'Can website content be SEO-friendly?',
    a: 'Yes. Website content can be written with search visibility in mind through clear page structure, relevant terminology, appropriate headings, useful internal links, and other SEO fundamentals. The priority remains useful content that serves the page\u2019s audience and purpose rather than forcing keywords into the copy.',
  },
  {
    q: 'Do you provide SEO titles and meta descriptions?',
    a: 'They can be included depending on the selected project scope. We can provide SEO-aware title and meta description recommendations alongside the page content when required.',
  },
  {
    q: 'Do you provide internal-link recommendations?',
    a: 'Yes, where included in the project scope. We can identify relevant pages that should be connected and recommend natural, descriptive anchor text.',
  },
  {
    q: 'Can you write content in Bangla?',
    a: 'Yes. We can support English, Bangla, or bilingual website content depending on the project and target audience.',
  },
  {
    q: 'Can you write website content for international audiences?',
    a: 'Yes. Framecipher supports businesses targeting Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. The content can be adapted to the intended market rather than directly translating one market\u2019s copy into another.',
  },
  {
    q: 'Will new website content require a redesign?',
    a: 'Not necessarily. Good copy can often be implemented into an existing website structure. However, if the current page layout or information architecture makes the content difficult to use effectively, we can identify that during the project and recommend an appropriate solution.',
  },
  {
    q: 'How many revisions are included?',
    a: 'The revision scope depends on the selected package. We define the revision process before the project begins so both sides understand what is included.',
  },
  {
    q: 'Do you guarantee more leads or conversions?',
    a: 'No. We can create clearer, more persuasive, audience-focused website content, but conversion performance also depends on factors such as design, offer, pricing, traffic, UX, competition, and market demand.',
  },
  {
    q: 'Can you update existing website content instead of rewriting it?',
    a: 'Yes. If the existing copy has a good foundation, a targeted refresh may be more appropriate than a complete rewrite. We can assess the existing pages and recommend the appropriate approach.',
  },
  {
    q: 'Can you provide a website content sample?',
    a: 'Yes, where an appropriate sample is available. You can also discuss your website, target audience, and content requirements with our team to determine what type of writing project would be appropriate.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Direct answers" title="Frequently Asked Questions">
          Straight answers about pages, rewrites, brand voice, SEO titles, internal links, Bangla support,
          revisions, redesigns, and what content alone cannot guarantee.
        </SectionIntro>

        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-2 border-frame-border bg-frame-muted/10 transition-colors open:border-frame-accent"
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
              <div className="border-t-2 border-frame-border bg-frame-bg p-6">
                {faq.a.split('\n\n').map((block, blockIdx) => {
                  const lines = block.split('\n')
                  if (lines.length > 1) {
                    return (
                      <ul key={blockIdx} className="space-y-2">
                        {lines.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 text-sm font-medium leading-relaxed text-frame-fg md:text-base"
                          >
                            <span aria-hidden="true" className="mt-1 text-frame-accent">
                              &bull;
                            </span>
                            {line}
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <p
                      key={blockIdx}
                      className={`text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base ${
                        blockIdx > 0 ? 'mt-4' : ''
                      }`}
                    >
                      {lines[0]}
                    </p>
                  )
                })}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
