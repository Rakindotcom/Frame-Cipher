import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "Should I choose Shopify or WooCommerce/Magento for my store?",
    "answer": "Shopify can suit merchants who want managed ecommerce infrastructure, simpler store administration, and a broad app ecosystem. WooCommerce can suit businesses that want WordPress-based content and ecommerce flexibility, while Magento or Adobe Commerce can be more appropriate for complex catalogs, B2B requirements, or multi-store operations.\n\nWe recommend the platform based on your actual catalog, business model, technical requirements, and long-term plans."
  },
  {
    "question": "Can I use bKash or Nagad for payments on Shopify?",
    "answer": "Payment options available to a Shopify merchant depend on the merchant's country, provider, and current Shopify integration availability. Because Shopify Payments is not currently listed for businesses located in Bangladesh, Bangladesh-based merchants generally need an available third-party payment provider. We review the available options before implementation."
  },
  {
    "question": "Will adding a lot of apps slow down my store?",
    "answer": "It can.\n\nEvery additional app can introduce scripts, requests, dependencies, or functionality that affect the storefront.\n\nWe therefore evaluate whether a requirement should use a native Shopify feature, theme development, an existing app, an API integration, or custom development before adding another app."
  },
  {
    "question": "Can you customize the checkout experience?",
    "answer": "Yes, within the checkout capabilities available to the store's Shopify plan.\n\nShopify Plus provides additional checkout UI extension capabilities for supported checkout steps.\n\nWe confirm the available options during planning before promising a specific checkout customization."
  },
  {
    "question": "What is Shopify Online Store 2.0?",
    "answer": "Online Store 2.0 is Shopify's modern theme architecture built around JSON templates, sections, blocks, app blocks, and dynamic sources.\n\nIt gives developers a more modular theme architecture and allows merchants to customize more parts of the storefront through Shopify's editor."
  },
  {
    "question": "Do I need Shopify Plus?",
    "answer": "Not necessarily.\n\nShopify provides B2B and ecommerce capabilities across different plans, while Shopify Plus provides additional features for more advanced B2B, checkout, and enterprise workflows.\n\nWe recommend Shopify Plus based on the actual requirements of the business rather than assuming every growing store needs it."
  },
  {
    "question": "Can you build a Shopify B2B store?",
    "answer": "Yes.\n\nShopify's B2B functionality can support companies, catalogs, pricing, payment terms, quantity rules, and other wholesale workflows, with additional capabilities available on Shopify Plus."
  },
  {
    "question": "Can you migrate my WooCommerce or Magento store to Shopify?",
    "answer": "Yes.\n\nMigration can include products, collections, customers, orders, media, URLs, metadata, analytics, and required functionality based on the project scope.\n\nWe also plan redirects and SEO checks to reduce avoidable search visibility issues during the move."
  },
  {
    "question": "Can you build a custom Shopify app?",
    "answer": "Yes.\n\nWhen standard apps or theme functionality cannot solve a requirement cleanly, we can evaluate custom Shopify app development using supported Shopify APIs, app extensions, webhooks, and backend functionality."
  },
  {
    "question": "Can you build a headless Shopify website?",
    "answer": "Yes, where the project benefits from separating the Shopify commerce backend from the frontend.\n\nShopify's Storefront API supports custom storefronts, while Hydrogen provides Shopify's React-based framework for headless commerce."
  },
  {
    "question": "Can Shopify support multiple currencies and languages?",
    "answer": "Yes.\n\nShopify Markets supports market-specific currencies, languages, pricing, products, domains, theme content, and other regional settings."
  },
  {
    "question": "Can you build Shopify subscription stores?",
    "answer": "Yes, where the business model and required Shopify capabilities support recurring purchases.\n\nThe exact implementation depends on the subscription model, apps, and Shopify functionality required by the project."
  },
  {
    "question": "Can I manage my Shopify store after you build it?",
    "answer": "Yes.\n\nShopify is designed for merchant management, and we provide the agreed access and basic handover guidance so your team can manage routine products, collections, content, and store settings."
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
