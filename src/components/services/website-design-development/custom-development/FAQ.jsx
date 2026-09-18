const faqs = [
  {
    question: 'What is the difference between React and Next.js?',
    answer: 'React is a UI component library, whereas Next.js is a full-stack React framework. Next.js adds built-in server-side rendering (SSR), static site generation (SSG), file-system routing, API routes, image optimization, and server actions, giving you an end-to-end production architecture out of the box.',
  },
  {
    question: 'Can you migrate an existing React website to Next.js?',
    answer: 'Yes. We audit your existing React application and plan a clean migration to Next.js to achieve superior SEO indexation, faster initial page loads via server rendering, streamlined routing, and enhanced maintainability.',
  },
  {
    question: 'Can you migrate a WordPress website to Next.js?',
    answer: 'Yes. Depending on your operational requirements, WordPress can be retained as a headless CMS backend delivering content via REST or GraphQL APIs, while Next.js powers a blazing-fast, secure frontend storefront.',
  },
  {
    question: 'Can you migrate Pages Router projects to App Router?',
    answer: 'Yes. We assess your existing component tree, data-fetching patterns, and route layouts, systematically transitioning them to React Server Components and Next.js App Router for optimal performance.',
  },
  {
    question: 'Can you build SaaS applications with Next.js?',
    answer: 'Yes. Next.js is the industry standard for modern SaaS applications, supporting multi-tenant authentication, subscription billing, interactive dashboards, dynamic routing, customer role permissions, and API endpoints.',
  },
  {
    question: 'Can you build authenticated dashboards and customer portals?',
    answer: 'Yes. We engineer secure client portals, administrative consoles, partner dashboards, and internal business tools complete with role-based access control and real-time database updates.',
  },
  {
    question: 'Can you integrate our CRM, ERP, payment systems, or internal software?',
    answer: 'Yes. As long as your existing software provides an API, SDK, or webhook mechanism, we can build custom integration pipelines to keep data synchronized across your entire enterprise stack.',
  },
  {
    question: 'Can you build headless Shopify or WooCommerce storefronts with Next.js?',
    answer: 'Yes. Decoupled headless storefronts allow you to maintain Shopify or WooCommerce for product and order management while running a completely custom Next.js frontend with sub-second page loads and bespoke interactions.',
  },
  {
    question: 'Can you take over an existing Next.js codebase?',
    answer: 'Yes. We conduct a comprehensive code audit covering architecture, TypeScript types, dependencies, security vulnerabilities, bundle size, and technical debt before recommending remediation or feature development.',
  },
  {
    question: 'Do you provide cloud deployment and monitoring?',
    answer: 'Yes. We configure deployment pipelines across Vercel, AWS, Google Cloud, or Docker VPS, setting up CI/CD workflows, environment variable security, error tracking (Sentry), and uptime alerting.',
  },
  {
    question: 'Will I receive full source code ownership after development?',
    answer: 'Yes. You receive 100% intellectual property rights and full administrative ownership of private Git repositories, deployment accounts, and all custom code upon project completion.',
  },
  {
    question: 'Is Next.js good for search engine optimization (SEO)?',
    answer: 'Exceptional. By executing server-side rendering and static pre-rendering, search engine crawlers receive fully formed HTML instantly. In addition, Next.js provides built-in metadata APIs for dynamic title, canonical, and Open Graph generation.',
  },
  {
    question: 'Is custom development better than WordPress, Shopify, Webflow, or Wix?',
    answer: 'Not automatically. Custom engineering is best when you need unique workflows, proprietary business logic, complex integrations, or dedicated web applications. For straightforward marketing or small stores, a standard platform is often more cost-effective.',
  },
  {
    question: 'Do you work with clients outside Bangladesh?',
    answer: 'Yes. We engineer web applications for clients in Bangladesh as well as international companies across the US, UK, Australia, Canada, UAE, and Europe.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Direct Answers / Architecture
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Technical and architectural questions regarding custom engineering, Next.js, and web application development.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 sm:p-7 md:p-8 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg marker:content-none">
                <span>{faq.question}</span>
                <span className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45 font-mono text-xl">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 sm:p-7 md:p-8 text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
