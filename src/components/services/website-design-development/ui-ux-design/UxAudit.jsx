import { SectionIntro } from '../../../Kinetic'

const auditReviewItems = [
  'Navigation and information architecture',
  'User journeys and important task flows',
  'Mobile usability',
  'Forms, signup, booking, and checkout flows',
  'Content hierarchy',
  'Interface consistency',
  'Interaction patterns and error states',
  'Accessibility considerations',
  'Analytics or user behavior data where available',
]

export default function UxAudit() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Diagnostic & Optimization" title="UX Audit & Redesign Services" />

        <div className="mt-10 grid gap-6 md:grid-cols-3 border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
          <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
            You do not always need a completely new website or app. Sometimes the existing experience is the real problem.
          </p>
          <p className="md:col-span-2 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
            Our UX audit and redesign service examines how users move through your current product, where friction occurs, and which areas need improvement. We can improve specific journeys or redesign the broader experience based on the condition and goals of the product.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* WHAT WE REVIEW */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Evaluation Areas
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              What We Review
            </h3>
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium text-frame-fg">
              {auditReviewItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WHAT YOU RECEIVE */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Tangible Deliverables
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                What You Receive
              </h3>
              <div className="mt-6 space-y-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                <p>
                  Depending on the project scope, an audit can include identified UX issues, prioritized recommendations, improved user flows, wireframes, redesigned screens, and a practical roadmap for implementation.
                </p>
                <p className="font-bold text-frame-fg">
                  This service is useful for existing business websites, ecommerce stores, SaaS products, dashboards, mobile apps, and web applications that work technically but create unnecessary friction for users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}