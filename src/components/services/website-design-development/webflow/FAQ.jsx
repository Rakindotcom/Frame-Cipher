const faqs = [
  {
    question: 'How is Webflow different from WordPress or Wix?',
    answer: 'Webflow offers pixel-perfect visual design control coupled with a structured, robust CMS and enterprise-grade AWS/Fastly CDN hosting. WordPress offers a vast open-source plugin ecosystem and deeper backend customization, while Wix caters primarily to fast, simple site launches with integrated small-business widgets. We recommend the platform that best fits your operational goals.',
  },
  {
    question: 'Can you convert our Figma designs into Webflow?',
    answer: 'Yes. We specialize in pixel-accurate Figma-to-Webflow translation, implementing responsive breakpoints, global typography styles, Client-First component naming, dynamic CMS binding, and fluid interactions.',
  },
  {
    question: 'Can our non-technical marketing team manage the Webflow CMS?',
    answer: 'Yes. Webflow features an intuitive "Editor Mode" where your team can edit text, swap images, and publish new blog posts, case studies, and team profiles directly on the live page without risking accidental layout breaks.',
  },
  {
    question: 'Can you migrate our existing WordPress or Squarespace site to Webflow?',
    answer: 'Yes. We handle end-to-end migrations, including blog posts, case studies, media assets, form setups, and critical 301 URL redirect maps to ensure zero disruption to your current Google search rankings.',
  },
  {
    question: 'Will our SEO rankings be affected by a Webflow migration?',
    answer: 'When executed properly with strict 301 redirects, identical metadata, clean canonical tags, and structured heading hierarchies, migrations preserve existing search rankings and frequently improve them due to Webflow’s superior load speeds.',
  },
  {
    question: 'Can you build multilingual or localized Webflow websites?',
    answer: 'Yes. We leverage Webflow’s native localization features to create region-specific subdirectories, translated CMS collections, custom language selectors, and proper hreflang tags for global SEO.',
  },
  {
    question: 'Can you connect Webflow with our CRM or marketing automation tools?',
    answer: 'Yes. We connect Webflow forms and events to HubSpot, Salesforce, ActiveCampaign, Mailchimp, Zapier, and Make for automated lead routing and customer data synchronization.',
  },
  {
    question: 'Do you write custom JavaScript in Webflow?',
    answer: 'Yes. Where native Webflow interactions reach their limits, we write clean, documented custom JavaScript for advanced calculators, third-party API feeds, multi-step forms, and Finsweet filtering attributes.',
  },
  {
    question: 'Can you build Webflow ecommerce stores?',
    answer: 'Yes. Webflow Ecommerce is fantastic for curated, design-forward catalogs with customized cart overlays, branded checkouts, and integrated payment processing via Stripe or PayPal.',
  },
  {
    question: 'Will custom animations and interactions slow down our website?',
    answer: 'Not when built properly. We use GPU-accelerated CSS transforms and lightweight interactions, testing across mobile devices and low-bandwidth connections to guarantee stellar Core Web Vitals and 60fps performance.',
  },
  {
    question: 'Do you work with brands outside Bangladesh?',
    answer: 'Yes. We design and build Webflow websites for international clients across the US, UK, Australia, Canada, UAE, and Europe, as well as forward-thinking businesses in Bangladesh.',
  },
  {
    question: 'Will I own the Webflow website after launch?',
    answer: 'Yes. Upon final approval and handover, the entire project is transferred directly into your Webflow account or workspace, giving you 100% administrative control and ownership.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 md:mb-20 max-w-3xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Direct Answers
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Common questions regarding Webflow development, Figma conversion, CMS architecture, and site management.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 sm:p-7 md:p-8 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg marker:content-none select-none">
                <span className="pr-4">{faq.question}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 sm:p-7 md:p-8 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

