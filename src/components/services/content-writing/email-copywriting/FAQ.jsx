import { SectionIntro } from '../../../Kinetic'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    q: 'What is an Email Copywriting Service?',
    a: 'An Email Copywriting Service creates the written messaging used in email campaigns and sequences. Depending on the project, this can include subject lines, preview text, email body copy, CTAs, welcome sequences, nurture campaigns, promotional emails, newsletters, lifecycle emails, and re-engagement campaigns.',
  },
  {
    q: 'How is email copywriting different from email marketing?',
    a: 'Email copywriting focuses on the communication itself. Email marketing can include broader activities such as platform management, automation, segmentation, scheduling, campaign deployment, reporting, and deliverability management. We primarily provide the strategy and copy unless additional services are specifically included in the project scope.',
  },
  {
    q: 'Can you write a complete email sequence?',
    a: 'Yes. We can plan and write complete welcome, onboarding, nurture, launch, sales, ecommerce lifecycle, and win-back sequences.',
  },
  {
    q: 'Do you write newsletters?',
    a: 'Yes. We can write recurring newsletters, educational emails, company updates, content promotion emails, curated newsletters, and product or service updates.',
  },
  {
    q: 'Can you write ecommerce email campaigns?',
    a: 'Yes. We can write abandoned-cart, post-purchase, product education, cross-sell, upsell, promotional, and win-back email copy.',
  },
  {
    q: 'Can you write emails for SaaS businesses?',
    a: 'Yes. We can support SaaS onboarding, activation, trial nurture, product education, upgrade, launch, and re-engagement communication.',
  },
  {
    q: 'Can you write B2B nurture emails?',
    a: 'Yes. B2B email sequences can support lead nurturing, post-demo follow-up, post-call communication, educational campaigns, proposal follow-up, and longer buying journeys.',
  },
  {
    q: 'How do you approach subject lines?',
    a: 'We develop subject lines around genuine relevance, curiosity, clarity, benefits, or the specific context of the email. We do not rely on misleading clickbait. Where appropriate, we can provide multiple subject-line variants for testing through your email platform.',
  },
  {
    q: 'Do you guarantee higher open rates?',
    a: 'No. Open rates depend on more than copy and can also be affected by sender reputation, list quality, delivery, audience behavior, and measurement limitations. We focus on writing relevant, clear email communication and using available performance data to improve future messaging.',
  },
  {
    q: 'Can you rewrite our existing email campaigns?',
    a: 'Yes. We can review existing emails and rewrite them around clearer messaging, stronger structure, better audience relevance, and a more specific CTA.',
  },
  {
    q: 'Can you match our existing brand voice?',
    a: 'Yes. Existing emails, website copy, brand guidelines, and other approved materials can help us understand and maintain your established voice.',
  },
  {
    q: 'Do you work with our existing email platform?',
    a: 'Yes. We can deliver copy in an implementation-friendly format for your existing email platform. Platform setup, automation, scheduling, and campaign management are separate unless included in the agreed scope.',
  },
  {
    q: 'Can you write emails for businesses outside Bangladesh?',
    a: 'Yes. Framecipher works with businesses in Bangladesh and clients targeting the US, UK, Australia, Canada, and UAE.',
  },
  {
    q: 'How much does email copywriting cost?',
    a: 'Our current starting prices are:',
    list: [
      'Single campaign: from ৳6,000',
      'Welcome sequence: from ৳15,000',
      'Nurture sequence: from ৳20,000',
      'Ongoing email support: from ৳25,000/month',
    ],
    tail: 'Final pricing depends on the number of emails, research depth, sequence complexity, and scope.',
  },
  {
    q: 'What do you need before starting?',
    a: 'Usually:',
    list: [
      'Business and offer information',
      'Target audience',
      'Existing email examples',
      'Brand voice',
      'Campaign objective',
      'Product or service details',
      'Pricing or promotional information',
      'Customer research',
      'Previous campaign data, where available',
      'Testimonials or supporting proof',
    ],
    tail: 'We can identify any missing information during the initial project discussion.',
  },
]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, fallbackFaqs)
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Direct answers" title="Frequently Asked Questions">
          Straight answers about sequences, subject lines, platforms, pricing, guarantees, and what we need from you
          before starting.
        </SectionIntro>

        <div className="space-y-4 max-w-4xl">
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
                <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">{faq.a}</p>

                {faq.list && (
                  <ul className="mt-4 space-y-2">
                    {faq.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                      >
                        <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {faq.tail && (
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {faq.tail}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
