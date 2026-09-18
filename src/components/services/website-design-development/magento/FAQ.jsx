import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How do I know if my business actually needs Magento instead of Shopify or WooCommerce?",
    "answer": "It depends on your requirements. Magento can be appropriate when the store needs complex catalogs, B2B pricing, multiple storefronts, deep integrations, or custom ecommerce workflows. For simpler stores, Shopify or WooCommerce may provide the required functionality with less technical overhead. We assess the requirements before recommending a platform."
  },
  {
    "question": "What is the difference between Magento Open Source and Adobe Commerce?",
    "answer": "Magento Open Source provides the core Magento ecommerce platform, while Adobe Commerce provides additional capabilities for more advanced commerce requirements. Adobe Commerce B2B includes features such as company accounts, shared catalogs, negotiable quotes, purchase orders, and requisition lists for supported configurations."
  },
  {
    "question": "Can Magento handle B2B pricing and wholesale customers?",
    "answer": "Yes. Depending on the Magento edition and configuration, B2B implementations can support customer groups, company accounts, custom pricing, shared catalogs, quote workflows, and other wholesale purchasing requirements. Advanced B2B capabilities such as shared catalogs and negotiable quotes are available through Adobe Commerce B2B."
  },
  {
    "question": "Can you migrate our existing Magento store to a newer version?",
    "answer": "Yes. We can review your current Magento installation, extensions, customizations, integrations, data, and SEO structure before planning an upgrade or rebuild. Migration and upgrade work should be tested in a controlled environment before production launch."
  },
  {
    "question": "Do you work with Hyvä Magento themes?",
    "answer": "Yes, where Hyvä is appropriate for the project's Magento architecture and extension requirements. We can assess existing themes, compatibility, storefront requirements, and migration scope before development."
  },
  {
    "question": "Can you build a headless Magento store?",
    "answer": "Yes, where the project genuinely benefits from a separated frontend architecture. Adobe Commerce supports headless implementations using approaches such as PWA Studio or custom frontend technologies, with API-based communication between frontend and commerce services."
  },
  {
    "question": "Can you integrate Magento with ERP, CRM, PIM, or inventory systems?",
    "answer": "Yes. Integration scope depends on the systems involved, available APIs, data structures, synchronization requirements, and business workflows. We review those technical dependencies before development so the integration architecture can be planned correctly."
  },
  {
    "question": "Does Magento require special hosting?",
    "answer": "Magento generally requires more technical infrastructure planning than a fully managed ecommerce platform. Hosting and resources should be sized around catalog size, traffic, integrations, extensions, caching, and expected order volume."
  },
  {
    "question": "How much does Magento development cost?",
    "answer": "Magento development costs vary according to catalog complexity, custom modules, B2B requirements, multi-store functionality, integrations, migration work, storefront architecture, infrastructure, and testing requirements. We provide a project-specific estimate after reviewing the technical scope."
  },
  {
    "question": "How long does Magento development take?",
    "answer": "A Magento project can take several weeks to several months depending on the catalog, custom development, integrations, migration requirements, B2B functionality, and testing scope. We provide a project timeline after the requirements and technical scope are defined."
  },
  {
    "question": "Do you work with merchants outside Bangladesh?",
    "answer": "Yes. We build Magento stores for businesses in Bangladesh and internationally, including clients serving the US, UK, Australia, Canada, and UAE."
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
