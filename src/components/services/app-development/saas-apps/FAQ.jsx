import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "What is SaaS app development?",
    "answer": "SaaS app development is the process of building software that customers access as an ongoing online service. It typically includes customer accounts, tenant management, permissions, billing, analytics, integrations, and infrastructure for continuous operation."
  },
  {
    "question": "How is SaaS different from a regular web application?",
    "answer": "A regular web application may serve one company or workflow. SaaS is designed to support multiple customers with customer-specific data, permissions, billing, and ongoing product management."
  },
  {
    "question": "How much does SaaS development cost in Bangladesh?",
    "answer": "The cost depends on architecture, billing, features, integrations, user roles, backend requirements, and infrastructure. Framecipher's current reference ranges begin at around ৳450,000 for a focused SaaS MVP."
  },
  {
    "question": "How long does it take to build a SaaS product?",
    "answer": "A focused MVP can take around 10–14 weeks. Standard SaaS products may require 16–22 weeks, while advanced platforms can take 22–30 weeks or more."
  },
  {
    "question": "What is multi-tenant SaaS architecture?",
    "answer": "Multi-tenant architecture allows multiple customers or organizations to use the same SaaS platform while keeping their data and access logically separated."
  },
  {
    "question": "Can you build subscription billing and payment systems?",
    "answer": "Yes. We can integrate subscription billing, plans, trials, upgrades, downgrades, cancellations, invoices, payment events, and plan-based access according to the product requirements."
  },
  {
    "question": "Can you integrate Stripe, Paddle, bKash, or Nagad?",
    "answer": "The available payment options depend on the product, target market, provider capabilities, and project requirements. Supported local or international gateways can be evaluated during architecture planning."
  },
  {
    "question": "Can you build SaaS MVPs for startups?",
    "answer": "Yes. We can define the core product, architecture, onboarding, billing path, analytics, and initial workflows around an MVP scope."
  },
  {
    "question": "Can you modernize an existing SaaS product?",
    "answer": "Yes. We can review the current architecture, dependencies, performance, database, integrations, and feature set before recommending modernization or further development."
  },
  {
    "question": "Can you build mobile apps for a SaaS platform?",
    "answer": "Yes. Suitable SaaS products can be extended with iOS, Android, or cross-platform mobile applications connected to the same backend and customer accounts."
  },
  {
    "question": "Do you work with SaaS clients outside Bangladesh?",
    "answer": "Yes. Framecipher works with businesses in Bangladesh and international markets through a structured remote development process."
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
