import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is on-page SEO?',
    answer: 'On-page SEO covers the elements of a page that help it match the query it targets: content, headings, metadata, internal links, image optimization, structure, and page-level relevance. It is how a page earns and communicates its relevance for a specific search intent.',
  },
  {
    question: 'How is on-page SEO different from technical SEO?',
    answer: 'On-page SEO addresses content, metadata, structure, and relevance on individual pages, what is written and how it is organized. Technical SEO addresses site-wide infrastructure such as crawlability, indexation, and performance. Both affect rankings, and a technical problem can undermine even strong on-page work.',
  },
  {
    question: 'Do you write new content or only optimize what is already there?',
    answer: 'Both. Depending on the page, we either refine existing content or write new content where a genuine gap exists between what a page currently covers and what the search intent actually requires.',
  },
  {
    question: 'How do you decide what search intent a page should target?',
    answer: 'We look at what is currently ranking for the query and what the search results signal about the searcher\u2019s goal: a comparison, a how-to, a product page, or a service inquiry. The page is then structured to serve that intent.',
  },
  {
    question: 'What is keyword cannibalization?',
    answer: 'Keyword cannibalization happens when multiple pages of the same site target the same or overlapping queries. Search engines may struggle to choose which page deserves visibility, splitting authority and weakening all of them. We map keywords to pages and reduce that internal competition.',
  },
  {
    question: 'Do you optimize images as part of on-page SEO?',
    answer: 'Yes. We optimize alt text, filenames, compression, and placement so images support both the page\u2019s relevance and its loading performance.',
  },
  {
    question: 'Do you optimize ecommerce product pages the same way as other pages?',
    answer: 'The principles are similar, but product and category pages have specific considerations: transactional intent, buyer questions, supporting content, and internal links to the parts of the store that matter most. We adapt the approach to the page type.',
  },
  {
    question: 'Will on-page SEO alone get my pages to rank?',
    answer: 'For lower-competition terms, strong on-page work can be enough. For more competitive terms, on-page SEO is necessary but usually needs to combine with technical SEO and link building to compete for visibility.',
  },
  {
    question: 'Do you provide internal linking optimization?',
    answer: 'Yes. We add contextual internal links between related pages, connect supporting content to your most important pages, and improve the way authority flows across your site.',
  },
  {
    question: 'How do you measure the performance of on-page changes?',
    answer: 'We track rankings, impressions, clicks, and click-through rate for the target queries, along with how the page engages visitors, using Search Console and analytics data before and after changes.',
  },
  {
    question: 'How long does it take to see results from on-page SEO?',
    answer: 'Lower-competition terms can respond within a few weeks of receiving search engines re-crawling a page. More competitive keywords typically take longer regardless of how well the page is optimized.',
  },
  {
    question: 'Do you provide ongoing on-page SEO?',
    answer: 'Yes. Ongoing on-page optimization keeps important pages aligned as search intent, competitor content, and ranking performance change over time, with regular reviews and prioritized updates each month.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct answers"
          title="Frequently Asked Questions"
        >
          Common questions about on-page SEO, content, internal linking, timelines, and
          engagement models.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-muted/10 open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg marker:content-none">
                <span>{faq.question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}