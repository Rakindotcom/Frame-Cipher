import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is a Lead Generation Ads Service?',
    answer: 'A Lead Generation Ads Service helps businesses use paid advertising to generate inquiries, consultations, quote requests, demo requests, calls, bookings, or other qualified customer opportunities. Framecipher manages campaign strategy, lead destinations, forms, qualification, tracking, CRM integration, optimization, and reporting.',
  },
  {
    question: 'Which platform is best for lead generation: Google, Meta, or LinkedIn?',
    answer: 'There is no universal best platform. Google can capture existing search demand. Meta can generate or capture interest through audience and creative strategies. LinkedIn can be useful when professional targeting matters to qualification. We choose the mix based on your offer, customers, sales cycle, market, and available data.',
  },
  {
    question: 'Should my lead form be short or long?',
    answer: 'It depends on what your sales team needs. Shorter forms can reduce friction, while additional qualification questions can improve filtering. We balance completion rate with the information needed to decide whether a lead is worth following up.',
  },
  {
    question: 'Can you use a landing page instead of a native lead form?',
    answer: 'Yes. We can recommend website forms, native platform forms where available, calls, messaging, and booking flows. The right destination depends on the offer, market, buying journey, and qualification requirements.',
  },
  {
    question: 'Can you integrate lead generation campaigns with our CRM?',
    answer: 'Yes, where the required platform and CRM integrations are supported. We can help with lead routing, field mapping, source tracking, notifications, qualification workflows, and downstream reporting.',
  },
  {
    question: 'Can you track qualified leads instead of just form submissions?',
    answer: 'Yes. Where the CRM and advertising platform support the required data flow, we can track movement from lead to qualified lead, opportunity, customer, and revenue.',
  },
  {
    question: 'Can Google Ads use CRM data to improve lead optimization?',
    answer: 'Google supports Enhanced Conversions for Leads and related offline conversion workflows that can use hashed first-party customer information to improve conversion measurement and bidding. Google\u2019s current documentation is moving offline conversion and enhanced-lead uploads toward Data Manager.',
  },
  {
    question: 'Can LinkedIn Lead Gen Forms connect to our CRM?',
    answer: 'Yes, where a supported CRM or marketing automation platform is available. LinkedIn provides integrations and lead-sync workflows for supported systems, along with lead-to-sales reporting use cases.',
  },
  {
    question: 'Does Google offer native lead forms in Bangladesh?',
    answer: 'Google Lead Form Assets are only available in selected countries. Bangladesh is not included in Google\u2019s current published supported-country list, so we would evaluate an appropriate website, call, or other supported lead destination for Bangladesh campaigns.',
  },
  {
    question: 'How quickly should we follow up with a new lead?',
    answer: 'As quickly as your sales process can realistically support. Fresh leads can lose value when follow-up is delayed, so we review routing, notifications, ownership, and response workflows alongside campaign management.',
  },
  {
    question: 'How much does Lead Generation Ads Service cost?',
    answer: 'Framecipher\u2019s starting management fee is \u09F318,000/month for a single-platform setup. Multi-platform management starts at \u09F335,000/month, while CRM-Integrated Growth starts at \u09F350,000/month. Final pricing depends on platform count, campaign complexity, CRM requirements, reporting, and scope. Ad spend is separate.',
  },
  {
    question: 'Can you manage lead generation campaigns outside Bangladesh?',
    answer: 'Yes. Framecipher works with businesses in Bangladesh and international markets including the US, UK, Australia, Canada, UAE, and other eligible markets.',
  },
  {
    question: 'Do you guarantee lead generation results?',
    answer: 'No. We do not guarantee a specific CPL, CPQL, conversion rate, number of leads, customers, or revenue outcome. We commit to structured campaign management, reliable tracking, quality-focused optimization, transparent reporting, and recommendations based on actual campaign data.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-4xl mx-auto">
        <SectionIntro eyebrow="FAQ" title="Lead Generation Ads — Frequently Asked Questions" />

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