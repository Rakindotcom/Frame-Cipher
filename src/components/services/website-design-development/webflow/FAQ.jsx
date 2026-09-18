import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How is Webflow different from WordPress or Wix?",
    "answer": "Webflow gives strong visual design control while providing structured CMS functionality and a managed hosting environment. WordPress offers a broader plugin ecosystem and deeper extensibility, while Wix focuses more on simple website management and built-in business tools.\n\nWe recommend the platform based on the actual project requirements."
  },
  {
    "question": "Can you convert a Figma design into Webflow?",
    "answer": "Yes. We can translate approved Figma designs into responsive Webflow pages, reusable components, CMS structures, interactions, and responsive layouts while keeping the implementation maintainable after launch."
  },
  {
    "question": "Can my marketing team manage the Webflow CMS?",
    "answer": "Yes. We design CMS Collections and fields around your team's publishing workflow and provide the agreed training and handover guidance after launch."
  },
  {
    "question": "Can you migrate my WordPress website to Webflow?",
    "answer": "Yes. Migration can include content, CMS restructuring, metadata, images, URLs, redirects, forms, analytics, and other agreed functionality. We also review the SEO structure before launch."
  },
  {
    "question": "Will my SEO rankings be affected by a Webflow migration?",
    "answer": "A migration can affect search visibility when URLs, redirects, metadata, internal links, canonical signals, or other SEO elements are changed incorrectly.\n\nWe plan migration around these elements and test them before and after launch."
  },
  {
    "question": "Can you build multilingual Webflow websites?",
    "answer": "Yes. Webflow supports localization for supported projects, including localized pages, CMS content, components, URLs, and SEO settings."
  },
  {
    "question": "Can you integrate Webflow with our CRM or other business tools?",
    "answer": "Yes. We can connect Webflow with supported CRM, marketing, booking, analytics, automation, and other external systems using native integrations, apps, APIs, embeds, or custom code where appropriate."
  },
  {
    "question": "Do you use custom JavaScript in Webflow?",
    "answer": "Only when it solves a genuine requirement that cannot be handled appropriately through native Webflow functionality, integrations, or apps.\n\nWhere custom code is used, we aim to keep it documented and maintainable."
  },
  {
    "question": "Can you build Webflow ecommerce websites?",
    "answer": "Yes. Webflow can work for design-focused ecommerce projects with suitable catalog and operational requirements.\n\nFor larger catalogs, complex inventory, or advanced ecommerce workflows, we may recommend Shopify, WooCommerce, Magento, or another platform."
  },
  {
    "question": "Will custom animations slow down my site?",
    "answer": "They can when they are implemented without considering device capability, asset weight, and page complexity.\n\nWe test interaction-heavy pages across devices and optimize assets, implementation, and animation behavior as part of QA."
  },
  {
    "question": "Do you work with brands outside Bangladesh?",
    "answer": "Yes. We build Webflow websites for brands across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE."
  },
  {
    "question": "Will I own my Webflow website after launch?",
    "answer": "The ownership, account access, assets, licenses, custom code, and documentation transferred at project close depend on the project agreement.\n\nWe provide the agreed access and handover materials defined in the engagement."
  }
]

export default function FAQ({ service }) {
  const faqList = (service?.faqs && service.faqs.length > 0) ? service.faqs : faqs
  if (!faqList?.length) return null

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
        >
          Common questions about our delivery process, technical standards, and engagement models.
        </SectionIntro>

        <div className="space-y-4">
          {faqList.map((faq, index) => (
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
              <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg whitespace-pre-line">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
