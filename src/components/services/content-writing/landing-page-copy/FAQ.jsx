import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    q: 'What is landing page copywriting?',
    a: 'Landing page copywriting is the process of writing the messaging and content for a focused page built around a specific conversion goal.\n\nThat goal may be a purchase, lead, booking, registration, demo request, free trial, or another defined action.',
  },
  {
    q: 'What is the difference between landing page copy and website content?',
    a: 'Website content usually supports the broader website and can serve several purposes. Landing page copy is built around a specific campaign, audience, offer, traffic source, and primary conversion action.',
  },
  {
    q: 'Can you write landing page copy for Google Ads?',
    a: 'Yes. We can review the Google Ads campaign and align the landing page with the relevant search intent, ad messaging, offer, and conversion goal.',
  },
  {
    q: 'Can you write landing page copy for Meta Ads?',
    a: 'Yes. We can align the landing page with the campaign\u2019s audience, creative angle, offer, and CTA.',
  },
  {
    q: 'Can you write landing page copy for other paid advertising platforms?',
    a: 'Yes. Depending on the campaign, we can work with traffic from platforms such as LinkedIn Ads, TikTok Ads, and other campaign sources.',
  },
  {
    q: 'Do you write the landing page design too?',
    a: 'This service focuses on copywriting and content structure. If you need design and development, those services can be scoped separately through Framecipher\u2019s landing page development team.',
  },
  {
    q: 'Can you work with our existing landing page?',
    a: 'Yes. We can review an existing page and recommend a rewrite, restructure, or targeted copy improvements based on the project scope.',
  },
  {
    q: 'Can you rewrite only the headline and CTA?',
    a: 'Yes. Smaller copy projects can be scoped separately when you only need specific sections reviewed or rewritten.',
  },
  {
    q: 'Do you provide A/B test copy?',
    a: 'Yes. We can write alternative headlines, CTAs, sections, or other copy variations when structured testing is appropriate. The testing platform setup and statistical analysis can be handled separately depending on the project.',
  },
  {
    q: 'Do you guarantee higher conversions?',
    a: 'No. Copy can influence the conversion path, but performance also depends on the offer, traffic, targeting, pricing, trust, design, technical experience, and other factors.',
  },
  {
    q: 'Can you write landing pages for ecommerce products?',
    a: 'Yes. We can write campaign-focused landing pages for individual products, promotions, launches, seasonal campaigns, and other ecommerce offers.',
  },
  {
    q: 'Can you write landing pages for SaaS businesses?',
    a: 'Yes. We can develop copy for SaaS demos, free trials, product launches, feature campaigns, lead generation, and other conversion goals.',
  },
  {
    q: 'Can you write landing page copy in Bangla?',
    a: 'Yes. Bangla or Bangla-English landing page copy can be developed when the target audience and campaign require it.',
  },
  {
    q: 'Can you write landing page copy for international markets?',
    a: 'Yes. We work with businesses targeting Bangladesh and international markets including the US, UK, Australia, Canada, and UAE.',
  },
  {
    q: 'How many revisions are included?',
    a: 'The standard package includes one agreed revision round. Additional revisions or major changes to the approved strategy can be scoped separately.',
  },
  {
    q: 'What do you need before starting?',
    a: 'Useful materials include your offer details, target audience, traffic source, existing campaign copy, brand guidelines, pricing, customer objections, testimonials, and other relevant business information. If some materials are unavailable, we can identify the gaps during the discovery stage.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Direct answers" title="Frequently Asked Questions">
          Straight answers about message match, ad platforms, design, revisions, A/B tests, guarantees, and what
          landing page copy can and cannot deliver.
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
                {faq.a.split('\n\n').map((block, blockIdx) => (
                  <p
                    key={blockIdx}
                    className={`text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base ${
                      blockIdx > 0 ? 'mt-4' : ''
                    }`}
                  >
                    {block}
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
