import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: 'What is LinkedIn Ads management?',
    answer: 'LinkedIn Ads management is the process of planning, launching, measuring, testing, and optimizing LinkedIn advertising campaigns around defined B2B marketing and sales objectives. It can include ICP research, professional audience targeting, Sponsored Content, Lead Gen Forms, Sponsored Messaging, account-based marketing, retargeting, conversion tracking, CRM measurement, and reporting.',
  },
  {
    question: 'Why should a B2B company use LinkedIn Ads?',
    answer: 'LinkedIn can be useful when your target audience can be clearly defined by professional characteristics such as company, industry, job function, seniority, or other professional attributes. Whether it makes commercial sense depends on your deal value, audience availability, sales cycle, offer, and ability to convert qualified prospects.',
  },
  {
    question: 'Are LinkedIn Ads suitable for small B2B businesses?',
    answer: 'They can be, but audience size and deal economics matter. We evaluate your ICP, customer value, sales cycle, target-market size, and realistic advertising budget before recommending LinkedIn as an acquisition channel.',
  },
  {
    question: 'What is the difference between LinkedIn Lead Gen Forms and website lead forms?',
    answer: 'LinkedIn Lead Gen Forms collect information directly within LinkedIn and can use pre-filled member profile information. Website forms send the prospect to your own website before completing the conversion. The appropriate option depends on the offer, qualification requirements, landing page, sales process, and measurement setup.',
  },
  {
    question: 'What is account-based marketing on LinkedIn?',
    answer: 'Account-based marketing focuses advertising around a defined list of target companies and the professional roles involved in buying from them. It is particularly relevant for businesses selling high-value products or services to a smaller number of strategic accounts.',
  },
  {
    question: 'What are Buyer Groups on LinkedIn?',
    answer: 'Buyer Groups are an AI-powered LinkedIn audience option designed to help advertisers reach decision-makers and key stakeholders involved in purchasing decisions within companies. They can be considered as part of a broader audience strategy alongside company, role, geographic, first-party, and other relevant signals.',
  },
  {
    question: 'Do you integrate LinkedIn Ads with CRM systems?',
    answer: 'Where the technical setup supports it, yes. We can connect available CRM or conversion data to help measure qualified leads and downstream sales outcomes. LinkedIn currently supports CRM-connected conversion data and qualified-lead optimization through supported CRM and Conversions API setups.',
  },
  {
    question: 'Do you use LinkedIn Conversions API?',
    answer: 'Yes, where appropriate. Conversions API can help connect business conversion data with LinkedIn measurement and optimization. We assess the available technical setup before determining the appropriate implementation.',
  },
  {
    question: 'Do you manage LinkedIn Ads outside Bangladesh?',
    answer: 'Yes. Framecipher manages LinkedIn Ads for businesses targeting Bangladesh as well as international B2B markets such as the US, UK, Australia, Canada, UAE, and other regions.',
  },
  {
    question: 'How much should I budget for LinkedIn Ads?',
    answer: 'There is no universal budget that works for every B2B campaign. A practical starting budget depends on audience size, market competition, deal value, expected conversion rate, sales cycle, target-account scope, and the amount of data needed to evaluate performance. We recommend planning the media budget around your sales economics rather than choosing an arbitrary monthly figure.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct answers"
          title="Frequently Asked Questions"
        >
          Common questions about LinkedIn Ads management, ICP, Lead Gen Forms, account-based
          marketing, CRM measurement, and international campaigns.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg marker:content-none">
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