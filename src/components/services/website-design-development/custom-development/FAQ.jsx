import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "What is the difference between React and Next.js?",
    "answer": "React is a UI library, while Next.js is a broader React framework for building full-stack web applications. Next.js adds application features such as routing, rendering options, metadata handling, and server-side capabilities around React."
  },
  {
    "question": "Can you migrate an existing React website to Next.js?",
    "answer": "Yes. We can review the existing React application and determine whether moving to Next.js would provide meaningful benefits in architecture, rendering, SEO, performance, or maintainability."
  },
  {
    "question": "Can you migrate a WordPress website to Next.js?",
    "answer": "Yes. Depending on the project, WordPress can remain as the content source in a headless setup, or the content can be migrated to another suitable CMS while the frontend is rebuilt in Next.js."
  },
  {
    "question": "Can you migrate Pages Router projects to App Router?",
    "answer": "Yes. We can assess the existing application and plan a phased or complete migration based on the current architecture and project requirements."
  },
  {
    "question": "Can you build SaaS applications with Next.js?",
    "answer": "Yes. Next.js can support SaaS products with authentication, dashboards, user roles, APIs, billing workflows, and other custom application features."
  },
  {
    "question": "Can you build dashboards and customer portals?",
    "answer": "Yes. We can build authenticated dashboards, account areas, customer portals, administrative interfaces, and other data-driven application experiences."
  },
  {
    "question": "Can you integrate our CRM, ERP, payment system, or internal software?",
    "answer": "Yes, where the existing system provides a suitable API, SDK, webhook, or integration method. Compatibility and integration requirements are reviewed during technical discovery."
  },
  {
    "question": "Can you build headless Shopify or WordPress websites with Next.js?",
    "answer": "Yes. A headless setup can be used when the business needs a more customized frontend experience or architecture than the standard storefront provides."
  },
  {
    "question": "Can you take over an existing Next.js codebase?",
    "answer": "Yes. We can review the existing architecture, dependencies, deployment setup, code quality, technical debt, and development workflow before recommending the next steps."
  },
  {
    "question": "Do you provide deployment and monitoring?",
    "answer": "Yes, where included in the project scope. Deployment, environment configuration, monitoring, and operational support are planned according to the application's requirements."
  },
  {
    "question": "Will I receive the source code after development?",
    "answer": "Source-code ownership, repository access, intellectual property, licenses, and third-party account ownership are handled according to the project agreement."
  },
  {
    "question": "Is Next.js good for SEO?",
    "answer": "Next.js provides technical capabilities that can support SEO, including metadata handling and multiple rendering strategies. But rankings still depend on content quality, relevance, competition, authority, technical implementation, and ongoing optimization."
  },
  {
    "question": "Is custom development better than WordPress, Shopify, Webflow, or Wix?",
    "answer": "Not automatically. Custom development is usually more appropriate when the project has requirements that existing platforms cannot handle efficiently. For straightforward business websites and many ecommerce projects, a suitable platform may be more practical."
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
