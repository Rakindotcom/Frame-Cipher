import { SectionIntro } from '../../../Kinetic'

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Feasibility &amp; Assessment" title="Is Next.js Right for Your Project?">
          Next.js is powerful, but custom development should not be the default solution for every website or application. We recommend Next.js when the project benefits from greater control over performance, application architecture, integrations, functionality, or long-term development.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 border-2 border-frame-border bg-frame-border">
          <div className="bg-frame-bg p-7 sm:p-9">
            <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
              Scenario A
            </span>
            <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
              Next.js Can Be a Strong Fit When:
            </h3>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm font-medium text-frame-fg/90">
              {[
                'The project needs advanced custom functionality',
                'Performance and SEO are important',
                'The website combines content with application features',
                'Custom authentication or user roles are required',
                'Multiple systems need to communicate',
                'You are building SaaS or a customer portal',
                'A headless architecture makes sense',
                'The product will evolve significantly over time',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-frame-bg p-7 sm:p-9">
            <span className="text-xs font-black uppercase tracking-wider text-frame-muted-fg">
              Scenario B
            </span>
            <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
              A Platform May Be Better When:
            </h3>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm font-medium text-frame-muted-fg">
              {[
                'The project is a straightforward business website',
                'Standard ecommerce functionality is enough',
                'The team needs a simple managed editing environment',
                'Existing platform functionality already solves the requirement',
                'The additional cost of custom development is not justified',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-frame-border font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg">
          Our role is not to sell custom development simply because it is technically advanced. We assess whether it creates enough business value to justify the investment.
        </p>
      </div>
    </section>
  )
}