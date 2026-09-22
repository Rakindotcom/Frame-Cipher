import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What are Remarketing Services?',
    answer: 'Remarketing Services help businesses re-engage people who previously interacted with their website, products, content, ads, or brand. Framecipher manages audience segmentation, tracking, campaign setup, dynamic remarketing, suppression, creative testing, optimization, and reporting across relevant advertising platforms.',
  },
  {
    question: 'What is the difference between remarketing and retargeting?',
    answer: 'The terms are often used interchangeably. Retargeting usually refers to advertising to people based on previous interactions such as website visits or product views, while remarketing can be used more broadly for re-engaging previous visitors, leads, or customers.',
  },
  {
    question: 'Does remarketing still work with privacy and tracking changes?',
    answer: 'Yes, but audience availability and measurement depend on platform rules, consent, browser and app behavior, traffic volume, and the quality of the tracking setup. We use first-party data, consent-aware tracking, server-side options, and platform-supported audience methods where appropriate.',
  },
  {
    question: 'How much website traffic do we need for remarketing?',
    answer: 'There is no universal minimum. The practical requirement depends on traffic volume, buying cycle, audience window, platform, and campaign objective. Very low-traffic sites may need longer audience windows or a narrower platform strategy.',
  },
  {
    question: 'How long should someone stay in a remarketing audience?',
    answer: 'There is no universal answer. A short buying cycle may need a short audience window, while high-consideration products or B2B services may require longer windows. We set audience duration based on actual customer behavior rather than applying one default timeframe.',
  },
  {
    question: 'Do you manage ecommerce remarketing?',
    answer: 'Yes. We can manage product-view, cart, checkout, customer, dynamic catalog, cross-sell, upsell, and replenishment audiences where the relevant platform features are available.',
  },
  {
    question: 'Do you manage lead-generation remarketing?',
    answer: 'Yes. We can build remarketing around service-page visits, pricing-page views, form activity, content engagement, previous leads, and other available signals.',
  },
  {
    question: 'Do you manage remarketing across multiple platforms?',
    answer: 'Yes. We can coordinate remarketing across Google, Meta, Pinterest, TikTok, LinkedIn, Amazon, and other relevant platforms where the required audience and campaign capabilities are available.',
  },
  {
    question: 'Do you provide dynamic product remarketing?',
    answer: 'Yes. For eligible ecommerce setups, we can connect product catalogs with dynamic remarketing campaigns that use relevant product or service data.',
  },
  {
    question: 'Can you use CRM data for remarketing?',
    answer: 'Yes, where the advertising platform supports customer-list audiences and the data can be used lawfully for advertising. We can help structure customer, lead, qualified-lead, and existing-customer audiences for inclusion or exclusion.',
  },
  {
    question: 'Do you manage frequency caps?',
    answer: 'Where a platform and campaign type support manual frequency caps, we can configure and monitor them. Where direct frequency controls are unavailable, exposure can be managed through audience windows, exclusions, campaign structure, creative rotation, budget, and sequencing.',
  },
  {
    question: 'Can remarketing work with low website traffic?',
    answer: 'It can, but limited traffic usually means smaller audiences and slower audience accumulation. We assess traffic volume before recommending a cross-platform remarketing program.',
  },
  {
    question: 'Can remarketing improve ROAS?',
    answer: 'It can contribute to improved efficiency when the audience, offer, creative, tracking, and conversion journey are well aligned. However, we do not treat ROAS improvement as guaranteed, and we distinguish attributed conversions from broader incremental business impact where the data allows.',
  },
  {
    question: 'Do you provide this service outside Bangladesh?',
    answer: 'Yes. Framecipher manages remarketing campaigns for businesses in Bangladesh and international markets including the US, UK, Australia, Canada, UAE, and other eligible markets.',
  },
  {
    question: 'Do you guarantee remarketing results?',
    answer: 'No. We do not guarantee a specific ROAS, CPA, conversion rate, or recovered revenue. We commit to proper tracking, structured audiences, exposure management, ongoing optimization, and transparent reporting.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-4xl mx-auto">
        <SectionIntro eyebrow="FAQ" title="Remarketing Services — Frequently Asked Questions" />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 md:p-7">
                <span className="flex items-center gap-5">
                  <span className="font-heading text-sm font-bold text-frame-accent md:text-base">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-base font-bold uppercase tracking-tight text-frame-fg md:text-lg">
                    {faq.question}
                  </span>
                </span>
                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                  <span className="absolute h-0.5 w-4 bg-frame-accent" />
                  <span className="absolute h-4 w-0.5 bg-frame-accent transition-transform group-open:rotate-90" />
                </span>
              </summary>
              <div className="border-t border-frame-border p-6 pt-5 md:p-7 md:pt-5">
                <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}